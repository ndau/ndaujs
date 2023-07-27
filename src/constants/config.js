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

    const API_MAX_RETRIES = 3; // allow 3 unsuccessful attempts
    const API_RETRY_DELAY_MS = 1 * 1000; // 1 * 1000 = 1 second (in miliseconds)
    const API_DEFAULT_TIMEOUT_MS = 10 * 1000; // 10 * 1000 = 10 seconds (in miliseconds)
    const NDAU_SUMMARY_PRECISION = 2;
    const NDAU_DETAIL_PRECISION = 8;

    const NODE_ADDRESSES = [
    'ndarw5i7rmqtqstw4mtnchmfvxnrq4k3e2ytsyvsc7nxt2y7',
    'ndaq3nqhez3vvxn8rx4m6s6n3kv7k9js8i3xw8hqnwvi2ete',
    'ndahnsxr8zh7r6u685ka865wz77wb78xcn45rgskpeyiwuza',
    'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
    'ndaekyty73hd56gynsswuj5q9em68tp6ed5v7tpft872hvuc'
    ];

    const NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY = 30;

    const VALIDATION_KEY_SEARCH_START_INDEX = 1;

    const MAX_LOG_ENTRIES = 101;
    const ADDRESS_SEARCH_MAX = 10;

    const APP_LANGUAGE = 'en';

export default { API_MAX_RETRIES, API_RETRY_DELAY_MS, API_DEFAULT_TIMEOUT_MS, NDAU_SUMMARY_PRECISION, NDAU_DETAIL_PRECISION,
    NODE_ADDRESSES, NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY, VALIDATION_KEY_SEARCH_START_INDEX, MAX_LOG_ENTRIES, ADDRESS_SEARCH_MAX, APP_LANGUAGE }
