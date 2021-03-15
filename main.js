import Account from './src/model/Account'
import Wallet from './src/model/Wallet'
import { TransferTransaction } from './src/transactions/TransferTransaction'
import Transaction from './src/transactions/Transaction'
require('./test/wasmHelper')


const foo = async function() { // async function expression assigned to a variable
    var account = new Account()
    account.address = 'ndab9wi3ntgtmwa63pv6awzhw8ihsh3nkz9c2c8545k3mr27'
    let wallet = new Wallet()
    wallet.walletId = 'foobar'
    wallet.walletName = 'foobar'
    console.log('wallet.constructor is ' + wallet.constructor)
    console.log('wallet.constructor is object ' + (wallet.constructor === Wallet))
    var transferTransaction = new TransferTransaction(
        wallet,
        account,
        'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
        1.0
    )
    await transferTransaction.create()
    await transferTransaction.sign()
    await transferTransaction.prevalidate()
    var key = await Keyaddr.fromString('npvta8jaftcjebwkgbkffwdcp2pxg37gddgq28mywvsmdv9zvkvnr7iah2zpdpppwbbmfvgsaaaaahnhtd2xftpqdtaeqiagj76mtpcxdfitgsxyfw99xibn28ib5ggypvqa25tfv5iv')
    console.log('key = ' + JSON.stringify(key))
    var edKey = await Keyaddr.newEdKey()
    console.log('ed key = ' + JSON.stringify(edKey))
}

foo()