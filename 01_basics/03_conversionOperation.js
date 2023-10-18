let score = null; // try with true/undefined/null/string

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
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


let isLoggedIn = undefined
let BooleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(BooleanIsLoggedIn);

// conversion to Boolean

// 1 => true, 0=> false
// "" => false
// "akhtar" => true
// {} => true
// [] => true
// null => false
// undefined => false

let aNumber = 46
let stringNumber = String(aNumber)

console.log(typeof stringNumber);
console.log(stringNumber);