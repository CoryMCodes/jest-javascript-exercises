const fibonacci = function(fibNumber) {
  if (typeof fibNumber === "string") fibNumber = Number(fibNumber);
  
  if (fibNumber < 0) return "OOPS";

  let current = 0;
  let previous = 1;
  let next = fibNumber;

  for(i = 2; i<= fibNumber; i++){
    next = current + previous;
    current = previous;
    previous = next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
