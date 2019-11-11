import APIAddressHelper from '../../../src/api/helpers/APIAddressHelper'
import MockHelper from './MockHelper'
import { expect } from 'chai'

describe('APIAddressHelper', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI()
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
  })

  it('getAccountsAPIAddress sends back the correct address', async () => {
    const accountsUrl = await APIAddressHelper.getAccountsAPIAddress()
    expect(accountsUrl.indexOf('api.ndau.tech:31300/account/accounts') !== -1)
      .to.be.true
  })

  it('getAccountAPIAddress sends back the correct address', async () => {
    const accountsUrl = await APIAddressHelper.getAccountAPIAddress()
    expect(accountsUrl.indexOf('api.ndau.tech:31300/account/account') !== -1).to
      .be.true
  })

  it('getMarketPriceAPIAddress sends back the correct address', async () => {
    const marketPriceUrl = await APIAddressHelper.getMarketPriceAPIAddress()
    expect(marketPriceUrl.indexOf('api.ndau.tech:31300/price/current') !== -1)
      .to.be.true
  })

  it('getEaiRateAPIAddress sends back the correct address', async () => {
    const eaiValueForDisplayUrl = await APIAddressHelper.getEaiRateAPIAddress()
    expect(
      eaiValueForDisplayUrl.indexOf('api.ndau.tech:31300/system/eai/rate') !==
        -1
    ).to.be.true
  })

  it('getTransactionPrevalidateAPIAddress sends back the correct address', async () => {
    const eaiValueForDisplayUrl = await APIAddressHelper.getTransactionPrevalidateAPIAddress()
    expect(
      eaiValueForDisplayUrl.indexOf('api.ndau.tech:31300/tx/prevalidate') !== -1
    ).to.be.true
  })

  it('getTransactionPrevalidateAPIAddress sends back the correct address for recovery', async () => {
    const eaiValueForDisplayUrl = await APIAddressHelper.getTransactionPrevalidateAPIAddress(
      APIAddressHelper.RECOVERY
    )
    expect(
      eaiValueForDisplayUrl.indexOf('recovery.ndau.tech/tx/prevalidate') !== -1
    ).to.be.true
  })

  it('getTransactionSubmitAPIAddress sends back the correct address', async () => {
    const submitUrl = await APIAddressHelper.getTransactionSubmitAPIAddress()
    expect(submitUrl.indexOf('api.ndau.tech:31300/tx/submit') !== -1).to.equal(
      true
    )
  })

  it('getTransactionSubmitAPIAddress sends back the correct address', async () => {
    const submitUrl = await APIAddressHelper.getTransactionSubmitAPIAddress(
      APIAddressHelper.RECOVERY
    )
    expect(submitUrl.indexOf('recovery.ndau.tech/tx/submit') !== -1).to.equal(
      true
    )
  })

  it('getAccountHistoryAPIAddress sends back the correct address', async () => {
    const submitUrl = await APIAddressHelper.getAccountHistoryAPIAddress(
      '1234asdf'
    )
    expect(
      submitUrl.indexOf('api.ndau.tech:31300/account/history/1234asdf') !== -1
    ).to.be.true
  })

  it('getTransactionByHashAPIAddress sends back the correct address', async () => {
    const submitUrl = await APIAddressHelper.getTransactionByHashAPIAddress(
      '1234asdf'
    )
    expect(submitUrl.indexOf('api.ndau.tech:31300/transaction/1234asdf') !== -1)
      .to.be.true
  })
})
