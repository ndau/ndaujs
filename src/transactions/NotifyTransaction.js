import Transaction from './Transaction'

export class NotifyTransaction extends Transaction {
  constructor (wallet, account) {
    super(wallet, account, 'Notify')
  }

  addToJsonTransaction () {
    this._jsonTransaction.target = this._account.address
  }
}
