const address = require('./src/keyaddress/address')
const APIAddressHelper = require('./src/api/helpers/APIAddressHelper')

module.exports = {
  truncateAddress: address.truncateAddress,
  formatNapuForDisplay: address.formatNapuForDisplay,
  parseNdau: address.parseNdau,

  APIAddressHelper
}
