// Values and Variables

// console.log(country, continent, population_in_millions);

let javascriptIsFun = true;

console.log(typeof javascriptIsFun);
console.log(typeof population_in_millions);

console.log(typeof null);

const language = "Portuguese";
// language = "English";
console.log(language);

const now = 2045;
const ageMorgan = now - 1986;
const ageSteve = now - 1974;
console.log(ageMorgan, ageSteve);
console.log(ageMorgan * 2, ageSteve / 2);

let x = 10 + 5;
x += 10;
x *= 4;
console.log(x);

console.log(ageMorgan > x);

const isFullAge = ageMorgan >= 87;
console.log(typeof isFullAge);

const markWeight = 78;
const markHeight = 1.69;

// const johnWeight = 95;
// const johnHeight = 1.88;

// let markBMI = markWeight / markHeight ** 2;

// let johnBMI = johnWeight / johnHeight ** 2;

// const markWeight2 = 95;
// const markHeight2 = 1.88;

// const johnWeight2 = 85;
// const johnHeight2 = 1.76;

// let markBMI2 = markWeight2 / markHeight2 ** 2;
// let johnBMI2 = johnWeight2 / johnHeight2 ** 2;

// const markHigherBMI = markBMI > johnBMI;
// const johnHigherBMI = johnBMI2 > markBMI;
// console.log(markHigherBMI, johnHigherBMI);

// let country = "Portugal";
// let year = 2024;
// let birthYear = 1986;

// const manifest =
//   "I'm going to " + country + " for my " + (year - birthYear) + "th birthday";

// console.log(manifest);

// const manifestNew = `I'm going to ${country} for my ${
//   year - birthYear
// }th birthday`;

// console.log(manifestNew);

// const age = 1;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Steve is old enough to vote 🗳️");
// } else {
//   let yearsLeft = 18 - age;
//   if (yearsLeft <= 1) {
//     console.log(`Steven cant vote. wait another ${yearsLeft} year`);
//   } else {
//     console.log(`Steven cant vote. wait another ${yearsLeft} years`);
//   }
// }
// Type coercion

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// truthy and falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Steve"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it alll");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("Yay");
// } else {
//   console.log("Height is undefined");
// }
//
// const numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );
// if (numNeighbors == 1) {
//   console.log("Thats crazy!");
// } else if (numNeighbors > 1) {
//   console.log("cool");
// } else if (numNeighbors === 0) {
//   console.log("an island");
// }

const isTraveling = true;
const isHappy = true;
const isWorking = true;

console.log(isTraveling && isWorking && isHappy);

if (isTraveling && isWorking && isHappy) {
  console.log("That means its 2024");
} else {
  console.log(`It's still going to happen`);
}
