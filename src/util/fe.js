'use strict';

// @see https://github.com/cryptii/cryptii/blob/676f76d0bf5cdb13ffcd0fb78cff315825ed6ba6/src/TextEncoder.js
const codePointsFromString = function(string) {
  // In the worst case every string code unit needs to be translated to
  // a single code point each
  // Create a fixed size array that gets sliced at the end
  const length = string.length
  const codePoints = new Array(length)

  let codeUnit, nextCodeUnit
  let j = 0
  let i = 0

  while (i < length) {
    codeUnit = string.charCodeAt(i++)

    if (codeUnit >= 0xD800 && codeUnit <= 0xDBFF && i < length) {
      // Identified a high surrogate
      nextCodeUnit = string.charCodeAt(i++)

      // There is a next character
      if ((nextCodeUnit & 0xFC00) === 0xDC00) {
        // Low surrogate
        codePoints[j++] =
          ((codeUnit & 0x3FF) << 10) +
          (nextCodeUnit & 0x3FF) +
          0x10000
      } else {
        // Unmatched surrogate; Only append this code unit, in case
        // the next code unit is the high surrogate of a surrogate pair
        codePoints[j++] = codeUnit
        i--
      }
    } else {
      // Identified BMP character
      codePoints[j++] = codeUnit
    }
  }

  // Slice the fixed size array to the portion actually in use
  return codePoints.slice(0, j)
}

// @see https://github.com/cryptii/cryptii/blob/02ef16e42494db1903aac5841c7652385251c976/src/Encoder/URL.js
const encodeBytes = function(bytes) {
  let string = ''
  for (let i = 0; i < bytes.length; i++) {
    string += '%' + ('0' + bytes[i].toString(16)).slice(-2)
  }
  return string
}

const encode = function(input) {
  if (input.length) {
    let output = codePointsFromString(input)
    output = encodeBytes(output)
    return output;
  }
  return ''
}

/*
 * fe (fully encode)
 */
const fe = {
  'version': '0.0.1',
  'encode': encode
}

module.exports = fe;
