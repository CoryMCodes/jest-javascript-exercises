const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i <= array.length - 1; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result = array[0];
  for(let i = 1; i <= array.length - 1; i++){
    result *= array[i];
  }
  return result;
};

const power = function(num1, power) {
	result = num1;
  // if to the power of 1 result = num1 * 1 AKA num1
  if(power === 1) return result;

  for(i = 1; i < power; i++){
    result *= num1;
  }
  return result;
};

const factorial = function(number) {
	let factorial = 1;
  // factorial of 0 is 1
  if(number === 0){
    return factorial;
  }
  for(i = 1; i <= number; i++){
    factorial *= i;
  }
  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
