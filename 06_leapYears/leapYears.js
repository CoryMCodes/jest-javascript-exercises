const leapYears = function(year) {
  // if its not divisble by 4 or if it is divisible by 100 but not 400 its not a leap year
  if(year % 4 != 0 || year % 100 === 0 && year % 400 != 0){
    return false;
  }else{
    return true;
}
};

// Do not edit below this line
module.exports = leapYears;
