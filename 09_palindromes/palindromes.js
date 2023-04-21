const palindromes = function (string) {
  // step1: clean input
  //removes punctuation and white space to just compare characters
  const lowerCasePunctuationRE = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{1,}/g, "").toLowerCase();
  const splitString = lowerCasePunctuationRE.split("");
  // step 2: reverse clean string
  let reverseString = "";
  // loop as many times as there is chars in array
  for(i= splitString.length - 1; i >= 0; i--){
    // add character to reverse string starting with last index of splitString[]
    reverseString += splitString[i]; 
  }
  // compare reversed string to cleaned input string 
  return reverseString === lowerCasePunctuationRE ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
