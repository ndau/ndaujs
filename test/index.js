import GeneralStore from '../src/stores/GeneralStore'
import CryptoStore from '../src/stores/CryptoStore'
import MockAsyncStorage from 'mock-async-storage'
import LoggerHelper from '../src/helpers/LoggerHelper'
import crypto from 'crypto'
const expect = require('chai').expect
const ndaujs = require('../src/keyaddress/address')

// Do not remove this line. The class is initailized here
// but it is used in other files.
GeneralStore.setStore(new MockAsyncStorage())
CryptoStore.setStore(crypto.randomBytes)

// Sets the log level to errors only
LoggerHelper.setLevel(LoggerHelper.LEVEL_INFO)
LoggerHelper.setLogger(console)

global.NDAUJS_LOG_LEVEL = describe('Address related functions', () => {
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
    it('should format -1.234 ndau with 1 as 1.2', () => {
      expect(ndaujs.formatNapuForDisplay(-123400000, 1)).to.equal('-1.2')
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
    it('should format -1.255 ndau with 2 as 1.26', () => {
      expect(ndaujs.formatNapuForDisplay(-125500000, 2)).to.equal('-1.26')
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
    it('should format -1.99 ndau with 0 as -2', () => {
      expect(ndaujs.formatNapuForDisplay(-199000000, 0)).to.equal('-2')
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
    it('should format 7500000 napu with 1 as 0.08', () => {
      expect(ndaujs.formatNapuForDisplay(7500000, 2)).to.equal('0.08')
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
    it('should format 1234 ndau with comma param as 1234.000', () => {
      expect(ndaujs.formatNapuForDisplay(123400000000)).to.equal('1234.000')
    })
    it('should format 123 ndau with comma param as 123.0000', () => {
      expect(ndaujs.formatNapuForDisplay(12300000000, 4, true)).to.equal(
        '123.0000'
      )
    })
    it('should format 1234 ndau with comma param as 1,234', () => {
      expect(ndaujs.formatNapuForDisplay(123400000000, 0, true)).to.equal(
        '1,234'
      )
    })
    it('should format 12345 ndau with comma param as 12,345.0', () => {
      expect(ndaujs.formatNapuForDisplay(1234500000000, 1, true)).to.equal(
        '12,345.0'
      )
    })
    it('should format 1234567.89 ndau with comma and 2 digits as 1,234,567.89', () => {
      expect(ndaujs.formatNapuForDisplay(123456789000000, 2, true)).to.equal(
        '1,234,567.89'
      )
    })
    it('should format 19999.999 ndau with comma and 2 digits as 20,000.00', () => {
      expect(ndaujs.formatNapuForDisplay(1999999900000, 2, true)).to.equal(
        '20,000.00'
      )
    })
    it('should format -19999.999 ndau with comma and 2 digits as -20,000.00', () => {
      expect(ndaujs.formatNapuForDisplay(-1999999900000, 2, true)).to.equal(
        '-20,000.00'
      )
    })
  })
})

const randomDigits = n => {
  let s = 0
  for (let i = 0; i < n; i++) {
    let d = Math.floor(Math.random() * 10)
    s += d
  }
  return s
}

describe('ndau parsing', () => {
  describe('#parseNdau', () => {
    it('should parse 1 correctly as 100000000', () => {
      expect(ndaujs.parseNdau('1')).to.equal(100000000)
    })
    it('should parse 2. correctly as 200000000', () => {
      expect(ndaujs.parseNdau('2.')).to.equal(200000000)
    })
    it('should parse "123  " correctly as 12300000000', () => {
      expect(ndaujs.parseNdau('123  ')).to.equal(12300000000)
    })
    it('should parse " 987654321" correctly as 98765432100000000', () => {
      expect(ndaujs.parseNdau(' 987654321')).to.equal(98765432100000000)
    })
    it('should parse .1 correctly as 10000000', () => {
      expect(ndaujs.parseNdau('.1')).to.equal(10000000)
    })
    it('should parse 1.1 correctly as 110000000', () => {
      expect(ndaujs.parseNdau('1.1')).to.equal(110000000)
    })
    it('should parse 0.00345 correctly as 345000', () => {
      expect(ndaujs.parseNdau('0.00345')).to.equal(345000)
    })
    it('should parse 0.0000001 correctly as 10', () => {
      expect(ndaujs.parseNdau('0.0000001')).to.equal(10)
    })
    it('should parse 1,234 correctly as 123400000000', () => {
      expect(ndaujs.parseNdau('1,234')).to.equal(123400000000)
    })
    it('should parse 1,234,567.89 correctly as 123456789000000', () => {
      expect(ndaujs.parseNdau('1,234,567.89')).to.equal(123456789000000)
    })
    it('should throw on "foo"', () => {
      expect(() => ndaujs.parseNdau('foo')).to.throw(Error)
    })
    it('should throw on "."', () => {
      expect(() => ndaujs.parseNdau('.')).to.throw(Error)
    })
  })
  describe('#roundtrip fuzzing', () => {
    for (let i = 0; i < 30; i++) {
      // generate a random numberlike string
      let w = randomDigits(Math.floor(Math.random() * 5))
      let f = randomDigits(Math.floor(Math.random() * 8))
      let s = Math.random() > 0.5 ? '-' : ''
      let ndau1 = s + w + '.' + f
      // throw away non-number values
      if (ndau1 == '.' || ndau1 == '-.') {
        continue
      }
      // parse it to napu
      let napu1 = ndaujs.parseNdau(ndau1)
      // go back to a string
      let ndau2 = ndaujs.formatNapuForDisplay(napu1, 8)
      // and parse it again -- the two parses should be the same
      let napu2 = ndaujs.parseNdau(ndau2)
      it('should roundtrip ' + ndau1 + ' correctly', () => {
        expect(napu1).to.equal(napu2)
      })
    }
  })
})
