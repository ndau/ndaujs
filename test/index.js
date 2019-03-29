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

describe('ndau formatting', () => {
  describe('#formatNapuForDisplay', () => {
    it('should format 1 ndau correctly as 1', () => {
      expect(ndaujs.formatNapuForDisplay(100000000, 0)).to.equal('1')
    })
    it('should format 1.234 ndau with 0 as 1', () => {
      expect(ndaujs.formatNapuForDisplay(123400000, 0)).to.equal('1')
    })
    it('should format 1.234 ndau with 1 as 1.2', () => {
      expect(ndaujs.formatNapuForDisplay(123400000, 1)).to.equal('1.2')
    })
    it('should format 1.234 ndau with 3 as 1.234', () => {
      expect(ndaujs.formatNapuForDisplay(123400000, 3)).to.equal('1.234')
    })
    it('should format 1.234 ndau with 8 as 1.23400000', () => {
      expect(ndaujs.formatNapuForDisplay(123400000, 8)).to.equal('1.23400000')
    })
    it('should format 1.255 ndau with 1 as 1.3', () => {
      expect(ndaujs.formatNapuForDisplay(125500000, 1)).to.equal('1.3')
    })
    it('should format 1.255 ndau with 2 as 1.26', () => {
      expect(ndaujs.formatNapuForDisplay(125500000, 2)).to.equal('1.26')
    })
    it('should format 1.255 ndau with 3 as 1.255', () => {
      expect(ndaujs.formatNapuForDisplay(125500000, 3)).to.equal('1.255')
    })
    it('should format 1.255 ndau with 4 as 1.2550', () => {
      expect(ndaujs.formatNapuForDisplay(125500000, 4)).to.equal('1.2550')
    })
    it('should format 1.99 ndau with 0 as 2', () => {
      expect(ndaujs.formatNapuForDisplay(199000000, 0)).to.equal('2')
    })
    it('should format 1.99 ndau with 1 as 2.0', () => {
      expect(ndaujs.formatNapuForDisplay(199000000, 1)).to.equal('2.0')
    })
    it('should format 1.99 ndau with 2 as 1.99', () => {
      expect(ndaujs.formatNapuForDisplay(199000000, 2)).to.equal('1.99')
    })
    it('should format 1.99 ndau with 3 as 1.990', () => {
      expect(ndaujs.formatNapuForDisplay(199000000, 3)).to.equal('1.990')
    })
    it('should format 1 napu with 0 as 0', () => {
      expect(ndaujs.formatNapuForDisplay(1, 0)).to.equal('0')
    })
    it('should format 1 napu with 2 as 0.00', () => {
      expect(ndaujs.formatNapuForDisplay(1, 2)).to.equal('0.00')
    })
    it('should format 0 napu with 3 as 0.000', () => {
      expect(ndaujs.formatNapuForDisplay(1, 3)).to.equal('0.000')
    })
    it('should format 10 napu with 7 as 0.0000001', () => {
      expect(ndaujs.formatNapuForDisplay(10, 7)).to.equal('0.0000001')
    })
    it('should format 10 napu with 8 as 0.00000010', () => {
      expect(ndaujs.formatNapuForDisplay(10, 8)).to.equal('0.00000010')
    })
    it('should format 10 napu with 9 as 0.00000010', () => {
      expect(ndaujs.formatNapuForDisplay(10, 9)).to.equal('0.00000010')
    })
    it('should format 10 napu with -1 as 0', () => {
      expect(ndaujs.formatNapuForDisplay(10, -1)).to.equal('0')
    })
    it('should format 1 ndau with no digits param as 1.000', () => {
      expect(ndaujs.formatNapuForDisplay(100000000)).to.equal('1.000')
    })
  })
})
