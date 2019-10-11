import SetupStore from '../stores/SetupStore'
import Base64 from 'base-64'
import randomBytes from 'randombytes'
import { promisify } from 'es6-promisify'

const cryptoRandomBytes = promisify(randomBytes)

/**
 * This method will generate entropy and both return the value
 * as well as set it to the SetupStore.entropy. This can be used
 * in setup for generating entropy. It can also be used generically
 * to give you back a Base64 random string with the number of bytes you
 * pass in.
 *
 * @param {number} byteCount amount of bytes of entropy to generate, default is 16
 * @param {Object} cryptoGenerateRandom a library of your choice that will
 * generate a random string given a byteCount. It is assumed this function
 * will pass back a promise.
 * @returns {string} Base64 version of entropy
 */
const generateEntropy = async (byteCount = 16, cryptoGenerateRandom) => {
  const secureRandom = await cryptoRandomBytes(byteCount)
  const secureRandomString = String.fromCharCode.apply(null, secureRandom)
  const base64Value = Base64.encode(secureRandomString)

  SetupStore.entropy = base64Value
  return base64Value
}

export default {
  generateEntropy
}
