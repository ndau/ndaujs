/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

/**
 * This is ES5 for experimental purposes for now. Ideally all code
 * in source can be ES6.
 */
module.exports.HARDENED_CHILD_BIP_44 = 44
module.exports.ACCOUNT_CREATION_KEY_CHILD = 100
module.exports.VALIDATION_KEY = 10000
module.exports.LEGACY_VALIDATION_KEY = 2000
module.exports.NDAU_CONSTANT = 20036 // which is 0x4e44 in hex, which are the two letters ND in ASCII

module.exports.QUANTA_PER_UNIT = 100000000

module.exports.TEMP_ID = 'temp-id'

module.exports.DERIVED_ROOT_YES = 'yes'
module.exports.DERIVED_ROOT_NO = 'no'
module.exports.DERIVED_ROOT_UNKNOWN = 'unknown'

module.exports.LOCK_ACCOUNT_POSSIBLE_TIMEFRAMES = {
  '3m': '3 months',
  '6m': '6 months',
  '1y': '1 year',
  '2y': '2 years',
  '3y': '3 years'
}

module.exports.NDAU_EPOCH = '2000-01-01T00:00:00Z'

module.exports.TESTNET_ADDRESS = 'tn'
module.exports.MAINNET_ADDRESS = 'nd'
module.exports.APP_LANGUAGE = 'en'

module.exports.RATE_DENOMINATOR = module.exports.QUANTA_PER_UNIT * 10000
