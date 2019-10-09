import Config from '../constants/config'
import moment from 'moment'
import CircularArray from '../api/helpers/CircularArray'

class LogStore {
  constructor () {
    if (!LogStore.instance) {
      this._logData = new CircularArray(Config.MAX_LOG_ENTRIES)
      LogStore.instance = this
    }

    return LogStore.instance
  }

  /**
   * Log data to CircularArray
   * @param {*} logData
   */
  log (logData) {
    // DO NOT EVER REMOVE _scrubData!!!!
    // this guy removes private keys...VERY important
    logData = this._scrubData(logData)

    if (__DEV__) console.log(logData)

    this._logData.write({
      ts: moment(),
      msg: logData
    })
  }

  /**
   * Log an error that is passed in. just
   * put an indicator in front of it, still
   * calls log and scrubs data.
   *
   * @param {Error} error
   */
  error (error) {
    this.log(`ERROR: ${JSON.stringify(error)}`)
  }

  /**
   * Clear the contents of the log
   */
  clear () {
    this._logData.clear()
  }

  /**
   * returns the raw logdata array
   */
  getLogData () {
    return this._logData
  }

  _scrubData (data) {
    if (!data) return data
    let stringData = ''
    try {
      stringData = data
        .map(e => {
          const t = typeof e
          if (t === 'string' || t === 'number') {
            return e.toString()
          } else {
            return JSON.stringify(e)
          }
        })
        .join(',')
    } catch (error) {
      this.error(error)
    }
    // pull out ALL private keys with npvt with all chracters
    // up until a non-alphanumeric
    let scrubbedData = stringData.replace(/npvt[A-Za-z0-9]+/g, '*suppressed*')
    return scrubbedData
  }
}

const instance = new LogStore()
Object.freeze(instance)

export default instance
