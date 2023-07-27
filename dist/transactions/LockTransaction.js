"use strict";

var cov_2mc208dawt = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/LockTransaction.js";
  var hash = "0109bc2373169ad830f5c8bf5f1f1a99bbdb4312";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/LockTransaction.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "1": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "2": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 22,
          column: 7
        }
      },
      "3": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 25
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 47
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 56
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
            column: 40
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 14
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
            column: 26
          },
          end: {
            line: 30,
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
            line: 17,
            column: 4
          },
          end: {
            line: 23,
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
            line: 23,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 17,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 17,
            column: 15
          }
        }, {
          start: {
            line: 17,
            column: 19
          },
          end: {
            line: 17,
            column: 48
          }
        }],
        line: 17
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
    hash: "0109bc2373169ad830f5c8bf5f1f1a99bbdb4312"
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
exports.LockTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Transaction2 = _interopRequireDefault(require("./Transaction"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LockTransaction = /*#__PURE__*/function (_Transaction) {
  (0, _inherits2["default"])(LockTransaction, _Transaction);

  var _super = _createSuper(LockTransaction);

  function LockTransaction(wallet, account, period) {
    var _this;

    (0, _classCallCheck2["default"])(this, LockTransaction);
    cov_2mc208dawt.f[0]++;
    cov_2mc208dawt.s[0]++;
    _this = _super.call(this, wallet, account, 'Lock');
    cov_2mc208dawt.s[1]++;

    if ((cov_2mc208dawt.b[1][0]++, !period) || (cov_2mc208dawt.b[1][1]++, period.constructor !== String)) {
      cov_2mc208dawt.b[0][0]++;
      cov_2mc208dawt.s[2]++;
      throw new Error("period (string) argument required to construct a ".concat(_this.transactionType, " tx"));
    } else {
      cov_2mc208dawt.b[0][1]++;
    }

    cov_2mc208dawt.s[3]++;
    _this._period = period;
    return _this;
  }

  (0, _createClass2["default"])(LockTransaction, [{
    key: "addToJsonTransaction",
    value: function addToJsonTransaction() {
      cov_2mc208dawt.f[1]++;
      cov_2mc208dawt.s[4]++;
      this._jsonTransaction.period = this._period;
      cov_2mc208dawt.s[5]++;
      this._jsonTransaction.target = this._account.address;
    }
  }]);
  return LockTransaction;
}(_Transaction2["default"]);

exports.LockTransaction = LockTransaction;