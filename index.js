/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import {truncateAddress, formatNapuForDisplay, parseNdau} from './src/keyaddress/address.js'
import APIAddressHelper from './src/api/helpers/APIAddressHelper.js'
import WalletStore from './src/stores/WalletStore.js'
import  UserStore from  './src/stores/UserStore.js'
import  GeneralStore from  './src/stores/GeneralStore.js'
import  i18next from  'i18next'
import  enLng from  './src/i18n/en.js'
import  CryptoStore from  './src/stores/CryptoStore.js'
import  SetupStore from  './src/stores/SetupStore.js'
import  RecoveryPhraseHelper from  './src/api/helpers/RecoveryPhraseHelper.js'
import  DataFormatHelper from  './src/api/helpers/DataFormatHelper.js'
import  MultiSafeHelper from  './src/helpers/MultiSafeHelper.js'
import  LoggerHelper from  './src/helpers/LoggerHelper.js'


import Account from './src/model/Account.js'
import { initKeyaddr } from './test/wasmHelper.js'


// i18next is loaded asynchronously. Any code that requires i18next should wait
// for the i18next event 'initialized' before running.
i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: enLng.default
  }
})

export default {
  // These functions existed in the first release of ndaujs.
  // These methods are deprecated as of version 1.3.0 in place
  // of the newer format described below

  /**
   * @deprecated as of version 1.3.0
   */
  truncateAddress,
  /**
   * @deprecated as of version 1.3.0
   */
  formatNapuForDisplay,
  /**
   * @deprecated as of version 1.3.0
   */
  parseNdau,

  // In versions >1.3.0 here is where you will be exposing your
  // classes/helpers that are within the src folder. At present
  // we only support ES6 consumers as the code pooped down is not
  // transpiled yet. There is an issue in ndau/ndaujs which is
  // issue #12.
  APIAddressHelper,
  WalletStore,
  UserStore,
  GeneralStore,
  CryptoStore,
  SetupStore,
  RecoveryPhraseHelper,
  DataFormatHelper,
  MultiSafeHelper,
  LoggerHelper
}

export { Account }
export { initKeyaddr }
