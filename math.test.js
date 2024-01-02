const { add, subtract, divide, multiply } = require('./math')

describe('Math module test', () => {
  it('should test add two numbers', () => {
    expect(add(10, 10)).toBe(20)
  })
  it('should test subtract two numbers', () => {
    expect(subtract(10, 10)).toBe(0)
  })
  it('should test divide two numbers', () => {
    expect(divide(10, 10)).toBe(1)
  })
  it('should test multiply two numbers', () => {
    expect(multiply(10, 10)).toBe(100)
  })
})
