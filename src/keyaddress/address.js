const constants = require('../constants/constants')

const setCharAt = (str, index, chr) => {
  if (index > str.length - 1) return str
  return str.substr(0, index) + chr + str.substr(index + 1)
}

// helper routine to use complicated regex to
// inject commas into a number at the right places.
const commafy = (commas, n) => {
  let ns = n.toString()
  if (commas) {
    ns = ns.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return ns
}

// This function does a purely text-based rounding algorithm on things that look
// like base-10 numbers (including signs, commas, and decimal points).
// It will take a string and a carry flag.
// If the carry was falsy, it returns the string unmodified.
// If the carry was truthy, it will add 1 to the last digit; if the last digit
// was 9 then it will call itself recursively on the portion to the left.
// It has a couple of special cases for special characters.
const roundUp = (n, carry) => {
  if (!carry) {
    return n
  }
  // if we got all the way to the end, we rounded 9 to 10 so just add the 1
  if (n === '' || n === '-') {
    return n + '1'
  }
  // get the last digit
  let last = n[n.length - 1]
  // handle decimals and commas by just rolling up one level
  if (last === '.' || last === ',') {
    return roundUp(n.slice(0, n.length - 1), true) + last
  }
  // only if it was a 9 do we have to do something special
  // this is a way to get the "next" digit; we index into
  // this string, add 1 to the index, and return the result.
  // If we had started with 9, then we have to carry.
  const digits = '01234567890'
  let newlast = digits[digits.indexOf(last) + 1]
  return roundUp(n.slice(0, n.length - 1), last === '9') + newlast
}

module.exports = {
  /**
   * This function will take a string passed in and truncate
   * it down to 19 characters if it is more than that. This
   * was created for ndau addresses as they are 48 characters
   * and tend to cause issues when displaying them in the UI.
   *
   * @param {string} address ndau address to be truncated
   * @returns {string} truncated string
   */
  truncateAddress: address => {
    if (address && address.length > 19) {
      return `${address.slice(0, 8)}...${address.slice(-8)}`
    }
    return address
  },

  /**
   * This takes a number of napu, which should be an integer, plus a
   * precision (number of decimal digits) and returns a string
   * which is the human-readable value in ndau, rounded to that
   * number of decimal digits. No floating point math is used.
   */
  formatNapuForDisplay: (napu, digits, commas) => {
    // trap for the unwary:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    // This function is being used here to say "is digits usable as a numeric value?"
    // the default value is 3 digits.
    if (isNaN(digits)) {
      digits = 3
    }
    // fix digits if it's out of range (only 0-8 are permitted)
    if (digits < 0) {
      digits = 0
    }
    if (digits > 8) {
      digits = 8
    }

    // if the number is negative, we'll need a sign, so get that
    // out of the way first and then work in positive numbers
    let sign = ''
    if (napu < 0) {
      napu = -napu
      sign = '-'
    }

    let ndau = Math.floor(napu / constants.QUANTA_PER_UNIT)
    let frac = napu % constants.QUANTA_PER_UNIT

    if (digits === 0 && frac >= constants.QUANTA_PER_UNIT / 2) {
      ndau = ndau + 1
    }

    // if digits === 0 then we want a rounded number of ndau,
    // so let's do that before messing with frac
    if (digits === 0) {
      return sign + commafy(commas, ndau)
    }

    // now we have sign and ndau and decimal point
    // now format the fractional value
    // turn it into an 8-digit string with leading zeros if needed.
    let fs = ('00000000' + frac.toString()).slice(-8)
    // trim it to the right length
    let fracs = fs.slice(0, digits)
    let result = sign + commafy(commas, ndau) + '.' + fracs.toString()
    // if we need all 8 digits we're done, just return it
    if (digits === 8) {
      return result
    }

    // otherwise, we need to try rounding it
    let nextdigit = fs[digits]
    return roundUp(result, nextdigit >= '5')
  },

  // This parses a string intended to be a number of ndau and converts it
  // safely to napu without using floating point. It returns the value of
  // the input string in napu. It will throw a string explaining the problem
  // if the value is unparseable.
  parseNdau: s => {
    // in order to have repeatable groupings, it's clearest to use multiple
    // regexps to support both '1.' and '.1' as valid numbers.
    const numpat1 = /^([-+]?)([0-9]+)(\.([0-9]*))?$/
    const numpat2 = /^([-+]?)([0-9]*)?(\.([0-9]+))$/
    // coerce it to a string and strip spaces and commas
    s = String(s)
      .trim()
      .replace(/,/g, '')
    let parts = numpat1.exec(s)
    if (!parts) {
      parts = numpat2.exec(s)
    }
    if (!parts) {
      // neither pattern matched
      throw Error(s + ' is not a number')
    }
    // ok, we know all the parts are valid, put it together
    let sign = parts[1]
    let whole = parts[2]
    let frac = parts[4]

    let napu = 0
    if (whole) {
      napu += parseInt(whole) * constants.QUANTA_PER_UNIT
    }
    if (frac) {
      frac = (frac + '00000000').slice(0, 8)
      napu += parseInt(frac)
    }
    if (sign == '-') {
      napu = -napu
    }
    return napu
  }
}
