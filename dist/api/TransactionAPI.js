"use strict";

var cov_1dyvgqcksk = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/api/TransactionAPI.js";
  var hash = "95f6b059ef79ee0a066a07cdcdd636b048094d79";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/api/TransactionAPI.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 10
        },
        end: {
          line: 15,
          column: 52
        }
      },
      "1": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 43
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 11
        }
      },
      "7": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "8": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 59
        }
      },
      "9": {
        start: {
          line: 38,
          column: 15
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "10": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 59
        }
      },
      "11": {
        start: {
          line: 42,
          column: 26
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "12": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 43,
          column: 65
        }
      },
      "13": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "14": {
        start: {
          line: 45,
          column: 37
        },
        end: {
          line: 47,
          column: 5
        }
      },
      "15": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 69
        }
      },
      "16": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 61
        }
      },
      "17": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 26
          }
        },
        loc: {
          start: {
            line: 17,
            column: 63
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 34,
            column: 21
          }
        },
        loc: {
          start: {
            line: 34,
            column: 58
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 38,
            column: 15
          },
          end: {
            line: 38,
            column: 16
          }
        },
        loc: {
          start: {
            line: 38,
            column: 53
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 38
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 42,
            column: 26
          },
          end: {
            line: 42,
            column: 27
          }
        },
        loc: {
          start: {
            line: 42,
            column: 51
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 42
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
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "95f6b059ef79ee0a066a07cdcdd636b048094d79"
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

var _APIAddressHelper = _interopRequireDefault(require("./helpers/APIAddressHelper.js"));

var _BlockchainAPIError = _interopRequireDefault(require("./errors/BlockchainAPIError.js"));

var _APICommunicationHelper = _interopRequireDefault(require("../api/helpers/APICommunicationHelper.js"));

var _LoggerHelper = _interopRequireDefault(require("../helpers/LoggerHelper.js"));

var l = (cov_1dyvgqcksk.s[0]++, _LoggerHelper["default"].curryLogger('TransactionAPI'));
cov_1dyvgqcksk.s[1]++;

var _postTransaction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(submitAddress, transaction) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_1dyvgqcksk.f[0]++;
            cov_1dyvgqcksk.s[2]++;
            l.debug("_postTransaction submitAddress: ".concat(submitAddress, " transaction: ").concat(JSON.stringify(transaction)));
            cov_1dyvgqcksk.s[3]++;
            _context.prev = 4;
            cov_1dyvgqcksk.s[4]++;
            _context.next = 8;
            return _APICommunicationHelper["default"].post(submitAddress, JSON.stringify(transaction));

          case 8:
            return _context.abrupt("return", _context.sent);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            cov_1dyvgqcksk.s[5]++;
            l.debug("could not post: ".concat(_context.t0.message));
            cov_1dyvgqcksk.s[6]++;
            throw _context.t0;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function _postTransaction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

cov_1dyvgqcksk.s[7]++;

var prevalidate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(submitAddress, transaction) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cov_1dyvgqcksk.f[1]++;
            cov_1dyvgqcksk.s[8]++;
            _context2.next = 4;
            return _postTransaction(submitAddress, transaction);

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function prevalidate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

cov_1dyvgqcksk.s[9]++;

var submit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(submitAddress, transaction) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            cov_1dyvgqcksk.f[2]++;
            cov_1dyvgqcksk.s[10]++;
            _context3.next = 4;
            return _postTransaction(submitAddress, transaction);

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function submit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

cov_1dyvgqcksk.s[11]++;

var transactionByHash = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(transactionHash) {
    var transactionByHashAddress;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cov_1dyvgqcksk.f[3]++;
            cov_1dyvgqcksk.s[12]++;
            l.debug("transactionByHash ".concat(JSON.stringify(transactionHash)));
            cov_1dyvgqcksk.s[13]++;
            _context4.prev = 4;
            cov_1dyvgqcksk.s[14]++;
            _context4.next = 8;
            return _APIAddressHelper["default"].getTransactionByHashAPIAddress(transactionHash);

          case 8:
            transactionByHashAddress = _context4.sent;
            cov_1dyvgqcksk.s[15]++;
            _context4.next = 12;
            return _APICommunicationHelper["default"].get(transactionByHashAddress);

          case 12:
            return _context4.abrupt("return", _context4.sent);

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](4);
            cov_1dyvgqcksk.s[16]++;
            l.debug("could not get transaction by hash ".concat(_context4.t0.message));
            cov_1dyvgqcksk.s[17]++;
            throw new _BlockchainAPIError["default"](_context4.t0);

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 15]]);
  }));

  return function transactionByHash(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  prevalidate: prevalidate,
  submit: submit,
  transactionByHash: transactionByHash
};
exports["default"] = _default;