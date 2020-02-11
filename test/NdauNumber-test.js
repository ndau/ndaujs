/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import NdauNumber from '../src/helpers/NdauNumber'
import { expect } from 'chai'

describe('NdauNumber', () => {
  it('check NdauNumber constructor', () => {
    expect(() => new NdauNumber('A')).to.throw()
    expect(() => new NdauNumber(0.1)).to.throw()
    expect(() => new NdauNumber(Number.NaN)).to.throw()
    expect(() => new NdauNumber('100')).not.to.throw()
    expect(() => new NdauNumber(100)).not.to.throw()
  })

  it('check NdauNumber toSummary', () => {
    expect(new NdauNumber(100000000).toSummary()).to.equal('1.00')
    expect(new NdauNumber(100000003).toSummary()).to.equal('1.00')
    expect(new NdauNumber(102000003).toSummary()).to.equal('1.02')
    expect(new NdauNumber(3).toSummary()).to.equal('0.00000003')
    expect(new NdauNumber(2000000).toSummary()).to.equal('0.02')
    expect(new NdauNumber(2000000).toSummary()).to.equal('0.02')
    expect(new NdauNumber(0).toSummary()).to.equal('0.00')
  })
})
