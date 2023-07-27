"use strict";

var cov_1icob63uh1 = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/CryptoStore.js";
  var hash = "98ba6da2dc1d8492e7581c44bd0305d118e800ba";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/CryptoStore.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "1": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 19
        }
      },
      "3": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 31
        }
      },
      "4": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 22
        }
      },
      "5": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "6": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 51
        }
      },
      "7": {
        start: {
          line: 32,
          column: 11
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "8": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 44
        }
      },
      "9": {
        start: {
          line: 38,
          column: 17
        },
        end: {
          line: 38,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 19
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 39
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 29
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }, {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }],
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 34,
            column: 5
          }
        }, {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 34,
            column: 5
          }
        }],
        line: 32
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "98ba6da2dc1d8492e7581c44bd0305d118e800ba"
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

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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
var CryptoStore = /*#__PURE__*/function () {
  function CryptoStore() {
    (0, _classCallCheck2["default"])(this, CryptoStore);
    cov_1icob63uh1.f[0]++;
    cov_1icob63uh1.s[0]++;

    if (!CryptoStore.instance) {
      cov_1icob63uh1.b[0][0]++;
      cov_1icob63uh1.s[1]++;
      CryptoStore.instance = this;
    } else {
      cov_1icob63uh1.b[0][1]++;
    }

    cov_1icob63uh1.s[2]++;
    this.store = {};
    cov_1icob63uh1.s[3]++;
    return CryptoStore.instance;
  }

  (0, _createClass2["default"])(CryptoStore, [{
    key: "setStore",
    value: function setStore(store) {
      cov_1icob63uh1.f[1]++;
      cov_1icob63uh1.s[4]++;
      this.store = store;
    }
  }, {
    key: "generateRandom",
    value: function () {
      var _generateRandom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(numberOfBytes) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_1icob63uh1.f[2]++;
                cov_1icob63uh1.s[5]++;

                if (!this.store.randomBytes) {
                  _context.next = 10;
                  break;
                }

                cov_1icob63uh1.b[1][0]++;
                cov_1icob63uh1.s[6]++;
                _context.next = 7;
                return store.randomBytes(numberOfBytes);

              case 7:
                return _context.abrupt("return", _context.sent);

              case 10:
                cov_1icob63uh1.b[1][1]++;
                cov_1icob63uh1.s[7]++;

                if (!this.store) {
                  _context.next = 20;
                  break;
                }

                cov_1icob63uh1.b[2][0]++;
                cov_1icob63uh1.s[8]++;
                _context.next = 17;
                return this.store(numberOfBytes);

              case 17:
                return _context.abrupt("return", _context.sent);

              case 20:
                cov_1icob63uh1.b[2][1]++;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function generateRandom(_x) {
        return _generateRandom.apply(this, arguments);
      }

      return generateRandom;
    }()
  }]);
  return CryptoStore;
}();

var instance = (cov_1icob63uh1.s[9]++, new CryptoStore());
var _default = instance;
exports["default"] = _default;