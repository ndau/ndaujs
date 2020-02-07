/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import KeyPathHelper from '../src/api/helpers/KeyPathHelper'
import AppConstants from '../src/constants/constants'

const addresses = [
  'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
  'ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz',
  'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
  'ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g',
  'ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c',
  'ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq',
  'ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy2fk98'
]

const testSingleAddressData = {
  ndanvhryh4i5ftpykqkji6sm6ykvivru4eeavf3jd87q8auf: {
    balance: 501002680000,
    validationKeys: [
      'npuba4jaftckeeb6z8hgwwyh7dxvdkxujzv2qed4wemcfi5cettptqkuk44gs66b5eiefnyn4aaaaaa7s8ercwyfx2qeat3aa3hztqfwkwnxce4cy2yv98xafvd3ahn243y6yn2hexdq'
    ],
    validationScript: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    lastEAIUpdate: '2019-10-03T08:31:23.976783Z',
    lastWAAUpdate: '2019-10-03T08:31:38.318230Z',
    weightedAverageAge: '16dt16h14m21s361198us',
    sequence: 0,
    stake_rules: null,
    costakers: {},
    holds: null,
    recourseSettings: {
      period: 't1h',
      changes_at: null,
      next: null
    },
    currencySeatDate: '2019-09-27T19:11:47.591504Z',
    parent: null,
    progenitor: null
  }
}

const test7MP4FVUserData = {
  userId: 'Wallet 1',
  wallets: {
    '2c963f83': {
      walletId: 'Wallet 1',
      accountCreationKeyHash: '308c3bc3',
      accounts: {
        ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4: {
          address: 'ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4',
          addressData: {
            balance: 100000000,
            validationKeys: null,
            validationScript: null,
            rewardsTarget: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
            incomingRewardsFrom: null,
            delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
            lock: {
              noticePeriod: '1y25d',
              unlocksOn: '2019-06-26T00:00:00Z',
              bonus: 30000000000
            },
            stake: null,
            lastEAIUpdate: '2019-03-11T19:48:25Z',
            lastWAAUpdate: '2018-06-01T00:00:00Z',
            weightedAverageAge: '9m26dt23h54m21s889673us',
            sequence: 0,
            holds: null,
            recourseSettings: {
              period: '1dt23h59m',
              changesAt: null,
              next: null
            },
            currencySeatDate: null,
            parent: null,
            progenitor: null,
            nickname: 'Account 1',
            walletId: 'Wallet 1',
            eaiValueForDisplay: 130000000000
          },
          ownershipKey: 'f5b17631',
          validationKeys: []
        },
        ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze: {
          address: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
          addressData: {
            balance: 16422859,
            validationKeys: null,
            validationScript: null,
            rewardsTarget: null,
            incomingRewardsFrom: [
              'ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4'
            ],
            delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
            lock: null,
            stake: null,
            lastEAIUpdate: '2019-03-11T19:48:25Z',
            lastWAAUpdate: '2019-03-11T19:48:25Z',
            weightedAverageAge: '4m19dt15h3m40s193716us',
            sequence: 0,
            holds: [
              {
                qty: 1000000,
                expiry: '2019-03-28T20:50:59Z'
              },
              {
                qty: 1000000,
                expiry: '2019-03-26T20:52:54Z'
              }
            ],
            recourseSettings: {
              period: '1dt23h59m',
              changesAt: null,
              next: null
            },
            currencySeatDate: null,
            parent: null,
            progenitor: null,
            nickname: 'Account 2',
            walletId: 'Wallet 1',
            eaiValueForDisplay: 50000000000
          },
          ownershipKey: 'ddb5fb2c',
          validationKeys: []
        },
        ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3: {
          address: 'ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3',
          addressData: {
            balance: 5000000,
            validationKeys: [
              'npuba4jaftckeeb8jb8gzn7n9v7sw82yyhhekvvg4f8at9zrzxads6hf9tya8bfnxbiipfnqqaaaaabw4wez2ritu7za8fep9ajxqy8x4j6bkpdyruwb8fqzk2s6rt2qr5cbwkkmjpa3'
            ],
            validationScript: null,
            rewardsTarget: null,
            incomingRewardsFrom: null,
            delegationNode: 'ndaekyty73hd56gynsswuj5q9em68tp6ed5v7tpft872hvuc',
            lock: {
              noticePeriod: '1y25d',
              unlocksOn: '2019-06-26T00:00:00Z',
              bonus: 30000000000
            },
            stake: null,
            lastEAIUpdate: '2019-03-27T00:02:37Z',
            lastWAAUpdate: '2019-03-26T23:57:31Z',
            weightedAverageAge: 't22h48m29s528919us',
            sequence: 2,
            holds: [
              {
                qty: 1000000,
                expiry: '2019-03-28T20:50:59Z'
              },
              {
                qty: 1000000,
                expiry: '2019-03-26T20:52:54Z'
              }
            ],
            recourseSettings: {
              period: '2d',
              changesAt: null,
              next: null
            },
            currencySeatDate: null,
            parent: null,
            progenitor: null,
            nickname: 'Account 3',
            walletId: 'Wallet 1',
            eaiValueForDisplay: 0
          },
          ownershipKey: 'f2fb495a',
          validationKeys: ['71e9485e']
        }
      },
      keys: {
        '308c3bc3': {
          publicKey: '',
          privateKey:
            'npvta8jaftcjea446vn5snnzfcf8qvvj9cp6tyv6s4bja6xg8zm2h2vtsj9hu9ghga9ifmrsaaaantpt9panczx3iyct5k4zwg7iw3jfizuqs8j9wkrphg3qkxr7gjbgkf9weizd7f8h',
          path: "/44'/20036'/100",
          derivedFromRoot: 'yes'
        },
        f5b17631: {
          publicKey:
            'npuba4jaftckeebetgbepdnd9i99mwmtj8cjphfwnec3z2shy6dyu6t2mt8zkxg86i2ebgfnuaaaaaax7xqpbtrwsj896d6izqqw4nbzw3gde4ygc58rfzzwcxxrxrgvdhcrf7izg49q',
          privateKey:
            'npvta8jaftcjedk7pfu7nk5ekdu9gwwqztrmryqcf39tv2djhgkcgwzsv9ebzdmb2bajtmesaaaaafrpmvinm7ecrz9a9cf5vxgvap7gjs3gxtsy9v3p77axpm7m3w232pduuiibs8qp',
          path: "/44'/20036'/100/1",
          derivedFromRoot: 'yes'
        },
        ddb5fb2c: {
          publicKey:
            'npuba4jaftckeebgxwhzw2mir4czjkuwyp7g9vpsh4bx9t5dym87h8gbkbqinmjqdjaebgfnuaaaaabciwbqfusup9mpmwwi95p9diatshqegkq4j8jwyd7qayid9tvy64uig6he34ei',
          privateKey:
            'npvta8jaftcjedzdyjeqdrxh5k9dmdr5xqxjy6q6tp34hgj4sppn386yzrvmk4ke2bajtmesaaaaaiufamtnwevr45k7fch85r24aenb5tbuvyurupfs9msfua96n7zgwp92tjxzekmv',
          path: "/44'/20036'/100/2",
          derivedFromRoot: 'yes'
        },
        f2fb495a: {
          publicKey:
            'npuba4jaftckeeb6kcdj4hngiv8b4is4z2h3hwzypq9etkvnpjn8483uq43i99rsf82ebgfnuaaaaabs4jwv9k8dnth46qyzjsmw6cfqgy6ipvqb4hky8gwtg9tpe22yijbdg4sw4i5u',
          privateKey:
            'npvta8jaftcjed3nca6nhrzikygcsmyxh6yxjwxxh5m2tbhvb5is32zkubawiemmibajtmesaaaaangupe94zs5ej8zdxx4nc7hatmtxzcdn5sqt4xztxejz6mjggfucjiby2vqhikk9',
          path: "/44'/20036'/100/3",
          derivedFromRoot: 'yes'
        },
        '71e9485e': {
          publicKey:
            'npuba4jaftckeeb8jb8gzn7n9v7sw82yyhhekvvg4f8at9zrzxads6hf9tya8bfnxbiipfnqqaaaaabw4wez2ritu7za8fep9ajxqy8x4j6bkpdyruwb8fqzk2s6rt2qr5cbwkkmjpa3',
          privateKey:
            'npvta8jaftcjeckpeyamu5n437syv9jvdu2u2mae5q6jiareyuj9hhbr3bn8m8bg4cdjmdvsaaaaapgxbf8d4enzp2htjdr2cpmxzxqurakvi7v6xartmx4yehd6qdv82vh9jyzbtdzc',
          path: "/44'/20036'/2000/3",
          derivedFromRoot: 'yes'
        }
      },
      walletName: 'Wallet 1'
    }
  }
}

const test7MP4FVAddressData = {
  ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze: {
    balance: 16422859,
    validationKeys: null,
    validationScript: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4'],
    delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
    lock: null,
    stake: null,
    lastEAIUpdate: '2019-03-11T19:48:25Z',
    lastWAAUpdate: '2019-03-11T19:48:25Z',
    weightedAverageAge: '4m19dt15h8m41s509064us',
    sequence: 0,
    holds: [
      {
        qty: 1000000,
        expiry: '2019-03-28T20:50:59Z'
      },
      {
        qty: 1000000,
        expiry: '2019-03-26T20:52:54Z'
      }
    ],
    recourseSettings: {
      period: '1dt23h59m',
      changesAt: null,
      next: null
    },
    currencySeatDate: null,
    parent: null,
    progenitor: null
  },
  ndae2m6h32eee2qci9fjhzmfxtpni6pizmks839npbqz8yq4: {
    balance: 100000000,
    validationKeys: [
      'npuba4jaftckeebijwfxqwdyk3nt9bjxek7dq2mx2kjfgpbkq7dmrpa3rep5bsp3362idhqsyaaaaabaff879kt39fvjd7nntqutczzu2hm6u7vr73uutw3gqjxeqvgyjzf2es8ry7fi'
    ],
    validationScript: null,
    rewardsTarget: 'ndac6k7vxp5majxe8ed2wagp2dw8ip8ce3mwxeuttym9c9ze',
    incomingRewardsFrom: null,
    delegationNode: 'ndam75fnjn7cdues7ivi7ccfq8f534quieaccqibrvuzhqxa',
    lock: {
      noticePeriod: '1y25d',
      unlocksOn: '2019-06-26T00:00:00Z',
      bonus: 30000000000
    },
    stake: null,
    lastEAIUpdate: '2019-03-24T23:59:23Z',
    lastWAAUpdate: '2018-06-01T00:00:00Z',
    weightedAverageAge: '9m26dt23h59m23s205021us',
    sequence: 1,
    holds: [
      {
        qty: 1000000,
        expiry: '2019-03-28T20:50:59Z'
      },
      {
        qty: 1000000,
        expiry: '2019-03-26T20:52:54Z'
      }
    ],
    recourseSettings: {
      period: '1dt23h59m',
      changesAt: null,
      next: null
    },
    currencySeatDate: null,
    parent: null,
    progenitor: null
  },
  ndajh3pt3appxib22sjf4ec6deu7mwgqph2jjd26i63iepp3: {
    balance: 5000000,
    validationKeys: [
      'npuba4jaftckeeb8jb8gzn7n9v7sw82yyhhekvvg4f8at9zrzxads6hf9tya8bfnxbiipfnqqaaaaabw4wez2ritu7za8fep9ajxqy8x4j6bkpdyruwb8fqzk2s6rt2qr5cbwkkmjpa3'
    ],
    validationScript: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: 'ndaekyty73hd56gynsswuj5q9em68tp6ed5v7tpft872hvuc',
    lock: {
      noticePeriod: '1y25d',
      unlocksOn: '2019-06-26T00:00:00Z',
      bonus: 30000000000
    },
    stake: null,
    lastEAIUpdate: '2019-03-27T00:02:37Z',
    lastWAAUpdate: '2019-03-26T23:57:31Z',
    weightedAverageAge: 't22h48m29s528919us',
    sequence: 2,
    holds: [
      {
        qty: 1000000,
        expiry: '2019-03-28T20:50:59Z'
      },
      {
        qty: 1000000,
        expiry: '2019-03-26T20:52:54Z'
      }
    ],
    recourseSettings: {
      period: '2d',
      changesAt: null,
      next: null
    },
    currencySeatDate: null,
    parent: null,
    progenitor: null,
    nickname: 'Account 3',
    walletId: 'Wallet 1',
    eaiValueForDisplay: 0
  }
}

const testAddressData = {
  ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy2fk98: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  }
}

const testAddressDataRoot = {
  ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty1root: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcmroot'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9m2root: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8root',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufc3root: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68root'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk64root: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcroot',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5z5root: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3y6root: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy7root: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  }
}

const eaiValueForDisplayResponse = [
  {
    eaiValueForDisplay: null,
    address: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun'
  },
  {
    eaiValueForDisplay: 14,
    address: 'ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'
  },
  {
    eaiValueForDisplay: 20,
    address: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55'
  },
  {
    eaiValueForDisplay: 30,
    address: 'ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'
  },
  {
    eaiValueForDisplay: null,
    address: 'ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c'
  },
  {
    eaiValueForDisplay: 14,
    address: 'ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq'
  }
]

const testMarketPrice = {
  marketPrice: 1690000000000,
  targetPrice: 1694044654905,
  totalIssued: 291621830228936,
  totalNdau: 344295174387934,
  totalSIB: 23229117000,
  sib: 0
}

const testUser = {
  userId: '7MP-4FV',
  wallets: {
    '7MP-4FV': {
      walletId: '7MP-4FV',
      accountCreationKeyHash: 'e58b438d',
      accounts: {
        ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun: {
          address: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
          addressData: {
            nickname: 'Account 1'
          },
          ownershipKey: 'b32d1dfb',
          validationKeys: []
        },
        ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz: {
          address: 'ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz',
          addressData: {
            nickname: 'Account 2'
          },
          ownershipKey: 'e54b7ece',
          validationKeys: []
        },
        ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55: {
          address: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
          addressData: {
            nickname: 'Account 3'
          },
          ownershipKey: '3fcd79f1',
          validationKeys: []
        },
        ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g: {
          address: 'ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g',
          addressData: {
            nickname: 'Account 4'
          },
          ownershipKey: '2d4a67b0',
          validationKeys: []
        },
        ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c: {
          address: 'ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c',
          addressData: {
            nickname: 'Account 5'
          },
          ownershipKey: '3a7d2974',
          validationKeys: []
        },
        ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq: {
          address: 'ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq',
          addressData: {
            nickname: 'Account 6'
          },
          ownershipKey: '84f010f1',
          validationKeys: []
        },
        ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy2fk98: {
          address: 'ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy2fk98',
          addressData: {
            nickname: 'Account 7'
          },
          ownershipKey: '7bc381ff',
          validationKeys: []
        }
      },
      keys: {
        e58b438d: {
          publicKey: '',
          privateKey:
            'npvta8jaftcjed7stf8bkz3nnipyqahdau5vexjr52ez4wvcuusgimc7fjac52pbwa4fdissaaaanv2qizmsubdetvqmqys8fwvj4pw2b9vg9jire7cd3xm9cg74sc75yu44tbkhh23s',
          path: KeyPathHelper.accountCreationKeyPath,
          derivedFromRoot: 'yes'
        },
        b32d1dfb: {
          publicKey:
            'npuba4jaftckeeb8m2xih7dbwsqndrt2hzz6k6xxvn3k48kss87uwuta2rbaj2dz7tie4nw4waaaaaahwni9kfku8detab44b4mqenf3qx4skffjxzfmgev5pipapeiaeqqbqsvdzkit',
          privateKey:
            'npvta8jaftcjed2vzrknnzf8fj83q6bsfqnf72q7pr4b4evxzgfgn24tznve5gcfkbgvfgxaaaaaab7dch4tkwzs3eiaqysqu5tdbqmxqwctjkpp3k3te85kdidjcabdu6fkrqkq356k',
          path: "/44'/20036'/100/0",
          derivedFromRoot: 'yes'
        },
        e54b7ece: {
          publicKey:
            'npuba4jaftckeebbfznxrdsdk893xn64axz3fv5ayg8ygip6grpgeudqkfyij9kjbm2e4nw4waaaaaa6pmfcm6tvpiar9xgi3udqbbarv2g7i5dei6rj5ppw76zdjkyf5bqigdtzb36x',
          privateKey:
            'npvta8jaftcjeai6tm5yy3j4ruh6tc9c2qgyt8jhijns3j9ib8i5jdhfvcpkj52tgbgvfgxaaaaaahdk3iu9en5kad97jugns5siid68bzkg23chd4q5mphrf24kxtq2mwu775a2cky7',
          path: "/44'/20036'/100/1",
          derivedFromRoot: 'yes'
        },
        '3fcd79f1': {
          publicKey:
            'npuba4jaftckeebsfgvpt2agx6pf7i5k233d4bcetgpx9vfp9wcp7pwkbtzufqu4ktse4nw4waaaaabf92p46hd6zi322kjg7f46vfdi4xs5agy3nn24b386mwprk9hjzgx8yckunvtz',
          privateKey:
            'npvta8jaftcjec3htae7jzmrbbrtxyw5e8nmg3yuahca77rqm2y2cyzw4nuevcbeabgvfgxaaaaaajr8dqzb29f4gqgcujzjqze3i4gxng2bxymdggsqrzc7dm4z34p3x7igz6vthnjt',
          path: "/44'/20036'/100/2",
          derivedFromRoot: 'yes'
        },
        '2d4a67b0': {
          publicKey:
            'npuba4jaftckeeb5w22tqagu2cx336uh43w22y3na8ztf24367div8u84zd29xpbf22e4nw4waaaaabuqsax6t9yj9nb9phjjjjurtg3yk8wbie5q6hcj72dq7xxdffd2jr2cdgxti9h',
          privateKey:
            'npvta8jaftcjea6ks77rbjv8zgtwyjqnbyckgmp49crrwks2mspepfhjcwwa5a3csbgvfgxaaaaaanvwafrer7ur5ar5j4kkknv6jypuzxakbg5zb2urqa5zppi3ji8cmm6c4ivbhmnc',
          path: "/44'/20036'/100/3",
          derivedFromRoot: 'yes'
        },
        '3a7d2974': {
          publicKey:
            'npuba4jaftckeebjixrgdscppt7n4x672zshxgz28x8zqxetrmeh4gknysgg6umwfg2e4nw4waaaaacgpdrebq9f68njadaf379r42vyrsdigieaw77554qz8b4xbnner6x7zg259mdz',
          privateKey:
            'npvta8jaftcjedv4znk8s5egwmmcc2tcyhi8uiqjqaip5zvxurj7skjrixt7gyr6ubgvfgxaaaaaatvi53amz3rhvcia2bqrr58ye7v6a4bubafhrq88vx9sqximdbd9fh8mnhrker2m',
          path: "/44'/20036'/100/4",
          derivedFromRoot: 'yes'
        },
        '84f010f1': {
          publicKey:
            'npuba4jaftckeebj42zrwgkib944y62gm3qxw9pru2gi46fg7d7iebssysx8ppfdujie4nw4waaaaac4jvnbjc8sisi234mrsfr5ztdsv87gcduwz8ustszgy33urys2s3e4c83eiqyk',
          privateKey:
            'npvta8jaftcjeburqvbt33rse4gjrcep2sgwb5uex9gqbc6v59wyz8se8n3ix668sbgvfgxaaaaaayun5akizwcecggqu56bm876i6e9zjss6xf9wwenf3xyqnv7wgegjqyk56z3ii33',
          path: "/44'/20036'/100/5",
          derivedFromRoot: 'yes'
        },
        '7bc381ff': {
          publicKey:
            'npuba4jaftckeeb487azwikysx3dg3gmzp2ai64jfkb95mncqt3ny7eg93ziv2wkbf2e4nw4waaaaadd8rtspfv6wyifrp8ibpf8tu5j57p6rkggg8rsc9zfripujnbmyaiq4htq9jz8',
          privateKey:
            'npvta8jaftcjeb2vezpkjfv9g82qpqwu5r7g57cb6ws2udp74xpcgb752kgq88ncibgvfgxaaaaaa29v6ndjn9ffubm5ruamjrwny4q9mrd4tttzv6az73m4dnumak7sdxgkkuyxzbm6',
          path: "/44'/20036'/100/6",
          derivedFromRoot: 'yes'
        }
      }
    }
  }
}

const nodeStatus = {
  node_info: {
    id: '',
    listen_addr: '',
    network: 'ndau mainnet',
    version: '',
    channels: '',
    moniker: '',
    other: null
  },
  sync_info: {
    latest_block_hash: '',
    latest_app_hash: '',
    latest_block_height: 0,
    latest_block_time: '0001-01-01T00:00:00Z',
    catching_up: false
  },
  validator_info: {
    address: '',
    pub_key: null,
    voting_power: 0
  }
}

const setValidationTxRes = {
  fee_napu: 0
}

const lockTxRes = {
  fee_napu: 0
}

const notifyTxRes = {
  fee_napu: 0
}

const transferTxRes = {
  fee_napu: 0
}

const delegateTxRes = {
  fee_napu: 0
}

const delegateTxResHighFee = {
  fee_napu: Number.MAX_SAFE_INTEGER
}

const setRewardsDestinationTxRes = {
  fee_napu: 0
}

const accountHistoryRes = {
  Items: [
    {
      Balance: AppConstants.QUANTA_PER_UNIT * 1000,
      Timestamp: '2019-02-05T03:42:39Z',
      TxHash: 'luWjXZZAITZOrtwfPW0dIA'
    }
  ]
}

const transactionByHashRes = {
  Tx: {
    Nonce: 'FZtxVyj4EemRwApYZGAH3w==',
    TransactableID: 10,
    Transactable: {
      tgt: ['ndah7dmb2dsufay2fes8nrh94iy27b6kfrdnqzekj49x2fx8'],
      own: [
        2,
        'IQK/Ybb3x7iR7ZGb+Lp2FOsK1kh5xQsOLu6Hk8+k3QMXqgS9Tz0AAAABbU9Osozc4yYPkAd8wpn0RQOTJVwAyc4n7MMrCATn11M='
      ],
      key: [
        [
          2,
          'IQJ/DvTikpGPllPeynPqNJoRW6Tui82gSjGbSd9vt4NU8QgvqOMAAAACaKwn3g58SfWPvl8gYeOBLeDWFmLNR1Zfg0wNLnD+2ps='
        ]
      ],
      val: '',
      seq: 1,
      sig: [
        2,
        'MEUCIQDT9CgHFz8If9OFOAFKSwoW6XGNkPJHbemMA9u7sXBrMgIgUysPO56aFKt2XZM+26HCjeGz06g6V9tM6AFzcASIsKs='
      ]
    }
  }
}

const testAddressData20Items = {
  ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy2fk98: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaepy5ehv4fqqqpxhirwssr9xv45yf3n8mua4tyiqb3ek6s: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndan84n2us8ngsp9tjzuwq854amesitr9zspe8g9ddqn8u8h: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndagdk9zcsmdusfxx3wp8hw8xpyi3g8tq8kfi68je3fv45a8: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndadk667xw332g73h69qu6zj9upbc872ebwbnkwcn3yg7jyr: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaqphegctz9tcj42zcjew7m2frjxd8hk8krzmnuym457wpw: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndagyqzgb3yz4rb8hd922r29f97p4npz9jux47sc8vp8fcjw: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndahy38pbbbnkfxsg8mv9bhbr2pwvzn3tmtjwgwt4723ay93: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaen54hhhhtbytjkdaj29wx9kvhrmva4ragsk3f6cmrwfbt: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndabet44rp5b2afdpxtxisc7nz9q5exehq56vu6rgdh6yjuh: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndadketzehkx2skuuue4u2qbmszutswer67gap59hmxibypv: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaj77ngukgrbc3s8kt9mn85cgmaqjzqw5hgtbjmcyvpjgyk: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndam993hqxndcpngs2s7y9dvjcdmav4rgarkggndd8wwdcr3: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndabnwmc9z47sdf284xs9n2e76yekum2jnwekqduqcr8zwfc: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  }
}




const testAddressData20Items2 = {
  ndakj49v6nnbdq3yhnf8f2j6ivfzicedvfwtunckivfsw9qt: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndae227gbzcj764d9zqsqfccbucpj8r6arc6jz8bpir5jpav: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaczic4mzjpesqsqa5gtvcfc3gut3pat7jpre4qpgn2zj7n: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndad7dv3mmddt7ay6mr3jqi4er4vgdrspex4p5dxbyh98un3: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndahvq399xmyh65d6gj2i9ccyh7zi9y3r4zrpsjdifwi27jh: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndahsdd3fp6fp6rahhav8ypfnmrcrm2kqt8i4kdkfmy9pizv: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndahbgdeceymfk5prge25t3n8b9me2v59g2t3t7x423uhcnf: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndap2i87whwpfmp4genf8udn8fiacuy6k9wwyv2edics76rj: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaqnhnyenf3yqs532zra5zpgj4kuznr7a569txw35tbzcuv: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaq6z7wcac2yewmhpnu8vc4ugrk67r8hacqahmr4xxgs3bw: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndardrhp2ia5n2hwvaevfc6be6mgx7pyqfwzq4uarrzfdx5d: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndafyrhu6aqej8q6gp5a7bnnja4jybzradghv3hqmy5parcp: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaka7yph4es5upyp4v2bq42phyz53s8cnzeec9p4dcsqfti: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndapggci7zafe2m2xj8tegadj3ewt683tcdbu9y55a3avxat: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndapz8djh2mf5qs6ccy4d9ibkydzvj5e2354fjjxtttmig68: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndagrehndydstfru9izy3cqd9xtetqm59icy5qenmm7kys8h: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndab78da7wcg6j48pujd65fbrj96fpce4di4tft6w3gp6zf4: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndajegsqmca8kcy5kgt55jf8cm365kj24yykzztfrvvscgak: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaiwduxiry232f8zcijnxeraquvdjpj82xntk4jmuiz6mnz: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaa5jym2btrx9fgc9rybjked32d6x2n5h52x6t6day4z9rz: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  }
}



const testAddressData20ItemsRoot = {
  ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8zcun: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcmroot'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcm38vz: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8root',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcjf55: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68root'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68f67g: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcroot',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndafwi9munvx8uhgg3pmaw7m6p22ixp5mpv7nipgc5zjyp5c: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndap34mk6yzyiru49ivfitgzybkfqxnejcr9qvtnd3ychbfq: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaq9euuwf83yds7f3bwcfqdqsx43x5v4vjbcctkndy2fk98: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaepy5ehv4fqqqpxhirwssr9xv45yf3n8mua4tyiqb3ek6s: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcmroot'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndan84n2us8ngsp9tjzuwq854amesitr9zspe8g9ddqn8u8h: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8root',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndagdk9zcsmdusfxx3wp8hw8xpyi3g8tq8kfi68je3fv45a8: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68root'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndadk667xw332g73h69qu6zj9upbc872ebwbnkwcn3yg7jyr: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcroot',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaqphegctz9tcj42zcjew7m2frjxd8hk8krzmnuym457wpw: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndagyqzgb3yz4rb8hd922r29f97p4npz9jux47sc8vp8fcjw: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndahy38pbbbnkfxsg8mv9bhbr2pwvzn3tmtjwgwt4723ay93: {
    balance: 515000000000,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaen54hhhhtbytjkdaj29wx9kvhrmva4ragsk3f6cmrwfbt: {
    balance: 420000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndaiap4q2me85dtnp5naifa5d8xtmrimm4b997hr9mcmroot'],
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndabet44rp5b2afdpxtxisc7nz9q5exehq56vu6rgdh6yjuh: {
    balance: 200000000002,
    validationKeys: null,
    rewardsTarget: 'ndarc8etbkidm5ewytxhvzida94sgg9mvr3aswufbty8root',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 2592000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndadketzehkx2skuuue4u2qbmszutswer67gap59hmxibypv: {
    balance: 4000000000054,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: ['ndanhgm5avd68gj9ufiwq7ttcsshxciupgz5i7nnzk68root'],
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndaj77ngukgrbc3s8kt9mn85cgmaqjzqw5hgtbjmcyvpjgyk: {
    balance: 760000000003,
    validationKeys: null,
    rewardsTarget: 'ndamm8kxzf9754axd24wrkh3agvj2cidx75wdfhjiufcroot',
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: null,
      unlocksOn: 1585886400000
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndam993hqxndcpngs2s7y9dvjcdmav4rgarkggndd8wwdcr3: {
    balance: 4000000000087,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: null,
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  },
  ndabnwmc9z47sdf284xs9n2e76yekum2jnwekqduqcr8zwfc: {
    balance: 1240000000023,
    validationKeys: null,
    rewardsTarget: null,
    incomingRewardsFrom: null,
    delegationNode: null,
    lock: {
      noticePeriod: 7776000000000,
      unlocksOn: null
    },
    stake: null,
    lastEAIUpdate: 589991567000000,
    lastWAAUpdate: 589991567000000,
    weightedAverageAge: 0,
    sequence: 0,
    holds: null,
    recourseSettings: { period: 0, changesAt: null, next: null },
    validationScript: null
  }
}

export default {
  testAddressData,
  testMarketPrice,
  testUser,
  eaiValueForDisplayResponse,
  nodeStatus,
  setValidationTxRes,
  lockTxRes,
  notifyTxRes,
  transferTxRes,
  accountHistoryRes,
  transactionByHashRes,
  addresses,
  delegateTxRes,
  delegateTxResHighFee,
  testSingleAddressData,
  test7MP4FVUserData,
  test7MP4FVAddressData,
  testAddressData20Items,
  testAddressData20Items2,
  testAddressData20ItemsRoot,
  testAddressDataRoot,
  setRewardsDestinationTxRes
}
