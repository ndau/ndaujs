/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import { TransferTransaction } from '../../src/transactions/TransferTransaction'
import { Transaction } from '../../src/transactions/Transaction'
import TransactionAPI from '../../src/api/TransactionAPI'
import sinon from 'sinon'
import { expect } from 'chai'
import MockHelper from '../api/helpers/MockHelper'
import GeneralStore from '../../src/stores/GeneralStore'
import AppConstants from '../../src/constants/constants'
import data from '../testData'
import cloneDeep from 'lodash.clonedeep'
import { Messages } from '../../src/api/errors/BlockchainAPIError'
require('../wasmHelper')

const userTemplate = {
  userId: 'Josh',
  wallets: {
    '300648ce': {
      walletId: 'Josh',
      accountCreationKeyHash: '0bbe4887',
      accounts: {
        ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf: {
          address: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
          addressData: { sequence: 0 },
          ownershipKey: '3a1fbd3e',
          validationKeys: ['3a1fbd3e']
        },
        ndagkm3z5crs9gg89x4by6pnw4yz8d7f9xrqqegptearhyh5: {
          address: 'ndagkm3z5crs9gg89x4by6pnw4yz8d7f9xrqqegptearhyh5',
          addressData: { sequence: 0 },
          ownershipKey: '6a63eb2b',
          validationKeys: ['3a1fbd3e']
        }
      },
      keys: {
        '0bbe4887': {
          publicKey:
            'npuba4jaftckeeb7s5sxfv9yuuqjn9jywnqsf2pbnxn47x8qccnh4gc33q5sstgupuadq8emwaaaabum6ccyh2yfpf2uve6wrp3a6pjp87r9zn64fe38m9x9zndkmapwqfn7xnx2qk8f',
          privateKey:
            'npvta8jaftcjebyekicu6y4n9r9jwfcmjju6zbxbz5zhdvvzh7g97mq94qc6mba2ia5ztc7aaaaanu9asxt8ftmjqew3hfd5qihdkmrzm975hgtjgru97r75a4u2dpdtkbxbj4m7v9ak',
          path: "/44'/20036'/100"
        },
        '3a1fbd3e': {
          publicKey:
            'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq',
          privateKey:
            'npvta8jaftcjebwkgbkffwdcp2pxg37gddgq28mywvsmdv9zvkvnr7iah2zpdpppwbbmfvgsaaaaahnhtd2xftpqdtaeqiagj76mtpcxdfitgsxyfw99xibn28ib5ggypvqa25tfv5iv',
          path: "/44'/20036'/100/1"
        },
        '6a63eb2b': {
          publicKey:
            'npuba4jaftckeebk5wvg7fi3ia5dmcydqxdtc6zasjf2dmtabkd9ftedrwj7rrhy26aefnyn4aaaaabnqinqraqswdcktvpunbss2izhctq88n4b9639te6932fri5pz5fpgn4feisaa',
          privateKey:
            'npvta8jaftcjed5vwieymfjhh775whsiyvue6xwvqd5hfhzuuwguinihjhsdzphiebbmfvgsaaaaamduddv2dwfa2uwn5nvanegcf32wmzzvgsr9gr6jhh8qbm4g5p83m65y7bvpw7iy',
          path: "/44'/20036'/100/2"
        }
      }
    }
  }
}

describe('Transfer Transaction', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI(
      cloneDeep(data.testSingleAddressData),
      'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
    )
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
    MockHelper.mockTransferTx()
  })
  after(function () {
    GeneralStore.store.clear()
  })

  it('creation of a transfer transaction', async () => {
    const user = cloneDeep(userTemplate)
    const wantTx = {
      source: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
      destination: 'abcdefghijklmnopqrstuvwxyz123456789',
      qty: AppConstants.QUANTA_PER_UNIT * 100,
      sequence: 1
    }

    const transferTransaction = new TransferTransaction(
      user.wallets['300648ce'],
      user.wallets['300648ce'].accounts[
        'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
      ],
      'abcdefghijklmnopqrstuvwxyz123456789',
      100
    )
    const gotTx = await transferTransaction.create()
    expect(gotTx).to.deep.equal(wantTx)
  })
})
