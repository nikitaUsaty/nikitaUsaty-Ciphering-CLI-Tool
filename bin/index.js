const { pipeline } = require('stream')

const { configValidation, validateArgumentsConfig } = require('./configValidation.js')
const { readS, writeS, transformStream } = require('./stream')
const cipher = require('./cipher.js')
const readArgs = require('./args.js')
const argsInput = process.argv.slice(2)
let { config, input, output } = readArgs(argsInput)

configValidation(config)
validateArgumentsConfig([argsInput[0], config])

config = config.split('-')

const readSt = readS(input)
const writeSt = writeS(output)
const transformSt = new transformStream(cipher, config)

pipeline(readSt, transformSt, writeSt, (err) => {
  if (err) {
    console.error('Error Fail', err)
  } else {
    console.log('Success')
  }
})
