"use strict";

var cov_1ss0biooc1 = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/TransferTransaction.js";
  var hash = "5a8ff2b7422ca3b15cd3fa61186673717eafb5c2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/TransferTransaction.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 38
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "2": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 35
        }
      },
      "4": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "5": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "6": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 63
        }
      },
      "7": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 46
        }
      },
      "8": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 57
        }
      },
      "9": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 55
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 26
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 44
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 20
          }
        }, {
          start: {
            line: 18,
            column: 24
          },
          end: {
            line: 18,
            column: 58
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        }],
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 33,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 15
          }
        }, {
          start: {
            line: 33,
            column: 7
          },
          end: {
            line: 33,
            column: 38
          }
        }, {
          start: {
            line: 33,
            column: 42
          },
          end: {
            line: 33,
            column: 73
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
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5a8ff2b7422ca3b15cd3fa61186673717eafb5c2"
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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DataFormatHelper = _interopRequireDefault(require("../api/helpers/DataFormatHelper.js"));

var _Transaction2 = _interopRequireDefault(require("./Transaction.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TransferTransaction = /*#__PURE__*/function (_Transaction) {
  (0, _inherits2["default"])(TransferTransaction, _Transaction);

  var _super = _createSuper(TransferTransaction);

  function TransferTransaction(wallet, account, destination, quantity) {
    var _this;

    (0, _classCallCheck2["default"])(this, TransferTransaction);
    cov_1ss0biooc1.f[0]++;
    cov_1ss0biooc1.s[0]++;
    _this = _super.call(this, wallet, account, 'Transfer');
    cov_1ss0biooc1.s[1]++;

    if ((cov_1ss0biooc1.b[1][0]++, !destination) || (cov_1ss0biooc1.b[1][1]++, destination.constructor !== String)) {
      cov_1ss0biooc1.b[0][0]++;
      cov_1ss0biooc1.s[2]++;
      throw new Error("destination (string) argument required to construct a ".concat(_this.transactionType, " tx"));
    } else {
      cov_1ss0biooc1.b[0][1]++;
    }

    cov_1ss0biooc1.s[3]++;
    _this._destination = destination; // The assumption here is that we get ndau sent to this
    // quantity. The API must have napu so we perform the
    // conversion here.
    // argument can be either a number or numbers in a string.

    cov_1ss0biooc1.s[4]++;

    if ((cov_1ss0biooc1.b[3][0]++, !quantity) || (cov_1ss0biooc1.b[3][1]++, quantity.constructor !== Number) && (cov_1ss0biooc1.b[3][2]++, quantity.constructor !== String)) {
      cov_1ss0biooc1.b[2][0]++;
      cov_1ss0biooc1.s[5]++;
      throw new Error("quantity (number) argument required to construct a ".concat(_this.transactionType, " tx"));
    } else {
      cov_1ss0biooc1.b[2][1]++;
    }

    cov_1ss0biooc1.s[6]++;
    _this._quantity = _DataFormatHelper["default"].getNapuFromNdau(quantity);
    return _this;
  }

  (0, _createClass2["default"])(TransferTransaction, [{
    key: "addToJsonTransaction",
    value: function addToJsonTransaction() {
      cov_1ss0biooc1.f[1]++;
      cov_1ss0biooc1.s[7]++;
      this._jsonTransaction.qty = this._quantity;
      cov_1ss0biooc1.s[8]++;
      this._jsonTransaction.destination = this._destination;
      cov_1ss0biooc1.s[9]++;
      this._jsonTransaction.source = this._account.address;
    }
  }]);
  return TransferTransaction;
}(_Transaction2["default"]);

var _default = TransferTransaction;
exports["default"] = _default;