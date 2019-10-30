import Transaction from './Transaction'

export class SetRewardsDestinationTransaction extends Transaction {
  constructor (wallet, account, destination) {
    super(wallet, account, 'SetRewardsDestination')

    if (!destination || destination.constructor !== String) {
      throw new Error(
        `destination (string) argument required to construct a ${
          this.transactionType
        } tx`
      )
    }
    this._destination = destination
  }

  addToJsonTransaction () {
    this._jsonTransaction.target = this._account.address
    this._jsonTransaction.destination = this._destination
  }
}
