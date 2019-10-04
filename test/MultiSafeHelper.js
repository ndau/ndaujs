import MultiSafeHelper from '../src/helpers/MultiSafeHelper'
import KeyPathHelper from '../src/api/helpers/KeyPathHelper'
import GeneralStore from '../src/stores/GeneralStore'
import MockAsyncStorage from 'mock-async-storage'
import { expect } from 'chai'
require('./wasmHelper')
// Do not remove this line. The class is initailized here
// but it is used in other files.
GeneralStore.setStore(new MockAsyncStorage())

const wantUser = {
  userId: 'Kris',
  wallets: {
    '61d9b642': {
      walletId: 'Kris',
      accountCreationKeyHash: '0bbe4887',
      accounts: {
        ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf: {
          address: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
          addressData: {},
          ownershipKey: '3a1fbd3e',
          validationKeys: []
        },
        ndagkm3z5crs9gg89x4by6pnw4yz8d7f9xrqqegptearhyh5: {
          address: 'ndagkm3z5crs9gg89x4by6pnw4yz8d7f9xrqqegptearhyh5',
          addressData: {},
          ownershipKey: '6a63eb2b',
          validationKeys: []
        }
      },
      keys: {
        '0bbe4887': {
          publicKey:
            'npuba4jaftckeeb7s5sxfv9yuuqjn9jywnqsf2pbnxn47x8qccnh4gc33q5sstgupuadq8emwaaaabum6ccyh2yfpf2uve6wrp3a6pjp87r9zn64fe38m9x9zndkmapwqfn7xnx2qk8f',
          privateKey:
            'npvta8jaftcjebyekicu6y4n9r9jwfcmjju6zbxbz5zhdvvzh7g97mq94qc6mba2ia5ztc7aaaaanu9asxt8ftmjqew3hfd5qihdkmrzm975hgtjgru97r75a4u2dpdtkbxbj4m7v9ak',
          path: "/44'/20036'/100"
        },
        '3a1fbd3e': {
          publicKey:
            'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq',
          privateKey:
            'npvta8jaftcjebwkgbkffwdcp2pxg37gddgq28mywvsmdv9zvkvnr7iah2zpdpppwbbmfvgsaaaaahnhtd2xftpqdtaeqiagj76mtpcxdfitgsxyfw99xibn28ib5ggypvqa25tfv5iv',
          path: "/44'/20036'/100/1"
        },
        '6a63eb2b': {
          publicKey:
            'npuba4jaftckeebk5wvg7fi3ia5dmcydqxdtc6zasjf2dmtabkd9ftedrwj7rrhy26aefnyn4aaaaabnqinqraqswdcktvpunbss2izhctq88n4b9639te6932fri5pz5fpgn4feisaa',
          privateKey:
            'npvta8jaftcjed5vwieymfjhh775whsiyvue6xwvqd5hfhzuuwguinihjhsdzphiebbmfvgsaaaaamduddv2dwfa2uwn5nvanegcf32wmzzvgsr9gr6jhh8qbm4g5p83m65y7bvpw7iy',
          path: "/44'/20036'/100/2"
        }
      }
    }
  }
}

const numberOfAccounts = 2
let recoveryPhraseString = 'use use use use use use use use use use use use'
const recoveryPhraseBytes = 'ZWEQAwQFBgcICQoLDA0ODw=='
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

describe('Multisafe', () => {
  it('setupNewUser creates a MultiSafe and we can then retrieve with password', async () => {
    const walletId = 'Kris'
    const encryptionPassword = 'asdfjkl'

    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletId,
      numberOfAccounts,
      encryptionPassword
    )

    // make sure you can get it back with password and recovery phrase
    const gotUser = await MultiSafeHelper.getDefaultUser(encryptionPassword)
    console.log('\n\ncreated user', JSON.stringify(gotUser, null, 2))
    console.log('\n\nwhat we wanted', JSON.stringify(wantUser, null, 2))
    expect(gotUser).to.deep.equal(wantUser)
  })
  /*
  it('setupTestUser creates a MultiSafe and we can then retrieve with recovery phrase', async () => {
    const walletId = 'Kris'
    const encryptionPassword = 'asdfjkl'
    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletId,
      numberOfAccounts,
      encryptionPassword
    )

    // make sure you can get it back with password and recovery phrase
    const user = await MultiSafeHelper.getDefaultUser(recoveryPhraseString)

    expect(user).to.deep.equal(wantUser)
  })
*/
  it('setupTestUser creates a MultiSafe and we can then retrieve with recovery phrase', async () => {
    const wantUser = {
      userId: 'Kris',
      wallets: {
        '61d9b642': {
          walletId: 'Kris',
          accountCreationKeyHash: '0bbe4887',
          accounts: {
            ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf: {
              address: 'ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf',
              addressData: {},
              ownershipKey: '3a1fbd3e',
              validationKeys: []
            }
          },
          keys: {
            '0bbe4887': {
              publicKey:
                'npuba4jaftckeeb7s5sxfv9yuuqjn9jywnqsf2pbnxn47x8qccnh4gc33q5sstgupuadq8emwaaaabum6ccyh2yfpf2uve6wrp3a6pjp87r9zn64fe38m9x9zndkmapwqfn7xnx2qk8f',
              privateKey:
                'npvta8jaftcjebyekicu6y4n9r9jwfcmjju6zbxbz5zhdvvzh7g97mq94qc6mba2ia5ztc7aaaaanu9asxt8ftmjqew3hfd5qihdkmrzm975hgtjgru97r75a4u2dpdtkbxbj4m7v9ak',
              path: "/44'/20036'/100"
            },
            '3a1fbd3e': {
              publicKey:
                'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq',
              privateKey:
                'npvta8jaftcjebwkgbkffwdcp2pxg37gddgq28mywvsmdv9zvkvnr7iah2zpdpppwbbmfvgsaaaaahnhtd2xftpqdtaeqiagj76mtpcxdfitgsxyfw99xibn28ib5ggypvqa25tfv5iv',
              path: "/44'/20036'/100/1"
            }
          }
        }
      }
    }
    const walletId = 'Kris'
    const encryptionPassword = 'asdfjkl'
    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletId,
      1,
      encryptionPassword
    )

    // make sure you can get it back with password and recovery phrase
    const user = await MultiSafeHelper.getDefaultUser(recoveryPhraseString)

    expect(user).to.deep.equal(wantUser)

    await MultiSafeHelper.saveUser(user, encryptionPassword)

    const theNewUser = await MultiSafeHelper.getDefaultUser(encryptionPassword)
    expect(theNewUser).to.deep.equal(user)
  })

  it('setupTestUser creates a MultiSafe, retrieve with recovery and then resetPassword', async () => {
    const walletId = 'Kris'
    const encryptionPassword = 'asdfjkl'
    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletId,
      numberOfAccounts,
      encryptionPassword
    )

    // make sure you can get it back with password and recovery phrase
    const user = await MultiSafeHelper.getDefaultUser(recoveryPhraseString)

    expect(user).to.deep.equal(wantUser)

    const newPassword = '123abc'
    await MultiSafeHelper.resetPassword(recoveryPhraseString, newPassword)

    const userFromNewPassword = await MultiSafeHelper.getDefaultUser(
      newPassword
    )

    expect(userFromNewPassword).to.deep.equal(wantUser)

    const anotherPassword = 'asdfasdf'
    await MultiSafeHelper.resetPassword(recoveryPhraseString, anotherPassword)

    const userFromNewPassword1 = await MultiSafeHelper.getDefaultUser(
      anotherPassword
    )

    expect(userFromNewPassword1).to.deep.equal(wantUser)

    try {
      // original password is gone
      await MultiSafeHelper.getDefaultUser(newPassword)
      expect('should never get here').toBeFalsy()
    } catch (err) {
      expect(err).to.exist
    }

    try {
      // original password is gone
      await MultiSafeHelper.getDefaultUser(encryptionPassword)
      expect('should never get here').toBeFalsy()
    } catch (err) {
      expect(err).to.exist
    }
  })

  it('addNewWallet adds a new wallet to an existing user in a safe', async () => {
    const walletIdNew = 'Kris'
    const encryptionPasswordNew = 'asdfasdf'

    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletIdNew,
      numberOfAccounts,
      encryptionPasswordNew
    )

    // make sure you can get it back with password and recovery phrase
    const user = await MultiSafeHelper.getDefaultUser(encryptionPasswordNew)

    expect(user).to.deep.equal(wantUser)

    const anotherWalletId = 'Jill'

    await MultiSafeHelper.addNewWallet(
      user,
      recoveryPhraseString,
      anotherWalletId,
      walletIdNew,
      numberOfAccounts,
      encryptionPasswordNew
    )

    const userWithNewWallet = await MultiSafeHelper.getDefaultUser(
      recoveryPhraseString
    )

    expect(Object.keys(userWithNewWallet.wallets).length).to.equal(2)
  })

  it('if you can check that a recovery phrase exists already', async () => {
    const walletIdNew = 'Kris'
    const encryptionPasswordNew = 'asdfasdf'

    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletIdNew,
      numberOfAccounts,
      encryptionPasswordNew
    )

    expect(
      await MultiSafeHelper.recoveryPhraseAlreadyExists(
        'Kris',
        recoveryPhraseString
      )
    ).to.be.ok
    expect(
      await MultiSafeHelper.recoveryPhraseAlreadyExists(
        'Kris',
        'this twelve word phrase is not already in the multisafe at all'
      )
    ).to.not.be.ok
  })
})
