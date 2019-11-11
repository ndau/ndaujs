import services from '../../services-for-testing.json'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import data from '../../testData'
import cloneDeep from 'lodash.clonedeep'

const mock = new MockAdapter(axios)

export default {
  mock: mock,

  mockReset: () => {
    mock.reset()
  },
  mockResetHandlers: () => {
    mock.resetHandlers()
  },

  mockServiceDiscovery: () => {
    mock
      .onGet('https://s3.us-east-2.amazonaws.com/ndau-json/services.json')
      .reply(200, services)
  },

  mockAccountsAPI: (testAddressData = data.testAddressData) => {
    mock
      .onPost('https://api.ndau.tech:31300/account/accounts')
      .reply(200, testAddressData)
  },

  mockAccountsAPIReplyOnce: (testAddressData = []) => {
    mock
      .onPost('https://api.ndau.tech:31300/account/accounts')
      .replyOnce(200, testAddressData)
  },

  mockAccountAPI: (
    testAddressData = cloneDeep(data.testSingleAddressData),
    address = 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf'
  ) => {
    mock
      .onGet('https://api.ndau.tech:31300/account/account/' + address)
      .reply(200, testAddressData)
  },

  mockMarketPriceAPI: () => {
    mock
      .onGet('https://api.ndau.tech:31300/price/current')
      .reply(200, data.testMarketPrice)
  },

  mockEaiRate: () => {
    mock
      .onPost('https://api.ndau.tech:31300/system/eai/rate')
      .reply(200, data.eaiValueForDisplayResponse)
  },

  mockSetValidationTx: () => {
    mock
      .onPost('https://api.ndau.tech:31300/tx/prevalidate/SetValidation')
      .reply(200, data.setValidationTxRes)
    mock
      .onPost('https://api.ndau.tech:31300/tx/submit/SetValidation')
      .reply(200, data.setValidationTxRes)
    mock
      .onPost('https://recovery.ndau.tech/tx/prevalidate/SetValidation')
      .reply(200, data.setValidationTxRes)
    mock
      .onPost('https://recovery.ndau.tech/tx/submit/SetValidation')
      .reply(200, data.setValidationTxRes)
  },

  mockLockTx: () => {
    mock
      .onPost('https://api.ndau.tech:31300/tx/prevalidate/Lock')
      .reply(200, data.lockTxRes)
    mock
      .onPost('https://api.ndau.tech:31300/tx/submit/Lock')
      .reply(200, data.lockTxRes)
  },

  mockNotifyTx: () => {
    mock
      .onPost('https://api.ndau.tech:31300/tx/prevalidate/Notify')
      .reply(200, data.notifyTxRes)
    mock
      .onPost('https://api.ndau.tech:31300/tx/submit/Notify')
      .reply(200, data.notifyTxRes)
  },

  mockTransferTx: () => {
    mock
      .onPost('https://api.ndau.tech:31300/tx/prevalidate/Transfer')
      .reply(200, data.transferTxRes)
    mock
      .onPost('https://api.ndau.tech:31300/tx/submit/Transfer')
      .reply(200, data.transferTxRes)
  },

  mockDelegateTx: () => {
    mock
      .onPost('https://api.ndau.tech:31300/tx/prevalidate/Delegate')
      .reply(200, data.delegateTxRes)
    mock
      .onPost('https://api.ndau.tech:31300/tx/submit/Delegate')
      .reply(200, data.delegateTxRes)
  },

  mockSetRewardsDestinationTx: () => {
    mock
      .onPost(
        'https://api.ndau.tech:31300/tx/prevalidate/SetRewardsDestination'
      )
      .reply(200, data.setRewardsDestinationTxRes)
    mock
      .onPost('https://api.ndau.tech:31300/tx/submit/SetRewardsDestination')
      .reply(200, data.setRewardsDestinationTxRes)
  },

  mockAccountHistory: address => {
    mock
      .onGet(`https://api.ndau.tech:31300/account/history/${address}`)
      .reply(200, data.accountHistoryRes)
  },

  mockTransactionByHash: transactionHash => {
    mock
      .onGet(`https://api.ndau.tech:31300/transaction/${transactionHash}`)
      .reply(200, data.transactionByHashRes)
  }
}
