"use strict";

var cov_1y5s6wzkxw = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/CreateChildAccountTransaction.js";
  var hash = "1a48e02290fc318a7f91087a46b5e249729733a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/CreateChildAccountTransaction.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 48
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 88
        }
      },
      "3": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 24,
          column: 48
        }
      },
      "4": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 54
        }
      },
      "5": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 56
        }
      },
      "6": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 45
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 81
        }
      },
      "8": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 59
        }
      },
      "9": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 55
        }
      },
      "10": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 90
        }
      },
      "11": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 54
        }
      },
      "12": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 61
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
            column: 32
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 76
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 20
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
            column: 26
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 29
      }
    },
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
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1a48e02290fc318a7f91087a46b5e249729733a2"
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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Transaction2 = _interopRequireDefault(require("./Transaction.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CreateChildAccountTransaction = /*#__PURE__*/function (_Transaction) {
  (0, _inherits2["default"])(CreateChildAccountTransaction, _Transaction);

  var _super = _createSuper(CreateChildAccountTransaction);

  function CreateChildAccountTransaction(wallet, account) {
    (0, _classCallCheck2["default"])(this, CreateChildAccountTransaction);
    cov_1y5s6wzkxw.f[0]++;
    cov_1y5s6wzkxw.s[0]++;
    return _super.call(this, wallet, account, 'CreateChildAccount');
  } // pass in ownership and validation keys. Child address is generated from ownership
  // public key and signed by ownership private key


  (0, _createClass2["default"])(CreateChildAccountTransaction, [{
    key: "createTransactionSpecific",
    value: function () {
      var _createTransactionSpecific = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(childOwnershipKeys, childValidationKeys) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_1y5s6wzkxw.f[1]++;
                cov_1y5s6wzkxw.s[1]++;
                this._newChildOwnershipKeys = childOwnershipKeys;
                cov_1y5s6wzkxw.s[2]++;
                _context.next = 6;
                return Keyaddr.addrFromPublicKey(this._newChildOwnershipKeys["pubkey"]);

              case 6:
                this._child = _context.sent;
                cov_1y5s6wzkxw.s[3]++;
                _context.next = 10;
                return Keyaddr.signEdText(this._newChildOwnershipKeys["privkey"], this._child);

              case 10:
                this._child_sig = _context.sent;
                cov_1y5s6wzkxw.s[4]++;
                this._newChildValidationKeys = childValidationKeys;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createTransactionSpecific(_x, _x2) {
        return _createTransactionSpecific.apply(this, arguments);
      }

      return createTransactionSpecific;
    }() // add fields required for TX prevalidation and submittal

  }, {
    key: "addToJsonTransaction",
    value: function addToJsonTransaction() {
      cov_1y5s6wzkxw.f[2]++;
      cov_1y5s6wzkxw.s[5]++;
      this._jsonTransaction.target = this._account.address;
      cov_1y5s6wzkxw.s[6]++;
      this._jsonTransaction.child = this._child;
      cov_1y5s6wzkxw.s[7]++;
      this._jsonTransaction.child_ownership = this._newChildOwnershipKeys["pubkey"];
      cov_1y5s6wzkxw.s[8]++;
      this._jsonTransaction.child_signature = this._child_sig;
      cov_1y5s6wzkxw.s[9]++;
      this._jsonTransaction.child_recourse_period = 't0s';
      cov_1y5s6wzkxw.s[10]++;
      this._jsonTransaction.child_validation_keys = [this._newChildValidationKeys["pubkey"]];
      cov_1y5s6wzkxw.s[11]++;
      this._jsonTransaction.child_validation_script = '';
      cov_1y5s6wzkxw.s[12]++;
      this._jsonTransaction.child_delegation_node = this._child;
    }
  }]);
  return CreateChildAccountTransaction;
}(_Transaction2["default"]);

var _default = CreateChildAccountTransaction;
exports["default"] = _default;