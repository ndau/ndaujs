import ValidationKeyMaster from '../src/helpers/ValidationKeyMaster'
import MockHelper from './api/helpers/MockHelper'
import { expect } from 'chai'
import cloneDeep from 'lodash.clonedeep'

const testWallet7MP4FVStart = {
  walletId: 'josh',
  walletName: 'josh',
  accountCreationKeyHash: '57a155f7',
  accounts: {
    ndakj49v6nnbdq3yhnf8f2j6ivfzicedvfwtunckivfsw9qt: {
      address: 'ndakj49v6nnbdq3yhnf8f2j6ivfzicedvfwtunckivfsw9qt',
      addressData: { balance: 338699 },
      ownershipKey: '61d8c6b2',
      validationKeys: ['a835b687', '4e00022d', '4498ef9c']
    },
    ndae227gbzcj764d9zqsqfccbucpj8r6arc6jz8bpir5jpav: {
      address: 'ndae227gbzcj764d9zqsqfccbucpj8r6arc6jz8bpir5jpav',
      addressData: {},
      ownershipKey: '1ef2fdca',
      validationKeys: ['ad72f4d2', '6c049804', 'e738be76']
    },
    ndaczic4mzjpesqsqa5gtvcfc3gut3pat7jpre4qpgn2zj7n: {
      address: 'ndaczic4mzjpesqsqa5gtvcfc3gut3pat7jpre4qpgn2zj7n',
      addressData: {},
      ownershipKey: 'a0971333',
      validationKeys: []
    },
    ndad7dv3mmddt7ay6mr3jqi4er4vgdrspex4p5dxbyh98un3: {
      address: 'ndad7dv3mmddt7ay6mr3jqi4er4vgdrspex4p5dxbyh98un3',
      addressData: {},
      ownershipKey: '37b70118',
      validationKeys: []
    },
    ndahvq399xmyh65d6gj2i9ccyh7zi9y3r4zrpsjdifwi27jh: {
      address: 'ndahvq399xmyh65d6gj2i9ccyh7zi9y3r4zrpsjdifwi27jh',
      addressData: {},
      ownershipKey: '29a26c1f',
      validationKeys: []
    }
  },
  keys: {
    '57a155f7': {
      publicKey:
        'npuba4jaftckeebw8emai5w3xfmzexpeueap745dixncng2zhvcii6zvm6b3kwchtwsdde4hnaaaabuqi9b8gn72e52eupgg2xjuh9pdv36wekzwrxzztrdqirc7dgauyw3znmz9ez82',
      privateKey:
        'npvta8jaftcjebsc2ubjj7tjj5pux2jgs8sm2bk7tbcchj5sb9kcebug2qa6wisbqa23gt5aaaaanvuh2rtvhqbg8bevjtyfknt95i68rfbcx7d7p76m25ud2zi3sexxg3vkdc95v7mu',
      path: "/44'/20036'/100",
      derivedFromRoot: 'yes'
    },
    '61d8c6b2': {
      publicKey:
        'npuba4jaftckeebyrmpkw4ap7jae22wyb83ncdseuwpvfibunh5fi8id6vs2he86jwieh856caaaaaasjfhkhw6npur6sgxy3r5b4i2hxhqia3w9dm2kz8tgkgf5k5jm88c5htkhhpt8',
      privateKey:
        'npvta8jaftcjea9en4tr26txweh3fkejikikubnn7mthymvir3292cquaphxr2egybb9y9asaaaaaecjj4t7hddnv9ebxpym82qugb7j5uagph248cx9wjuttq4y4k9zs43vvnn3z9tw',
      path: "/44'/20036'/100/1",
      derivedFromRoot: 'yes'
    },
    '1ef2fdca': {
      publicKey:
        'npuba4jaftckeebegws3694is6cp5ypsviwgb6ymv4455ps7twh5wu2uf2hyhxgf3vseh856caaaaabbmimx8iz3m4g48wfh7n8z2dqxec2mnnf3fuk4d5aeszss2xw8k27bz6hj8kwa',
      privateKey:
        'npvta8jaftcjebjiybgdk6cn7xsgft6yppprtzkr65ubmen76mwxg6zrqx56s6fwabb9y9asaaaaaik4c7ruf8k8tyzxbj9mhx8a5xjayc5dbqjnuys82bef6egfphuyhwvpr2hwv59m',
      path: "/44'/20036'/100/2",
      derivedFromRoot: 'yes'
    },
    a0971333: {
      publicKey:
        'npuba4jaftckeebf6cswctz2t868r8j3mtyiycw33u6wjfv7zd3en4qqmzpv86wu6mieh856caaaaab8z78mczmjuv4ravrmiwb42pzqqrvkvpbg84cibxusrh2ppbx5xftfz55sab4d',
      privateKey:
        'npvta8jaftcjeck34td4nb7es8nvg3d4ebm6388hwkwycxs4s5ejh4mwjknzvdx2wbb9y9asaaaaarx9ru2x44nw8v2e544faqydp5vv64w5ijzysuapnwd38dmipq7jnub8eiixpg99',
      path: "/44'/20036'/100/3",
      derivedFromRoot: 'yes'
    },
    '37b70118': {
      publicKey:
        'npuba4jaftckeebyhzubhezge3smuxtxxpn2gincucu95ear7tsp2tpxw43f6e62n3aeh856caaaaaca7dkbhhjipm9hpc6w9e9s2hkgfis7had6efscrdptfb8a633m8j7wnnmbq3mq',
      privateKey:
        'npvta8jaftcjedk8ifjg8bvrjjnmapzcd8tngrudeq42rk5836q5tzpewt3c9regkbb9y9asaaaaashi4sj34kdk935izfh3h6gb4ttkehj2a9bbnav25njirshgqk9uqcs5pmbv355n',
      path: "/44'/20036'/100/4",
      derivedFromRoot: 'yes'
    },
    '29a26c1f': {
      publicKey:
        'npuba4jaftckeebszwa6pmxsv5agpek53fvcdq5vnydept8x63dhbsriaverechy82ieh856caaaaac8a83n7zcw8wft66ck8c4iudzp9m8e9eqgjzp78pz244cqju2iquq4z3fa8ii3',
      privateKey:
        'npvta8jaftcjeb2ie3cvgygh5pzi29zrga3ukhv2g7kyu3thdrg5mbr9wse2kgp4wbb9y9asaaaaazshymhp2xhxbnrhauzsyues75r49th3dtup5rrvp8gysvunycdwvq7zkka37knd',
      path: "/44'/20036'/100/5",
      derivedFromRoot: 'yes'
    },
    a835b687: {
      publicKey:
        'npuba4jaftckeebzwedgrdg5hk9ee2ibw84bmkiz93t8wh49dma55n2erq4knytiu7agzewhcaaaaaa2vthd2wg2uxyxvpgcsib6k5amcj9kv7m7hmcjaa8vix7bc6ggm8wq2sc53isz',
      privateKey:
        'npvta8jaftcjedj2is83g7rgyawvdsb2pbxdzd8vkabm7vb2w6p8ncfsnhaitnp2abx3fb2saaaaage6j28fbyexpxn5jswcarcy2c2ur4w9k9j42uiahw4friizbtu9wejgj7i2ifms',
      path: "/44'/20036'/100/10000'/1'/1",
      derivedFromRoot: 'yes'
    },
    '4e00022d': {
      publicKey:
        'npuba4jaftckeebt9yhka7chnpkgnark6k3vwbq65j76jwme8y44dx44hacgju3kjpagzewhcaaaaabn2sgax7ivuz7jf6pjxhbqkbfh9g4av6us3q2xgnsjuj7sc2ss25wex4qrhxaz',
      privateKey:
        'npvta8jaftcjec6dxamgynedhfvwqmqnvxce8ab3wzq3v6g6z48twv3bcdrfdne4nbx3fb2saaaaamgebsfrke6x9kjrdkpj2musjj93yse9ewgmyfjvecnurnayeegg6kvrg68rzabe',
      path: "/44'/20036'/100/10000'/1'/2",
      derivedFromRoot: 'yes'
    },
    '4498ef9c': {
      publicKey:
        'npuba4jaftckeebbkhpjui2ivuiiv7cwjuxphqmnydzf4jn9fdmmkdxjimixq427rh2gzewhcaaaaabu2f5rtzraatu57wkj5vzt2tgwa6br5mi7hm7cjigdpb7eeiahzxfhfsjn2663',
      privateKey:
        'npvta8jaftcjedusqtiytv8czp7gztty9gswt7yu6sikgztttwrmymk2qdfmvbpuubx3fb2saaaaanybq56p52aeny9pcuq676qejxaham844hj49iukbs5irjbcab77j25d898eihfn',
      path: "/44'/20036'/100/10000'/1'/3",
      derivedFromRoot: 'yes'
    },
    ad72f4d2: {
      publicKey:
        'npuba4jaftckeebvxp2hv3j59ryp6pbqpqrr4u7jqv7ximt3s8776d8zznj934k6zvigun7fiaaaaaa38r23v6y46khasjktjqem9bw7zukzt7nazv3npij43c27act79ri4yyzqp3hd',
      privateKey:
        'npvta8jaftcjebbepi8xaignr459wyuyauvxxin2mrdvjk5xcwmu84wceg2qpmbsybwvhjkaaaaaagrv8gn9fyzct2eckwkmtc92php6ux6rmaf68mdkcqyiyhiawrr55te8b29y3ftf',
      path: "/44'/20036'/100/10000'/2'/1",
      derivedFromRoot: 'yes'
    },
    '6c049804': {
      publicKey:
        'npuba4jaftckeeb5j9b3p5apmngf2p6cd663qbsyp4k6gsk5s5fu8dd86vfa93q5hwsgun7fiaaaaabrjvyrrhsnpibex933hiqd932snxkn3ekj8ymtbmbc2kv8u2ugfvjh32ybizm5',
      privateKey:
        'npvta8jaftcjeckbibfkhdbkm4qyjvrzg54pj49wrzxuwqybv3q5czbidywrkh9ukbwvhjkaaaaaam4n7v536ddkajfr8qj4ds98qedfkvgjcurxu6ik2iycw9wyettn5igfs4vzcj9y',
      path: "/44'/20036'/100/10000'/2'/2",
      derivedFromRoot: 'yes'
    },
    e738be76: {
      publicKey:
        'npuba4jaftckeeb2puxdw7dfen5zue8eri3p4ha8vv73m7eu6zviaphbevpaebz5hnagun7fiaaaaab9z7g8s2dfbj4b8rzanim2f5mbvngrfyrzu68gij5su7fbi6rr3zd9hx5qsiaa',
      privateKey:
        'npvta8jaftcjecrtjyheggtqt52ntzywkjex2gdt9cxfxusbs37x2atd3xjc72nunbwvhjkaaaaaar79jzwga3ikqsrv72dcc8bq42n5bv3pv76zhtucq6ezjikhd58p2ahf7ytwpkkk',
      path: "/44'/20036'/100/10000'/2'/3",
      derivedFromRoot: 'yes'
    }
  }
}

describe('ValidationKeyMaster', () => {
  before(() => {
    MockHelper.mockServiceDiscovery()
    MockHelper.mockAccountsAPI()
    MockHelper.mockAccountAPI()
    MockHelper.mockEaiRate()
    MockHelper.mockMarketPriceAPI()
  })

  it('addValidationKey test for no validationKey and make sure we index properly', async () => {
    const wallet = cloneDeep(testWallet7MP4FVStart)
    const account =
      wallet.accounts['ndaczic4mzjpesqsqa5gtvcfc3gut3pat7jpre4qpgn2zj7n']
    const keysLength = Object.keys(wallet.keys).length

    expect(account.validationKeys.length).to.equal(0)

    await ValidationKeyMaster.addValidationKey(wallet, account)
    expect(account.validationKeys.length).to.equal(1)
    expect(Object.keys(wallet.keys).length).to.equal(keysLength + 1)
    expect(wallet.keys['ac0325de'].privateKey).to.equal(
      'npvta8jaftcjedxxc9apdutrqddzxmdbe6uvnc2tzuigfxewgzvyaxwhjhkascsiqbtx657aaaaaaeg7hgjdhggqxe9db7mnf8fy8adeb67dhp59bzuvp6nfdsu2jdecrkiariyasn6i'
    )
    expect(wallet.keys['ac0325de'].publicKey).to.equal(
      'npuba4jaftckeebfi9zj5f3rsszp7i4wzqyuuvxrkk7rzep79mbmn22j7sbst644utiggzvrwaaaaaas5w63en6234wv6nhxpsz2y52anshvwn7zr6g8kpztswqcmbensj3cybrvs8bg'
    )
  })

  it('addValidationKey test on another account', async () => {
    // THIS time do not create a new instance and make sure that
    // we index the validation key propertly
    const wallet = cloneDeep(testWallet7MP4FVStart)
    const account =
      wallet.accounts['ndad7dv3mmddt7ay6mr3jqi4er4vgdrspex4p5dxbyh98un3']
    const keysLength = Object.keys(wallet.keys).length

    expect(account.validationKeys.length).to.equal(0)

    await ValidationKeyMaster.addValidationKey(wallet, account)

    expect(account.validationKeys.length).to.equal(1)
    expect(Object.keys(wallet.keys).length).to.equal(keysLength + 1)
    expect(wallet.keys['cf2db909'].privateKey).to.equal(
      'npvta8jaftcjedj3p39gibux7vqu78uv3z34hisg5d7tfrzr7nq86nbpdd9hr9um2bzd2aisaaaaahv5idcncp9c2tu8ek6mv8hc2d8wrpq9axgkjy7fprx74r99jwi2xr7urr5vnuta'
    )
    expect(wallet.keys['cf2db909'].publicKey).to.equal(
      'npuba4jaftckeebjeegwp3c4vuk9a8xt7j6d4fruyxcucph7f3xm5wj4v7bi4259fcsg6rabcaaaaaa8rpanjsjz6mcgm2tmtqr26mar4t7x56cw3jg5wxx8zzj997gtdczc3byfgmpx'
    )
  })

  it('addValidationKey test an account which will be recovered, this is just to test gen', async () => {
    const wallet = cloneDeep(testWallet7MP4FVStart)
    const account =
      wallet.accounts['ndahvq399xmyh65d6gj2i9ccyh7zi9y3r4zrpsjdifwi27jh']
    const keysLength = Object.keys(wallet.keys).length

    expect(account.validationKeys.length).to.equal(0)

    await ValidationKeyMaster.addValidationKey(wallet, account)

    expect(account.validationKeys.length).to.equal(1)
    expect(Object.keys(wallet.keys).length).to.equal(keysLength + 1)
    expect(wallet.keys['9998478d'].privateKey).to.equal(
      'npvta8jaftcjec25cfi7cn63bcmpwkttv4si35hjvrc78uba8zz8ijee7a5py8ji6bw5ty6saaaaae3j79b5hvuf8fpa9fsgtgxq4pj5jpf6y6fkdhtf7qqcrvbzczunbdgdemt2rn4k'
    )
    expect(wallet.keys['9998478d'].publicKey).to.equal(
      'npuba4jaftckeeb8gwicd956f3ebywneqafn2ngqm6h7yue2mudb3guircdigwnyfkigvqg5uaaaaaavfhz6hn8qiz2xwd6ya4e4x5jxhpfwzu5sxin8ezx32j8ng6k8jsfpurwgfgxs'
    )
  })
})
