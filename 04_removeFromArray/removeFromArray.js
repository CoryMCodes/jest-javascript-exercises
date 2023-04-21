const removeFromArray = function(array, ...theArgs) {
  // filter given array i is each index in array
  return array.filter(i => {
    // iterate through args to to see if theres a match. ! from true to false to remove using filter
    return !theArgs.find(j =>{
      // use strict type matching to pass last test
      return j === i;
    })
    })
  };

// Do not edit below this line
module.exports = removeFromArray;
