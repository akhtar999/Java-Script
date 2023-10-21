const score = 500;
// console.log(score);

const bankBalance = new Number(300);
// console.log(bankBalane);
const type = bankBalance.toString();
// console.log(type.length);
// console.log(typeof type);
// console.log(bankBalance.toFixed(2)) // 300.00

const Price = 24.8653;
// console.log(Price.toPrecision(2)) // 25
// console.log(Price.toPrecision(3)) // 24.9

const money = 1000000;
// console.log(money.toLocaleString()) // 10,00,000

//***************************************** Maths ****************************************
// Maths library comes default with JS

// console.log(Math);

// console.log(Math.abs(-8)); // just change (-) to (+), positive will be (+) // 8

// console.log(Math.round(2.4)) // 2
// console.log(Math.round(2.6)) // 3
// console.log(Math.ceil(2.3)); // 3
// console.log(Math.floor(2.6)); // 2
// console.log(Math.sqrt(36)); // 6

// console.log(Math.min(9, 1, 3, 6, 5, 4, 0, -1));
// console.log(Math.max(9, 1, 3, 6, 5, 4, 0, -1));

// console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
