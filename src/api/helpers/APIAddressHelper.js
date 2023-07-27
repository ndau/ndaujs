/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import ServiceDiscovery from '../ServiceDiscovery.js'

const PROTOCOL = 'https'

const BLOCKCHAIN = 1
const RECOVERY = 2

var blockchainNode = null
var protocol = null

const getBlockchainNode = async () => {
    if (blockchainNode)
        return blockchainNode
    else
        return await ServiceDiscovery.getBlockchainServiceNode()
}
  
const setBlockchainNode = (node) => {
    blockchainNode = node
}
  
const setProtocol = (prot) => {
    protocol = prot
}

const getProtocol =  () => {
    if (protocol)
        return protocol
    else
        return PROTOCOL    
}
  
const getRecoveryNode = async () => {
  const node = await ServiceDiscovery.getRecoveryServiceNode()
  return node
}

const getNodeAddress = async type => {
  const node =
    type === RECOVERY ? await getRecoveryNode() : await getBlockchainNode()
  return getProtocol() + '://' + node
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
  setBlockchainNode,
  setProtocol,
  getAccountAPIAddress,
  getAccountsAPIAddress,
  getMarketPriceAPIAddress,
  getEaiRateAPIAddress,
  getTransactionPrevalidateAPIAddress,
  getTransactionSubmitAPIAddress,
  getAccountHistoryAPIAddress,
  getTransactionByHashAPIAddress,
  RECOVERY,
  BLOCKCHAIN
}
