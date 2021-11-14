const argsTypes = ['-c --config', '-i --input', '-o --output']
const argsInput = process.argv.slice(2)
const argsAnswer = {}
const map = new Map()

function readArgs() {
  for (let i = 0; i < argsInput.length; i = i + 2) {
    const findArgIndex = argsTypes.findIndex((type) => {
      const splittedType = type.split(' ')

      return argsInput[i] === splittedType[0] || argsInput[i] === splittedType[1]
    })
    if (findArgIndex !== -1) {
      const foundType = argsTypes[findArgIndex]
      if (!map.has(foundType)) {
        map.set(foundType, argsInput[i + 1])
      }
    } else {
      errorsHandler(new Error('Ops... Wrong arguments :c'))
    }
  }

  map.forEach(function (value, key) {
    const command = key.split(' ')[1].slice(2)

    argsAnswer[command] = value
  })

  return argsAnswer
}

function errorsHandler(err) {
  if (err) {
    process.stderr.write(err.message + '\n')
    process.exit(1)
  }
}

module.exports = readArgs
