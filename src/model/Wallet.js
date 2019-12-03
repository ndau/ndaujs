import AccountAPI from '../api/AccountAPI'
import LoggerHelper from '../helpers/LoggerHelper'
import ValidationKeyMaster from '../helpers/ValidationKeyMaster'
const l = LoggerHelper.curryLogger('Wallet')

// Please be aware that to remain backwards compatible we must
// always add to or deprecate items. We CANNOT remove anything
// from this class. If you feel it shuold be removed please check
// with KP before doing so.
class Wallet {
  constructor () {
    this.walletId = ''
    this.walletName = ''
    this.accountCreationKeyHash = ''
    this.accounts = {}
    this.keys = {}
  }

  // Replaces all current attributes with the supplied ones.
  fromObject (wallet) {
    this.walletId = wallet.walletId
    this.walletName = wallet.walletName
    this.accountCreationKeyHash = wallet.accountCreationKeyHash
    this.accounts = wallet.accounts
    this.keys = wallet.keys
    return this
  }

  async populateWalletWithAddressData () {
    // Add wallet name if missing one
    // TODO: I don't think this is required anymore
    if (!this.walletName && this.walletId) {
      this.walletName = this.walletId
    }

    const addressDataFromAPI = await AccountAPI.getAddressData(
      Object.keys(this.accounts)
    )
    const eaiRateData = await AccountAPI.getEaiRate(addressDataFromAPI)
    const addressData = addressDataFromAPI || {}

    const eaiRateMap = new Map()
    eaiRateData.forEach(account => {
      eaiRateMap.set(account.address, account.eairate)
    })

    const addressNicknameMap = new Map()
    const addressDataKeys = Object.keys(addressData)
    const walletAccountKeys = Object.keys(this.accounts)
    // create a map to create the nickname fields appropriately
    // when iterating the address data we can check it to see
    // if a setValidation transaction must be done
    for (const accountKey of addressDataKeys) {
      // this is the addressData item that came from API
      const addressDataItem = addressData[accountKey]
      // this is the account that is already present
      const account = this.accounts[accountKey]
      if (account) {
        // If we have not added it to the account already, add it
        addressDataItem.nickname = account.addressData.nickname
        // same with walletId, not there in the account, add it
        addressDataItem.walletId = account.addressData.walletId
      }

      addressDataItem.eaiValueForDisplay = eaiRateMap.get(accountKey)
      addressNicknameMap.set(accountKey, addressDataItem.nickname)
      for (const walletAccountKey of walletAccountKeys) {
        const walletAccount = this.accounts[walletAccountKey]
        if (walletAccountKey === accountKey) {
          walletAccount.addressData = addressDataItem
          await this.addPrivateValidationKeyIfNotPresent(walletAccount)
          await this.sendSetValidationTransactionIfNeeded(walletAccount)
          await this.sendDelegateTransactionIfNeeded(walletAccount)

          break
        }
      }
    }

    // now iterate using the map to populate the rewardsTargetNickname
    // and incomingRewardsFromNickname
    for (const walletAccountKey of walletAccountKeys) {
      const account = this.accounts[walletAccountKey]
      if (account.addressData.rewardsTarget) {
        account.addressData.rewardsTargetNickname = addressNicknameMap.get(
          account.addressData.rewardsTarget
        )
      }

      if (account.addressData.incomingRewardsFrom) {
        for (const incomingReward of account.addressData.incomingRewardsFrom) {
          account.addressData.incomingRewardsFromNickname =
            addressNicknameMap.get(incomingReward) + ' '
        }
      }

      this.nicknameAccount(account)

      // Same explanation as nickname for walletId
      if (!account.addressData.walletId) {
        account.addressData.walletId = this.walletId
      }
    }

    return addressDataKeys.length > 0
  }

  nicknameAccount (account) {
    const accountNickname = `Account ${account.address.slice(
      account.address.length - 4,
      account.address.length
    )}`
    if (!account.addressData.nickname) {
      account.addressData.nickname = accountNickname
    }

    // replace the older string if present. This is done
    // every time because I don't see the harm. However,
    // if the last 4 of an address is all numerics and
    // first part is Account we will replace...but so be it.
    account.addressData.nickname = account.addressData.nickname.replace(
      /Account \d+\b/,
      accountNickname
    )
  }

  async sendSetValidationTransactionIfNeeded (account) {
    try {
      if (
        account.addressData.balance > 0 &&
        !account.addressData.validationKeys
      ) {
        l.info(
          `Sending SetValidation transaction for ${
            account.addressData.nickname
          }`
        )
        const setValidationTransaction = new SetValidationTransaction(
          this,
          account
        )
        await setValidationTransaction.createSignPrevalidateSubmit()
      }
    } catch (e) {
      if (account.addressData.balance) {
        l.error(`could not perform SetValidation: ${e.message}`)
      }
    }
  }

  async sendDelegateTransactionIfNeeded (account) {
    try {
      if (
        !account.addressData.delegationNode &&
        (account.addressData.validationKeys &&
          account.addressData.validationKeys.length > 0)
      ) {
        l.info(
          `Sending Delegate transaction for ${account.addressData.nickname}`
        )
        const delegateTransaction = new DelegateTransaction(
          this,
          account,
          NodeAddressHelper.getNodeAddress()
        )
        await delegateTransaction.createSignPrevalidateSubmit()
      }
    } catch (e) {
      l.info(`could not perfrom Delegate: ${e.message}`)
    }
  }

  async addPrivateValidationKeyIfNotPresent (account) {
    if (
      account.addressData.validationKeys &&
      account.addressData.validationKeys.length === 2 &&
      account.addressData.validationScript ===
        AppConfig.GENESIS_USER_VALIDATION_SCRIPT
    ) {
      // Only create the key if we haven't already created it. If we have,
      // then the SetValidation did go through yet...so try it again
      if (
        !account.validationKeys ||
        (account.validationKeys && account.validationKeys.length === 0)
      ) {
        await ValidationKeyMaster.addValidationKey(this, account)
      }

      const setValidationTransaction = new SetValidationTransaction(
        this,
        account,
        APIAddressHelper.RECOVERY
      )
      await setValidationTransaction.createSignPrevalidateSubmit()
    } else {
      await ValidationKeyMaster.recoveryValidationKey(
        this,
        account,
        account.addressData.validationKeys
      )
    }
  }
}

export default Wallet
