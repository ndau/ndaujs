"use strict";

var cov_2jfukrj34d = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/UserStore.js";
  var hash = "854cde14acb1633525e4faa340b28da66f6379de";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/stores/UserStore.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 17,
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
          column: 21
        }
      },
      "2": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 29
        }
      },
      "5": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "6": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 24
        }
      },
      "7": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 32
        }
      },
      "8": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 28
        }
      },
      "9": {
        start: {
          line: 39,
          column: 17
        },
        end: {
          line: 39,
          column: 32
        }
      },
      "10": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 40,
          column: 23
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
            column: 17
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 17
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 13
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 25
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 30
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 17
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 34
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
            line: 17,
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
            line: 17,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }],
        line: 13
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
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "854cde14acb1633525e4faa340b28da66f6379de"
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
var UserStore = /*#__PURE__*/function () {
  function UserStore() {
    (0, _classCallCheck2["default"])(this, UserStore);
    cov_2jfukrj34d.f[0]++;
    cov_2jfukrj34d.s[0]++;

    if (!UserStore.instance) {
      cov_2jfukrj34d.b[0][0]++;
      cov_2jfukrj34d.s[1]++;
      this._user = [];
      cov_2jfukrj34d.s[2]++;
      this._password = [];
      cov_2jfukrj34d.s[3]++;
      UserStore.instance = this;
    } else {
      cov_2jfukrj34d.b[0][1]++;
    }

    cov_2jfukrj34d.s[4]++;
    return UserStore.instance;
  }

  (0, _createClass2["default"])(UserStore, [{
    key: "setUser",
    value: function setUser(user) {
      cov_2jfukrj34d.f[1]++;
      cov_2jfukrj34d.s[5]++;
      this._user[0] = user;
    }
  }, {
    key: "getUser",
    value: function getUser() {
      cov_2jfukrj34d.f[2]++;
      cov_2jfukrj34d.s[6]++;
      return this._user[0];
    }
  }, {
    key: "setPassword",
    value: function setPassword(password) {
      cov_2jfukrj34d.f[3]++;
      cov_2jfukrj34d.s[7]++;
      this._password[0] = password;
    }
  }, {
    key: "getPassword",
    value: function getPassword() {
      cov_2jfukrj34d.f[4]++;
      cov_2jfukrj34d.s[8]++;
      return this._password[0];
    }
  }]);
  return UserStore;
}();

var instance = (cov_2jfukrj34d.s[9]++, new UserStore());
cov_2jfukrj34d.s[10]++;
Object.freeze(instance);
var _default = instance;
exports["default"] = _default;