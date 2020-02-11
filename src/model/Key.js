/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

// Please be aware that to remain backwards compatible we must
// always add to or deprecate items. We CANNOT remove anything
// from this class. If you feel it shuold be removed please check
// with KP before doing so.
class Key {
  constructor () {
    this.publicKey = ''
    this.privateKey = ''
    this.path = ''
    this.derivedFromRoot = ''
  }

  toJSON () {
    return {
      publicKey: this.publicKey,
      privateKey: this.privateKey,
      path: this.path,
      derivedFromRoot: this.derivedFromRoot
    }
  }
}

export default Key
