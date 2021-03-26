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
    const    HARDENED_CHILD_BIP_44 = 44;
    const    ACCOUNT_CREATION_KEY_CHILD = 100;
    const    VALIDATION_KEY = 10000;
    const    LEGACY_VALIDATION_KEY = 2000;
    const    NDAU_CONSTANT = 20036; // which is 0x4e44 in hex, which are the two letters ND in ASCII

    const    QUANTA_PER_UNIT = 100000000;

    const    TEMP_ID = 'temp-id';

    const    DERIVED_ROOT_YES = 'yes';
    const    DERIVED_ROOT_NO = 'no';
    const    DERIVED_ROOT_UNKNOWN = 'unknown';

    const    LOCK_ACCOUNT_POSSIBLE_TIMEFRAMES = {
            '3m': '3 months',
            '6m': '6 months',
            '1y': '1 year',
            '2y': '2 years',
            '3y': '3 years'
        };

    const    NDAU_EPOCH = '2000-01-01T00:00:00Z';

    const    TESTNET_ADDRESS = 'tn';
    const    MAINNET_ADDRESS = 'nd';
    const    APP_LANGUAGE = 'en';

    const    RATE_DENOMINATOR = QUANTA_PER_UNIT * 10000;

export default {HARDENED_CHILD_BIP_44, ACCOUNT_CREATION_KEY_CHILD, VALIDATION_KEY, LEGACY_VALIDATION_KEY, NDAU_CONSTANT, QUANTA_PER_UNIT,
    TEMP_ID, DERIVED_ROOT_YES, DERIVED_ROOT_NO, DERIVED_ROOT_UNKNOWN, LOCK_ACCOUNT_POSSIBLE_TIMEFRAMES, NDAU_EPOCH, TESTNET_ADDRESS, 
    MAINNET_ADDRESS, APP_LANGUAGE, RATE_DENOMINATOR}