const expect = require('chai').expect
const ndaujs = require('../index')

describe('Address related functions', () => {
  describe('#truncateAddress', () => {
    it('should return the string back if less than 16 characters', () => {
      expect(ndaujs.truncateAddress('123asd')).to.be.null
    })
    it('should return a truncated string if more than 17 characters', () => {
      expect(ndaujs.truncateAddress('12345678901234567')).to.equal(
        '12345678...01234567'
      )
    })
    it('should return a valid address in a truncated way', () => {
      expect(
        ndaujs.truncateAddress(
          'ndah7dmb2dsufay2fes8nrh94iy27b6kfrdnqzekj49x2fx8'
        )
      ).to.equal('ndah7dmb...j49x2fx8')
    })
  })
})
