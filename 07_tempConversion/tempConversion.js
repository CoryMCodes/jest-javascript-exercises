const convertToCelsius = function(num) {
  // use Math.round ( * x) / x to determine decimal places
  // use this method because parseFloat returns a string
  let converted = Math.round(((num - 32) * (5/9)) * 10) / 10;
  return converted;
};

const convertToFahrenheit = function(num) {
  let converted = Math.round((num * (9/5) + 32) * 10)/10;
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
