const MESSAGE = 'Debe ser un dominio válido'

function getValue(value) {
    return value?.value ?? value
}

function dominioIsFilled(params, message = MESSAGE) {
  const dominio = value => {
    let _value = getValue(value);

    if (!_value) return true;

    _value = _value.replace(/ /g, '').toUpperCase();
    return (
      _value.match(/^[a-zA-Z]{3}\d{3}$/) ||
      _value.match(/^[A-Za-z]{2}[0-9]{3}[A-Za-z]{2}$/) ||
      _value.match(/^[A-Za-z]{1}[0-9]{7}/) ||
      _value.match(/^\d{3}[a-zA-z]{3}$/) ||
      _value.match(/^[a-zA-Z]{1}\d{3}[a-zA-z]{3}$/)
    ) ? true : message;
  };
  return dominio;
}

module.exports = { dominioIsFilled, MESSAGE, getValue };