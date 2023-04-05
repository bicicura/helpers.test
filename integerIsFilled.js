function getValue(value) {
    return value?.value ?? value
}

const MESSAGE = 'Debe ser un número entero'

function integerIsFilled(message = MESSAGE) {
  const integer = (value) => {
    _value = getValue(value);

    if (!_value) return value;

      // This allows it to handle both string and number inputs.
    const number = parseFloat(_value);

    if (_value.toString() !== number.toString()) {
      return message;
    }

    // esta línea se updatea para matchear el test
    return Number.isInteger(number) ? true : message;
  };

  return integer;
}

module.exports = {integerIsFilled, MESSAGE, getValue}