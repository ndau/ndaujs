import CircularArray from '../api/helpers/CircularArray'
import Config from '../constants/config'
/*
This is a singleton but it generates loggers.
Use it by instantiating and configuring it early in your code like so:

import LoggerHelper from './LoggerHelper'
LoggerHelper.setLogger(console)

Once that is set up. You can use curryLogger to make a new logger for where you want to log.
For example: `const l = LoggerHelper.curryLogger('MyClass')`
Then later `l.info('starting process...')`
outputs: > {"lvl":"I","src":"MyClass","ts":946702790452,"msg":"starting process..."}

To set the verbosity (log level), use the `setLevel` function. For example:
  LoggerHelper.setLevel(LoggerHelper.LEVEL_DEBUG)
*/

const levels = {
  I: 1,
  D: 0,
  E: 2,
  undefined: 2 // default undefined level to errors only
}

class LoggerHelper {
  constructor () {
    this.LEVEL_INFO = 'I'
    this.LEVEL_DEBUG = 'D'
    this.LEVEL_ERROR = 'E'

    this._logData = new CircularArray(Config.MAX_LOG_ENTRIES)

    if (!LoggerHelper.instance) {
      this.setLevel(LoggerHelper.LEVEL_INFO)
      LoggerHelper.instance = this
    }

    return LoggerHelper.instance
  }

  setLevel (level) {
    this._level = levels[level]
  }

  _log (source, level, message) {
    if (levels[level] < this._level) {
      return
    }
    const safeMessage = this._scrubData(message)
    const entry = {
      lvl: level,
      msg: safeMessage,
      src: source,
      ts: Date.now()
    }
    this._logData.write(entry)
    this._logger.log(entry)
  }

  _scrubData (...data) {
    if (!data) return data
    let stringData = data
      .map(e => {
        const t = typeof e
        if (t === 'string' || t === 'number') {
          return e.toString()
        } else {
          return JSON.stringify(e)
        }
      })
      .join(',')
    // pull out ALL private keys with npvt with all chracters
    // up until a non-alphanumeric
    let scrubbedData = stringData.replace(/npvt[A-Za-z0-9]+/g, '*suppressed*')
    return scrubbedData
  }

  // setLogger takes a logger that implements a `log` function.
  setLogger (logger) {
    this._logger = logger
  }

  // curryLogger returns three functions for each log level with a preconfigured source tag.
  curryLogger (src) {
    return {
      info: msg => {
        this._log(src, this.LEVEL_INFO, msg)
      },
      debug: msg => {
        this._log(src, this.LEVEL_DEBUG, msg)
      },
      error: msg => {
        this._log(src, this.LEVEL_ERROR, msg)
      }
    }
  }

  // return the local this._logData back to the caller
  getData () {
    return this._logData
  }
}

export default new LoggerHelper()
