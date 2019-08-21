const address = require('./src/keyaddress/address')

module.exports = {
  truncateAddress: address.truncateAddress,
  formatNapuForDisplay: address.formatNapuForDisplay,
  parseNdau: address.parseNdau
}
