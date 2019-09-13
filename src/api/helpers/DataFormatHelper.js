/**
 * The function is used to get the next path index within the
 * `wallet` passed in. For example, if I have the following
 * key paths:
 *
 * `/44'/20036'/100/2`
 * `/44'/20036'/100/4`
 * `/44'/20036'/100/90`
 *
 * If `path` is `/44'/20036'/100` then the result of this
 * function is 91. If the `path` is instead `/` the result
 * would be 1.
 *
 * @param {Wallet} wallet contains the keys we will iterate over
 * @param {string} path is the key path MINUS the index. This is
 * used to check if we should consider the key path being iterated
 * contains contains `path` in it. If it does, then it needs to
 * be considered as the highest value.
 */
const getNextPathIndex = (wallet, path) => {
  const keys = wallet.keys
  let nextAddress = 1
  if (!keys) return nextAddress

  Object.keys(keys).forEach(theKey => {
    const key = keys[theKey]
    if (key.path && key.path.includes(path)) {
      // Get the start index
      const start = (path === '/' ? 0 : 1) + path.length
      // using the path passed in get what is left over from
      // the wallet key path we are iterating over
      const walletKeyPathRemainder = key.path.substring(start, key.path.length)
      // if there is remaining slashes in the path then we are
      // looking at a key path in the wallet that should not be
      // considered for this calculation
      if (!walletKeyPathRemainder.includes('/')) {
        // We have a index to increment
        let nextPossibility = parseInt(walletKeyPathRemainder)

        // is it highter than what we have looked at so far...
        // yes...then increment it and use it
        if (!isNaN(nextPossibility) && nextPossibility >= nextAddress) {
          nextAddress = nextPossibility + 1
        }
      }
    }
  })
  return nextAddress === 0 ? nextAddress : nextAddress++
}

export default {
  getNextPathIndex
}
