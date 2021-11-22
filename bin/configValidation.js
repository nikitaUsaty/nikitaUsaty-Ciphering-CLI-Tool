function configValidation(config) {
  if (!config) {
    process.stderr.write('Error! There might be problem with config ' + '\n')
    process.exit(1)
  }
}

function errorHandler() {
  process.stderr.write('Error! There might be invalid or missing config argument!' + '\n')
  process.exit(1)
}

function getArgs(configFlag, args) {
  const configIx = args.indexOf(configFlag)
  return configIx !== -1 ? args[configIx + 1].trim() : null
}

function validateArgumentsConfig(args) {
  const regexp = /^((C[0,1])+[-]?|(R[0,1])+[-]?|(A)+[-]?)+$/g
  let configFlag = ''
  args.indexOf('-c') != -1 ? (configFlag = args.indexOf('-c')) : (configFlag = args.indexOf('--config'))
  if (!regexp.test(getArgs(args[configFlag], args))) errorHandler()
}

module.exports = { configValidation, validateArgumentsConfig }
