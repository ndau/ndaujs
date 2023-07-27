"use strict";

var cov_zlp2z2qbr = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/i18n/en.js";
  var hash = "f2d53a68f320df3ff83e1c75900d893c9317b80d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/i18n/en.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 29,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f2d53a68f320df3ff83e1c75900d893c9317b80d"
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
var lng = (cov_zlp2z2qbr.s[0]++, {
  translation: {
    // BlockchainAPIError messages
    'Insufficient balance in account to pay for transaction': 'Insufficient balance in account to pay for transaction',
    'Insufficient balance in account': 'Insufficient balance in account',
    'Transaction is already on the blockchain': 'Transaction is already on the blockchain',
    'Source account has no history and no balance': 'Source account has no history and no balance',
    'Cannot send and receive from the same account': 'Cannot send and receive from the same account',
    'Transfers into an account with an active countdown timer are invalid': 'Transfers into an account with an active countdown timer are invalid',
    // transaction error message
    'transaction problem': 'A problem occurred sending a {{type}} transaction for {{nickname}}: {{error}}'
  }
});
var _default = lng;
exports["default"] = _default;