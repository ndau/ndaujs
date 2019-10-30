import KeyMaster from 'src/helpers/KeyMaster'
import ValidationKeyMaster from 'src/helpers/ValidationKeyMaster'
import util from 'util'
require('./wasmHelper.js')
// This is a test helper used to create mocks. It does not assert anything. Which is fine. It's a helper
describe('making a mock', () => {
  it('creates everything', async () => {
    const bytes = await Keyaddr.wordsToBytes(
      'en',
      'eye eye eye eye eye eye eye eye eye eye eye eye'
    )

    const u = await KeyMaster.createFirstTimeUser(bytes, 'josh', 'nd', 5)

    let w = u.wallets['386a85d8']
    let acc = w.accounts['ndakj49v6nnbdq3yhnf8f2j6ivfzicedvfwtunckivfsw9qt']

    // add three validation keys
    await ValidationKeyMaster.addValidationKey(w, acc)
    await ValidationKeyMaster.addValidationKey(w, acc)
    await ValidationKeyMaster.addValidationKey(w, acc)

    w = u.wallets['386a85d8']
    acc = w.accounts['ndae227gbzcj764d9zqsqfccbucpj8r6arc6jz8bpir5jpav']
    await ValidationKeyMaster.addValidationKey(w, acc)
    await ValidationKeyMaster.addValidationKey(w, acc)
    await ValidationKeyMaster.addValidationKey(w, acc)

    console.log(
      'User now',
      util.inspect(w, false, null, true /* enable colors */)
    )
  })
})
