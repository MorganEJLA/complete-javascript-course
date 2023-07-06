"use strict";
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge2(1998));

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1986));

//calculate how many years until retirement//
//calculate the age, and then the retirement age minus the current age//
const yearsUntilRetirement = birthYear 