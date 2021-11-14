const fs = require('fs')
const path = require('path')
const stream = require('stream')

function pathCheck(pathToCheck) {
  let validatedPath = pathToCheck
  if (!path.isAbsolute(pathToCheck)) validatedPath = path.resolve(validatedPath)

  return fs.existsSync(validatedPath)
}

const readS = (input) => {
  return input
    ? pathCheck(input)
      ? fs.createReadStream(path.join(__dirname, '..', input))
      : exitProgram(`Error! Probably within file path: ${input}`, 1)
    : process.stdin
}

const writeS = (output) => {
  return output
    ? pathCheck(output)
      ? fs.createWriteStream(path.join(__dirname, '..', output), {
          flags: 'a+',
        })
      : exitProgram(`Error! Probably within file path: ${output}`, 1)
    : process.stdout
}

class transformStream extends stream.Transform {
  constructor(cipher, cipherType) {
    super()
    this.cipher = cipher
    this.cipherType = cipherType
  }

  _transform(data, encoding, callback) {
    this.push(this.cipher(data.toString(), this.cipherType))
    callback()
  }
}

function exitProgram(message, code) {
  process.stderr.write(message + '\n')
  process.exit(code)
}

module.exports = {
  readS,
  writeS,
  transformStream,
}
