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

const root = global || window
if (!root.Keyaddr) {
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

  const go = new Go()
  instantiateStreaming(
    readFile(`${__dirname}/keyaddr-0.0.2.wasm`),
    go.importObject
  )
    .then(function (result) {
      go.run(result.instance)
    })
    .then(() => {
      root.Keyaddr = {
        newKey: promisify(KeyaddrNS.newKey),
        wordsToBytes: promisify(KeyaddrNS.wordsToBytes),
        deriveFrom: promisify(KeyaddrNS.deriveFrom),
        ndauAddress: promisify(KeyaddrNS.ndauAddress),
        toPublic: promisify(KeyaddrNS.toPublic),
        child: promisify(KeyaddrNS.child),
        sign: promisify(KeyaddrNS.sign),
        hardenedChild: promisify(KeyaddrNS.hardenedChild),
        wordsFromPrefix: promisify(KeyaddrNS.wordsFromPrefix),
        isPrivate: promisify(KeyaddrNS.isPrivate),
        wordsFromBytes: promisify(KeyaddrNS.wordsFromBytes),
        fromString: promisify(KeyaddrNS.fromString),
        validateAddress: promisify(KeyaddrNS.validateAddress),
        exit: promisify(KeyaddrNS.exit)
      }
    })
    .then(() => {
      run()
    })
    .catch(err => {
      console.error('Error loading WASM', err)
    })
}
