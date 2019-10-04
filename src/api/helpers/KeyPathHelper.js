import constants from '../../constants/constants'
import DataFormatHelper from './DataFormatHelper'

const accountCreationKeyPath = `/${constants.HARDENED_CHILD_BIP_44}'/${
  constants.NDAU_CONSTANT
}'/${constants.ACCOUNT_CREATION_KEY_CHILD}`

const validationKeyPath = `${accountCreationKeyPath}/${
  constants.VALIDATION_KEY
}'`

const legacyValidationKeyPath1 = `/${constants.HARDENED_CHILD_BIP_44}'/${
  constants.NDAU_CONSTANT
}'/${constants.LEGACY_VALIDATION_KEY}`

const legacyValidationKeyPath2 = `${accountCreationKeyPath}/${
  constants.VALIDATION_KEY
}`

const isBIP44 = address => {
  return address.startsWith('/44')
}

const getRootAccountValidationKeyPath = (wallet, account) => {
  const accountPath = wallet.keys[account.ownershipKey].path
  let accountChildIndex = ''
  if (isBIP44(accountPath)) {
    accountChildIndex = accountPath.substring(
      accountCreationKeyPath.length + 1,
      accountPath.length
    )
  } else {
    // we have an old root account. So make sure you just get
    // that one.
    accountChildIndex = accountPath.substring(1, accountPath.length)
  }

  return `${validationKeyPath}/${accountChildIndex}'`
}

const getLegacy2Thru4RootAccountValidationKeyPath = (wallet, account) => {
  const accountPath = wallet.keys[account.ownershipKey].path
  let accountChildIndex = ''
  if (isBIP44(accountPath)) {
    accountChildIndex = accountPath.substring(
      accountCreationKeyPath.length + 1,
      accountPath.length
    )
  } else {
    // we have an old root account. So make sure you just get
    // that one.
    accountChildIndex = accountPath.substring(1, accountPath.length)
  }

  return `${legacyValidationKeyPath2}/${accountChildIndex}`
}

const getLegacy2Thru4AccountValidationKeyPath = (wallet, account, index) => {
  const rootAccountValidationPath = getLegacy2Thru4RootAccountValidationKeyPath(
    wallet,
    account
  )
  if (!index) {
    index = DataFormatHelper.getNextPathIndex(wallet, validationKeyPath)
  }
  return `${rootAccountValidationPath}/${index}`
}

const getAccountValidationKeyPath = (wallet, account, index) => {
  const rootAccountValidationPath = getRootAccountValidationKeyPath(
    wallet,
    account
  )
  if (!index) {
    index = DataFormatHelper.getNextPathIndex(wallet, rootAccountValidationPath)
  }
  return `${rootAccountValidationPath}/${index}`
}

export default {
  accountCreationKeyPath,
  validationKeyPath,
  getLegacy2Thru4RootAccountValidationKeyPath,
  getLegacy2Thru4AccountValidationKeyPath,
  legacyValidationKeyPath1,
  legacyValidationKeyPath2,
  getAccountValidationKeyPath,
  getRootAccountValidationKeyPath
}
