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

export class CreateChildAccountTransaction extends Transaction {
  constructor (wallet, account, destination, quantity) {
    super(wallet, account, 'CreateChildAccount')
  }

  async createTransactionSpecific () {
    this._newChildOwnershipKeys = await Keyaddr.newEdKey()
    this._child = await Keyaddr.addrFromPublicKey(this._newChildOwnershipKeys["pubkey"])
    this._child_sig = await Keyaddr.signEdText(this._newChildOwnershipKeys["privkey"],
                                    this._child)
    this._newChildValidationKeys = await Keyaddr.newEdKey()
  }

  addToJsonTransaction () {
    console.log('_newChildOwnershipKeys = ' + this._newChildOwnershipKeys["privkey"])
    this._jsonTransaction.target = this._account.address
    this._jsonTransaction.child = this._child
    this._jsonTransaction.child_ownership = this._newChildOwnershipKeys["pubkey"]
    this._jsonTransaction.child_signature = this._child_sig
    this._jsonTransaction.child_recourse_period = 't0s'
    this._jsonTransaction.child_validation_keys = [this._newChildValidationKeys["pubkey"]]
    this._jsonTransaction.child_validation_script = ''
    this._jsonTransaction.child_delegation_node = this._child
  }
}
