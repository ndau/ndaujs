import fs from 'fs'
import { promisify } from 'util'
require('/Users/josh/dev/go/src/github.com/oneiro-ndev/ndaumath/cmd/keyaddr/wasm_exec')
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

console.log('DECLARED HERE')
before(done => {
  console.log('STARTING THE LOADER')
  const go = new Go()
  instantiateStreaming(
    readFile(
      '/Users/josh/dev/go/src/github.com/oneiro-ndev/ndaumath/cmd/keyaddr/keyaddr.wasm'
    ),
    go.importObject
  )
    .then(function (result) {
      go.run(result.instance)
    })
    .then(done)
})
