/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import { SetValidationTransaction } from '../../src/transactions/SetValidationTransaction'
import { Transaction } from '../../src/transactions/Transaction'
import TransactionAPI from '../../src/api/TransactionAPI'
import sinon from 'sinon'
import { expect } from 'chai'
import MockHelper from '../api/helpers/MockHelper'
import GeneralStore from '../../src/stores/GeneralStore'
import data from '../testData'
import cloneDeep from 'lodash.clonedeep'
import { Messages } from '../../src/api/errors/BlockchainAPIError'
require('../wasmHelper')

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

describe('SetValidationTransaction', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI(
      cloneDeep(data.testSingleAddressData),
      'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
    )
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
    MockHelper.mockSetValidationTx()
  })

  after(function () {
    GeneralStore.store.clear()
  })

  it('creation of a setValidation transaction', async () => {
    const wallet = cloneDeep(walletTemplate)
    const wantTx = {
      target: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
      ownership:
        'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq',
      validation_keys: [
        'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq'
      ],
      sequence: 1
    }

    const setValidationTransaction = new SetValidationTransaction(
      wallet,
      wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf']
    )
    const gotTx = await setValidationTransaction.create()
    expect(gotTx).to.deep.equal(wantTx)
  })

  it('creation a transaction yeilds new instance', async () => {
    const wallet = cloneDeep(walletTemplate)
    const wantTx = {
      target: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
      ownership:
        'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq',
      validation_keys: [
        'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq'
      ],
      sequence: 1
    }

    const setValidationTransaction = new SetValidationTransaction(
      wallet,
      wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf']
    )
    const gotTx = await setValidationTransaction.create()
    expect(gotTx).to.deep.equal(wantTx)

    let setValidationTransaction1 = new SetValidationTransaction(
      wallet,
      wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
      2
    )
    const gotTx1 = await setValidationTransaction1.create()
    expect(gotTx1).to.deep.equal(wantTx)
    expect(setValidationTransaction1._sendType).to.equal(2)
    setValidationTransaction1 = new SetValidationTransaction(
      wallet,
      wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
      1
    )
    expect(setValidationTransaction1._sendType).to.equal(1)
    setValidationTransaction1 = new SetValidationTransaction(
      wallet,
      wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
      2
    )
    expect(setValidationTransaction1._sendType).to.equal(2)
    await setValidationTransaction1.create()
    const address = setValidationTransaction1._prevalidateAddress
    expect(address.includes('recovery')).to.be.true
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
      const transaction = new SetValidationTransaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        2
      )

      await expect(transaction.createSignPrevalidateSubmit()).to.be.rejected
    })
  })
})
