/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import CircularArray from '../src/api/helpers/CircularArray'
import { expect } from 'chai'

describe('CircularArray', () => {
  it('handle the case were we have not taken up the full array yet', async () => {
    const array = new CircularArray(11)
    array.write(1)
    array.write(2)
    array.write(3)
    array.write(4)
    array.write(5)
    array.write(6)
    array.write(7)
    array.write(8)

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data == '8') {
          expect(fileData.length).to.equal(8)
          expect(fileData).to.deep.equal([
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
          ])
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('handle the case were we have just filled the array', async () => {
    const array = new CircularArray(6)
    array.write(1)
    array.write(2)
    array.write(3)
    array.write(4)
    array.write(5)

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data == '5') {
          expect(fileData.length).to.equal(5)
          expect(fileData).to.deep.equal(['1', '2', '3', '4', '5'])
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('make sure we format appropriately now', async () => {
    const array = new CircularArray(6)
    array.write('{ "a": "hello world 1" }')
    array.write('{ "a": "hello world 2" }')
    array.write('{ "a": "hello world 3" }')
    array.write('{ "a": "hello world 4" }')
    array.write('{ "a": "hello world 5" }')

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data == `"{ "a": "hello world 5" }"\n`) {
          expect(fileData.length).to.equal(5)
          expect(fileData).to.deep.equal([
            '"{ "a": "hello world 1" }"\n',
            '"{ "a": "hello world 2" }"\n',
            '"{ "a": "hello world 3" }"\n',
            '"{ "a": "hello world 4" }"\n',
            '"{ "a": "hello world 5" }"\n'
          ])
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('do not grow the array as entries get added', async () => {
    const array = new CircularArray(6)
    array.write(1)
    array.write(2)
    array.write(3)
    array.write(4)
    array.write(5)
    array.write(6)
    array.write(7)
    array.write(8)

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data == '8') {
          expect(fileData.length).to.equal(5)
          expect(fileData).to.deep.equal(['4', '5', '6', '7', '8'])
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('do not grow the array with a small amount of entries get added', async () => {
    const array = new CircularArray(6)
    for (let i = 0; i < 10; i++) {
      array.write({ key: i })
    }

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data.key == '9') {
          expect(fileData.length).to.equal(5)
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('do not grow the array with a medium amount of entries get added', async () => {
    const array = new CircularArray(51)
    for (let i = 0; i < 300; i++) {
      array.write({ key: i })
    }

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data.key == '299') {
          expect(fileData.length).to.equal(50)
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('do not grow the array with a large amount of entries get added', async () => {
    const array = new CircularArray(1001)
    for (let i = 0; i < 7000; i++) {
      array.write({ key: i })
    }

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data.key == '6999') {
          expect(fileData.length).to.equal(1000)
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })

  it('do not grow the array with an extra large amount of entries get added', async () => {
    const array = new CircularArray(5001)
    for (let i = 0; i < 40000; i++) {
      array.write({ key: i })
    }

    let fileData = []
    class FileIO {
      async appendFile (path, data, encoding) {
        fileData.push(data)
        if (data.key == '39999') {
          expect(fileData.length).to.equal(5000)
        }
      }
    }

    await array.writeArrayToFile(new FileIO(), '/')
  })
})
