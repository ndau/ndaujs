"use strict";

var cov_20p1w9910c = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/DelegateTransaction.js";
  var hash = "e53f05d2274160cd50a442bedb687805d2698012";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/DelegateTransaction.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 38
        }
      },
      "1": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "2": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "3": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 21
        }
      },
      "4": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 56
        }
      },
      "5": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 38
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 26
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 13
          }
        }, {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 16,
            column: 44
          }
        }],
        line: 16
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
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e53f05d2274160cd50a442bedb687805d2698012"
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
exports.DelegateTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Transaction2 = _interopRequireDefault(require("./Transaction"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DelegateTransaction = /*#__PURE__*/function (_Transaction) {
  (0, _inherits2["default"])(DelegateTransaction, _Transaction);

  var _super = _createSuper(DelegateTransaction);

  function DelegateTransaction(wallet, account, node) {
    var _this;

    (0, _classCallCheck2["default"])(this, DelegateTransaction);
    cov_20p1w9910c.f[0]++;
    cov_20p1w9910c.s[0]++;
    _this = _super.call(this, wallet, account, 'Delegate');
    cov_20p1w9910c.s[1]++;

    if ((cov_20p1w9910c.b[1][0]++, !node) || (cov_20p1w9910c.b[1][1]++, node.constructor !== String)) {
      cov_20p1w9910c.b[0][0]++;
      cov_20p1w9910c.s[2]++;
      throw new Error("node (string) argument required to construct a ".concat(_this.transactionType, " tx"));
    } else {
      cov_20p1w9910c.b[0][1]++;
    }

    cov_20p1w9910c.s[3]++;
    _this._node = node;
    return _this;
  }

  (0, _createClass2["default"])(DelegateTransaction, [{
    key: "addToJsonTransaction",
    value: function addToJsonTransaction() {
      cov_20p1w9910c.f[1]++;
      cov_20p1w9910c.s[4]++;
      this._jsonTransaction.target = this._account.address;
      cov_20p1w9910c.s[5]++;
      this._jsonTransaction.node = this._node;
    }
  }]);
  return DelegateTransaction;
}(_Transaction2["default"]);

exports.DelegateTransaction = DelegateTransaction;