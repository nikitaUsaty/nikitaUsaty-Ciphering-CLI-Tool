const configValidation = require('../bin/configValidation')

test('expect undefined to be undefined', () => {
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
