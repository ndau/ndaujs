/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import { DelegateTransaction } from '../../src/transactions/DelegateTransaction'
import MockHelper from '../api/helpers/MockHelper'
import GeneralStore from '../../src/stores/GeneralStore'
import TransactionAPI from '../../src/api/TransactionAPI'
import data from '../testData'
import { expect } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'
import MockAsyncStorage from 'mock-async-storage'
require('../wasmHelper')

// Do not remove this line. The class is initailized here
// but it is used in other files.
GeneralStore.setStore(new MockAsyncStorage())

const walletTemplate = {
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
        'npvta8jaftcjebwkgbkffwdcp2pxg37gddgq28mywvsmdv9zvkvnr7iah2zpdpppwbb readmfvgsaaaaahnhtd2xftpqdtaeqiagj76mtpcxdfitgsxyfw99xibn28ib5ggypvqa25tfv5iv',
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

describe('DelegateTransaction', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI(
      cloneDeep(data.testSingleAddressData),
      'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
    )
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
    MockHelper.mockDelegateTx()
  })

  after(function () {
    MockHelper.mockResetHandlers()
    GeneralStore.store.clear()
  })

  it('creates a delegate transaction', async () => {
    const wallet = cloneDeep(walletTemplate)

    const wantTx = {
      node: 'ndarw5i7rmqtqstw4mtnchmfvxnrq4k3e2ytsyvsc7nxt2y7',
      target: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
      sequence: 1
    }

    const transaction = new DelegateTransaction(
      wallet,
      wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
      'ndarw5i7rmqtqstw4mtnchmfvxnrq4k3e2ytsyvsc7nxt2y7'
    )
    const gotTx = await transaction.create()
    expect(gotTx).to.deep.equal(wantTx)
  })

  it('errors when creating with missing node argument', () => {
    expect(() => {
      new DelegateTransaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf']
      )
    }).to.throw()
  })
  it('errors when creating with node argument of wrong type', () => {
    expect(() => {
      new DelegateTransaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        123
      )
    }).to.throw()
  })

  context('failures during createSignPrevalidateSubmit', () => {
    before(() => {
      sinon.stub(TransactionAPI, 'submit').callsFake(() => {
        return { err: 'submit error' }
      })
    })
    after(() => {
      TransactionAPI.submit.restore()
    })
    it('handles a submit error', async () => {
      const wallet = cloneDeep(walletTemplate)
      const transaction = new DelegateTransaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        'ndarw5i7rmqtqstw4mtnchmfvxnrq4k3e2ytsyvsc7nxt2y7'
      )

      await expect(transaction.createSignPrevalidateSubmit()).to.be.rejected
    })
  })

  context('not enough ndau during createSignPrevalidateSubmit', () => {
    before(() => {
      MockHelper.mock
        .onPost('https://api.ndau.tech:31300/tx/prevalidate/Delegate')
        .replyOnce(200, {
          fee_napu: Number.MAX_SAFE_INTEGER
        })
    })
    // Mocks get cleaned up with higher level after().
    it('handles a submit error with not enough ndau', async () => {
      const wallet = cloneDeep(walletTemplate)
      const transaction = new DelegateTransaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        'ndarw5i7rmqtqstw4mtnchmfvxnrq4k3e2ytsyvsc7nxt2y7'
      )

      await expect(transaction.createSignPrevalidateSubmit()).to.be.rejected
    })
  })
})
