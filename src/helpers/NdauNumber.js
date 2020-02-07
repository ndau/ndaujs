/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import { formatNapuForDisplay } from '../../index'
import DataFormatHelper from '../api/helpers/DataFormatHelper'
import AppConfig from '../constants/config'
import AppConstants from '../constants/constants'

export default class NdauNumber {
  /**
   *
   * @param {integer,string} napu an integer representing napu or a string that looks like a float that is ndau.
   */
  constructor (amt) {
    if (amt === undefined) {
      this.napu = 0
    } else if (Object.prototype.toString.call(amt) === '[object String]') {
      this.napu = DataFormatHelper.getNapuFromNdau(amt)
    } else if (Number.isInteger(amt)) {
      this.napu = amt
    } else {
      throw new Error(`${amt} is not an integer.`)
    }
  }

  setNdau (ndau) {
    this.napu = DataFormatHelper.getNapuFromNdau(ndau)
  }

  setNapu (napu) {
    this.napu = napu
  }

  // returns a string formatted for a summary display of ndau
  toSummary () {
    let ndau = formatNapuForDisplay(
      this.napu,
      AppConfig.NDAU_SUMMARY_PRECISION,
      false
    )
    if (this.napu === 0) {
      ndau = '0.00'
    } else if (this.napu < AppConstants.QUANTA_PER_UNIT / 100) {
      // if there is less than 1 ndau
      ndau = formatNapuForDisplay(
        this.napu,
        AppConfig.NDAU_DETAIL_PRECISION,
        false
      )
    }
    return ndau
  }

  // returns a string formatted for a detail display of ndau
  toDetail () {
    return formatNapuForDisplay(
      this.napu,
      AppConfig.NDAU_DETAIL_PRECISION,
      false
    )
  }
}
