"use strict";

var cov_2mryqd7bz3 = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/model/Key.js";
  var hash = "6bc3943329e2c09d15c379a756a1461f19f49046";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/model/Key.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 23
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 24
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 18
        }
      },
      "3": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 29
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 12
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6bc3943329e2c09d15c379a756a1461f19f49046"
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

/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */
// Please be aware that to remain backwards compatible we must
// always add to or deprecate items. We CANNOT remove anything
// from this class. If you feel it shuold be removed please check
// with KP before doing so.
var Key = /*#__PURE__*/function () {
  function Key() {
    (0, _classCallCheck2["default"])(this, Key);
    cov_2mryqd7bz3.f[0]++;
    cov_2mryqd7bz3.s[0]++;
    this.publicKey = '';
    cov_2mryqd7bz3.s[1]++;
    this.privateKey = '';
    cov_2mryqd7bz3.s[2]++;
    this.path = '';
    cov_2mryqd7bz3.s[3]++;
    this.derivedFromRoot = '';
  }

  (0, _createClass2["default"])(Key, [{
    key: "toJSON",
    value: function toJSON() {
      cov_2mryqd7bz3.f[1]++;
      cov_2mryqd7bz3.s[4]++;
      return {
        publicKey: this.publicKey,
        privateKey: this.privateKey,
        path: this.path,
        derivedFromRoot: this.derivedFromRoot
      };
    }
  }]);
  return Key;
}();

var _default = Key;
exports["default"] = _default;