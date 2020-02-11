/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

// This class allows listeners to replace an earlier call to react-native's alerts.
// In order to use the alert, add a listener function to this class by calling `setupStore.addListener(yourFunction)` and handle the alert inside the body of `yourFunction`.
class SetupStore {
  constructor () {
    if (!SetupStore.instance) {
      SetupStore.instance = this
    }

    this.reset()

    this.funcs = new Set()
    return SetupStore.instance
  }

  addListener (func) {
    this.funcs.add(func)
  }

  removeListener (func) {
    this.funcs.delete(func)
  }

  alert (msg) {
    this.funcs.forEach(func => func(msg))
  }

  set user (user) {
    this._user = user
  }

  get user () {
    return this._user
  }

  set encryptionPassword (encryptionPassword) {
    this._encryptionPassword = encryptionPassword
  }

  get encryptionPassword () {
    return this._encryptionPassword
  }

  set walletName (walletName) {
    this._walletName = walletName
  }

  get walletName () {
    return this._walletName
  }

  set recoveryPhrase (recoveryPhrase) {
    this._recoveryPhrase = recoveryPhrase
  }

  get recoveryPhrase () {
    return this._recoveryPhrase
  }

  reset () {
    this._user = null
    this._encryptionPassword = null
    this._walletName = null
    this._recoveryPhrase = null
  }
}

const instance = new SetupStore()

export default instance
