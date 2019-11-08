import RecoveryPhraseHelper from '../src/helpers/RecoveryPhraseHelper'
import data from './testData'
import MockHelper from './api/helpers/MockHelper'
import { expect } from 'chai'

let recoveryPhraseString =
  'goat amount liar amount expire adjust cage candy arch gather drum buyer'
const userId = 'TAC-3PY'
const initialPrivateKey =
  'npvta8jaftcjebhe9pi57hji5yrt3yc3f2gn3ih56rys38qxt52945vuf8xqu4jfkaaaaaaaaaaaacz6d28v6zwuqm6c7jt4yqcjk4ujvw53jqehafkm5xxvh39jjep58u7pw33dd7cc'

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
