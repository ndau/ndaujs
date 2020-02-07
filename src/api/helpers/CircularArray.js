/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

export default class CircularArray {
  /**
   * Constructor to create the CircularArray
   *
   * @param {number} size the size of the array will be 1 off due
   * to zero index of arrays and how this algorithm works.
   * If you want 100 entries, then you should send 101 here.
   */
  constructor (size) {
    this._arraySize = size
    this.clear()
  }

  /**
   * Private helper function to put the pointers back
   * at the front of the array.
   */
  _initializePointers () {
    this._head = 0
    this._tail = 0
  }

  /**
   * Write any type of item to this CircularArray.
   * The algorithm in play here is:
   * 1.) Always assign the item to the tail, so the tail
   * always has the latest
   * 2.) The head and tail start together...tail moves
   * through the aray
   * 3.) Once the tail hits the length it resets back to
   * the beginning
   * 4.) Tail eventually catches up with head and then they
   * move together from now on.
   *
   * This algorithm prevents the need to filter out
   * any emtpy entries. We can assume that between the head
   * and the tail is where the data lives.
   *
   * See `writeArrayToFile` for how we have to write
   * the array out.
   *
   * @param {*} item
   */
  write (item) {
    this._array[this._tail] = item
    this._tail = (this._tail + 1) % this._array.length
    if (this._tail === this._head) {
      this._head = (this._head + 1) % this._array.length
    }
  }

  /**
   * Function used to clear and reset the log data
   */
  clear () {
    this._array = new Array(this._arraySize)

    this._initializePointers()
  }

  /**
   * Write the information within the array out
   * into a file. We have 2 loops to get the older entries
   * of the array and then the newer ones.
   *
   * @param {*} fileIO a class that must have an appendFile
   * function, namely the react-native-fs library
   * @param {string} absolutePath absolute file to be written
   */
  async writeArrayToFile (fileIO, absolutePath) {
    if (this._tail > this._head) {
      // the array is not filled up yet...so we iterate between
      // the head and tail
      for (let i = this._head; i <= this._tail; i++) {
        await fileIO.appendFile(
          absolutePath,
          JSON.stringify(this._array[i]),
          'utf8'
        )
      }
    } else {
      // write the old entries
      for (let i = this._head; i < this._array.length; i++) {
        await fileIO.appendFile(
          absolutePath,
          JSON.stringify(this._array[i]),
          'utf8'
        )
      }

      // write the new ones
      for (let i = 0; i <= this._tail; i++) {
        await fileIO.appendFile(
          absolutePath,
          JSON.stringify(this._array[i]),
          'utf8'
        )
      }
    }
  }
}
