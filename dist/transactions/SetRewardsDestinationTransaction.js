"use strict";

var cov_109f1h77fb = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/SetRewardsDestinationTransaction.js";
  var hash = "7f940c1b3ab80ffbe38a675dc3c92a18074d3323";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/SetRewardsDestinationTransaction.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 51
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
          column: 35
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 56
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 57
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
            column: 45
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
            column: 58
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
            column: 20
          }
        }, {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 58
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
    hash: "7f940c1b3ab80ffbe38a675dc3c92a18074d3323"
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
exports.SetRewardsDestinationTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Transaction2 = _interopRequireDefault(require("./Transaction"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SetRewardsDestinationTransaction = /*#__PURE__*/function (_Transaction) {
  (0, _inherits2["default"])(SetRewardsDestinationTransaction, _Transaction);

  var _super = _createSuper(SetRewardsDestinationTransaction);

  function SetRewardsDestinationTransaction(wallet, account, destination) {
    var _this;

    (0, _classCallCheck2["default"])(this, SetRewardsDestinationTransaction);
    cov_109f1h77fb.f[0]++;
    cov_109f1h77fb.s[0]++;
    _this = _super.call(this, wallet, account, 'SetRewardsDestination');
    cov_109f1h77fb.s[1]++;

    if ((cov_109f1h77fb.b[1][0]++, !destination) || (cov_109f1h77fb.b[1][1]++, destination.constructor !== String)) {
      cov_109f1h77fb.b[0][0]++;
      cov_109f1h77fb.s[2]++;
      throw new Error("destination (string) argument required to construct a ".concat(_this.transactionType, " tx"));
    } else {
      cov_109f1h77fb.b[0][1]++;
    }

    cov_109f1h77fb.s[3]++;
    _this._destination = destination;
    return _this;
  }

  (0, _createClass2["default"])(SetRewardsDestinationTransaction, [{
    key: "addToJsonTransaction",
    value: function addToJsonTransaction() {
      cov_109f1h77fb.f[1]++;
      cov_109f1h77fb.s[4]++;
      this._jsonTransaction.target = this._account.address;
      cov_109f1h77fb.s[5]++;
      this._jsonTransaction.destination = this._destination;
    }
  }]);
  return SetRewardsDestinationTransaction;
}(_Transaction2["default"]);

exports.SetRewardsDestinationTransaction = SetRewardsDestinationTransaction;