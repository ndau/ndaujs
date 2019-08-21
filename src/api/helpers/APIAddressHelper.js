import ServiceDiscovery from '../ServiceDiscovery'

const PROTOCOL = 'https'

const BLOCKCHAIN = 1
const RECOVERY = 2

const getBlockchainNode = async () => {
  return await ServiceDiscovery.getBlockchainServiceNodeURL()
}

const getRecoveryNode = async () => {
  const node = await ServiceDiscovery.getRecoveryServiceNodeURL()
  return node
}

const getNodeAddress = async type => {
  const node =
    type === RECOVERY ? await getRecoveryNode() : await getBlockchainNode()
  return PROTOCOL + '://' + node
}

const getAccountsAPIAddress = async () => {
  return (await getNodeAddress()) + '/account/accounts'
}

const getAccountAPIAddress = async () => {
  return (await getNodeAddress()) + '/account/account'
}

const getEaiRateAPIAddress = async () => {
  return (await getNodeAddress()) + '/system/eai/rate'
}

const getMarketPriceAPIAddress = async () => {
  return (await getNodeAddress()) + '/price/current'
}

const getTransactionPrevalidateAPIAddress = async sendType => {
  return (await getNodeAddress(sendType)) + '/tx/prevalidate'
}

const getTransactionSubmitAPIAddress = async sendType => {
  return (await getNodeAddress(sendType)) + '/tx/submit'
}

const getAccountHistoryAPIAddress = async address => {
  return (await getNodeAddress()) + `/account/history/${address}`
}

const getTransactionByHashAPIAddress = async transactionHash => {
  // transaction hash's can contain characters that must be encoded
  // for a URI
  const urlEncodedTransactionHash = encodeURIComponent(transactionHash)
  return (await getNodeAddress()) + `/transaction/${urlEncodedTransactionHash}`
}

export default {
  getAccountAPIAddress,
  getAccountsAPIAddress,
  getMarketPriceAPIAddress,
  getEaiRateAPIAddress,
  getTransactionPrevalidateAPIAddress,
  getTransactionSubmitAPIAddress,
  getAccountHistoryAPIAddress,
  getTransactionByHashAPIAddress,
  RECOVERY
}
