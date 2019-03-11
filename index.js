/**
 * This function will take an ndau address and truncate
 * it to 16 characters.
 *
 * @param {string} address ndau address to be truncatee
 * @returns {string} truncated string
 */
module.exports = truncateAddress = address => {
  return address
    ? `${address.slice(0, 8)}...${address.slice(length - 8, length)}`
    : null
}
