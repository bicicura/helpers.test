// Estas pruebas cubren los siguientes casos:

// Comprueba si la función dominioIsFilled devuelve una función.
// Verifica si acepta patrones de dominio válidos.
// Verifica si rechaza patrones de dominio inválidos.
// Comprueba si retorna un mensaje de error personalizado cuando se proporciona.

const { dominioIsFilled, MESSAGE, getValue } = require('../../src/helpers/dominioIsFilled');

describe('dominioIsFilled', () => {
  const validate = dominioIsFilled();

  test('returns a function', () => {
    expect(typeof dominioIsFilled()).toBe('function');
  });

  test('accepts valid domain patterns', () => {
    expect(validate('ABC123')).toBe(true);
    expect(validate('A1234567')).toBe(true);
    expect(validate('123ABC')).toBe(true);
    expect(validate('A123BCD')).toBe(true);
  });

  test('rejects invalid domain patterns', () => {
    expect(validate('ABCDEFG')).toBe(MESSAGE);
      expect(validate('AB123')).toBe(MESSAGE);
      expect(validate('AB123C')).toBe(MESSAGE);
    // expect(validate('A12345678')).toBe(MESSAGE);
    expect(validate('123ABCD')).toBe(MESSAGE);
    expect(validate('123456789')).toBe(MESSAGE);
  });

  test('returns a custom message when provided', () => {
    const customMessage = 'Error de dominio personalizado';
    const customValidate = dominioIsFilled(null, customMessage);

    expect(customValidate('ABCDEFG')).toBe(customMessage);
  });
});