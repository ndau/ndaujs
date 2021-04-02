/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import fs from 'fs'
import { promisify } from 'util'
import './wasm_exec.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const readFile = promisify(fs.readFile)

const toUint8Array = b => {
  var u = new Uint8Array(b.length)
  for (var i = 0; i < b.length; ++i) {
    u[i] = b[i]
  }
  return u
}

const root = global || window
async function initKeyaddr () {
    if (!root.Keyaddr) {
//        console.log('starting wasm')
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

        const start = async function () {
            const go = new Go()
//            console.log('starting Go')
            const __filename = fileURLToPath(import.meta.url)
            const __dirname = dirname(__filename)
            return instantiateStreaming(
                readFile(`${__dirname}/keyaddr.wasm`),
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
                    signEdB64: promisify(KeyaddrNS.signEdB64),
                    signEdText: promisify(KeyaddrNS.signEdText),
                    hardenedChild: promisify(KeyaddrNS.hardenedChild),
                    newKey: promisify(KeyaddrNS.newKey),
                    exit: promisify(KeyaddrNS.exit),
                    fromString: promisify(KeyaddrNS.fromString),
                    newEdKey: promisify(KeyaddrNS.newEdKey),
                    newEdKeyFromSeed: promisify(KeyaddrNS.newEdKeyFromSeed),
                    addrFromPublicKey: promisify(KeyaddrNS.addrFromPublicKey)
                }
            })
            .catch(err => {
                console.error('Error loading WASM', err)
            })
        }
        await start()
    }
    return root.Keyaddr
}

export { initKeyaddr }