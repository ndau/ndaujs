import RecoveryPhraseHelper from '../src/helpers/RecoveryPhraseHelper'
import data from './testData'
import axios from 'axios'
import sinon from 'sinon'
import MockHelper from './api/helpers/MockHelper'
import { expect } from 'chai'

let recoveryPhraseString =
  'goat amount liar amount expire adjust cage candy arch gather drum buyer'
const userId = 'TAC-3PY'
const bytes = 'ZWEQAwQFBgcICQoLDA0ODw=='
const initialPrivateKey =
  'npvta8jaftcjebhe9pi57hji5yrt3yc3f2gn3ih56rys38qxt52945vuf8xqu4jfkaaaaaaaaaaaacz6d28v6zwuqm6c7jt4yqcjk4ujvw53jqehafkm5xxvh39jjep58u7pw33dd7cc'
const bip44hardenedPrivateKey =
  'npvt8ard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkah8hjr9cnqmrxn4a9rcrzu9yerbyhhykt6nq586kyw8t2g3kkbk5a6m4pa'
const publicKey =
  'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44'
const childPrivate100 =
  'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx'
const deriveFromKey =
  'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf'
const address = 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac'
describe('RecoveryPhraseHelper', () => {
  before(() => {
    MockHelper.mockReset()
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountAPI()
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
  })
  after(() => {
    MockHelper.mockResetHandlers()
  })
  describe('recoverUser test', () => {
    before(() => {
      MockHelper.mockReset()
      MockHelper.mockServiceDiscovery()
      MockHelper.mockAccountAPI()
      MockHelper.mockEaiRate()
      MockHelper.mockMarketPriceAPI()
      MockHelper.mockAccountsAPIReplyOnce(data.testAddressData20Items)
      MockHelper.mockAccountsAPIReplyOnce(data.testAddressData)
      MockHelper.mockAccountsAPIReplyOnce()
      MockHelper.mockAccountsAPIReplyOnce(data.testAddressData20ItemsRoot)
      MockHelper.mockAccountsAPIReplyOnce(data.testAddressDataRoot)
      MockHelper.mockAccountsAPIReplyOnce()
    })
    after(() => {
      MockHelper.mockReset()
    })
    it('recovers a user with 20 accounts', async () => {
      const user = {
        userId: userId,
        wallets: {}
      }
      const firstTimeUser = await RecoveryPhraseHelper.recoverUser(
        recoveryPhraseString,
        user
      )
      expect(
        Object.keys(firstTimeUser.wallets['a7bff20a'].accounts).length
      ).to.equal(20)
      expect(
        Object.keys(firstTimeUser.wallets['a7bff20a'].keys).length
      ).to.equal(21)
    })
  })

  describe('checkAddresses', () => {
    before(() => {
      MockHelper.mockReset()
      MockHelper.mockServiceDiscovery()
      MockHelper.mockAccountAPI()
      MockHelper.mockEaiRate()
      MockHelper.mockMarketPriceAPI()
      MockHelper.mockAccountsAPIReplyOnce(data.testAddressData20Items2)
      MockHelper.mockAccountsAPIReplyOnce(data.testAddressData)
      MockHelper.mockAccountsAPIReplyOnce()
    })
    it('gets the correct format for BIP44 addresses', async () => {
      const bip44Addresses = await RecoveryPhraseHelper.checkAddresses(
        initialPrivateKey
      )
      expect(Object.keys(bip44Addresses).length).to.equal(20)
      expect(Object.values(bip44Addresses).length).to.equal(20)
    })
  })
})
