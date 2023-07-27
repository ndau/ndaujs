"use strict";

var cov_m2pxsryxj = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/constants/config.js";
  var hash = "e90528ac5e3a08e70be8b53044184437edbbf4bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/constants/config.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 28
        },
        end: {
          line: 16,
          column: 29
        }
      },
      "1": {
        start: {
          line: 17,
          column: 31
        },
        end: {
          line: 17,
          column: 39
        }
      },
      "2": {
        start: {
          line: 18,
          column: 35
        },
        end: {
          line: 18,
          column: 44
        }
      },
      "3": {
        start: {
          line: 19,
          column: 35
        },
        end: {
          line: 19,
          column: 36
        }
      },
      "4": {
        start: {
          line: 20,
          column: 34
        },
        end: {
          line: 20,
          column: 35
        }
      },
      "5": {
        start: {
          line: 22,
          column: 27
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "6": {
        start: {
          line: 30,
          column: 47
        },
        end: {
          line: 30,
          column: 49
        }
      },
      "7": {
        start: {
          line: 32,
          column: 46
        },
        end: {
          line: 32,
          column: 47
        }
      },
      "8": {
        start: {
          line: 34,
          column: 28
        },
        end: {
          line: 34,
          column: 31
        }
      },
      "9": {
        start: {
          line: 35,
          column: 31
        },
        end: {
          line: 35,
          column: 33
        }
      },
      "10": {
        start: {
          line: 37,
          column: 25
        },
        end: {
          line: 37,
          column: 29
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e90528ac5e3a08e70be8b53044184437edbbf4bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var API_MAX_RETRIES = (cov_m2pxsryxj.s[0]++, 3); // allow 3 unsuccessful attempts

var API_RETRY_DELAY_MS = (cov_m2pxsryxj.s[1]++, 1 * 1000); // 1 * 1000 = 1 second (in miliseconds)

var API_DEFAULT_TIMEOUT_MS = (cov_m2pxsryxj.s[2]++, 10 * 1000); // 10 * 1000 = 10 seconds (in miliseconds)

var NDAU_SUMMARY_PRECISION = (cov_m2pxsryxj.s[3]++, 2);
var NDAU_DETAIL_PRECISION = (cov_m2pxsryxj.s[4]++, 8);
var NODE_ADDRESSES = (cov_m2pxsryxj.s[5]++, ['ndarw5i7rmqtqstw4mtnchmfvxnrq4k3e2ytsyvsc7nxt2y7', 'ndaq3nqhez3vvxn8rx4m6s6n3kv7k9js8i3xw8hqnwvi2ete', 'ndahnsxr8zh7r6u685ka865wz77wb78xcn45rgskpeyiwuza', 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa', 'ndaekyty73hd56gynsswuj5q9em68tp6ed5v7tpft872hvuc']);
var NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY = (cov_m2pxsryxj.s[6]++, 30);
var VALIDATION_KEY_SEARCH_START_INDEX = (cov_m2pxsryxj.s[7]++, 1);
var MAX_LOG_ENTRIES = (cov_m2pxsryxj.s[8]++, 101);
var ADDRESS_SEARCH_MAX = (cov_m2pxsryxj.s[9]++, 10);
var APP_LANGUAGE = (cov_m2pxsryxj.s[10]++, 'en');
var _default = {
  API_MAX_RETRIES: API_MAX_RETRIES,
  API_RETRY_DELAY_MS: API_RETRY_DELAY_MS,
  API_DEFAULT_TIMEOUT_MS: API_DEFAULT_TIMEOUT_MS,
  NDAU_SUMMARY_PRECISION: NDAU_SUMMARY_PRECISION,
  NDAU_DETAIL_PRECISION: NDAU_DETAIL_PRECISION,
  NODE_ADDRESSES: NODE_ADDRESSES,
  NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY: NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY,
  VALIDATION_KEY_SEARCH_START_INDEX: VALIDATION_KEY_SEARCH_START_INDEX,
  MAX_LOG_ENTRIES: MAX_LOG_ENTRIES,
  ADDRESS_SEARCH_MAX: ADDRESS_SEARCH_MAX,
  APP_LANGUAGE: APP_LANGUAGE
};
exports["default"] = _default;