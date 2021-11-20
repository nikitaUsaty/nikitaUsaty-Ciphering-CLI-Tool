const { pipeline } = require('stream')

const configValidation = require('./configValidation.js')
const { readS, writeS, transformStream } = require('./stream')
const cipher = require('./cipher.js')
const readArgs = require('./args.js')
let { config, input, output } = readArgs()

configValidation()

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
