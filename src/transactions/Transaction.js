/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import KeyMaster from '../helpers/KeyMaster'
import ValidationKeyMaster from '../helpers/ValidationKeyMaster'
import TransactionAPI from '../api/TransactionAPI'
import TxSignPrep from '../model/TxSignPrep'
import AccountAPI from '../api/AccountAPI'
import { ErrorsByMessage, Messages } from '../api/errors/BlockchainAPIError'
import APIAddressHelper from '../api/helpers/APIAddressHelper'
import LoggerHelper from '../helpers/LoggerHelper'
import Wallet from '../model/Wallet'
import Account from '../model/Account'
const l = LoggerHelper.curryLogger('Transaction')

export default class Transaction {
  constructor (wallet, account, transactionType) {
    if (!transactionType || transactionType.constructor !== String) {
      throw new Error(
        `transactionType (string) argument required to construct a tx`
      )
    }
    if (!wallet || wallet.constructor !== Wallet) {
      throw new Error(
        `wallet (object) argument required to construct a ${transactionType} tx`
      )
    }
    if (!account || account.constructor !== Account) {
      throw new Error(
        `account (object) argument required to construct a ${transactionType} tx`
      )
    }

    this._sendType = APIAddressHelper.BLOCKCHAIN
    this.transactionType = transactionType
    this._wallet = wallet
    this._account = account

    this._keys = wallet.keys
    this._jsonTransaction = {}
    this._submitAddress = ''
    this._prevalidateAddress = ''
  }

  /**
   * Create a transaction and store information internally
   */
  async create (ownershipKeys, validationKeys) {
    try {
      await this.createPrevalidateAddress()
    } catch (e) {
      throw new Error(`could not create prevalidate address: ${e.message}`)
    }
    try {
      await this.createSubmissionAddress()
    } catch (e) {
      throw new Error(`could not create submission address: ${e.message}`)
    }
    try {
      // ok...if we got here we can assume we do NOT have a validation
      // key, so we need that to call KeyaddrManager.sign...so create it
      // but only if there are none present. This business logic may
      // change in the future, but for now, we only create one validation
      // key per account here
      console.log('account keys = ' + this._account.validationKeys)
      console.log('account ad = ' + this._account.addressData)
      if (
        !this._account.validationKeys ||
        this._account.validationKeys.length === 0
      ) {
        throw Error('No validation keys present')
      }
    //   if (isNaN(this._account.addressData.sequence)) {
    //     throw ErrorsByMessage[Messages.SRC_NO_HISTORY]
    //   }
      // If we have already done a create we have generated
      // a sequence. If this object is sent again we do not
      // want to genereate a new sequence as it will try to perform
      // the transaction again. Doing this prevents a duplicate transaction
      // from being accepted because the signature is the same.
      // If you want a new sequence you simply create a new instance of
      // a transaction. So you will need to `new TransferTransaction(...)` if
      // you want another transaction. The UI codebase does that as it
      // holds the local instance of signatures. Take a look at `AccountSendConfirmation`
      // to see how this is used.
      if (!this.getSignature()) {
        const sequence = await AccountAPI.getNextSequence(this._account.address)
        this._jsonTransaction = {
          sequence
        }
      }
      await this.createTransactionSpecific(ownershipKeys, validationKeys)
      this.addToJsonTransaction()
      return this._jsonTransaction
    } catch (e) {
      console.log('transaction error: ' + e)
      this.handleError(e)
    }
  }

  handleError (e) {
    let msg = i18next.t('transaction problem', {
      type: this.transactionType,
      nickname: this._account.addressData.nickname,
      error: e.message
    })
    l.error(`error from blockchain: ${e.message}`)
    throw new Error(msg)
  }

  /**
   * Sign the transaction for prevalidation and submission. You must
   * call `create` first before you call this method.
   */
  async sign (privateKey) {
    console.log('private key = ' + privateKey)
    // Here we get the ownership key to sign for SetValidation. This is
    // the ONLY time we use the ownershipKey. Any subsequent/other
    // transactions use the validationKey within the account
//    const privateKeyFromHash = this.privateKeyForSigning()

    // Use the TxSignPrep to get it ready to send
    const preparedTransaction = new TxSignPrep().prepare(this._jsonTransaction)
    const base64EncodedPrepTx = preparedTransaction.b64encode()

    try {
      // Get the signature to use in the transaction
      const signature = await Keyaddr.signEdB64(
 //       privateKeyFromHash,
        privateKey,
        base64EncodedPrepTx
      )
      this.addSignatureToJsonTransaction(signature)
    } catch (e) {
      console.log('sign error: ' + e)
      this.handleError(e)
    }
  }

  privateKeyForSigning () {
    return KeyMaster.getPrivateKeyFromHash(
      this._wallet,
      this._account.validationKeys[0]
    )
  }

  addSignatureToJsonTransaction (signature) {
    this._jsonTransaction.signatures = [signature]
  }

  /**
   * Send this transaction to the blockchain to see if all is well.
   * You must first call `create` and `sign` before you call this. If all
   * is well you can then call `submit`.
   */
  async prevalidate () {
    const response = await TransactionAPI.prevalidate(
      this._prevalidateAddress,
      this._jsonTransaction
    )

    if (response.err) {
      // If there's an error, check to see if we have enough to cover the fee
      const spendableNapu = AccountAPIHelper.spendableNapu(
        this._account.addressData,
        true,
        AppConfig.NDAU_DETAIL_PRECISION
      )
      const data = response.err.getData()
      if (spendableNapu < data.fee_napu) {
        throw new BlockchainAPIError(response.err)
      }
      return this.handleError(response.err)
    }
    return response
  }

  /**
   * This is the last call that you should make. You must call
   * `create`, `sign` and `prevalidate` before you `submit` to
   * the blockchain.
   */
  async submit () {
    try {
      const response = await TransactionAPI.submit(
        this._submitAddress,
        this._jsonTransaction
      )
      if (response.err) {
        this.handleError(response.err)
      } else {
        // Successful transaction so update
        // the account with the new sequence
        this._account.addressData.sequence = this._jsonTransaction.sequence
        return response
      }
    } catch (e) {
      this.handleError(e)
    }
  }

  async createSubmissionAddress () {
    const submitAddressPre = await APIAddressHelper.getTransactionSubmitAPIAddress(
      this._sendType
    )
    this._submitAddress = submitAddressPre + '/' + this.transactionType

    l.debug(
      `submission address: ${this._submitAddress} with send type: ${
        this._sendType
      }`
    )
  }

  async createPrevalidateAddress () {
    const prevalidateAddressPre = await APIAddressHelper.getTransactionPrevalidateAPIAddress(
      this._sendType
    )
    this._prevalidateAddress =
      prevalidateAddressPre + '/' + this.transactionType

    l.debug(
      `prevalidate address: ${this._prevalidateAddress} send type ${
        this._sendType
      }`
    )
  }

  getSignature () {
    return this._jsonTransaction.signature
  }

  async createSignPrevalidateSubmit () {
    try {
      await this.create()
      await this.sign()
      await this.prevalidate()
      await this.submit()
    } catch (e) {
      this.handleError(e)
    }
  }

  // This is meant to be overridden if transactions require specific error handling.
  handleSubmitError () {}

  // This is meant to be overridden to include the properties of the transaction to be signed.
  addToJsonTransaction () {}

  async createTransactionSpecific () {}
}
