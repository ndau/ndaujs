const expect = require('chai').expect
const ndaujs = require('../index')

describe('Address related functions', () => {
  describe('#truncateAddress', () => {
    it('should return the string back if less than 19 characters', () => {
      expect(ndaujs.truncateAddress('123asd')).to.equal('123asd')
    })
    it('should return the string back if it is 19 characters', () => {
      expect(ndaujs.truncateAddress('1234567890123456789')).to.equal(
        '1234567890123456789'
      )
    })
    it('should return a truncated string if more than 19 characters', () => {
      expect(ndaujs.truncateAddress('12345678901234567890')).to.equal(
        '12345678...34567890'
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
