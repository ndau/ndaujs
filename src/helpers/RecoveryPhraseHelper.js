import KeyMaster from './KeyMaster'
import AccountAPI from '../api/AccountAPI'
import AppConstants from '../constants/constants'
import DataFormatHelper from '../api/helpers/DataFormatHelper'
import UserStore from '../stores/UserStore'
import AppConfig from '../constants/config'
import UserData from '../model/UserData'
import LoggerHelper from '../helpers/LoggerHelper'
const l = LoggerHelper.curryLogger('RecoveryPhraseHelper')

/**
 * First we check to see if there are a variable number of accounts existent
 * on the block chain using the root key. This is to support versions <= 1.6 of
 * the ndau wallet. The result of that call is stored in an array and we then
 * see if there are the same variable amount of accounts in the BIP44 address.
 * Once we have these if they both have nothing in them, we can assume the phrase
 * is incorrect. However, if either one of them do...we have a correct phrase and
 * we can then build a user from that information. The user build is passed back.
 *
 * @param  {string} recoveryPhraseString as a string of words, a sentence
 * @param  {string} user there is a possibility the user has already been created
 * @return {User} we either pass back null if nothing is found or a populated
 * user if we find information.
 */
const recoverUser = async (recoveryPhraseString, user) => {
  const recoveryPhraseBytes = await _getRecoveryStringAsBytes(
    recoveryPhraseString
  )

  // if we are recovering and there is no user we must use a
  // temp userId. It will be changed in the SetupWalletName screen
  let wallet
  let userId = AppConstants.TEMP_ID
  if (user) {
    wallet = await KeyMaster.createWallet(recoveryPhraseBytes, null, userId)
    user.wallets[DataFormatHelper.create8CharHash(userId)] = wallet
  } else {
    user = await KeyMaster.createFirstTimeUser(recoveryPhraseBytes, userId)
    wallet = user.wallets[Object.keys(user.wallets)[0]]
  }

  const rootPrivateKey = await Keyaddr.newKey(recoveryPhraseBytes)

  const bip44Accounts = await checkAddresses(rootPrivateKey)
  if (bip44Accounts && Object.keys(bip44Accounts).length > 0) {
    for (const accountPath in bip44Accounts) {
      await KeyMaster.createAccountFromPath(
        wallet,
        accountPath,
        bip44Accounts[accountPath]
      )
    }
    l.info(`Recovered user containing BIP44 accounts: ${JSON.stringify(user)}`)
  }

  const rootAccounts = await checkAddresses(rootPrivateKey, true)
  l.info(`root accounts found: ${JSON.stringify(rootAccounts)}`)
  if (rootAccounts && Object.keys(rootAccounts).length > 0) {
    for (const accountPath in rootAccounts) {
      await KeyMaster.createAccountFromPath(
        wallet,
        accountPath,
        rootAccounts[accountPath],
        rootPrivateKey
      )
    }
    l.info(
      `Recovered user containing root accounts now: ${JSON.stringify(user)}`
    )
  }

  return user
}

/**
 * Scans the blockchain for accounts like recoverUser and adds any new accounts
 * to Multisafe.
 * @return {number} number of new accounts found.
 */
const accountScan = async () => {
  const user = UserStore.getUser()
  let accountsBefore = 0
  Object.keys(user.wallets).forEach(k => {
    accountsBefore += Object.keys(user.wallets[k].accounts).length
  })

  for (let k in user.wallets) {
    const wallet = user.wallets[k]
    const creationKey = wallet.accountCreationKeyHash
    const rootPrivateKey = wallet.keys[creationKey].privateKey
    let bip44Accounts
    try {
      bip44Accounts = await checkAddresses(rootPrivateKey)
    } catch (e) {
      l.error(`could not check non-root addresses: ${e.message}`)
    }

    l.info(`BIP44 accounts found: ${JSON.stringify(bip44Accounts)}`)
    if (bip44Accounts && Object.keys(bip44Accounts).length > 0) {
      for (const accountPath in bip44Accounts) {
        try {
          await KeyMaster.createAccountFromPath(
            wallet,
            accountPath,
            bip44Accounts[accountPath]
          )
        } catch (e) {
          l.error(`could not create account from path: ${e.message}`)
        }
      }
      l.info(
        `Recovered user containing BIP44 accounts: ${JSON.stringify(user)}`
      )
    }

    let rootAccounts
    try {
      rootAccounts = await checkAddresses(rootPrivateKey, true)
    } catch (e) {
      l.error(`Error: could not get root accounts ${e.message}`)
    }
    l.info(`root accounts found: ${JSON.stringify(rootAccounts)}`)
    if (rootAccounts && Object.keys(rootAccounts).length > 0) {
      for (const accountPath in rootAccounts) {
        try {
          await KeyMaster.createAccountFromPath(
            wallet,
            accountPath,
            rootAccounts[accountPath],
            rootPrivateKey
          )
        } catch (e) {
          l.error(`could not createAccountFromPath ${e.message}`)
        }
      }
      l.info(
        `Recovered user containing root accounts now: ${JSON.stringify(user)}`
      )
    }
  }

  await UserData.loadUserData(user)
  UserStore.setUser(user)
  let accountsAfter = 0
  Object.keys(user.wallets).forEach(k => {
    accountsAfter += Object.keys(user.wallets[k].accounts).length
  })

  return accountsAfter - accountsBefore
}

const _getRecoveryStringAsBytes = async recoveryPhraseString => {
  return await Keyaddr.wordsToBytes(
    AppConstants.APP_LANGUAGE,
    recoveryPhraseString
  )
}

const checkAddresses = async (rootPrivateKey, root = false) => {
  let accountData = {}
  let accountDataFromBlockchain = {}
  let addresses = []
  let startIndex = 1
  let endIndex = AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY

  do {
    accountDataFromBlockchain = {}
    if (root) {
      addresses = await KeyMaster.getRootAddresses(
        rootPrivateKey,
        startIndex,
        endIndex
      )
      l.info(`KeyMaster.getRootAddresses found: ${JSON.stringify(addresses)}`)
    } else {
      addresses = await KeyMaster.getBIP44Addresses(
        rootPrivateKey,
        startIndex,
        endIndex
      )
      l.info(`KeyMaster.getBIP44Addresses found: ${JSON.stringify(addresses)}`)
    }

    accountDataFromBlockchain = await AccountAPI.getAddressData(
      Object.keys(addresses)
    )
    const addressKeys = Object.keys(addresses)
    for (const address in accountDataFromBlockchain) {
      const foundElement = addressKeys.find(element => {
        return element === address
      })
      if (foundElement) {
        accountData[addresses[address]] = accountDataFromBlockchain[address]
      }
    }

    // now move ahead in the address indices to get the next batch
    startIndex += AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
    endIndex += AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
  } while (Object.keys(accountDataFromBlockchain).length > 0)

  return accountData
}

export default {
  recoverUser,
  checkAddresses,
  accountScan
}
