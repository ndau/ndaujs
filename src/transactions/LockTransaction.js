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
