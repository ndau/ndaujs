import ServiceDiscovery from '../../src/api/ServiceDiscovery'
import MockHelper from './helpers/MockHelper'
import { expect } from 'chai'

describe('ServiceDiscovery', () => {
  it('getBlockchainServiceNodeURL should return something back', async () => {
    MockHelper.mockServiceDiscovery()

    const serverUrl = await ServiceDiscovery.getBlockchainServiceNode()

    // its testnet because that is what we pull in within MockHelper
    expect(serverUrl.includes('api.ndau.tech:31300')).to.be.true
  })

  it('getRecoverServiceNodeURL should return something back', async () => {
    MockHelper.mockServiceDiscovery()

    const serverUrl = await ServiceDiscovery.getRecoveryServiceNode()

    // its testnet because that is what we pull in within MockHelper
    expect(serverUrl.includes('recovery.ndau.tech')).to.be.true
  })
})
