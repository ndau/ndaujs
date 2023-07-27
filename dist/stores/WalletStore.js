"use strict";

var cov_ambrtneyz = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/WalletStore.js";
  var hash = "607c34b908518296156bbaf992295b8f35d75b48";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/WalletStore.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "1": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 23
        }
      },
      "2": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 33
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 31
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 28
        }
      },
      "5": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 26
        }
      },
      "6": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 34
        }
      },
      "7": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 31,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 15
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "607c34b908518296156bbaf992295b8f35d75b48"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */
var WalletStore = /*#__PURE__*/function () {
  function WalletStore() {
    (0, _classCallCheck2["default"])(this, WalletStore);
    cov_ambrtneyz.f[0]++;
    cov_ambrtneyz.s[0]++;

    if (!WalletStore.instance) {
      cov_ambrtneyz.b[0][0]++;
      cov_ambrtneyz.s[1]++;
      this._wallet = [];
      cov_ambrtneyz.s[2]++;
      WalletStore.instance = this;
    } else {
      cov_ambrtneyz.b[0][1]++;
    }

    cov_ambrtneyz.s[3]++;
    return WalletStore.instance;
  }

  (0, _createClass2["default"])(WalletStore, [{
    key: "setWallet",
    value: function setWallet(wallet) {
      cov_ambrtneyz.f[1]++;
      cov_ambrtneyz.s[4]++;
      this._wallet[0] = wallet;
    }
  }, {
    key: "getWallet",
    value: function getWallet() {
      cov_ambrtneyz.f[2]++;
      cov_ambrtneyz.s[5]++;
      return this._wallet[0];
    }
  }]);
  return WalletStore;
}();

var instance = (cov_ambrtneyz.s[6]++, new WalletStore());
cov_ambrtneyz.s[7]++;
Object.freeze(instance);
var _default = instance;
exports["default"] = _default;