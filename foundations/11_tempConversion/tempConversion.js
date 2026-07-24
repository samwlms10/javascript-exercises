const convertToCelsius = function(fahrenheitTemp) {
  const celsiusConversion = (fahrenheitTemp - 32) * (5/9)
  return Number(celsiusConversion.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  const fahrenheitConversion = (celsiusTemp * (9/5)) + 32;
  return Number(fahrenheitConversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
