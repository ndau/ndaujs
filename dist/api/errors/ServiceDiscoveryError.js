"use strict";

var cov_1fp9l5e6qk = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/api/errors/ServiceDiscoveryError.js";
  var hash = "cf09e4777673cb5d648b6f5128d67325e697bacb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/api/errors/ServiceDiscoveryError.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "1": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 20
        }
      },
      "2": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 28
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "4": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 58
        }
      },
      "5": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 21,
          column: 108
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 13
      },
      "1": {
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
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "cf09e4777673cb5d648b6f5128d67325e697bacb"
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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */
var ServiceDiscoveryError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ServiceDiscoveryError, _Error);

  var _super = _createSuper(ServiceDiscoveryError);

  function ServiceDiscoveryError() {
    var _this;

    (0, _classCallCheck2["default"])(this, ServiceDiscoveryError);
    cov_1fp9l5e6qk.f[0]++;
    cov_1fp9l5e6qk.s[0]++;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args) {
      cov_1fp9l5e6qk.b[0][0]++;
      cov_1fp9l5e6qk.s[1]++;
      _this = _super.call.apply(_super, [this].concat(args));
      cov_1fp9l5e6qk.s[2]++;
      _this.message = args[0];
    } else {
      cov_1fp9l5e6qk.b[0][1]++;
    }

    cov_1fp9l5e6qk.s[3]++;

    if (Error.captureStackTrace) {
      cov_1fp9l5e6qk.b[1][0]++;
      cov_1fp9l5e6qk.s[4]++;
      Error.captureStackTrace((0, _assertThisInitialized2["default"])(_this), ServiceDiscoveryError);
    } else {
      cov_1fp9l5e6qk.b[1][1]++;
    }

    cov_1fp9l5e6qk.s[5]++;
    _this.message = 'Our service discovery API is temporarily unavailable. Please try your transaction again in a moment.';
    return (0, _possibleConstructorReturn2["default"])(_this);
  }

  return ServiceDiscoveryError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

var _default = ServiceDiscoveryError;
exports["default"] = _default;