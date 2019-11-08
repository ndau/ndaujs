import APIAddressHelper from './helpers/APIAddressHelper'
import BlockchainAPIError from './errors/BlockchainAPIError'
import APICommunicationHelper from '../api/helpers/APICommunicationHelper'
import LoggerHelper from '../helpers/LoggerHelper'
const l = LoggerHelper.curryLogger('TransactionAPI')

const _postTransaction = async (submitAddress, transaction) => {
  l.debug(
    `_postTransaction submitAddress: ${submitAddress} transaction: ${JSON.stringify(
      transaction
    )}`
  )
  try {
    return await APICommunicationHelper.post(
      submitAddress,
      JSON.stringify(transaction)
    )
  } catch (e) {
    l.debug(`could not post: ${e.message}`)
    throw e
  }
}

const prevalidate = async (submitAddress, transaction) => {
  return await _postTransaction(submitAddress, transaction)
}

const submit = async (submitAddress, transaction) => {
  return await _postTransaction(submitAddress, transaction)
}

const transactionByHash = async transactionHash => {
  l.debug(`transactionByHash ${JSON.stringify(transactionHash)}`)
  try {
    const transactionByHashAddress = await APIAddressHelper.getTransactionByHashAPIAddress(
      transactionHash
    )
    return await APICommunicationHelper.get(transactionByHashAddress)
  } catch (e) {
    l.debug(`could not get transaction by hash ${e.message}`)
    throw new BlockchainAPIError(e)
  }
}

export default {
  prevalidate,
  submit,
  transactionByHash
}
