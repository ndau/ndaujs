/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import BlockchainAPIError from '../src/api/errors/BlockchainAPIError'
import { Messages } from '../src/api/errors/BlockchainAPIError'
import { expect } from 'chai'

describe('BlockchainAPIError', () => {
  it('identify error from substrings', () => {
    try {
      throw new BlockchainAPIError('source == destination')
    } catch (e) {
      expect(e.toString()).to.equal(`Error: ${Messages.SRC_DEST_SAME}`)
    }
  })

  it('identify error from code', () => {
    try {
      throw new BlockchainAPIError('1004')
    } catch (e) {
      expect(e.toString()).to.equal(`Error: ${Messages.SRC_DEST_SAME}`)
    }
  })
})
