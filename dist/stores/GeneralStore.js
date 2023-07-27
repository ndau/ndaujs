"use strict";

var cov_246yrbuu5g = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/GeneralStore.js";
  var hash = "8d92f453c4b76090ddf73aa1bdf767211c3602ff";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/GeneralStore.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "1": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 34
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 19
        }
      },
      "3": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 32
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 22
        }
      },
      "5": {
        start: {
          line: 32,
          column: 17
        },
        end: {
          line: 32,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 17
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 19
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8d92f453c4b76090ddf73aa1bdf767211c3602ff"
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
// This is a singleton, but it's rather more of a global object.
// As different persistent storage strategies will be used in different contexts this provides a single point from which they will persist. Since this library was adapted from a ReactNative context. The consumers of this object are expecting the same API as `react-native-community/async-storage`.
// Properly initializing this object requires the following idiom somewhere early in the execution of your program.
// import GeneralStore from './src/stores/GeneralStore'
// GeneralStore.setStore(AsyncStorage)
var GeneralStore = /*#__PURE__*/function () {
  function GeneralStore() {
    (0, _classCallCheck2["default"])(this, GeneralStore);
    cov_246yrbuu5g.f[0]++;
    cov_246yrbuu5g.s[0]++;

    if (!GeneralStore.instance) {
      cov_246yrbuu5g.b[0][0]++;
      cov_246yrbuu5g.s[1]++;
      GeneralStore.instance = this;
    } else {
      cov_246yrbuu5g.b[0][1]++;
    }

    cov_246yrbuu5g.s[2]++;
    this.store = {};
    cov_246yrbuu5g.s[3]++;
    return GeneralStore.instance;
  }

  (0, _createClass2["default"])(GeneralStore, [{
    key: "setStore",
    value: function setStore(store) {
      cov_246yrbuu5g.f[1]++;
      cov_246yrbuu5g.s[4]++;
      this.store = store;
    }
  }]);
  return GeneralStore;
}();

var instance = (cov_246yrbuu5g.s[5]++, new GeneralStore()); // Object.freeze(instance)

var _default = instance;
exports["default"] = _default;