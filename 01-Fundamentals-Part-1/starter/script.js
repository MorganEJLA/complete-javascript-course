// Values and Variables

let country = "Portugal";
let continent = "Europe";
let population_in_millions = 10.8;

// console.log(country, continent, population_in_millions);

let javascriptIsFun = true;

console.log(typeof country);
console.log(typeof javascriptIsFun);
console.log(typeof population_in_millions);

let year;
year = 2024;
console.log(typeof year);

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

const johnWeight = 95;
const johnHeight = 1.88;

let markBMI = markWeight / markHeight ** 2;

let johnBMI = johnWeight / johnHeight ** 2;

const markWeight2 = 95;
const markHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

let markBMI2 = markWeight2 / markHeight2 ** 2;
let johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = johnBMI2 > markBMI;
console.log(markHigherBMI, johnHigherBMI);
