const argsTypes = ['-c --config', '-i --input', '-o --output']

const argsAnswer = {}
const map = new Map()

function readArgs(args) {
  for (let i = 0; i < args.length; i = i + 2) {
    const findArgIndex = argsTypes.findIndex((type) => {
      const splittedType = type.split(' ')

      return args[i] === splittedType[0] || args[i] === splittedType[1]
    })
    if (findArgIndex !== -1) {
      const foundType = argsTypes[findArgIndex]
      if (!map.has(foundType)) {
        map.set(foundType, args[i + 1])
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
