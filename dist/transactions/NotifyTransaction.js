"use strict";

var cov_1htg2wdelp = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/NotifyTransaction.js";
  var hash = "c2e9c21ff019bfcb11040eb4e23ee912bef19897";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/transactions/NotifyTransaction.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 36
        }
      },
      "1": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
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
            column: 26
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c2e9c21ff019bfcb11040eb4e23ee912bef19897"
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
exports.NotifyTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Transaction2 = _interopRequireDefault(require("./Transaction"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotifyTransaction = /*#__PURE__*/function (_Transaction) {
  (0, _inherits2["default"])(NotifyTransaction, _Transaction);

  var _super = _createSuper(NotifyTransaction);

  function NotifyTransaction(wallet, account) {
    (0, _classCallCheck2["default"])(this, NotifyTransaction);
    cov_1htg2wdelp.f[0]++;
    cov_1htg2wdelp.s[0]++;
    return _super.call(this, wallet, account, 'Notify');
  }

  (0, _createClass2["default"])(NotifyTransaction, [{
    key: "addToJsonTransaction",
    value: function addToJsonTransaction() {
      cov_1htg2wdelp.f[1]++;
      cov_1htg2wdelp.s[1]++;
      this._jsonTransaction.target = this._account.address;
    }
  }]);
  return NotifyTransaction;
}(_Transaction2["default"]);

exports.NotifyTransaction = NotifyTransaction;