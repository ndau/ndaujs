import AppConstants from '../constants/constants'

// This class allows listeners to replace an earlier call to react-native's alerts.
// In order to use the alert, add a listener function to this class by calling `setupStore.addListener(yourFunction)` and handle the alert inside the body of `yourFunction`.
class SetupStore {
  constructor () {
    if (!SetupStore.instance) {
      SetupStore.instance = this
    }

    this._user = null
    this._encryptionPassword = null
    this._walletName = null

    this.listeners = new Set()
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
    this._walletName
  }

  reset () {
    this._user = null
    this._encryptionPassword = null
    this._walletName = null
  }
}

const instance = new SetupStore()

export default instance
