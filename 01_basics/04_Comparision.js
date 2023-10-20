// console.log(2 > 1); // true
// console.log(2 < 1); // false

// console.log("2" > 1); // true
// console.log(2 > "1"); // true

//1. console.log(null > 0);  // false
//2. console.log(null == 0); // false
//3. console.log(null >= 0); // true

// the reason is that equility check == and <> >= comparision check work differently.
// Comparision converts null to a number, treating it as 0. thats why (3) null >= 0 is true. and (1) null > 0 is false

// console.log("2" == 2);  // here conversion occurs . true
// console.log("2" === 2); // here strict check will happen, it will check datatype also . False

// console.log(undefined > 0);  false
// console.log(undefined == 0); false
// console.log(undefined >= 0); false
