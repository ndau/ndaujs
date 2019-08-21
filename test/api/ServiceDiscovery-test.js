import ServiceDiscovery from '../../src/api/ServiceDiscovery'
import MockHelper from './helpers/MockHelper'
import { expect } from 'chai'

describe('...testing ServiceDiscovery', () => {
  it('getBlockchainServiceNodeURL should return something back', async () => {
    MockHelper.mockServiceDiscovery()

    const serverUrl = await ServiceDiscovery.getBlockchainServiceNodeURL()

    // its testnet because that is what we pull in within MockHelper
    expect(serverUrl.includes('api.ndau.tech:31300')).to.be.true
  })

  it('getRecoverServiceNodeURL should return something back', async () => {
    MockHelper.mockServiceDiscovery()

    const serverUrl = await ServiceDiscovery.getRecoveryServiceNodeURL()

    // its testnet because that is what we pull in within MockHelper
    expect(serverUrl.includes('recovery.ndau.tech')).to.be.true
  })
})
