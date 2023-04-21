const reverseString = function(string) {
  // split string to arary
  let splitString = string.split("");
  // initialize empty string to take reversed string
  let reverseString = "";
  // loop as many times as there is chars in array
  for(i= splitString.length - 1; i >= 0; i--){
    // add character to reverse string starting with last index of splitString[]
    reverseString += splitString[i]; 
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
