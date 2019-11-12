/**
 * This file will have a shelf life as this is how ndaujs
 * was designed initially. We are moving away from this but
 * if consumers still need this support they can import
 * 'ndaujs/indexLegacy' instead of just 'ndaujs'.
 */
const address = require('./src/keyaddress/address')

module.exports = {
  /**
   * @deprecated as of version 1.3.0
   */
  truncateAddress: address.truncateAddress,
  /**
   * @deprecated as of version 1.3.0
   */
  formatNapuForDisplay: address.formatNapuForDisplay,
  /**
   * @deprecated as of version 1.3.0
   */
  parseNdau: address.parseNdau
}
