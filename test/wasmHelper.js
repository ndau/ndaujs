import { expect } from 'chai'
import fs from 'fs'
import { promisify } from 'util'
require('./wasm_exec')
const readFile = promisify(fs.readFile)

const toUint8Array = b => {
  var u = new Uint8Array(b.length)
  for (var i = 0; i < b.length; ++i) {
    u[i] = b[i]
  }
  return u
}

const instantiateStreaming = (source, importObject) => {
  importObject = importObject || {}
  return source
    .then(response => Promise.resolve(toUint8Array(response)))
    .then(arrayBuffer => Promise.resolve(new WebAssembly.Module(arrayBuffer)))
    .then(mod => {
      return WebAssembly.instantiate(mod, importObject).then(instance => {
        return {
          module: mod,
          instance: instance
        }
      })
    })
}

before(done => {
  const go = new Go()
  instantiateStreaming(readFile(`${__dirname}/keyaddr.wasm`), go.importObject)
    .then(function (result) {
      go.run(result.instance)
    })
    .then(() => {
      global.Keyaddr = {
        newKey: promisify(KeyaddrNS.newKey),
        wordsToBytes: promisify(KeyaddrNS.wordsToBytes),
        deriveFrom: promisify(KeyaddrNS.deriveFrom),
        ndauAddress: promisify(KeyaddrNS.ndauAddress),
        toPublic: promisify(KeyaddrNS.toPublic),
        child: promisify(KeyaddrNS.child),
        sign: promisify(KeyaddrNS.sign),
        hardenedChild: promisify(KeyaddrNS.hardenedChild),
        newKey: promisify(KeyaddrNS.newKey),
        exit: promisify(KeyaddrNS.exit)
      }
    })
    .then(done)
})
