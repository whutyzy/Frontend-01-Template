import match from '../match'

test('match abababx', () => {
    expect(match('abababx')).toBe(true)
    expect(match('aabababx')).toBe(true)
    expect(match('abababababx')).toBe(true)
    expect(match('abxababx')).toBe(false)
    expect(match('ababcabx')).toBe(false)
})