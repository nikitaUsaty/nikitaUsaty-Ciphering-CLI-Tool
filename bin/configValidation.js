function configValidation(config) {
  if (!config) {
    process.stderr.write('Error! There might be problem with config ' + '\n')
    process.exit(1)
  }
}

module.exports = configValidation
