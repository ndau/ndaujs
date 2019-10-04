import AccountAPIHelper from '../api/helpers/AccountAPIHelper'
import AppConfig from '../constants/config'
import KeyMaster from '../helpers/KeyMaster'

export class SetValidationTransaction {
  constructor (wallet, account, sendType) {
    this._wallet = wallet
    this._account = account
    this._sendType = sendType

    this._keys = wallet.keys
    this._jsonTransaction = {}
    this._submitAddress = ''
    this._prevalidateAddress = ''

    if (!this._wallet || !this._account) {
      throw new Error('You must pass wallet and account')
    }

    this.transactionType = 'SetValidation'
  }

  addToJsonTransaction () {
    this._jsonTransaction.target = this._account.address

    const validationKeys = []
    this._account.validationKeys.forEach(validationKeyHash => {
      validationKeys.push(this._keys[validationKeyHash].publicKey)
    })

    this._jsonTransaction.ownership = this._keys[
      this._account.ownershipKey
    ].publicKey
    this._jsonTransaction.validation_keys = validationKeys
  }

  privateKeyForSigning () {
    return KeyMaster.getPrivateKeyFromHash(
      this._wallet,
      this._account.ownershipKey
    )
  }

  addSignatureToJsonTransaction (signature) {
    this._jsonTransaction.signature = signature
  }

  getSignature () {
    return this._jsonTransaction.signature
  }

  async createSignPrevalidateSubmit () {
    await this.create()
    await this.sign()
    try {
      await this.prevalidate()
      await this.submit()
    } catch (error) {
      const spendableNapu = AccountAPIHelper.spendableNapu(
        this._account.addressData,
        true,
        AppConfig.NDAU_DETAIL_PRECISION
      )
      const data = error.getData()
      if (data && spendableNapu > data.fee_napu) {
        this.handleError(error)
        throw error
      }
    }
  }
}
