const sumAll = function(num1, num2) {
  let sum = 0;
  let small;
  let large;
  // Assign given numbers to correct position to work with for loop
  if(num1 < num2){
    small = num1;
    large = num2
  }else{
    small = num2;
    large = num1;
  }

  // Catch edge cases that do not work in function
  if(typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0){
    return "ERROR"
  }
  // loop from smallest to largest number adding all number inbetween to sum variable
  for(i = small; i <= large; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
