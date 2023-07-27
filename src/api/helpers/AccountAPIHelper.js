/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import DateHelper from '../../helpers/DateHelper.js'
import DataFormatHelper from './DataFormatHelper.js'
import AppConstants from '../../constants/constants.js'
import AppConfig from '../../constants/config.js'
import moment from 'moment'
import LoggerHelper from '../../helpers/LoggerHelper.js'
const l = LoggerHelper.curryLogger('AccountAPIHelper')

const getEaiValueForDisplay = account => {
  return account && account.eaiValueForDisplay
    ? Math.round(
      (account.eaiValueForDisplay / AppConstants.RATE_DENOMINATOR) * 100
    )
    : 0
}

const receivingEAIFrom = account => {
  return account && account.incomingRewardsFromNickname
    ? account.incomingRewardsFromNickname
    : null
}

const sendingEAITo = account => {
  return account && account.rewardsTargetNickname
    ? account.rewardsTargetNickname
    : null
}

const accountNickname = account => {
  return account ? account.nickname : ''
}

const accountLockedUntil = (account, iso) => {
  if (!account) return null

  const unlocksOn = account.lock ? account.lock.unlocksOn : null
  if (unlocksOn) {
    if (iso) {
      // The blockchain returns us a ISO formatted date with
      // timezone information, so we can pass it along
      return account.lock.unlocksOn
    } else {
      return DateHelper.getDate(account.lock.unlocksOn)
    }
  }

  return null
}

const isAccountLocked = account => {
  if (!account) return null
  if (!account.lock) return false

  const lockedUntil = accountLockedUntil(account, true)

  return (
    account.lock &&
    (account.lock.unlocksOn === null ||
      moment(lockedUntil).isAfter(moment.utc().format()))
  )
}

const accountNoticePeriod = account => {
  if (!account) return null

  const noticePeriod = account.lock ? account.lock.noticePeriod : null
  if (noticePeriod) {
    const duration = DateHelper.parseDurationToMicroseconds(noticePeriod)
    return DateHelper.getDaysFromMicroseconds(duration)
  }

  return null
}

const remainingBalanceNdau = (account, amount, addCommas = true, precision) => {
  const napuAmount = DataFormatHelper.getNapuFromNdau(amount)
  const napuAccountBalance = account.balance

  if (napuAmount > napuAccountBalance) return '0'

  return DataFormatHelper.getNdauFromNapu(
    napuAccountBalance - napuAmount,
    precision,
    addCommas
  )
}

const accountNdauAmount = (account, addCommas = true, precision) => {
  return account && account.balance
    ? DataFormatHelper.getNdauFromNapu(account.balance, precision, addCommas)
    : 0
}

const weightedAverageAgeInDays = account => {
  return account ? DateHelper.getDaysFromISODate(account.weightedAverageAge) : 0
}

const spendableNapu = (addressData, addCommas = true, precision) => {
  const totalNdau = accountNdauAmount(addressData, addCommas, precision)
  let totalNapu = DataFormatHelper.getNapuFromNdau(totalNdau)
  const holds = addressData.holds

  if (!holds) return totalNapu

  for (const hold of holds) {
    totalNapu -= hold.qty
  }

  return totalNapu
}

const spendableNdau = (addressData, addCommas = true, precision) => {
  return DataFormatHelper.getNdauFromNapu(
    spendableNapu(addressData, addCommas, precision),
    precision
  )
}

const lockBonusEAI = weightedAverageAgeInDays => {
  if (!weightedAverageAgeInDays) return 0

  if (weightedAverageAgeInDays >= DateHelper.getDaysFromISODate('3y')) {
    return 5
  } else if (weightedAverageAgeInDays >= DateHelper.getDaysFromISODate('2y')) {
    return 4
  } else if (weightedAverageAgeInDays >= DateHelper.getDaysFromISODate('1y')) {
    return 3
  } else if (
    weightedAverageAgeInDays >= DateHelper.getDaysFromISODate('180d')
  ) {
    return 2
  } else if (weightedAverageAgeInDays >= DateHelper.getDaysFromISODate('90d')) {
    return 1
  }

  return 0
}

const accountTotalNapuAmount = accounts => {
  let totalNapu = 0
  Object.keys(accounts).forEach(accountKey => {
    if (
      accounts[accountKey].addressData &&
      accounts[accountKey].addressData.balance
    ) {
      totalNapu += accounts[accountKey].addressData.balance
    }
  })
  return totalNapu
}

const accountTotalNdauAmount = (accounts, withCommas = true) => {
  let totalNdau = 0

  if (!accounts) return totalNdau

  let totalNapu = accountTotalNapuAmount(accounts)

  return withCommas
    ? DataFormatHelper.getNdauFromNapu(
      totalNapu,
      AppConfig.NDAU_DETAIL_PRECISION,
      true
    )
    : DataFormatHelper.getNdauFromNapu(totalNapu)
}

const totalSpendableNdau = (accounts, totalNdau, withCommas = true) => {
  if (!accounts) return totalNdau

  let totalNapu = DataFormatHelper.getNapuFromNdau(totalNdau)

  Object.keys(accounts).forEach(accountKey => {
    if (isAccountLocked(accounts[accountKey].addressData)) {
      // subtract locked account value
      totalNapu -= accounts[accountKey].addressData.balance
    } else if (accounts[accountKey].addressData.holds) {
      // subtract holds if there are any and the account is unlocked
      const holds = accounts[accountKey].addressData.holds
      for (const hold of holds) {
        totalNapu -= hold.qty
      }
    }
  })

  return withCommas
    ? DataFormatHelper.getNdauFromNapu(
      totalNapu,
      AppConfig.NDAU_SUMMARY_PRECISION,
      true
    )
    : DataFormatHelper.getNdauFromNapu(totalNapu)
}

/**
 * The amount is passed in ndau. However, the fee's are what is
 * sent from the API which is already napu. We calculate using
 * napu and then convert to ndau for the return value, using
 * detail precision when converting.
 *
 * @param {number} amountNdau
 * @param {number} transactionFeeNapu
 * @param {number} sibFeeNapu
 * @param {boolean} addCommas
 */
const getTotalNdauForSend = (
  amountNdau,
  transactionFeeNapu,
  sibFeeNapu,
  addCommas = true
) => {
  const amountNapu = DataFormatHelper.getNapuFromNdau(
    amountNdau,
    AppConfig.NDAU_DETAIL_PRECISION
  )
  const totalNapu = amountNapu + transactionFeeNapu + sibFeeNapu
  return DataFormatHelper.getNdauFromNapu(
    totalNapu,
    AppConfig.NDAU_DETAIL_PRECISION,
    addCommas
  )
}

const currentPrice = (marketPrice, totalNdau) => {
  l.debug(`marketPrice is ${marketPrice} totalNdau is ${totalNdau}`)

  // why not use .toLocaleString you ask...here is why:
  // https://github.com/facebook/react-native/issues/15717
  const currentPrice = marketPrice
    ? '$' +
      DataFormatHelper.formatUSDollarValue(
        parseFloat(totalNdau * marketPrice),
        2
      )
    : '$0.00'
  l.info(`currentPrice: ${currentPrice}`)

  return currentPrice
}

export default {
  accountLockedUntil,
  accountNdauAmount,
  accountTotalNdauAmount,
  currentPrice,
  accountNoticePeriod,
  accountNickname,
  receivingEAIFrom,
  sendingEAITo,
  eaiValueForDisplay: getEaiValueForDisplay,
  weightedAverageAgeInDays,
  lockBonusEAI,
  spendableNdau,
  spendableNapu,
  totalSpendableNdau,
  getTotalNdauForSend,
  remainingBalanceNdau,
  isAccountLocked
}
