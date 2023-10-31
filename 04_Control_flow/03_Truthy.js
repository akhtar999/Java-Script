const Email = "akhtar.com";

if (Email) {
  //   console.log("Email is available");
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", "false", " ", [], {}, function () {};

// const num = " ";
// if (num) {
//   console.log("true");
// }

//this is how to check true or false

const mail = [];

if (mail.length === 0) {
  console.log("Array is empty");
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("object is empty");
}

const obj2 = { name: "akhtar", gender: "male" };

console.log(Object.keys(obj2)); // [ 'name', 'gender' ]
console.log(Object.values(obj2)); // [ 'akhtar', 'male' ]

// in browser console we can also check like this
// false == 0 (it will return true)
//  false == "" (it will return true)

// nullish coalescing operator (??): null undefined
// sometime from database we recive null or did't recive any response (undefined).
// later on we can adjust our case according to

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

let val2;
val2 = null ?? 10; // use for safety check
console.log(val2); // 10

let val3;
val3 = undefined ?? 10;
console.log(val3); // 10

let val4;
val4 = null ?? 5 ?? 15;
console.log(val4); // 5

// Ternary operator
const price = 500;

price > 400 ? console.log("greater than 400") : console.log("less than 400");
