function cipher(str, cipherType) {
  let result = ''
  let shift
  let encode

  if (cipherType[0].split('')[0] == 'C' || cipherType[0].split('')[0] == 'R') {
    shift = cipherType[0].split('')[0] == 'C' ? 1 : 8
    encode = cipherType[0].split('')[1] == '1' ? 1 : 0

    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let lowers = letters.replace(/\s/g, '').toLowerCase().split('')
    let uppers = letters.replace(/\s/g, '').toUpperCase().split('')
    result += Array.from(str)
      .map((val) => {
        if (lowers.indexOf(val.toLowerCase()) === -1 || uppers.indexOf(val.toUpperCase()) === -1) {
          return val
        }
        if (encode === 1) {
          const lowersEI = (lowers.indexOf(val.toLowerCase()) + shift) % letters.length
          const lowersEC = lowers[lowersEI]
          const uppersEI = (uppers.indexOf(val.toUpperCase()) + shift) % letters.length
          const uppersEC = uppers[uppersEI]

          return lowers.indexOf(val) !== -1 ? lowersEC : uppersEC
        } else if (encode === 0) {
          lowersEI = (lowers.indexOf(val.toLowerCase()) - shift) % letters.length

          lowersEI = lowersEI < 0 ? lowersEI + letters.length : lowersEI

          const lowersEC = lowers[lowersEI]

          let uppersEI = (uppers.indexOf(val.toUpperCase()) - shift) % letters.length

          uppersEI = uppersEI < 0 ? uppersEI + letters.length : uppersEI

          const uppersEC = uppers[uppersEI]

          return lowers.indexOf(val) !== -1 ? lowersEC : uppersEC
        }
      })
      .join('')
  }

  if (cipherType[0] == 'A') {
    let tempRes = ''
    let len = str.length
    let i = -1
    let cCode

    while (++i < len) {
      cCode = str.charCodeAt(i)

      if (cCode >= 97 && cCode <= 122) {
        tempRes += String.fromCharCode(cCode + (122 - cCode - (cCode - 97)))
        continue
      }

      if (cCode >= 65 && cCode <= 90) {
        tempRes += String.fromCharCode(cCode + (90 - cCode - (cCode - 65)))
        continue
      }

      tempRes += str[i]
    }

    result += tempRes
  }

  cipherType = cipherType.slice(1)
  str = result

  if (cipherType.length === 0) {
    return result
  } else {
    return cipher(result, cipherType)
  }
}

module.exports = cipher
