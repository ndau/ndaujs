"use strict";

var cov_2qjvhakje5 = function () {
  var path = "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/index.js";
  var hash = "acfb75a73370e4cbe2bd88884989792f19fffc38";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnsgreenlandjr/go/src/github.com/ndau/ndaujs/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 41,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "acfb75a73370e4cbe2bd88884989792f19fffc38"
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
Object.defineProperty(exports, "APIAddressHelper", {
  enumerable: true,
  get: function get() {
    return _APIAddressHelper["default"];
  }
});
Object.defineProperty(exports, "Account", {
  enumerable: true,
  get: function get() {
    return _Account["default"];
  }
});
Object.defineProperty(exports, "Wallet", {
  enumerable: true,
  get: function get() {
    return _Wallet["default"];
  }
});
Object.defineProperty(exports, "TransferTransaction", {
  enumerable: true,
  get: function get() {
    return _TransferTransaction["default"];
  }
});
Object.defineProperty(exports, "CreateChildAccountTransaction", {
  enumerable: true,
  get: function get() {
    return _CreateChildAccountTransaction["default"];
  }
});
Object.defineProperty(exports, "ValidationKeyMaster", {
  enumerable: true,
  get: function get() {
    return _ValidationKeyMaster["default"];
  }
});
Object.defineProperty(exports, "initKeyaddr", {
  enumerable: true,
  get: function get() {
    return _wasmHelper.initKeyaddr;
  }
});
exports["default"] = void 0;

var _address = require("./keyaddress/address.js");

var _APIAddressHelper = _interopRequireDefault(require("./api/helpers/APIAddressHelper.js"));

var _WalletStore = _interopRequireDefault(require("./stores/WalletStore.js"));

var _UserStore = _interopRequireDefault(require("./stores/UserStore.js"));

var _GeneralStore = _interopRequireDefault(require("./stores/GeneralStore.js"));

var _i18next = _interopRequireDefault(require("i18next"));

var _en = _interopRequireDefault(require("./i18n/en.js"));

var _CryptoStore = _interopRequireDefault(require("./stores/CryptoStore.js"));

var _SetupStore = _interopRequireDefault(require("./stores/SetupStore.js"));

var _RecoveryPhraseHelper = _interopRequireDefault(require("./api/helpers/RecoveryPhraseHelper.js"));

var _DataFormatHelper = _interopRequireDefault(require("./api/helpers/DataFormatHelper.js"));

var _MultiSafeHelper = _interopRequireDefault(require("./helpers/MultiSafeHelper.js"));

var _LoggerHelper = _interopRequireDefault(require("./helpers/LoggerHelper.js"));

var _Account = _interopRequireDefault(require("./model/Account.js"));

var _Wallet = _interopRequireDefault(require("./model/Wallet.js"));

var _TransferTransaction = _interopRequireDefault(require("./transactions/TransferTransaction.js"));

var _CreateChildAccountTransaction = _interopRequireDefault(require("./transactions/CreateChildAccountTransaction.js"));

var _ValidationKeyMaster = _interopRequireDefault(require("./helpers/ValidationKeyMaster.js"));

var _wasmHelper = require("./wasm/wasmHelper.js");

cov_2qjvhakje5.s[0]++;

// i18next is loaded asynchronously. Any code that requires i18next should wait
// for the i18next event 'initialized' before running.
_i18next["default"].init({
  lng: 'en-US',
  resources: {
    en: _en["default"]["default"]
  }
});

var _default = {
  // These functions existed in the first release of ndaujs.
  // These methods are deprecated as of version 1.3.0 in place
  // of the newer format described below

  /**
   * @deprecated as of version 1.3.0
   */
  truncateAddress: _address.truncateAddress,

  /**
   * @deprecated as of version 1.3.0
   */
  formatNapuForDisplay: _address.formatNapuForDisplay,

  /**
   * @deprecated as of version 1.3.0
   */
  parseNdau: _address.parseNdau,
  // In versions >1.3.0 here is where you will be exposing your
  // classes/helpers that are within the src folder. At present
  // we only support ES6 consumers as the code pooped down is not
  // transpiled yet. There is an issue in ndau/ndaujs which is
  // issue #12.
  APIAddressHelper: _APIAddressHelper["default"],
  WalletStore: _WalletStore["default"],
  UserStore: _UserStore["default"],
  GeneralStore: _GeneralStore["default"],
  CryptoStore: _CryptoStore["default"],
  SetupStore: _SetupStore["default"],
  RecoveryPhraseHelper: _RecoveryPhraseHelper["default"],
  DataFormatHelper: _DataFormatHelper["default"],
  MultiSafeHelper: _MultiSafeHelper["default"],
  LoggerHelper: _LoggerHelper["default"]
};
exports["default"] = _default;