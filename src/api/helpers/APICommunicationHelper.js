import BlockchainAPIError from '../errors/BlockchainAPIError'
import axios from 'axios'
import config from '../../constants/config'

/**
 * This method will post data to a specified URL.
 *
 * @param {string} url to post to
 * @param {string} data must be JSON.stringify data ready to be sent
 * @param {number} timeoutMS default to 10000ms, set to desired timeout
 */
const post = async (
  url,
  data,
  timeoutMS = config.API_DEFAULT_TIMEOUT_MS,
  logger = console
) => {
  let retriesLeft = config.API_MAX_RETRIES
  return new Promise(async function (resolve, reject) {
    const once = async () => {
      try {
        logger.log(
          `APICommunicationHelper.post ${JSON.stringify({
            url: url,
            data: data
          })}`
        )
        const response = await axios.post(url, data, { timeout: timeoutMS })
        logger.log(`${url} response: ${JSON.stringify(response.data)}`)
        resolve(response.data)
      } catch (error) {
        const safeStatus =
          error && error.response ? error.response.status : null
        logger.log(
          `APICommunicationHelper.post ${JSON.stringify({
            status: safeStatus,
            url: url,
            response: error.response
          })}`
        )
        if (safeStatus >= 500 && retriesLeft) {
          retriesLeft--
          setTimeout(once, config.API_RETRY_DELAY_MS)
        } else {
          reject(new BlockchainAPIError({ err: error, status: safeStatus }))
        }
      }
    }
    once()
  })
}

/**
 * This method will perform a GET to a specified URL.
 *
 * @param {string} url to GET
 * @param {number} timeoutMS default to DEFAULT_TIMEOUT_MS, set to desired timeout
 */
const get = async (
  url,
  timeoutMS = config.API_DEFAULT_TIMEOUT_MS,
  logger = console
) => {
  let retriesLeft = config.API_MAX_RETRIES
  return new Promise(async function (resolve, reject) {
    const once = async () => {
      try {
        logger.log(`APICommunicationHelper.get ${JSON.stringify({ url: url })}`)
        const response = await axios.get(url, { timeout: timeoutMS })

        logger.log(`Response is: ${JSON.stringify(response)}`)
        resolve(response.data)
      } catch (error) {
        const safeStatus =
          error && error.response ? error.response.status : null
        logger.log(
          `APICommunicationHelper.get ${JSON.stringify({
            status: safeStatus,
            url: url,
            response: error.response
          })}`
        )
        if (safeStatus >= 500 && retriesLeft) {
          retriesLeft--
          setTimeout(once, config.API_RETRY_DELAY_MS)
        } else {
          reject(new BlockchainAPIError({ err: error, status: safeStatus }))
        }
      }
    }
    once()
  })
}

export default {
  post,
  get
}
