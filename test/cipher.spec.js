const cipher = require('../bin/cipher')

describe(`Cipher's algorithm tests`, () => {
  test(`This is secret. Message about "_" symbol! expected to be equal  Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`, () => {
    expect(cipher('This is secret. Message about "_" symbol!', ['C1', 'C1', 'R0', 'A'])).toEqual(
      'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!'
    )
  })

  test('This is secret. Message about "_" symbol! expected to be equal Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!', () => {
    expect(
      cipher('This is secret. Message about "_" symbol!', ['C1', 'C0', 'A', 'R1', 'R0', 'A', 'R0', 'R0', 'C1', 'A'])
    ).toEqual('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!')
  })

  test('This is secret. Message about "_" symbol! expected to be equal This is secret. Message about "_" symbol!', () => {
    expect(
      cipher('This is secret. Message about "_" symbol!', ['C1', 'R1', 'C0', 'C0', 'A', 'R0', 'R1', 'R1', 'A', 'C1'])
    ).toEqual('This is secret. Message about "_" symbol!')
  })
})
