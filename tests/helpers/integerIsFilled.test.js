const { integerIsFilled, MESSAGE, getValue } = require('../../src/helpers/integerIsFilled');


describe('integerIsFilled', () => {
  test('returns a function', () => {
    const result = integerIsFilled();
    expect(typeof result).toBe('function');
  });

  test('accepts valid integers', () => {
  const validateInteger = integerIsFilled();

  expect(validateInteger(42)).toBe(true);
  expect(validateInteger({ value: 42 })).toBe(true);
  expect(validateInteger({ value: '42' })).toBe(true);
  });
    
  test('rejects non-integers', () => {
    const validateInteger = integerIsFilled();

    expect(validateInteger('42.5')).toBe(MESSAGE);
    expect(validateInteger({ value: '42.5' })).toBe(MESSAGE);
    expect(validateInteger(42.5)).toBe(MESSAGE);
  });

  test('returns a custom message when provided', () => {
    const customMessage = 'Custom error message';
    const validateInteger = integerIsFilled(customMessage);

    expect(validateInteger('42.5')).toBe(customMessage);
  });
});