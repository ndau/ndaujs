/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

// This is a singleton, but it's rather more of a global object.
// As different persistent storage strategies will be used in different contexts this provides a single point from which they will persist. Since this library was adapted from a ReactNative context. The consumers of this object are expecting the same API as `react-native-community/async-storage`.
// Properly initializing this object requires the following idiom somewhere early in the execution of your program.

class CryptoStore {
  constructor () {
    if (!CryptoStore.instance) {
      CryptoStore.instance = this
    }
    this.store = {}

    return CryptoStore.instance
  }

  setStore (store) {
    this.store = store
  }

  async generateRandom (numberOfBytes) {
    if (this.store.randomBytes) {
      return await store.randomBytes(numberOfBytes)
    } else if (this.store) {
      return await this.store(numberOfBytes)
    }
  }
}

const instance = new CryptoStore()

export default instance
