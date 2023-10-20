let score = null; // try with true/undefined/null/string

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//Conversion to number

// "45" => 45
// "akhtar" => NaN
// "45abc" => NaN (Not a Number)
// true => 1
// False => 0
// undefined => NaN
// null => 0

let isLoggedIn = undefined;
let BooleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(BooleanIsLoggedIn);

// conversion to Boolean

// 1 => true, 0=> false
// "" => false
// "akhtar" => true
// {} => true
// [] => true
// null => false
// undefined => false

let aNumber = 46;
let stringNumber = String(aNumber);

// console.log(typeof stringNumber);
// console.log(stringNumber);

// ********************************************Operations**********************************************

let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(3+3);
// console.log(3*3);
// console.log(3**3);
// console.log(9/3);
// console.log(8%3);

let str1 = "Hello";
let str2 = " Akhtar";

// let str3 = str1 + str2; 
// console.log(str3); => hello Akhtar

// console.log(1 + "2"); => 12
// console.log("1" + 2); => 12
// console.log(1 + 2 + "2"); => 32
// console.log("1" + 2 + 2); => 122



let gameCounter = 100;
const x = ++gameCounter;
// ++gameCounter;
console.log(gameCounter, x);

