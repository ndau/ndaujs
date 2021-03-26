/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import BlockchainAPIError from '../errors/BlockchainAPIError.js'
import axios from 'axios'
import config from '../../constants/config.js'
import LoggerHelper from '../../helpers/LoggerHelper.js'
const l = LoggerHelper.curryLogger('APICommunicationHelper')
/**
 * This method will post data to a specified URL.
 *
 * @param {string} url to post to
 * @param {string} data must be JSON.stringify data ready to be sent
 * @param {number} timeoutMS default to 10000ms, set to desired timeout
 */
const post = async (url, data, timeoutMS = config.API_DEFAULT_TIMEOUT_MS) => {
  let retriesLeft = config.API_MAX_RETRIES
  return new Promise(async function (resolve, reject) {
    const once = async () => {
      try {
        l.info(
          `post ${JSON.stringify({
            url: url,
            data: data
          })}`
        )
        console.log('before axios post, url = ' + url)
        console.log('before axios post, data = ' + data)
        const response = await axios.post(url, data, { timeout: timeoutMS })
//        l.debug(`${url} response: ${JSON.stringify(response.data)}`)
        console.log('response = ' + JSON.stringify(response.data))
        resolve(response.data)
      } catch (e) {
        console.log('in catch, error = ' + JSON.stringify(e.response.data))
        console.log('in catch, error = ' + e.response.status)
        console.log('in catch, error = ' + e.response.headers)
        const safeStatus = e && e.response ? e.response.status : null
        l.debug(
          `post ${JSON.stringify({
            status: safeStatus,
            url: url,
            response: e.response
          })}`
        )
        if (safeStatus >= 500 && retriesLeft) {
          retriesLeft--
          setTimeout(once, config.API_RETRY_DELAY_MS)
        } else {
          reject(new BlockchainAPIError({ err: e, status: safeStatus }))
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
const get = async (url, timeoutMS = config.API_DEFAULT_TIMEOUT_MS) => {
  let retriesLeft = config.API_MAX_RETRIES
  return new Promise(async function (resolve, reject) {
    const once = async () => {
      try {
        l.info(`get ${JSON.stringify({ url: url })}`)
        console.log('before axios get, url = ' + url)
        const response = await axios.get(url, { timeout: timeoutMS })

    //    l.debug(`Response is: ${JSON.stringify(response)}`)
        console.log('response = ' + JSON.stringify(response.data))
        resolve(response.data)
      } catch (e) {
        console.log('in catch, error = ' + e)
        const safeStatus = e && e.response ? e.response.status : null
        l.debug(
          `get ${JSON.stringify({
            status: safeStatus,
            url: url,
            response: e.response
          })}`
        )
        if (safeStatus >= 500 && retriesLeft) {
          retriesLeft--
          setTimeout(once, config.API_RETRY_DELAY_MS)
        } else {
          reject(new BlockchainAPIError({ err: e, status: safeStatus }))
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
