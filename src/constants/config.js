/**
 * This is ES5 for experimental purposes for now. Ideally all code
 * in source can be ES6.
 */
module.exports.API_MAX_RETRIES = 3 // allow 3 unsuccessful attempts
module.exports.API_RETRY_DELAY_MS = 1 * 1000 // 1 * 1000 = 1 second (in miliseconds)
module.exports.API_DEFAULT_TIMEOUT_MS = 10 * 1000 // 10 * 1000 = 10 seconds (in miliseconds)
module.exports.NDAU_SUMMARY_PRECISION = 2
module.exports.NDAU_DETAIL_PRECISION = 8
module.exports.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY = 30

module.exports.MAX_LOG_ENTRIES = 101
module.exports.ADDRESS_SEARCH_MAX = 10

module.exports.APP_LANGUAGE = 'en'
