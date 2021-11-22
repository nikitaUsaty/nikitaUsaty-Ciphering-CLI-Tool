const { configValidation, validateArgumentsConfig } = require('../bin/configValidation')

describe('Config existstence tests', () => {
  test('expect A to be undefined', () => {
    expect(configValidation('A')).toBe(undefined)
  })

  it('tests configValidation with process.exit', async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => {
      throw new Error('process.exit: ' + number)
    })
    expect(() => {
      configValidation()
    }).toThrow()
    expect(mockExit).toHaveBeenCalledWith(1)
    mockExit.mockRestore()
  })
})

describe('Congig arguments tests', () => {
  test(`expect ['-c', 'C1-C1-R0-A'] to be undefined`, () => {
    expect(validateArgumentsConfig(['-c', 'C1-C1-R0-A'])).toBe(undefined)
  })

  it(`tests ['-c', 'C1-C8-R0-A5'] configValidation with process.exit`, async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => {
      throw new Error('process.exit: ' + number)
    })
    expect(() => {
      validateArgumentsConfig(['-c', 'C1-C8-R0-A5'])
    }).toThrow()
    expect(mockExit).toHaveBeenCalledWith(1)
    mockExit.mockRestore()
  })

  it(`tests ['--config', 'F-C-R-A5'] configValidation with process.exit`, async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => {
      throw new Error('process.exit: ' + number)
    })
    expect(() => {
      validateArgumentsConfig(['--config', 'F-C-R-A5'])
    }).toThrow()
    expect(mockExit).toHaveBeenCalledWith(1)
    mockExit.mockRestore()
  })
})
