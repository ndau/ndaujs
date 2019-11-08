import Transaction from './Transaction'

export class DelegateTransaction extends Transaction {
  constructor (wallet, account, node) {
    super(wallet, account, 'Delegate')
    if (!node || node.constructor !== String) {
      throw new Error(
        `node (string) argument required to construct a ${
          this.transactionType
        } tx`
      )
    }
    this._node = node
  }

  addToJsonTransaction () {
    this._jsonTransaction.target = this._account.address
    this._jsonTransaction.node = this._node
  }
}
