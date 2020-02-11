/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

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
