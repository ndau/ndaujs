/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import MultiSafeHelper from '../src/helpers/MultiSafeHelper'
import { expect } from 'chai'

require('./wasmHelper')

const wantUser = {
  userId: 'Josh',
  wallets: {
    '300648ce': {
      walletId: 'Josh',
      walletName: 'Josh',
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
          derivedFromRoot: 'yes',
          publicKey:
            'npuba4jaftckeeb7s5sxfv9yuuqjn9jywnqsf2pbnxn47x8qccnh4gc33q5sstgupuadq8emwaaaabum6ccyh2yfpf2uve6wrp3a6pjp87r9zn64fe38m9x9zndkmapwqfn7xnx2qk8f',
          privateKey:
            'npvta8jaftcjebyekicu6y4n9r9jwfcmjju6zbxbz5zhdvvzh7g97mq94qc6mba2ia5ztc7aaaaanu9asxt8ftmjqew3hfd5qihdkmrzm975hgtjgru97r75a4u2dpdtkbxbj4m7v9ak',
          path: "/44'/20036'/100"
        },
        '3a1fbd3e': {
          derivedFromRoot: 'yes',
          publicKey:
            'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq',
          privateKey:
            'npvta8jaftcjebwkgbkffwdcp2pxg37gddgq28mywvsmdv9zvkvnr7iah2zpdpppwbbmfvgsaaaaahnhtd2xftpqdtaeqiagj76mtpcxdfitgsxyfw99xibn28ib5ggypvqa25tfv5iv',
          path: "/44'/20036'/100/1"
        },
        '6a63eb2b': {
          derivedFromRoot: 'yes',
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

describe('Multisafe', () => {
  it('setupNewUser creates a MultiSafe and we can then retrieve with password', async () => {
    const walletId = 'Josh'
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
    expect(gotUser).to.deep.equal(wantUser)
  })

  it('setupTestUser creates a MultiSafe and we can then retrieve with recovery phrase', async () => {
    const wantUser = {
      userId: 'Josh',
      wallets: {
        '300648ce': {
          walletId: 'Josh',
          walletName: 'Josh',
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
              derivedFromRoot: 'yes',
              publicKey:
                'npuba4jaftckeeb7s5sxfv9yuuqjn9jywnqsf2pbnxn47x8qccnh4gc33q5sstgupuadq8emwaaaabum6ccyh2yfpf2uve6wrp3a6pjp87r9zn64fe38m9x9zndkmapwqfn7xnx2qk8f',
              privateKey:
                'npvta8jaftcjebyekicu6y4n9r9jwfcmjju6zbxbz5zhdvvzh7g97mq94qc6mba2ia5ztc7aaaaanu9asxt8ftmjqew3hfd5qihdkmrzm975hgtjgru97r75a4u2dpdtkbxbj4m7v9ak',
              path: "/44'/20036'/100"
            },
            '3a1fbd3e': {
              derivedFromRoot: 'yes',
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
    const walletId = 'Josh'
    const encryptionPassword = 'asdfjkl'
    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletId,
      1,
      encryptionPassword
    )

    // make sure you can get it back with password and recovery phrase
    const gotUser = await MultiSafeHelper.getDefaultUser(recoveryPhraseString)

    expect(gotUser).to.deep.equal(wantUser)

    await MultiSafeHelper.saveUser(gotUser, encryptionPassword)

    const theNewUser = await MultiSafeHelper.getDefaultUser(encryptionPassword)
    expect(theNewUser).to.deep.equal(gotUser)
  })

  it('setupTestUser creates a MultiSafe, retrieve with recovery and then resetPassword', async () => {
    const walletId = 'Josh'
    const encryptionPassword = 'asdfjkl'
    await MultiSafeHelper.setupNewUser(
      null,
      recoveryPhraseString,
      walletId,
      numberOfAccounts,
      encryptionPassword
    )

    // make sure you can get it back with password and recovery phrase
    const gotUser = await MultiSafeHelper.getDefaultUser(recoveryPhraseString)

    expect(gotUser).to.deep.equal(wantUser)

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
      expect('should never get here').to.not.be.ok
    } catch (e) {
      expect(e).to.exist
    }

    try {
      // original password is gone
      await MultiSafeHelper.getDefaultUser(encryptionPassword)
      expect('should never get here').to.not.be.ok
    } catch (e) {
      expect(e).to.exist
    }
  })

  it('addNewWallet adds a new wallet to an existing user in a safe', async () => {
    const walletIdNew = 'Josh'
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
    const walletIdNew = 'Josh'
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
        'Josh',
        recoveryPhraseString
      )
    ).to.be.ok
    expect(
      await MultiSafeHelper.recoveryPhraseAlreadyExists(
        'Josh',
        'this twelve word phrase is not already in the multisafe at all'
      )
    ).to.not.be.ok
  })
})
