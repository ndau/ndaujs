export class SetRewardsDestinationTransaction {
  constructor (wallet, account, destination) {
    this._wallet = wallet
    this._account = account

    this._destination = destination
    this._keys = wallet.keys
    this._jsonTransaction = {}
    this._submitAddress = ''
    this._prevalidateAddress = ''

    if (!this._wallet || !this._account) {
      throw new Error('You must pass wallet and account')
    }

    this.transactionType = 'SetRewardsDestination'
  }

  addToJsonTransaction () {
    this._jsonTransaction.target = this._account.address
    this._jsonTransaction.destination = this._destination
  }

  getSignature () {
    return this._jsonTransaction.signatures
  }

  async createSignPrevalidateSubmit () {
    try {
      await this.create()
      await this.sign()
      await this.prevalidate()
      await this.submit()
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }
}
