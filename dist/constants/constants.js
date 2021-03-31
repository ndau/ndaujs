"use strict";

var cov_k8v5isjdg = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/constants/constants.js";
  var hash = "1d0a0a22b44dc2c132707be99847211b26f0355a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/constants/constants.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 37
        },
        end: {
          line: 15,
          column: 39
        }
      },
      "1": {
        start: {
          line: 16,
          column: 42
        },
        end: {
          line: 16,
          column: 45
        }
      },
      "2": {
        start: {
          line: 17,
          column: 30
        },
        end: {
          line: 17,
          column: 35
        }
      },
      "3": {
        start: {
          line: 18,
          column: 37
        },
        end: {
          line: 18,
          column: 41
        }
      },
      "4": {
        start: {
          line: 19,
          column: 29
        },
        end: {
          line: 19,
          column: 34
        }
      },
      "5": {
        start: {
          line: 21,
          column: 31
        },
        end: {
          line: 21,
          column: 40
        }
      },
      "6": {
        start: {
          line: 23,
          column: 23
        },
        end: {
          line: 23,
          column: 32
        }
      },
      "7": {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 25,
          column: 37
        }
      },
      "8": {
        start: {
          line: 26,
          column: 31
        },
        end: {
          line: 26,
          column: 35
        }
      },
      "9": {
        start: {
          line: 27,
          column: 36
        },
        end: {
          line: 27,
          column: 45
        }
      },
      "10": {
        start: {
          line: 29,
          column: 48
        },
        end: {
          line: 35,
          column: 9
        }
      },
      "11": {
        start: {
          line: 37,
          column: 26
        },
        end: {
          line: 37,
          column: 48
        }
      },
      "12": {
        start: {
          line: 39,
          column: 31
        },
        end: {
          line: 39,
          column: 35
        }
      },
      "13": {
        start: {
          line: 40,
          column: 31
        },
        end: {
          line: 40,
          column: 35
        }
      },
      "14": {
        start: {
          line: 41,
          column: 28
        },
        end: {
          line: 41,
          column: 32
        }
      },
      "15": {
        start: {
          line: 43,
          column: 32
        },
        end: {
          line: 43,
          column: 55
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1d0a0a22b44dc2c132707be99847211b26f0355a"
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
var HARDENED_CHILD_BIP_44 = (cov_k8v5isjdg.s[0]++, 44);
var ACCOUNT_CREATION_KEY_CHILD = (cov_k8v5isjdg.s[1]++, 100);
var VALIDATION_KEY = (cov_k8v5isjdg.s[2]++, 10000);
var LEGACY_VALIDATION_KEY = (cov_k8v5isjdg.s[3]++, 2000);
var NDAU_CONSTANT = (cov_k8v5isjdg.s[4]++, 20036); // which is 0x4e44 in hex, which are the two letters ND in ASCII

var QUANTA_PER_UNIT = (cov_k8v5isjdg.s[5]++, 100000000);
var TEMP_ID = (cov_k8v5isjdg.s[6]++, 'temp-id');
var DERIVED_ROOT_YES = (cov_k8v5isjdg.s[7]++, 'yes');
var DERIVED_ROOT_NO = (cov_k8v5isjdg.s[8]++, 'no');
var DERIVED_ROOT_UNKNOWN = (cov_k8v5isjdg.s[9]++, 'unknown');
var LOCK_ACCOUNT_POSSIBLE_TIMEFRAMES = (cov_k8v5isjdg.s[10]++, {
  '3m': '3 months',
  '6m': '6 months',
  '1y': '1 year',
  '2y': '2 years',
  '3y': '3 years'
});
var NDAU_EPOCH = (cov_k8v5isjdg.s[11]++, '2000-01-01T00:00:00Z');
var TESTNET_ADDRESS = (cov_k8v5isjdg.s[12]++, 'tn');
var MAINNET_ADDRESS = (cov_k8v5isjdg.s[13]++, 'nd');
var APP_LANGUAGE = (cov_k8v5isjdg.s[14]++, 'en');
var RATE_DENOMINATOR = (cov_k8v5isjdg.s[15]++, QUANTA_PER_UNIT * 10000);
var _default = {
  HARDENED_CHILD_BIP_44: HARDENED_CHILD_BIP_44,
  ACCOUNT_CREATION_KEY_CHILD: ACCOUNT_CREATION_KEY_CHILD,
  VALIDATION_KEY: VALIDATION_KEY,
  LEGACY_VALIDATION_KEY: LEGACY_VALIDATION_KEY,
  NDAU_CONSTANT: NDAU_CONSTANT,
  QUANTA_PER_UNIT: QUANTA_PER_UNIT,
  TEMP_ID: TEMP_ID,
  DERIVED_ROOT_YES: DERIVED_ROOT_YES,
  DERIVED_ROOT_NO: DERIVED_ROOT_NO,
  DERIVED_ROOT_UNKNOWN: DERIVED_ROOT_UNKNOWN,
  LOCK_ACCOUNT_POSSIBLE_TIMEFRAMES: LOCK_ACCOUNT_POSSIBLE_TIMEFRAMES,
  NDAU_EPOCH: NDAU_EPOCH,
  TESTNET_ADDRESS: TESTNET_ADDRESS,
  MAINNET_ADDRESS: MAINNET_ADDRESS,
  APP_LANGUAGE: APP_LANGUAGE,
  RATE_DENOMINATOR: RATE_DENOMINATOR
};
exports["default"] = _default;