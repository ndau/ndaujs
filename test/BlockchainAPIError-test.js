import BlockchainAPIError from '../src/api/errors/BlockchainAPIError'
import { Messages } from '../src/api/errors/BlockchainAPIError'
import { expect } from 'chai'

describe('BlockchainAPIError', () => {
  it('identify error from substrings', () => {
    try {
      throw new BlockchainAPIError('source == destination')
    } catch (e) {
      expect(e.toString()).to.equal(`Error: ${Messages.SRC_DEST_SAME}`)
    }
  })

  it('identify error from code', () => {
    try {
      throw new BlockchainAPIError('1004')
    } catch (e) {
      expect(e.toString()).to.equal(`Error: ${Messages.SRC_DEST_SAME}`)
    }
  })
})
