/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import {truncateAddress, formatNapuForDisplay, parseNdau} from './keyaddress/address.js'
import APIAddressHelper from './api/helpers/APIAddressHelper.js'
import WalletStore from './stores/WalletStore.js'
import  UserStore from  './stores/UserStore.js'
import  GeneralStore from  './stores/GeneralStore.js'
import  i18next from  'i18next'
import  enLng from  './i18n/en.js'
import  CryptoStore from  './stores/CryptoStore.js'
import  SetupStore from  './stores/SetupStore.js'
import  RecoveryPhraseHelper from  './api/helpers/RecoveryPhraseHelper.js'
import  DataFormatHelper from  './api/helpers/DataFormatHelper.js'
import  MultiSafeHelper from  './helpers/MultiSafeHelper.js'
import  LoggerHelper from  './helpers/LoggerHelper.js'


import Account from './model/Account.js'
import Wallet from './model/Wallet.js'
import TransferTransaction from './transactions/TransferTransaction.js'
import CreateChildAccountTransaction from './transactions/CreateChildAccountTransaction.js'
import ValidationKeyMaster from './helpers/ValidationKeyMaster.js'
import { initKeyaddr } from '../test/wasmHelper.js'


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

export { Account, Wallet, TransferTransaction, CreateChildAccountTransaction, ValidationKeyMaster, initKeyaddr }

