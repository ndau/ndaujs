import ServiceDiscoveryError from './errors/ServiceDiscoveryError'
import APICommunicationHelper from './helpers/APICommunicationHelper'
import moment from 'moment'

const AWS_S3_SERVICE_JSON =
  'https://s3.us-east-2.amazonaws.com/ndau-json/services.json'

const CACHE_TTL = 1000 * 60 * 5 // 1000 * 60 * 5 = five minutes'

const TESTNET = 'testnet'
const MAINNET = 'mainnet'
const DEVNET = 'devnet'

const BLOCKCHAIN = 1
const RECOVERY = 2

const blockchainCache = {
  lastChecked: moment(0), // moment date. starts a 0 to immediately invalidate the cache
  nodes: []
}

const recoveryCache = {
  lastChecked: moment(0), // moment date. starts a 0 to immediately invalidate the cache
  nodes: []
}

const getBlockchainServiceNode = async (
  logger = console,
  environment = TESTNET
) => {
  logger.log(`Blockchain Service Discovery URL: ${AWS_S3_SERVICE_JSON}`)

  try {
    if (moment().diff(blockchainCache.lastChecked) > CACHE_TTL) {
      const response = await APICommunicationHelper.get(AWS_S3_SERVICE_JSON)
      blockchainCache.nodes = await _parseServicesForNodes(
        response,
        BLOCKCHAIN,
        environment
      )
      blockchainCache.lastChecked = moment()
    }

    // return a random service for use
    return blockchainCache.nodes[
      Math.floor(Math.random() * blockchainCache.nodes.length)
    ]
  } catch (error) {
    logger.log(error)
    throw new ServiceDiscoveryError()
  }
}

const getRecoveryServiceNode = async (
  logger = console,
  environment = TESTNET
) => {
  logger.log(`Recovery Service Discovery URL: ${AWS_S3_SERVICE_JSON}`)

  try {
    if (moment().diff(recoveryCache.lastChecked) > CACHE_TTL) {
      const response = await APICommunicationHelper.get(AWS_S3_SERVICE_JSON)
      recoveryCache.nodes = await _parseServicesForNodes(
        response,
        RECOVERY,
        environment
      )
      recoveryCache.lastChecked = moment()
    }

    // return a random service for use
    return recoveryCache.nodes[
      Math.floor(Math.random() * recoveryCache.nodes.length)
    ]
  } catch (error) {
    logger.log(error)
    throw new ServiceDiscoveryError()
  }
}

const invalidateCache = () => {
  blockchainCache.lastChecked = moment(0)
  recoveryCache.lastChecked = moment(0)
}

const _parseServicesForNodes = async (
  serviceDiscovery,
  type,
  environment = TESTNET
) => {
  let nodes = []

  if (type === RECOVERY) {
    for (const node of Object.values(
      serviceDiscovery.recovery[environment].nodes
    )) {
      nodes.push(node.api)
    }
  } else {
    for (const node of Object.values(
      serviceDiscovery.networks[environment].nodes
    )) {
      nodes.push(node.api)
    }
  }
  return nodes
}

export default {
  getBlockchainServiceNode,
  getRecoveryServiceNode,
  invalidateCache
}
