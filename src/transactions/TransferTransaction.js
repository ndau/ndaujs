/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import DataFormatHelper from '../api/helpers/DataFormatHelper'
import Transaction from './Transaction'

export class TransferTransaction extends Transaction {
  constructor (wallet, account, destination, quantity) {
    super(wallet, account, 'Transfer')

    if (!destination || destination.constructor !== String) {
      throw new Error(
        `destination (string) argument required to construct a ${
          this.transactionType
        } tx`
      )
    }
    this._destination = destination

    // The assumption here is that we get ndau sent to this
    // quantity. The API must have napu so we perform the
    // conversion here.
    // argument can be either a number or numbers in a string.
    if (
      !quantity ||
      (quantity.constructor !== Number && quantity.constructor !== String)
    ) {
      throw new Error(
        `quantity (number) argument required to construct a ${
          this.transactionType
        } tx`
      )
    }
    this._quantity = DataFormatHelper.getNapuFromNdau(quantity)
  }

  addToJsonTransaction () {
    this._jsonTransaction.qty = this._quantity
    this._jsonTransaction.destination = this._destination
    this._jsonTransaction.source = this._account.address
  }
}
