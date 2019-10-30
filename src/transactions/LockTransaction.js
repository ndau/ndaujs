import Transaction from './Transaction'

export class LockTransaction extends Transaction {
  constructor (wallet, account, period) {
    super(wallet, account, 'Lock')

    if (!period || period.constructor !== String) {
      throw new Error(
        `period (string) argument required to construct a ${
          this.transactionType
        } tx`
      )
    }
    this._period = period
  }

  addToJsonTransaction () {
    this._jsonTransaction.period = this._period
    this._jsonTransaction.target = this._account.address
  }
}
