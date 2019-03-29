const NAPU_PER_NDAU = 100000000

function setCharAt (str, index, chr) {
  if (index > str.length - 1) return str
  return str.substr(0, index) + chr + str.substr(index + 1)
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
  formatNapuForDisplay: (napu, digits) => {
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
      let napu = -napu
      let sign = '-'
    }

    let ndau = Math.floor(napu / NAPU_PER_NDAU)
    let frac = napu % NAPU_PER_NDAU

    // if digits == 0 then we want a rounded number of ndau,
    // so let's do that before messing with frac
    if (digits == 0) {
      if (frac >= NAPU_PER_NDAU / 2) {
        return sign + (ndau + 1).toString()
      } else {
        return sign + ndau.toString()
      }
    }

    // now we have sign and ndau and decimal point
    // now format the fractional value
    // turn it into an 8-digit string with leading zeros if needed.
    let fs = ('00000000' + frac.toString()).slice(-8)
    // trim it to the right length
    let fracs = fs.slice(0, digits)
    // see if we might have to round it
    if (digits < 8) {
      let nextdigit = fs[digits]
      if ('56789'.indexOf(nextdigit) !== -1) {
        let newfrac = (parseInt(fracs) + 1).toString()
        // if that overflowed, we need to adjust ndau
        // (we rounded, say, 999 to 1000)
        if (newfrac.length != fracs.length) {
          newfrac = newfrac.slice(-digits)
          ndau = ndau + 1
        }
        fracs = newfrac
      }
    }

    // we finally have all the bits
    return sign + ndau.toString() + '.' + fracs.toString()
  }
}
