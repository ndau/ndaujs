import Account from './src/model/Account'
import Wallet from './src/model/Wallet'
import { TransferTransaction } from './src/transactions/TransferTransaction'
import Transaction from './src/transactions/Transaction'
import ValidationKeyMaster from './src/helpers/ValidationKeyMaster'
import { CreateChildAccountTransaction } from './src/transactions/CreateChildAccountTransaction'

require('./test/wasmHelper')

// example creation, signing, and prevalidate of Transfer and CreateChildAccount TX
const testTXs = async function() { // async function expression assigned to a variable
    // create new account, address will be used as source of Transfer
    var account = new Account()
    account.address = 'ndab9wi3ntgtmwa63pv6awzhw8ihsh3nkz9c2c8545k3mr27'
    // create new wallet, only useful if were managing HD keys
    var wallet = new Wallet()
    wallet.walletId = 'foobar'
    wallet.walletName = 'foobar'
    console.log('wallet.constructor is ' + wallet.constructor)
    console.log('wallet.constructor is object ' + (wallet.constructor === Wallet))

    // create new Transfer transaction: account, destination, and qty
    var transferTransaction = new TransferTransaction(
        wallet,
        account,
        'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
        1.0
    )
    console.log('adding validation key for account: ' + account)
    // add new validation keys to this account (they get assigned to TX in create)
    ValidationKeyMaster.addThisValidationKey(account, wallet,
        'npvtayjadtcbidzmaa5s4kqtm55ptjsmgumgzj6abinv2237eqndbxqzyriygpi8x8y662fd8ng8n47jbv88dgf8vwagvrue49uj8sxvmnsbqhqzkhmzmu8mxihh',
        'npuba8jadtbbed7p33skh62p63x4udh76gnm7hiapg9ejx9ev7bmgy3ac6q7qwqzrgiey9qrtswb',
        'foo'
        )
    // add any extra info to TX
    await transferTransaction.create()
    // pass in private key to sign(), in this case its the key we added above, but doesn't have to be
    await transferTransaction.sign(transferTransaction.privateKeyForSigning())
    // prevalidate TX to see if values are OK
    await transferTransaction.prevalidate()
    // if the prevalidate above is successful, we can submit
    // await transferTransaction.submit()

    // new key generation from 32 byte seed
    var edKeySeed = await Keyaddr.newEdKeyFromSeed('6d4a1e8eb29793c2618bc68adf4f5f98641eec6ba776006a4ad8203b46cbb796')
    console.log('ed seed key = ' + JSON.stringify(edKeySeed))

    // new key generation from random seed
    var edKey = await Keyaddr.newEdKey()
    console.log('ed key = ' + JSON.stringify(edKey))

    // create Child Account transaction, 
    var parentAccount = new Account()
    parentAccount.address = 'ndxey7295sv55cxssnxtvq666ua2ajkqs9n8cmhjz29ytijs'
    console.log('adding validation key for account: ' + account)
    ValidationKeyMaster.addThisValidationKey(parentAccount, wallet,
        'npvtayjadtcbicfsk2st53rzus92qdmpctnxv7bwybxxqmzq4qm493u5zwvte7nfsg79sqtv2phaw8kz4s6t53me733w6kw9qn2zbhc322jhnd8er24ym3nsyki4',
        'npuba8jadtbbeap59a7dhs4qbj6xrxb3dzuyj5vvj2xj863tqcqfvtsuq2h6i9txp34fe29hgnh2',
        'foo'
        )
    // same as Transfer above, except create() does more work
    var createChildTransaction = new CreateChildAccountTransaction(
        wallet,
        parentAccount
    )
    await createChildTransaction.create()
    await createChildTransaction.sign(createChildTransaction.privateKeyForSigning())
    await createChildTransaction.prevalidate()
}

testTXs()