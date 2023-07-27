"use strict";

var cov_1ctnvvrxdw = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/helpers/NodeAddressHelper.js";
  var hash = "fa8d268a83660582f10d47873415a759d8bca6f4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/helpers/NodeAddressHelper.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 23
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 23
          },
          end: {
            line: 13,
            column: 24
          }
        },
        loc: {
          start: {
            line: 13,
            column: 29
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "fa8d268a83660582f10d47873415a759d8bca6f4"
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

var _config = _interopRequireDefault(require("../constants/config"));

cov_1ctnvvrxdw.s[0]++;

var getNodeAddress = function getNodeAddress() {
  cov_1ctnvvrxdw.f[0]++;
  cov_1ctnvvrxdw.s[1]++;
  return _config["default"].NODE_ADDRESSES[Math.floor(Math.random() * _config["default"].NODE_ADDRESSES.length)];
};

var _default = {
  getNodeAddress: getNodeAddress
};
exports["default"] = _default;