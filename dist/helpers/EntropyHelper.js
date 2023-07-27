"use strict";

var cov_3r3hqs5nv = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/helpers/EntropyHelper.js";
  var hash = "437335f5175cdb40ab758101fc8b6065f3d9f73b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/helpers/EntropyHelper.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 24
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "1": {
        start: {
          line: 26,
          column: 23
        },
        end: {
          line: 26,
          column: 66
        }
      },
      "2": {
        start: {
          line: 27,
          column: 29
        },
        end: {
          line: 27,
          column: 74
        }
      },
      "3": {
        start: {
          line: 28,
          column: 22
        },
        end: {
          line: 28,
          column: 55
        }
      },
      "4": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 34
        }
      },
      "5": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 25
          }
        },
        loc: {
          start: {
            line: 25,
            column: 50
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 25,
            column: 43
          },
          end: {
            line: 25,
            column: 45
          }
        }],
        line: 25
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
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "437335f5175cdb40ab758101fc8b6065f3d9f73b"
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

var _SetupStore = _interopRequireDefault(require("../stores/SetupStore.js"));

var _base = _interopRequireDefault(require("base-64"));

var _CryptoStore = _interopRequireDefault(require("../stores/CryptoStore.js"));

cov_3r3hqs5nv.s[0]++;

/**
 * This method will generate entropy and both return the value
 * as well as set it to the SetupStore.entropy. This can be used
 * in setup for generating entropy. It can also be used generically
 * to give you back a Base64 random string with the number of bytes you
 * pass in.
 *
 * @param {number} byteCount amount of bytes of entropy to generate, default is 16
 * @returns {string} Base64 version of entropy
 */
var generateEntropy = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var byteCount,
        secureRandom,
        secureRandomString,
        base64Value,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            byteCount = _args.length > 0 && _args[0] !== undefined ? _args[0] : (cov_3r3hqs5nv.b[0][0]++, 16);
            cov_3r3hqs5nv.f[0]++;
            cov_3r3hqs5nv.s[1]++;
            _context.next = 5;
            return _CryptoStore["default"].generateRandom(byteCount);

          case 5:
            secureRandom = _context.sent;
            secureRandomString = (cov_3r3hqs5nv.s[2]++, String.fromCharCode.apply(null, secureRandom));
            base64Value = (cov_3r3hqs5nv.s[3]++, _base["default"].encode(secureRandomString));
            cov_3r3hqs5nv.s[4]++;
            _SetupStore["default"].entropy = base64Value;
            cov_3r3hqs5nv.s[5]++;
            return _context.abrupt("return", base64Value);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function generateEntropy() {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  generateEntropy: generateEntropy
};
exports["default"] = _default;