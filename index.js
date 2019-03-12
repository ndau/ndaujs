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
  }
}
