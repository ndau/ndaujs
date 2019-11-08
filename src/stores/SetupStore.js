import AppConstants from '../constants/constants'
import LoggerHelper from '../helpers/LoggerHelper'
const l = LoggerHelper.curryLogger('SetupStore')

// This class allows listeners to replace an earlier call to react-native's alerts.
// In order to use the alert, add a listener function to this class by calling `setupStore.addListener(yourFunction)` and handle the alert inside the body of `yourFunction`.
class SetupStore {
  constructor () {
    if (!SetupStore.instance) {
      SetupStore.instance = this
    }

    this._userId = ''
    // Default to 1 account created
    this._numberOfAccounts = 1
    this._qrCode = ''
    this._encryptionPassword = ''
    this._entropy = ''
    this._recoveryPhrase = ''
    this._shuffledMap = []
    this._shuffledWord = []
    this._addressType = AppConstants.MAINNET_ADDRESS
    this._walletId = ''

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

  set userId (userId) {
    this._userId = userId
  }

  get userId () {
    return this._userId
  }

  set numberOfAccounts (numberOfAccounts) {
    this._numberOfAccounts = numberOfAccounts
  }

  get numberOfAccounts () {
    return this._numberOfAccounts
  }

  set qrCode (qrCode) {
    this._qrCode = qrCode
  }

  get qrCode () {
    return this._qrCode
  }

  set encryptionPassword (encryptionPassword) {
    this._encryptionPassword = encryptionPassword
  }

  get encryptionPassword () {
    return this._encryptionPassword
  }

  set entropy (entropy) {
    this._entropy = entropy
  }

  get entropy () {
    return this._entropy
  }

  set recoveryPhrase (recoveryPhrase) {
    this._recoveryPhrase = recoveryPhrase.slice()
  }

  get recoveryPhrase () {
    return this._recoveryPhrase
  }

  set shuffledWords (shuffledWords) {
    this._shuffledWords = shuffledWords.slice()
  }

  get shuffledWords () {
    return this._shuffledWords
  }

  set shuffledMap (shuffledMap) {
    this._shuffledMap = shuffledMap.slice()
  }

  get shuffledMap () {
    return this._shuffledMap
  }

  toggleAddressType () {
    const oldAddressType = this._addressType
    const newAddressType =
      this._addressType === AppConstants.MAINNET_ADDRESS
        ? AppConstants.TESTNET_ADDRESS
        : AppConstants.MAINNET_ADDRESS

    alert(
      `Old address type was ${oldAddressType} which has been moved to ${newAddressType}`
    )

    this._addressType = newAddressType
  }

  get addressType () {
    return this._addressType
  }

  set walletId (walletId) {
    this._walletId = walletId
  }

  get walletId () {
    return this._walletId
  }

  printData () {
    l.info(`SetupStore.userId ${this._userId}`)
    l.info(`SetupStore.numberOfAccounts ${this._numberOfAccounts}`)
    l.info(`SetupStore.qrCode ${this._qrCode}`)
    l.info(`SetupStore.entropy ${this._entropy}`)
    l.info(`SetupStore.walletId ${this._walletId}`)
    l.info(`SetupStore.addressType ${this._addressType}`)
  }

  reset () {
    this._userId = ''
    this._numberOfAccounts = 0
    this._qrCode = ''
    this._encryptionPassword = ''
    this._entropy = ''
    this._recoveryPhrase = ''
    this._shuffledMap = []
    this._shuffledWord = []
    this._addressType = AppConstants.MAINNET_ADDRESS
    this._walletId = ''
  }
}

const instance = new SetupStore()

export default instance
