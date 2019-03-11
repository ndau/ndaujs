/**
 * This function will take an ndau address and truncate
 * it to 16 characters.
 *
 * @param {string} address ndau address to be truncatee
 * @returns {string} truncated string
 */
module.exports = {
  truncateAddress: address => {
    return address && address.length >= 17
      ? `${address.slice(0, 8)}...${address.slice(
        address.length - 8,
        address.length
      )}`
      : null
  }
}
