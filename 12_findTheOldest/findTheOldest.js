const getAge = function(person){
  let currentYear = new Date().getFullYear();
  if (person.hasOwnProperty("yearOfDeath")){
    return person.yearOfDeath - person.yearOfBirth;
  }else{
    return currentYear - person.yearOfBirth
  }
}

const findTheOldest = function(people) {
  let oldestPerson = people.reduce(function(oldest, person) {
     return (getAge(oldest) || 0) > (getAge(person)) ? oldest : person;
  }, {})

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
