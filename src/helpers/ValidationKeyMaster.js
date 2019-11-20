import KeyPathHelper from '../api/helpers/KeyPathHelper'
import KeyMaster from '../helpers/KeyMaster'
import DataFormatHelper from '../api/helpers/DataFormatHelper'
import AppConfig from '../constants/config'
import LoggerHelper from '../helpers/LoggerHelper'
const l = LoggerHelper.curryLogger('ValidationKeyMaster')

/**
 * This method will generate a key object based on either
 * the nextIndex or a passed in index. This function MUST be used
 * when recovering first gen legacy validation keys. As of the 1.8 ndau wallet
 * we started to SetValidation (or now SetValidation). In doing this
 * we generate a validation key. The key generated in this method
 * is what was used initially. The path of the keys are:
 *
 * /44'/20036'/100/x/44'/20036'/2000/y
 * or
 * /x/44'/20036'/2000/y (for root accounts)
 *
 * where x is the accounts index and y will be the validation key
 * index.
 *
 * @param {Wallet} wallet
 * @param {Account} account
 * @param {number} index
 */
const _generateLegacy1ValidationKey = async (wallet, account, index) => {
  if (!index) {
    index = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.legacyValidationKeyPath1()
    )
  }
  const keyPath = KeyPathHelper.legacyValidationKeyPath1() + `/${index}`

  const validationPrivateKey = await Keyaddr.deriveFrom(
    wallet.keys[account.ownershipKey].privateKey,
    '/',
    keyPath
  )

  const validationPublicKey = await Keyaddr.toPublic(validationPrivateKey)

  const actualPath = wallet.keys[account.ownershipKey].path + keyPath
  return KeyMaster.createKey(
    validationPrivateKey,
    validationPublicKey,
    actualPath
  )
}

/**
 * This is the correct method to use for creating the second generation of
 * validation keys. The path for a validation key is as follows:
 *
 * /44'/20036'/100/10000/y
 * or
 * /x/10000/y (for root accounts)
 *
 * where x is the accounts index and y will be the validation key index
 *
 * @param {Wallet} wallet
 * @param {Account} account
 * @param {number} index
 */
const _generateLegacy2ValidationKey = async (wallet, account, index) => {
  const privateValidationRootKey = await Keyaddr.deriveFrom(
    wallet.keys[wallet.accountCreationKeyHash].privateKey,
    KeyPathHelper.accountCreationKeyPath,
    KeyPathHelper.legacyValidationKeyPath2
  )

  const keyPath = KeyPathHelper.getLegacy2Thru4AccountValidationKeyPath(
    wallet,
    account,
    index
  )

  const validationPrivateKey = await Keyaddr.deriveFrom(
    privateValidationRootKey,
    KeyPathHelper.getLegacy2Thru4RootAccountValidationKeyPath(wallet, account),
    keyPath
  )

  const validationPublicKey = await Keyaddr.toPublic(validationPrivateKey)

  return KeyMaster.createKey(validationPrivateKey, validationPublicKey, keyPath)
}

/**
 * This is the correct method to use for generating validation keys.
 * The path for a validation key is as follows:
 *
 * /44'/20036'/100/10000'/x'/y
 * or
 * /x/10000'/x'/y
 *
 * where x is the accounts index and y will be the validation key index
 *
 * @param {Wallet} wallet
 * @param {Account} account
 * @param {number} index
 */
const _generateValidationKey = async (wallet, account, index) => {
  const privateValidationRootKey = await Keyaddr.deriveFrom(
    wallet.keys[wallet.accountCreationKeyHash].privateKey,
    KeyPathHelper.accountCreationKeyPath,
    KeyPathHelper.validationKeyPath
  )

  const keyPath = KeyPathHelper.getAccountValidationKeyPath(
    wallet,
    account,
    index
  )

  const validationPrivateKey = await Keyaddr.deriveFrom(
    privateValidationRootKey,
    KeyPathHelper.validationKeyPath,
    keyPath
  )

  const validationPublicKey = await Keyaddr.toPublic(validationPrivateKey)

  return KeyMaster.createKey(validationPrivateKey, validationPublicKey, keyPath)
}

/**
 * Create a validation key given the wallet and account passed in.
 * The wallet is updated directly in this function so there is no need
 * for a return arguement.
 *
 * @param {Wallet} wallet
 * @param {Account} account
 */
const addValidationKey = async (wallet, account) => {
  const key = await _generateValidationKey(wallet, account)
  addThisValidationKey(account, wallet, key.privateKey, key.publicKey, key.path)
}

const addThisValidationKey = (
  account,
  wallet,
  validationPrivateKey,
  validationPublicKey,
  keyPath
) => {
  if (!keyPath) {
    const nextIndex = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.getRootAccountValidationKeyPath()
    )
    keyPath = KeyPathHelper.getRootAccountValidationKeyPath() + `/${nextIndex}`
  }
  const validationKeyHash = DataFormatHelper.create8CharHash(
    validationPrivateKey
  )
  wallet.keys[validationKeyHash] = KeyMaster.createKey(
    validationPrivateKey,
    validationPublicKey,
    keyPath
  )
  if (!account.validationKeys.includes(validationKeyHash)) {
    account.validationKeys.push(validationKeyHash)
  }
}

/**
 * This function will return possible validation keys within a
 * keys object. This is used during recovery of validation keys
 *
 *
 * @param {Wallet} wallet
 * @param {Account} account
 * @param {number} startIndex what index in the derivation path to
 * start searching for validation keys
 * @param {number} endIndex what index in the derivation path to
 * end the search for validation keys
 */
const getValidationKeys = async (wallet, account, startIndex, endIndex) => {
  const keys = {}

  try {
    for (let i = startIndex; i <= endIndex; i++) {
      const currentKey = await _generateValidationKey(wallet, account, i)
      keys[currentKey.publicKey] = currentKey

      const legacyKey2 = await _generateLegacy2ValidationKey(wallet, account, i)
      keys[legacyKey2.publicKey] = legacyKey2

      const legacyKey1 = await _generateLegacy1ValidationKey(wallet, account, i)
      keys[legacyKey1.publicKey] = legacyKey1
    }
  } catch (e) {
    l.debug(`could not create keys: ${e.message}`)
    throw new Error(
      `problem encountered creating object of validation public and private keys: ${
        e.message
      }`
    )
  }

  return keys
}

/**
 * Given the validation keys passed in, iterate the wallet to recover
 * the private keys if not present. The search firsts looks in the
 * legacy validation locations:
 *
 * /44'/20036'/100/x/44'/20036'/2000/y
 * /44'/20036'/100/10000/y
 * /44'/20036'/100/x/44'/20036'/100/10000/x/y
 * /44'/20036'/100/10000/x/y
 *
 * where x is the accounts index and y will be the validation key
 * index.
 *
 * The most recent and correct path to check is:
 *
 * /44'/20036'/100/10000'/x'/y
 *
 * @param {Wallet} wallet
 * @param {Account} account
 * @param {Array} validationKeys
 * @returns {Key} key genereated
 */
const recoveryValidationKey = async (wallet, account, validationKeys) => {
  if (
    validationKeys &&
    account.validationKeys &&
    account.validationKeys.length === 0
  ) {
    l.info(
      `Attempting to find the private key for the public validation key we have...`
    )
    l.info(`This is for ${wallet.walletId} address ${account.address}`)
    for (const validationKey of validationKeys) {
      let startIndex = AppConfig.VALIDATION_KEY_SEARCH_START_INDEX
      let endIndex = AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
      let found = false
      // Use a counter to prevent infinite search
      let counter = 0

      do {
        let validationKeys = await getValidationKeys(
          wallet,
          account,
          startIndex,
          endIndex
        )
        found = _checkValidationKeys(
          wallet,
          account,
          validationKeys,
          validationKey,
          found
        )

        startIndex += AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
        endIndex += AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY

        counter++
      } while (
        !found &&
        // go until we hit the configured max
        counter < AppConfig.VALIDATION_KEY_SEARCH_ITERATION_MAX
      )
    }
  }
}

const _checkValidationKeys = (
  wallet,
  account,
  validationKeys,
  validationKey,
  found
) => {
  const validationPublicKeys = Object.keys(validationKeys)
  for (const validationPublicKey of validationPublicKeys) {
    if (validationKey === validationPublicKey) {
      l.info('Found a match, adding validation keys to the wallet')
      addThisValidationKey(
        account,
        wallet,
        validationKeys[validationPublicKey].privateKey,
        validationPublicKey,
        validationKeys[validationPublicKey].path
      )
      found = true
      break
    }
  }
  return found
}

export default {
  addValidationKey,
  recoveryValidationKey
}
