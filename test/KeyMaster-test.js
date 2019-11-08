import KeyMaster from 'src/helpers/KeyMaster'
import User from 'src/model/User'
import AppConfig from 'src/constants/config'
import Wallet from 'src/model/Wallet'
import MockHelper from 'test/api/helpers/MockHelper'
import AppConstants from 'src/constants/constants'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import GeneralStore from '../src/stores/GeneralStore'
import MockAsyncStorage from 'mock-async-storage'
require('./wasmHelper')

// Do not remove this line. The class is initailized here
// but it is used in other files.
GeneralStore.setStore(new MockAsyncStorage())

chai.use(chaiAsPromised)

let seedPhraseArray = [
  'goat',
  'amount',
  'liar',
  'amount',
  'expire',
  'adjust',
  'cage',
  'candy',
  'arch',
  'gather',
  'drum',
  'buyer'
]
const userId = 'TAC-3PY'
const numberOfAccounts = 5
const chainId = 'tn'
const errorString = 'Error: you MUST pass recoveryBytes to this method'
const errorNewAccountUser = `Error: The user's wallet passed in has no accountCreationKeyHash`
const errorGetRootAddresses = 'Error: you MUST pass rootPrivateKey'
const errorGetBIP44Addresses = 'Error: you MUST pass rootPrivateKey'
let recoveryPhraseString =
  'goat amount liar amount expire adjust cage candy arch gather drum buyer'
const bytes = 'ZWEQAwQFBgcICQoLDA0ODw=='
const initialPrivateKey =
  'npvt8aaaaaaaaaaaadyj632qv3ip7jhi66dxjzdtbvabf2nrrupjaqignfha5smckbu4nagfhwce3f9gfutkhmk5weuicjwyrsiax8qgq56bnhg5wrb6uwbigqk3bgw3'
const bip44hardenedPrivateKey =
  'npvt8ard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkah8hjr9cnqmrxn4a9rcrzu9yerbyhhykt6nq586kyw8t2g3kkbk5a6m4pa'
const publicKey =
  'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj44'
const childPrivate100 =
  'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx'
const deriveFromKey =
  'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf'
const address = 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac'

const testWallet7MP4FVStart = {
  walletId: 'Wallet 1',
  accountCreationKeyHash: '308c3bc3',
  accounts: {
    ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze: {
      address: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
      addressData: {
        balance: 338699,
        validationKeys: [
          'npuba4jaftckeeba47fzizq3gs2vnnawj329tkiuh4xi2u8gurh3y2vu8jgbvndeh9sieut3eaaaaaaxrtumjidjk2y6fcdsb6rdy5gc9yfptsexhan92ch373d52z7y8izmz8j7rddg',
          'npuba8jadtbbeac7cpavqfv555pi4wbdznse8ta5g4xdz6ehc35fmxaei7zc9j9sgxjcx893wh23',
          'npuba8jadtbbec9vnei6qnxcczpsw6wjbmejt2scwqbaa9axxdxf3znry482gaz5r9u6mbmz3uz4'
        ],
        validationScript: 'oAAgiA==',
        rewardsTarget: null,
        incomingRewardsFrom: [
          'ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4'
        ],
        delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
        lock: {
          noticePeriod: '3m',
          unlocksOn: '2019-09-08T12:48:04Z',
          bonus: 10000000000
        },
        lastEAIUpdate: '2019-06-11T00:53:09Z',
        lastWAAUpdate: '2019-06-11T00:53:09Z',
        weightedAverageAge: '2dt13h39m19s958562us',
        sequence: 39,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: {
          period: 't1h',
          changes_at: null,
          next: null
        },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: 'ddb5fb2c',
      validationKeys: []
    },
    ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4: {
      address: 'ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4',
      addressData: {
        balance: 95950000,
        validationKeys: [
          'npuba4jaftckeebijwfxqwdyk3nt9bjxek7dq2mx2kjfgpbkq7dmrpa3rep5bsp3362idhqsyaaaaabaff879kt39fvjd7nntqutczzu2hm6u7vr73uutw3gqjxeqvgyjzf2es8ry7fi',
          'npuba8jadtbbeckdfcbf2jy9eq7xmxfyehvxajxyxeuusjcjasu4aqz9iyvtz8txapsisybygqpn',
          'npuba8jadtbbec9vnei6qnxcczpsw6wjbmejt2scwqbaa9axxdxf3znry482gaz5r9u6mbmz3uz4'
        ],
        validationScript: 'oAAgiA==',
        rewardsTarget: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
        incomingRewardsFrom: null,
        delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
        lock: {
          noticePeriod: '1y25d',
          unlocksOn: '2019-06-26T00:00:00Z',
          bonus: 30000000000
        },
        lastEAIUpdate: '2019-06-11T00:53:09Z',
        lastWAAUpdate: '2018-06-01T00:00:00Z',
        weightedAverageAge: '1y10dt14h27m19s877005us',
        sequence: 74,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: {
          period: 't1h',
          changes_at: null,
          next: null
        },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: 'f5b17631',
      validationKeys: []
    },
    ndafxgxquvuzrmrungp3kgn5jnsgptxd7th67ymxxwsscech: {
      address: 'ndafxgxquvuzrmrungp3kgn5jnsgptxd7th67ymxxwsscech',
      addressData: {
        balance: 1000000,
        validationKeys: null,
        validationScript: null,
        rewardsTarget: null,
        incomingRewardsFrom: null,
        delegationNode: null,
        lock: null,
        lastEAIUpdate: '2019-05-30T18:13:35Z',
        lastWAAUpdate: '2019-05-30T18:13:35Z',
        weightedAverageAge: '11dt20h13m44s358385us',
        sequence: 0,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: {
          period: 't1h',
          changes_at: null,
          next: null
        },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: '358fffef',
      validationKeys: []
    },
    ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3: {
      address: 'ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3',
      addressData: {
        balance: 10875547,
        validationKeys: [
          'npuba4jaftckeeb4v85jps39h79f8kfw8tnje2mx2b7496e99s5e3dk5mq8fefsfffsfzti4gaaaaaa3k3zqrfz6pe9gde3pa5yxjc9dz6aet25zpuyryy986fybetmgn9u224i4jp5t'
        ],
        validationScript: null,
        rewardsTarget: null,
        incomingRewardsFrom: null,
        delegationNode: 'ndahnsxr8zh7r6u685ka865wz77wb78xcn45rgskpeyiwuza',
        lock: {
          noticePeriod: '3m',
          unlocksOn: '2019-08-19T20:09:01Z',
          bonus: 10000000000
        },
        lastEAIUpdate: '2019-06-11T00:53:06Z',
        lastWAAUpdate: '2019-05-21T13:19:45Z',
        weightedAverageAge: '21dt1h7m34s594652us',
        sequence: 7,
        stake_rules: null,
        costakers: {},
        holds: null,
        recourseSettings: {
          period: 't1h',
          changes_at: null,
          next: null
        },
        currencySeatDate: null,
        parent: null,
        progenitor: null
      },
      ownershipKey: 'f2fb495a',
      validationKeys: ['b837699c']
    }
  },
  keys: {
    '308c3bc3': {
      publicKey:
        'npuba4jaftckeebbp4w4zhfx276c6c7sg36q48ebtaj9wr93qu5r9jyfv44z2gw649id7axp8aaaabufyh7wbsk8zfc2khpmk8s5xcvfexc8j4d3h8tj7w65f3kx9w3ee3jr68zj8snb',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100",
      derivedFromRoot: 'yes'
    },
    ddb5fb2c: {
      publicKey:
        'npuba4jaftckeebgxwhzw2mir4czjkuwyp7g9vpsh4bx9t5dym87h8gbkbqinmjqdjaebgfnuaaaaabciwbqfusup9mpmwwi95p9diatshqegkq4j8jwyd7qayid9tvy64uig6he34ei',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/2",
      derivedFromRoot: 'yes'
    },
    f5b17631: {
      publicKey:
        'npuba4jaftckeebetgbepdnd9i99mwmtj8cjphfwnec3z2shy6dyu6t2mt8zkxg86i2ebgfnuaaaaaax7xqpbtrwsj896d6izqqw4nbzw3gde4ygc58rfzzwcxxrxrgvdhcrf7izg49q',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/1",
      derivedFromRoot: 'yes'
    },
    '358fffef': {
      publicKey:
        'npuba4jaftckeebd3kvpv4ngpqi6ne5ti9a47ryu4kvqb7qan84y7wut5n34bue7g72ebgfnuaaaaacbd87ke2nj35yyd532fzhcjg3mbfywdyef8ncxjbtjesshgt2qa7jy38nu9hi7',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/4",
      derivedFromRoot: 'yes'
    },
    f2fb495a: {
      publicKey:
        'npuba4jaftckeeb6kcdj4hngiv8b4is4z2h3hwzypq9etkvnpjn8483uq43i99rsf82ebgfnuaaaaabs4jwv9k8dnth46qyzjsmw6cfqgy6ipvqb4hky8gwtg9tpe22yijbdg4sw4i5u',
      privateKey: '*suppressed*',
      path: "/44'/20036'/100/3",
      derivedFromRoot: 'yes'
    },
    b837699c: {
      publicKey:
        'npuba4jaftckeeb4v85jps39h79f8kfw8tnje2mx2b7496e99s5e3dk5mq8fefsfffsfzti4gaaaaaa3k3zqrfz6pe9gde3pa5yxjc9dz6aet25zpuyryy986fybetmgn9u224i4jp5t',
      privateKey: 'validation5',
      path: "/44'/20036'/100/10000/3/5",
      derivedFromRoot: 'yes'
    }
  }
}

describe('KeyMaster', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI()
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
  })

  it('createFirstTimeUser', async () => {
    const firstTimeUser = await KeyMaster.createFirstTimeUser(
      bytes,
      userId,
      chainId,
      numberOfAccounts
    )
    expect(firstTimeUser).to.not.be.undefined
  })

  it('createFirstTimeUser with 0, as this will be possible post Genesis', async () => {
    const firstTimeUser = await KeyMaster.createFirstTimeUser(
      bytes,
      userId,
      chainId,
      numberOfAccounts
    )
    console.log('OBJECT', JSON.stringify(firstTimeUser, null, 2))
    expect(firstTimeUser).to.deep.equal({
      userId: 'TAC-3PY',
      wallets: {
        c79af3b6: {
          walletId: 'TAC-3PY',
          walletName: 'TAC-3PY',
          accountCreationKeyHash: '5e278574',
          accounts: {
            ndapy2ddjq4uva878mzmru43t4k2cbpbehnnj6vkq6k5h77i: {
              address: 'ndapy2ddjq4uva878mzmru43t4k2cbpbehnnj6vkq6k5h77i',
              addressData: {},
              ownershipKey: '14ace732',
              validationKeys: []
            },
            ndah2fytyxsrtcw4fpdccva2xxmkgmhbivxzin3tnxt3nemz: {
              address: 'ndah2fytyxsrtcw4fpdccva2xxmkgmhbivxzin3tnxt3nemz',
              addressData: {},
              ownershipKey: '4f4b4919',
              validationKeys: []
            },
            ndaef5tvzkjcezu9hu5zpmjrk9fh6irczg9urhwf5apzu4pf: {
              address: 'ndaef5tvzkjcezu9hu5zpmjrk9fh6irczg9urhwf5apzu4pf',
              addressData: {},
              ownershipKey: '9684ef81',
              validationKeys: []
            },
            ndabpg6ecxd5ta88rr5andgu995cie2geujs7zg7z285uija: {
              address: 'ndabpg6ecxd5ta88rr5andgu995cie2geujs7zg7z285uija',
              addressData: {},
              ownershipKey: 'e4b96567',
              validationKeys: []
            },
            ndar4t7ium24z2dn7dkzfjfp7qw5c9kb47ban4v92kfxz9uf: {
              address: 'ndar4t7ium24z2dn7dkzfjfp7qw5c9kb47ban4v92kfxz9uf',
              addressData: {},
              ownershipKey: '445ba50e',
              validationKeys: []
            }
          },
          keys: {
            '5e278574': {
              publicKey:
                'npuba4jaftckeeb3b9tvrwyypqsz8262jygzgdspwd5ni6bp6mhtquwjw9bv7s77m4sdsv6fcaaaabuqw83ge26vsknq83hhi2cptvcxj2hdx9en8wztz6qvtw6cd9drrg86iy2mz9m5',
              privateKey:
                'npvta8jaftcject9fujgj9a2dxhnpnh969syrhnycfcgfm8939hyfp8r57the8x4aa6e9bisaaaanvxhyjtghe6cvdzyj34gavnn2xkqb27r3dhxf6p9dw6phas92553zcnfy3mcjv2a',
              path: "/44'/20036'/100",
              derivedFromRoot: 'yes'
            },
            '14ace732': {
              publicKey:
                'npuba4jaftckeebzrdbry6tmb6gsv8n54anwt9gu5es7mffqfi7s6kz7nrnx6zdtssse3u4n6aaaaaaw3gtqed4duqjnrq7s4ddaahe459hs27g8qs3tuck8hqn62rcee9wftcb95u2k',
              privateKey:
                'npvta8jaftcjec7akbpytfsrmbc53skthxzkpx4wdcwi6unnvxzup2kckpjyzgvfqbgnyvhaaaaaafgjwmta8s6vumd5zngs22ab3gy936ghjzvwgnnsuzt5vhgd2tbh7upip7sysdiu',
              path: "/44'/20036'/100/1",
              derivedFromRoot: 'yes'
            },
            '4f4b4919': {
              publicKey:
                'npuba4jaftckeeb67chzp9nrnkmsmayf7xznay8c4kbzcpkxwvq5bqfaq2drrgxv28se3u4n6aaaaabrdkewb3r2jm25vigqpin6xqk92d22fwgwudre3wne54g7zggy6gfzc9biskp6',
              privateKey:
                'npvta8jaftcjech9hp5f6dgtkct9trvk5x84gwi594wzj7p7ipqb7wfsdmabgvm9cbgnyvhaaaaaam24tfaqm8ck8g64bvvkdhfmuz8a8gbpbxes53gpdbg8tzp3txzbsp44xnzrdmtz',
              path: "/44'/20036'/100/2",
              derivedFromRoot: 'yes'
            },
            '9684ef81': {
              publicKey:
                'npuba4jaftckeebixzmh2tuqztg8j2w76zgmwk78t62pmni9a5rs945gyhjqnwhrv8se3u4n6aaaaab8kkeme6gi7f8hxw6rajwbt3s5bb2rjvtbgk8y9rrqbks5q7pgjv53f6fd3544',
              privateKey:
                'npvta8jaftcjec76mcxkzr227gb8qmbv97kw94cicvn9zt4ifesaqddwyvp8kwb44bgnyvhaaaaaaruutc3hbuhjrt7phd2cpanqng2iqd4n6ijuzxz555skwg5zmjun88hhqbkvahw3',
              path: "/44'/20036'/100/3",
              derivedFromRoot: 'yes'
            },
            e4b96567: {
              publicKey:
                'npuba4jaftckeebnjxduy6hnjizka2ut944d97nibghpb7kibgpj4h7a3k48in2j78se3u4n6aaaaaca8uis2t7nbqbpmbfhgr9r4qfd95ssyzd87ph72dji5ukfv9aksu3mjehhidgb',
              privateKey:
                'npvta8jaftcjecfcp334g9ynz8hsxp9j2mpfmvmkbe62m7ztjzg4vckyz4ndsqptcbgnyvhaaaaaashwuegermamsmk2jj3v958vti986efx29zmj9qa4kg6utn92cwezxtqc6vcxpyp',
              path: "/44'/20036'/100/4",
              derivedFromRoot: 'yes'
            },
            '445ba50e': {
              publicKey:
                'npuba4jaftckeebjbitap9c2zspa2q8tsm5mt7jaqiifd74a2e36yisqwgy82cg9xmie3u4n6aaaaacujn4769vm6szprvj3ensvxxe6pmznkmvmw22wx63ak54p5a2ddh3tb83a3khk',
              privateKey:
                'npvta8jaftcjebx6jqhm3eud2uguchxa66ghfzep65j7gch9nyys8fete4h59t7m8bgnyvhaaaaaawumgzrh649ef5m64qjdee7pjhdk75cu647ggffrgicy8vq2ga238pqm5w29q9rw',
              path: "/44'/20036'/100/5",
              derivedFromRoot: 'yes'
            }
          }
        }
      }
    })
  })

  it('createFirstTimeUser no bytes', async () => {
    expect(KeyMaster.createFirstTimeUser(null, userId, chainId)).to.be.rejected
  })

  it('createNewAccount', async () => {
    const firstTimeUser = await KeyMaster.createFirstTimeUser(
      bytes,
      userId,
      chainId,
      numberOfAccounts
    )
    expect(firstTimeUser).to.not.be.undefined
    const wallet = firstTimeUser.wallets['c79af3b6']
    expect(Object.keys(wallet.accounts).length).to.equal(5)
    await KeyMaster.createNewAccount(wallet)
    expect(Object.keys(wallet.accounts).length).to.equal(6)
    expect(
      wallet.accounts['ndabpg6ecxd5ta88rr5andgu995cie2geujs7zg7z285uija']
        .address
    ).to.equal('ndabpg6ecxd5ta88rr5andgu995cie2geujs7zg7z285uija')
  })

  it('createNewAccount has bogus user', async () => {
    try {
      const user = new User()
      user.userId = 'blahblah'
      const wallet = new Wallet()
      user.wallets[user.userId] = wallet
      await KeyMaster.createNewAccount(wallet)
    } catch (error) {
      expect(error.toString()).to.equal(errorNewAccountUser)
    }
  })

  it('test getRootAddresses to make sure we get back one address in the array', async () => {
    const addresses = await KeyMaster.getRootAddresses(
      initialPrivateKey,
      1,
      AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
    )

    console.log('ADDRESSES HERE', addresses)
    expect(Object.keys(addresses).length).to.equal(
      AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
    )
    expect(Object.values(addresses)[0]).to.equal('/1')
  })

  it('getRootAddresses has an error', async () => {
    try {
      await KeyMaster.getRootAddresses(null)
    } catch (error) {
      expect(error.toString()).to.equal(errorGetRootAddresses)
    }
  })

  it('test getBIP44Addresses to make sure we get back one address in the array', async () => {
    const addresses = await KeyMaster.getBIP44Addresses(
      initialPrivateKey,
      1,
      AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
    )
    expect(Object.keys(addresses).length).to.equal(
      AppConfig.NUMBER_OF_KEYS_TO_GRAB_ON_RECOVERY
    )
    expect(Object.values(addresses)[0]).to.equal(`/44'/20036'/100/1`)
  })

  it('getBIP44Addresses has an error', async () => {
    try {
      await KeyMaster.getBIP44Addresses(null)
    } catch (error) {
      expect(error.toString()).to.equal(errorGetBIP44Addresses)
    }
  })

  it('getPublicKeyFromHash test', async () => {
    const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
    const account =
      wallet.accounts['ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3']

    const publicKey = KeyMaster.getPublicKeyFromHash(
      wallet,
      account.validationKeys[0]
    )
    expect(
      'npuba4jaftckeeb4v85jps39h79f8kfw8tnje2mx2b7496e99s5e3dk5mq8fefsfffsfzti4gaaaaaa3k3zqrfz6pe9gde3pa5yxjc9dz6aet25zpuyryy986fybetmgn9u224i4jp5t'
    ).to.equal(publicKey)
  })

  it('getPrivateKeyFromHash test', async () => {
    const wallet = JSON.parse(JSON.stringify(testWallet7MP4FVStart))
    const account =
      wallet.accounts['ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3']

    const privateKey = KeyMaster.getPrivateKeyFromHash(
      wallet,
      account.validationKeys[0]
    )
    expect(privateKey).to.equal('validation5')
  })

  describe('createAccount', () => {
    let sandbox
    before(() => {
      sandbox = sinon.createSandbox()
      sandbox.spy(Keyaddr)
    })
    after(() => {
      sandbox.restore()
    })
    it('_createAccount test when empty string called will use root key', async () => {
      const firstTimeUser = await KeyMaster.createFirstTimeUser(
        bytes,
        userId,
        chainId,
        numberOfAccounts
      )

      const countBeforeCall = Keyaddr.newKey.callCount
      await KeyMaster.addAccounts(
        firstTimeUser.wallets['c79af3b6'],
        initialPrivateKey,
        1,
        '',
        AppConstants.MAINNET_ADDRESS,
        bytes
      )

      expect(Keyaddr.newKey.callCount).to.equal(countBeforeCall + 1)
    })
  })

  it('createAccountFromPath should add to wallets if passed', async () => {
    const user = {
      userId: 'temp-id',
      wallets: {
        a7bff20a: {
          walletId: 'temp-id',
          accountCreationKeyHash: '716ee87c',
          accounts: {
            ndah7dmb2dsufay2fes8nrh94iy27b6kfrdnqzekj49x2fx8: {
              address: 'ndah7dmb2dsufay2fes8nrh94iy27b6kfrdnqzekj49x2fx8',
              addressData: {},
              ownershipKey: 'bf69b8d9',
              validationKeys: []
            },
            ndaewqeeamz9tad4jqvvszd2suz7iyimay7a82fphjg67pm8: {
              address: 'ndaewqeeamz9tad4jqvvszd2suz7iyimay7a82fphjg67pm8',
              addressData: {},
              ownershipKey: '5b74da2e',
              validationKeys: []
            },
            ndahm67vctjjvxdeh4phxy6j5agf9ps9qhzw4mw6r4wppuq5: {
              address: 'ndahm67vctjjvxdeh4phxy6j5agf9ps9qhzw4mw6r4wppuq5',
              addressData: {},
              ownershipKey: '65556d76',
              validationKeys: []
            },
            ndacp6s7qm44p2iiyu4n4xc9wu62h8j8ttmzwbgm7z2yy645: {
              address: 'ndacp6s7qm44p2iiyu4n4xc9wu62h8j8ttmzwbgm7z2yy645',
              addressData: {},
              ownershipKey: '7fb54752',
              validationKeys: []
            }
          },
          keys: {
            '716ee87c': {
              publicKey: '',
              privateKey:
                'npvta8jaftcjecyu8ure5xqewhznf6rkdgdp5tfwsgupd4e3nvnc6m3i96i2d29sqa2mwwhaaaaanvin6betzynuxq4ds2dg64xah8qkih23hcisumgchfg6xqjztr7ufze5t867yt3j',
              path: "/44'/20036'/100",
              derivedFromRoot: 'yes'
            },
            bf69b8d9: {
              publicKey:
                'npuba4jaftckeebm82py89d5terpugp9tqvycvxsxxuirhcsydtq74d3hv7e5wbtrksezxhv4aaaaaay4v4qykgp323gb8iaq9gcvh4eka6vexqabuqqe9yngk2iavv7qw66j7raient',
              privateKey:
                'npvta8jaftcjeavyyhyzcebu7zbwf82v6n36hshm9xxmcdbjmus5usufqfbpsph5kbf7j68saaaaafyw8vxutvqqgjsruadz3sw38tcshe3fmsanvvth7vbuycae69mxg53cge785twv',
              path: "/44'/20036'/100/1",
              derivedFromRoot: 'yes'
            },
            '5b74da2e': {
              publicKey:
                'npuba4jaftckeebp3g9fsqxg6fkhgmqincgbwsjwv3ibtgm8wnv2an589j476scwcp2ezxhv4aaaaabqr9btk25uz5kf7q8vwncj29rm5rq4dn4uszkwwqw258vvmbtfzzzyb76jt9ui',
              privateKey:
                'npvta8jaftcjebgcvzbga8nja2u5hp3xn8p9egrxxf647e6u66k9mynqf4u3dcy8cbf7j68saaaaamv92nkyg6x84trmzw7dauqh54855ys5gwwf4xfdxgg9w642njp76u4ny5p23bzf',
              path: "/44'/20036'/100/2",
              derivedFromRoot: 'yes'
            },
            '65556d76': {
              publicKey:
                'npuba4jaftckeebe8sntt9we2hihubke7d26pu7sghhcb3thq9e73vgsc5rx3fybkaib7ds9yaaaaaa7s8hsyeu6c4k2erzgzauc9crpziahatyk5w2tgcg5859r6jeugwyfduccyzjc',
              privateKey:
                'npvta8jaftcjedu754sd687sn4qdp8ynwewtpszcmvqstkt3an7geys9r4pp7rtygari6h7saaaaahnht6ftezayuybd73x2esz2v5p4ab2epuy7gejsty9y959cjetxfbg28cqert32',
              path: '/1',
              derivedFromRoot: 'yes'
            },
            '7fb54752': {
              publicKey:
                'npuba4jaftckeebxxr3f3kaastha8q4ctvmnrzen5hxwseh4ymdyfujizfufd4hanqsb7ds9yaaaaabms93t5sufmk5fgvr3667pbir7wn2vqkmqp73e562edzfxa53ci8jn8hen6zus',
              privateKey:
                'npvta8jaftcjeai3ukgdv2p2p7wbj39aqdbnrj9dej3r3z2dzrxrs4kngg6f2dhi6ari6h7saaaaak6h8nq6etk4y3jw58rhhmikd9pdge5uu5vrqjg9gba73pig8iuhvwvhtu95tk56',
              path: '/2',
              derivedFromRoot: 'yes'
            }
          }
        }
      }
    }

    const wallet = await KeyMaster.createAccountFromPath(
      user.wallets['a7bff20a'],
      `/44'/20036'/100/20`
    )

    expect(Object.keys(user.wallets['a7bff20a'].accounts).length).to.equal(5)
    expect(Object.keys(user.wallets['a7bff20a'].keys).length).to.equal(6)
  })
})
