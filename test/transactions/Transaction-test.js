/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import { expect } from 'chai'
import Transaction from '../../src/transactions/Transaction'
import MockHelper from '../api/helpers/MockHelper'
import cloneDeep from 'lodash.clonedeep'
import data from '../testData'
import sinon from 'sinon'
import TransactionAPI from '../../src/api/TransactionAPI'
// require('../wasmHelper')

const walletNoSequence = {
  accounts: {
    ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf: {
      address: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
      addressData: {}, // missing sequence
      ownershipKey: 'a0bb883b',
      validationKeys: ['5a3b36e3', 'ea7ced47']
    }
  },
  keys: {
    '5a3b36e3': {
      publicKey:
        'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44g',
      privateKey:
        'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf5',
      path: "/44'/20036'/2000/1",
      derivedFromRoot: 'yes'
    },
    ea7ced47: {
      publicKey:
        'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44h',
      privateKey:
        'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf6',
      path: "/44'/20036'/2000/2",
      derivedFromRoot: 'yes'
    }
  }
}

const walletTemplate = {
  walletId: 'Josh wallet',
  walletName: 'Josh wallet',
  accountCreationKeyHash: '0bbe4887',
  accounts: {
    ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf: {
      address: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
      addressData: { nickname: 'account one', sequence: 0 },
      ownershipKey: '3a1fbd3e',
      validationKeys: ['3a1fbd3e']
    },
    ndagkm3z5crs9gg89x4by6pnw4yz8d7f9xrqqegptearhyh5: {
      address: 'ndagkm3z5crs9gg89x4by6pnw4yz8d7f9xrqqegptearhyh5',
      addressData: { nickname: 'account two', sequence: 0 },
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

describe('Transaction', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI(
      cloneDeep(data.testSingleAddressData),
      'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
    )
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
    MockHelper.mockSetRewardsDestinationTx()
  })

  it('creates a transaction', () => {
    new Transaction({}, {}, 'testing')
  })

  it('errors with missing wallet argument', () => {
    expect(() => {
      new Transaction(undefined, {}, 'testing')
    }).to.throw()
  })

  it('errors with incorrect account type argument', () => {
    expect(() => {
      new Transaction({}, [], 'testing')
    }).to.throw()
  })

  it('errors with missing transaction type argument', () => {
    expect(() => {
      new Transaction({}, {}, undefined)
    }).to.throw()
  })

  it('creates multiple transactions', async () => {
    const wallet = cloneDeep(walletTemplate)
    const txs = []
    for (let i = 0; i < 3; i++) {
      const tx = new Transaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        `test-${i}`
      )
      await tx.create()
      txs[i] = tx
    }
    expect(txs[0].transactionType).to.equal('test-0')
    expect(txs[2].transactionType).to.equal('test-2')
  })

  it('transaction fails if no sequence', async () => {
    const tx = new Transaction(
      walletNoSequence,
      walletNoSequence.accounts[
        'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
      ],
      'testing'
    )
    await expect(tx.create()).to.be.rejected
  })

  context('failures around prevalidate', () => {
    before(() => {
      sinon.stub(TransactionAPI, 'prevalidate').callsFake(() => {
        return {
          err: 'error being sent'
        }
      })
    })
    after(() => {
      TransactionAPI.prevalidate.restore()
    })

    it('fails on transaction prevalidate error', async () => {
      const wallet = cloneDeep(walletTemplate)
      const tx = new Transaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        'testing'
      )
      await tx.create()

      await expect(tx.prevalidate()).to.be.rejected
    })
  })

  context('failures around submit', () => {
    before(() => {
      sinon.stub(TransactionAPI, 'submit').callsFake(() => {
        return { err: 'submit error' }
      })
    })
    after(() => {
      TransactionAPI.submit.restore()
    })
    it('fails on transaction submit error', async () => {
      const wallet = cloneDeep(walletTemplate)
      const tx = new Transaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        'testing'
      )
      await tx.create()

      await expect(tx.submit()).to.be.rejected
    })
  })

  context('failures around sign', () => {
    before(() => {
      Keyaddr.sign.restore()
      sinon.stub(Keyaddr, 'sign').callsFake(() => {
        throw new Error('testing error')
      })
    })
    after(() => {
      Keyaddr.sign.restore()
    })
    it('fails when a sign error occurs', async () => {
      const wallet = cloneDeep(walletTemplate)
      const transaction = new Transaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        'testing'
      )
      await transaction.create()

      await expect(transaction.sign()).to.be.rejected
    })
  })

  context('prevention of re-signing errors', () => {
    it('does not increment the sequence if re-creating the transaction', async () => {
      const wallet = cloneDeep(walletTemplate)
      const testAddressData = cloneDeep(data.testSingleAddressData)

      const wantTx = {
        sequence: 1,
        signatures: [
          'aujaftchgbcseiia33jy3vyrfifduanztia5rrckdqzgj7cva5q58anxgkmtrfqnszpaeibm8nc3864xr63xk5qv8aahckktajcndf72ndu378t8n4zh8kizmkt4b9wg'
        ]
      }

      const transaction = new Transaction(
        wallet,
        wallet.accounts['ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'],
        'testTransaction'
      )

      let gotTx = await transaction.create()
      await transaction.sign()

      expect(gotTx).to.deep.equal(wantTx)

      // simulate incrementing of sequence...transaction went through
      testAddressData[
        'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
      ].sequence += 1
      gotTx = await transaction.create()
      await transaction.sign()

      expect(gotTx).to.deep.equal(wantTx)
    })
  })
})
