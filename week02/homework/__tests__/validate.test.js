import { validateNumber } from '../index.js'

test('验证数字正则方法', () => {
    // expect(validateNumber('0')).toBe(true)
    expect(validateNumber('0.1')).toBe(true)
    expect(validateNumber('.1')).toBe(true)
    expect(validateNumber('1.1234')).toBe(true)
    expect(validateNumber('231.1')).toBe(true)
    expect(validateNumber('01')).toBe(false)
    expect(validateNumber('01.12')).toBe(false)
})