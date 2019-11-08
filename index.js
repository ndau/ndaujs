const address = require('./src/keyaddress/address')
const APIAddressHelper = require('./src/api/helpers/APIAddressHelper')
const WalletStore = require('./src/stores/WalletStore')
const UserStore = require('./src/stores/UserStore')
const GeneralStore = require('./src/stores/GeneralStore')
const i18next = require('i18next')
const enLng = require('./src/i18n/en')

// i18next is loaded asynchronously. Any code that requires i18next should wait
// for the i18next event 'initialized' before running.
i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: enLng.default
  }
})

module.exports = {
  // These functions existed in the first release of ndaujs.
  // These methods are deprecated as of version 1.3.0 in place
  // of the newer format described below

  /**
   * @deprecated as of version 1.3.0
   */
  truncateAddress: address.truncateAddress,
  /**
   * @deprecated as of version 1.3.0
   */
  formatNapuForDisplay: address.formatNapuForDisplay,
  /**
   * @deprecated as of version 1.3.0
   */
  parseNdau: address.parseNdau,

  // In versions >1.3.0 here is where you will be exposing your
  // classes/helpers that are within the src folder. At present
  // we only support ES6 consumers as the code pooped down is not
  // transpiled yet. There is an issue in oneiro-ndev/ndaujs which is
  // issue #12.
  APIAddressHelper,
  WalletStore,
  UserStore,

  GeneralStore
}
