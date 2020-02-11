/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import AccountAPIHelper from '../api/helpers/AccountAPIHelper'
import AppConfig from '../constants/config'
import KeyMaster from '../helpers/KeyMaster'
import Transaction from './Transaction'

export class SetValidationTransaction extends Transaction {
  constructor (wallet, account, sendType) {
    super(wallet, account, 'SetValidation')

    // This argument is optional
    if (sendType !== undefined && sendType.constructor !== Number) {
      throw new Error(
        `sendType argument must be a number to construct a ${
          this.transactionType
        } tx`
      )
    }
    this._sendType = sendType
  }

  addToJsonTransaction () {
    this._jsonTransaction.target = this._account.address

    const validationKeys = []
    // Adds all validation keys to this account
    this._account.validationKeys.forEach(validationKeyHash => {
      validationKeys.push(this._keys[validationKeyHash].publicKey)
    })

    this._jsonTransaction.ownership = this._keys[
      this._account.ownershipKey
    ].publicKey
    this._jsonTransaction.validation_keys = validationKeys
  }

  privateKeyForSigning () {
    return KeyMaster.getPrivateKeyFromHash(
      this._wallet,
      this._account.ownershipKey
    )
  }

  addSignatureToJsonTransaction (signature) {
    this._jsonTransaction.signature = signature
  }
}
