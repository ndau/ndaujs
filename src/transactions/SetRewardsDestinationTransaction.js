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
