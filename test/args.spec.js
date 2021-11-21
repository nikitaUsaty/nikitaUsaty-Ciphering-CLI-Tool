const parseArgs = require('../bin/args')

describe('Parsing arguments tests', () => {
  test(`['-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'] should be equal {
  config: 'C1-C1-R0-A',
  input: './input.txt',
  output: './output.txt',
}`, () => {
    expect(parseArgs(['-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'])).toEqual({
      config: 'C1-C1-R0-A',
      input: './input.txt',
      output: './output.txt',
    })
  })

  it('case "ghfhfj" should throw an error', async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => {
      throw new Error('process.exit: ' + number)
    })
    expect(() => {
      parseArgs(['ghfhfj'])
    }).toThrow()
    expect(mockExit).toHaveBeenCalledWith(1)
    mockExit.mockRestore()
  })

  it('case "-c C1-C1-R0-A -i -o ./output.txt" should throw an error', async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => {
      throw new Error('process.exit: ' + number)
    })
    expect(() => {
      parseArgs(['-c', 'C1-C1-R0-A', '-i', '-o', './output.txt'])
    }).toThrow()
    expect(mockExit).toHaveBeenCalledWith(1)
    mockExit.mockRestore()
  })
})
