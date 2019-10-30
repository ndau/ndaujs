import DataFormatHelper from '../src/api/helpers/DataFormatHelper'
import AppConstants from '../src/constants/constants'
import KeyPathHelper from '../src/api/helpers/KeyPathHelper'
import AppConfig from '../src/constants/config'
import { expect } from 'chai'

describe('DataFormatHelper', () => {
  it('moveTempUserToWalletName must do the needful', async () => {
    const key = DataFormatHelper.create8CharHash(AppConstants.TEMP_ID)
    const user = {
      userId: AppConstants.TEMP_ID,
      wallets: {
        [key]: {
          walletId: AppConstants.TEMP_ID,
          accountCreationKeyHash: '1e48ba8c',
          accounts: {
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
              addressData: {
                nickname: 'Account 1'
              },
              ownershipKey: '9d152ff0',
              validationKeys: []
            },
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
              addressData: {
                nickname: 'Account 2'
              },
              ownershipKey: '1e12ca49',
              validationKeys: []
            }
          },
          keys: {
            '9d152ff0': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
              path: KeyPathHelper.accountCreationKeyPath + '/1',
              derivedFromRoot: 'yes'
            },
            '1e12ca49': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
              path: KeyPathHelper.accountCreationKeyPath + '/2',
              derivedFromRoot: 'yes'
            },
            '1e48ba8c': {
              publicKey: '',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
              path: KeyPathHelper.accountCreationKeyPath,
              derivedFromRoot: 'yes'
            }
          }
        }
      }
    }

    const userGettingCreated = {
      userId: 'Kris',
      wallets: {
        '61d9b642': {
          walletId: 'Kris',
          walletName: 'Kris',
          accountCreationKeyHash: '1e48ba8c',
          accounts: {
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
              addressData: {
                nickname: 'Account 1'
              },
              ownershipKey: '9d152ff0',
              validationKeys: []
            },
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
              addressData: {
                nickname: 'Account 2'
              },
              ownershipKey: '1e12ca49',
              validationKeys: []
            }
          },
          keys: {
            '9d152ff0': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
              path: KeyPathHelper.accountCreationKeyPath + '/1',
              derivedFromRoot: 'yes'
            },
            '1e12ca49': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
              path: KeyPathHelper.accountCreationKeyPath + '/2',
              derivedFromRoot: 'yes'
            },
            '1e48ba8c': {
              publicKey: '',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
              path: KeyPathHelper.accountCreationKeyPath,
              derivedFromRoot: 'yes'
            }
          }
        }
      }
    }

    const walletId = 'Kris'
    DataFormatHelper.moveTempUserToWalletName(user, walletId)
    expect(user).to.deep.equal(userGettingCreated)
  })

  it('getNextPathIndex gets me the correct next path index when we are at 10000', async () => {
    const wallet = {
      walletId: AppConstants.TEMP_ID,
      accountCreationKeyHash: '1e48ba8c',
      accounts: {
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: '9d152ff0',
          validationKeys: []
        },
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: '1e12ca49',
          validationKeys: []
        }
      },
      keys: {
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: KeyPathHelper.accountCreationKeyPath + '/1',
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: KeyPathHelper.accountCreationKeyPath + '/10000',
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: KeyPathHelper.accountCreationKeyPath,
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.accountCreationKeyPath
    )
    expect(nextPathIndex).to.equal(10001)
  })

  it('getNextPathIndex gets me the correct next BIP44 path index', async () => {
    const wallet = {
      walletId: AppConstants.TEMP_ID,
      accountCreationKeyHash: '1e48ba8c',
      accounts: {
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: '9d152ff0',
          validationKeys: []
        },
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: '1e12ca49',
          validationKeys: []
        }
      },
      keys: {
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: KeyPathHelper.accountCreationKeyPath + '/1',
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: KeyPathHelper.accountCreationKeyPath + '/2',
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: KeyPathHelper.accountCreationKeyPath,
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.accountCreationKeyPath
    )
    expect(nextPathIndex).to.equal(3)
  })

  it('getNextPathIndex gets me the correct next root path index', async () => {
    const wallet = {
      walletId: AppConstants.TEMP_ID,
      accountCreationKeyHash: '1e48ba8c',
      accounts: {
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: '9d152ff0',
          validationKeys: []
        },
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: '1e12ca49',
          validationKeys: []
        }
      },
      keys: {
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: '/1',
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: '/4',
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: '/',
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(wallet, '/')
    expect(nextPathIndex).to.equal(5)
  })

  it('getNextPathIndex gets me the correct next validation path', async () => {
    const account = {
      address: 'ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c',
      addressData: {
        nickname: 'Account 5'
      },
      ownershipKey: '3a7d2974',
      validationKeys: []
    }
    const wallet = {
      accountCreationKeyHash: 'e58b438d',
      keys: {
        '3a7d2974': {
          publicKey:
            'npuba4jaftckeebjixrgdscppt7n4x672zshxgz28x8zqxetrmeh4gknysgg6umwfg2e4nw4waaaaacgpdrebq9f68njadaf379r42vyrsdigieaw77554qz8b4xbnner6x7zg259mdz',
          privateKey:
            'npvta8jaftcjedv4znk8s5egwmmcc2tcyhi8uiqjqaip5zvxurj7skjrixt7gyr6ubgvfgxaaaaaatvi53amz3rhvcia2bqrr58ye7v6a4bubafhrq88vx9sqximdbd9fh8mnhrker2m',
          path: "/44'/20036'/100/10000",
          derivedFromRoot: 'yes'
        },
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: `/44'/20036'/100/10000'/4'/1`,
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: `/44'/20036'/100/10000'/4'/400`,
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: `/44'/20036'/100/10000'/4'/10000`,
          derivedFromRoot: 'yes'
        }
      }
    }

    expect(
      DataFormatHelper.getNextPathIndex(
        wallet,
        KeyPathHelper.accountCreationKeyPath
      )
    ).to.equal(10001)
    expect(
      DataFormatHelper.getNextPathIndex(wallet, `/44'/20036'/100/10000'/4'`)
    ).to.equal(10001)
  })

  it('getNextPathIndex gets me the correct next validation path running up against 10000', async () => {
    const account = {
      address: 'ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c',
      addressData: {
        nickname: 'Account 5'
      },
      ownershipKey: '3a7d2974',
      validationKeys: []
    }
    const wallet = {
      accountCreationKeyHash: 'e58b438d',
      keys: {
        '3a7d2974': {
          publicKey:
            'npuba4jaftckeebjixrgdscppt7n4x672zshxgz28x8zqxetrmeh4gknysgg6umwfg2e4nw4waaaaacgpdrebq9f68njadaf379r42vyrsdigieaw77554qz8b4xbnner6x7zg259mdz',
          privateKey:
            'npvta8jaftcjedv4znk8s5egwmmcc2tcyhi8uiqjqaip5zvxurj7skjrixt7gyr6ubgvfgxaaaaaatvi53amz3rhvcia2bqrr58ye7v6a4bubafhrq88vx9sqximdbd9fh8mnhrker2m',
          path: "/44'/20036'/100/10000",
          derivedFromRoot: 'yes'
        },
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: `/44'/20036'/100/10000'/10000'/1`,
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: `/44'/20036'/100/10000'/10000'/400`,
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: `/44'/20036'/100/10000'/10000'/299`,
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.getRootAccountValidationKeyPath(wallet, account)
    )
    expect(nextPathIndex).to.equal(401)
  })

  it('getNextPathIndex gets me the correct next validation path with others', async () => {
    const account = {
      address: 'ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c',
      addressData: {
        nickname: 'Account 5'
      },
      ownershipKey: '3a7d2974',
      validationKeys: []
    }
    const wallet = {
      walletId: AppConstants.TEMP_ID,
      accountCreationKeyHash: '1e48ba8c',
      accounts: {
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: '9d152ff0',
          validationKeys: []
        },
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: '1e12ca49',
          validationKeys: []
        }
      },
      keys: {
        '3a7d2974': {
          publicKey:
            'npuba4jaftckeebjixrgdscppt7n4x672zshxgz28x8zqxetrmeh4gknysgg6umwfg2e4nw4waaaaacgpdrebq9f68njadaf379r42vyrsdigieaw77554qz8b4xbnner6x7zg259mdz',
          privateKey:
            'npvta8jaftcjedv4znk8s5egwmmcc2tcyhi8uiqjqaip5zvxurj7skjrixt7gyr6ubgvfgxaaaaaatvi53amz3rhvcia2bqrr58ye7v6a4bubafhrq88vx9sqximdbd9fh8mnhrker2m',
          path: "/44'/20036'/100/4",
          derivedFromRoot: 'yes'
        },
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: KeyPathHelper.accountCreationKeyPath + '/3000',
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: '/400',
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: `/44'/20036'/100/10000'/4'/299`,
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.getRootAccountValidationKeyPath(wallet, account)
    )
    expect(nextPathIndex).to.equal(300)
  })

  it('getNextPathIndex gets me the correct next account creation path with others', async () => {
    const wallet = {
      walletId: AppConstants.TEMP_ID,
      accountCreationKeyHash: '1e48ba8c',
      accounts: {
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: '9d152ff0',
          validationKeys: []
        },
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: '1e12ca49',
          validationKeys: []
        }
      },
      keys: {
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: KeyPathHelper.accountCreationKeyPath + '/3000',
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: '/400',
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: `/44'/20036'/100/10000'/4'/299`,
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(
      wallet,
      KeyPathHelper.accountCreationKeyPath
    )
    expect(nextPathIndex).to.equal(3001)
  })

  it('getNextPathIndex gets me the correct next root path with others', async () => {
    const wallet = {
      walletId: AppConstants.TEMP_ID,
      accountCreationKeyHash: '1e48ba8c',
      accounts: {
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: '9d152ff0',
          validationKeys: []
        },
        tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
          address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: '1e12ca49',
          validationKeys: []
        }
      },
      keys: {
        '9d152ff0': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
          path: KeyPathHelper.accountCreationKeyPath + '/3000',
          derivedFromRoot: 'yes'
        },
        '1e12ca49': {
          publicKey:
            'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
          path: '/400',
          derivedFromRoot: 'yes'
        },
        '1e48ba8c': {
          publicKey: '',
          privateKey:
            'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
          path: `/44'/20036'/100/10000'/4'/299`,
          derivedFromRoot: 'yes'
        }
      }
    }

    const nextPathIndex = DataFormatHelper.getNextPathIndex(wallet, '/')
    expect(nextPathIndex).to.equal(401)
  })

  it('getNdauFromNapu converts napu correctly', async () => {
    const ndau = DataFormatHelper.getNdauFromNapu(
      AppConstants.QUANTA_PER_UNIT * 10
    )
    expect(ndau).to.equal('10.00')
  })

  it('getNdauFromNapu converts napu correctly to 5 digits', async () => {
    const ndau = DataFormatHelper.getNdauFromNapu(
      AppConstants.QUANTA_PER_UNIT * 10,
      5
    )
    expect(ndau).to.equal('10.00000')
  })

  it('getNapuFromNdau converts ndau correctly', async () => {
    const ndau = DataFormatHelper.getNapuFromNdau(10)
    expect(ndau).to.equal(AppConstants.QUANTA_PER_UNIT * 10)
  })

  it('getObjectWithAllAccounts sends back the correct amount of accounts', async () => {
    const user = {
      userId: 'Kris',
      wallets: {
        '61d9b642': {
          walletId: 'Kris',
          accountCreationKeyHash: '1e48ba8c',
          accounts: {
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6',
              addressData: {
                nickname: 'Account 1'
              },
              ownershipKey: '9d152ff0',
              validationKeys: []
            },
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7',
              addressData: {
                nickname: 'Account 2'
              },
              ownershipKey: '1e12ca49',
              validationKeys: []
            }
          },
          keys: {
            '9d152ff0': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
              path: KeyPathHelper.accountCreationKeyPath + '/1',
              derivedFromRoot: 'yes'
            },
            '1e12ca49': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
              path: KeyPathHelper.accountCreationKeyPath + '/2',
              derivedFromRoot: 'yes'
            },
            '1e48ba8c': {
              publicKey: '',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
              path: KeyPathHelper.accountCreationKeyPath,
              derivedFromRoot: 'yes'
            }
          }
        },
        Jill: {
          walletId: 'Jill',
          accountCreationKeyHash: '1e48ba8c',
          accounts: {
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac8: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac8',
              addressData: {
                nickname: 'Account 1'
              },
              ownershipKey: '9d152ff0',
              validationKeys: []
            },
            tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac9: {
              address: 'tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac9',
              addressData: {
                nickname: 'Account 2'
              },
              ownershipKey: '1e12ca49',
              validationKeys: []
            }
          },
          keys: {
            '9d152ff0': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj446',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx6',
              path: KeyPathHelper.accountCreationKeyPath + '/1',
              derivedFromRoot: 'yes'
            },
            '1e12ca49': {
              publicKey:
                'npubaard3952aaaaaetmg8gtxb6g75n9i3fxi8y3465qgjb7mmfv47nupz5kgettw7tpkazt5utca85h8ri4qquegqs8byaqhwx66uhnxx8xz4dqfzbgavvs4jkbj447',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6nq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmidzkjbfrw628y7c5zit8vcz6x7hjuxgfeu4kqaqx7',
              path: KeyPathHelper.accountCreationKeyPath + '/2',
              derivedFromRoot: 'yes'
            },
            '1e48ba8c': {
              publicKey: '',
              privateKey:
                'npvt8ard395saaaaafnu25p694rkaxkir29ux5quru9b6sq4m3au4gugm2riue5xuqyyeabkkdcz9mc688665xmid3kjbfrw628y7c5zit8vcz6x7hjuxgfeu4kasdf4',
              path: KeyPathHelper.accountCreationKeyPath,
              derivedFromRoot: 'yes'
            }
          }
        }
      }
    }

    const accounts = DataFormatHelper.getObjectWithAllAccounts(user)
    expect(Object.keys(accounts).length).to.equal(4)
  })

  it('getAccountEaiRateRequest gets the correct request format', async () => {
    const wallet = {
      tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac6: {
        nickname: 'Account 1',
        lastWAAUpdate: 581126400000000,
        weightedAverageAge: 0
      },
      tnaq9cjf54ct59bmua78iuv6gtpjtdunc78q8jebwgmxyac7: {
        nickname: 'Account 2',
        lastWAAUpdate: null,
        weightedAverageAge: 0
      }
    }

    const request = DataFormatHelper.getAccountEaiRateRequest(wallet)
    expect(request.length).to.equal(2)
    request.forEach(r => {
      expect(r.weightedAverageAge).to.be.at.least(0)
    })
  })

  it('convert words from array', async () => {
    const recoveryPhrase = [
      'Wink',
      'fantasy',
      'surface',
      'flame',
      'MAGIC',
      '  video',
      'manage',
      'wing',
      'logic',
      'insane',
      'slaM  ',
      'empower    '
    ]
    const newString = DataFormatHelper.convertRecoveryArrayToString(
      recoveryPhrase
    )
    expect(newString).to.equal(
      'wink fantasy surface flame magic video manage wing logic insane slam empower'
    )
  })

  it('getNdauFromNapu converts napu correctly and adds commas correctly for 1000 ndau', async () => {
    let ndau = DataFormatHelper.getNdauFromNapu(
      AppConstants.QUANTA_PER_UNIT * 1000,
      AppConfig.NDAU_SUMMARY_PRECISION,
      true
    )
    expect(ndau).to.equal('1,000.00')
  })

  it('getNdauFromNapu converts napu correctly and adds commas correctly for 500,000 ndau', async () => {
    let ndau = DataFormatHelper.getNdauFromNapu(
      AppConstants.QUANTA_PER_UNIT * 500000,
      AppConfig.NDAU_SUMMARY_PRECISION,
      true
    )
    expect(ndau).to.equal('500,000.00')
  })

  it('getNdauFromNapu converts napu correctly and adds commas correctly for 1,000,000 ndau', async () => {
    let ndau = DataFormatHelper.getNdauFromNapu(
      AppConstants.QUANTA_PER_UNIT * 1000000,
      AppConfig.NDAU_SUMMARY_PRECISION,
      true
    )
    expect(ndau).to.equal('1,000,000.00')
  })

  it('getNdauFromNapu converts napu correctly and adds commas correctly for 1,000,000,000 ndau', async () => {
    let ndau = DataFormatHelper.getNdauFromNapu(
      AppConstants.QUANTA_PER_UNIT * 1000000000,
      undefined,
      true
    )
    expect(ndau).to.equal('1,000,000,000.00')
  })

  it('if pass in string we get 8 char hash back', async () => {
    expect(
      DataFormatHelper.create8CharHash('creating a hash from this').length
    ).to.equal(8)
    expect(DataFormatHelper.create8CharHash('Wallet 23').length).to.equal(8)
    expect(
      DataFormatHelper.create8CharHash(
        `and she's buying a stairway...to heaven`
      ).length
    ).to.equal(8)
  })

  it('check formatUSDollarValue', async () => {
    expect(DataFormatHelper.formatUSDollarValue(1)).to.equal('1.00')
    expect(DataFormatHelper.formatUSDollarValue(11)).to.equal('11.00')
    expect(DataFormatHelper.formatUSDollarValue(111)).to.equal('111.00')
    expect(DataFormatHelper.formatUSDollarValue(1111)).to.equal('1,111.00')
    expect(DataFormatHelper.formatUSDollarValue(11111)).to.equal('11,111.00')
    expect(DataFormatHelper.formatUSDollarValue(111111)).to.equal('111,111.00')
  })

  it('if we can find a wallet already existent', async () => {
    const user = {
      userId: 'doesntmatter',
      wallets: {
        blahblahhashblah: {
          walletId: 'jimmypage'
        },
        blahanotherhash: {
          walletId: 'ericjohnson'
        }
      },
      accounts: {}
    }
    expect(DataFormatHelper.checkIfWalletAlreadyExists(user, 'jimmypage')).to.be
      .ok
    expect(DataFormatHelper.checkIfWalletAlreadyExists(user, 'ericjohnson')).to
      .be.ok
    expect(
      DataFormatHelper.checkIfWalletAlreadyExists(user, 'stevierayvaughan')
    ).to.not.be.ok
    expect(
      DataFormatHelper.checkIfWalletAlreadyExists(undefined, 'stevierayvaughan')
    ).to.not.be.ok
  })

  it('make sure truncateString works as designed', async () => {
    expect(
      DataFormatHelper.truncateString(
        'This is going to be a very crazy long name'
      )
    ).to.equal('This is going to ...')
    expect(
      DataFormatHelper.truncateString('This will not be as l', 21)
    ).to.equal('This will not be a...')
    expect(
      DataFormatHelper.truncateString('This will not be as la', 22)
    ).to.equal('This will not be as...')
    expect(
      DataFormatHelper.truncateString('This will not be as lar', 23)
    ).to.equal('This will not be as ...')
    expect(
      DataFormatHelper.truncateString('This will not be as larg', 24)
    ).to.equal('This will not be as l...')
    expect(
      DataFormatHelper.truncateString('This will not be as large', 25)
    ).to.equal('This will not be as la...')
    expect(
      DataFormatHelper.truncateString('This will not be as large,', 26)
    ).to.equal('This will not be as lar...')
    expect(
      DataFormatHelper.truncateString('This will not be as large, ', 27)
    ).to.equal('This will not be as larg...')
    expect(
      DataFormatHelper.truncateString('This will not be as large, y', 28)
    ).to.equal('This will not be as large...')
    expect(
      DataFormatHelper.truncateString('This will not be as large, ye', 29)
    ).to.equal('This will not be as large,...')
    expect(
      DataFormatHelper.truncateString(
        'This is going to be a very crazy long name',
        25
      )
    ).to.equal('This is going to be a ...')
    expect(
      DataFormatHelper.truncateString('This is going to be fun!!', 29)
    ).to.equal('This is going to be fun!!')
    expect(
      DataFormatHelper.truncateString('This is going to be fun!!', 28)
    ).to.equal('This is going to be fun!!')
    expect(
      DataFormatHelper.truncateString('This is going to be fun!!', 30)
    ).to.equal('This is going to be fun!!')
    expect(DataFormatHelper.truncateString('This will be small', 25)).to.equal(
      'This will be small'
    )
    expect(DataFormatHelper.truncateString('KrisP', 1)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 2)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 3)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 4)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 5)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 6)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 7)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 8)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('KrisP', 9)).to.equal('KrisP')
    expect(DataFormatHelper.truncateString('Kristofer', 8)).to.equal('Krist...')
    expect(DataFormatHelper.truncateString('Wallet 34')).to.equal('Wallet 34')
  })

  it('make sure nano cents conversion works correctly', async () => {
    expect(DataFormatHelper.convertNanoCentsToDollars(1690000000000)).to.equal(
      '16.90'
    )
    expect(DataFormatHelper.convertNanoCentsToDollars(1690000000009)).to.equal(
      '16.90'
    )
    expect(DataFormatHelper.convertNanoCentsToDollars(16990000000000)).to.equal(
      '169.90'
    )
  })

  it('make sure we pass back a name of the wallet if walletName is not there', async () => {
    const wallet1 = {
      walletId: 'using ID'
    }
    const wallet2 = {
      walletId: 'has both',
      walletName: 'has both'
    }
    expect(DataFormatHelper.getWalletName(wallet1)).to.equal('using ID')
    expect(DataFormatHelper.getWalletName(wallet2)).to.equal('has both')
  })
})
