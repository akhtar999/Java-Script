// const score = 200;
// if (score > 100) {
//   let power = "fly"; // if we make it var then it will execute. it completely global
//   console.log(`You can ${power}`);
// }
// console.log(`You can ${power}`); // ReferenceError: power is not defined (due to scope)

// **********************************************************************************

const price = 600;
// if (price > 400) console.log(`price is ${price}`); // implisite scope // hum ne mann lia hee

// ***********************************************************************************

let isLoggedIn = true;
let debitCard = true;
let loggedInFromGoogle = false;
let loggedInfromEmail = true;

if (isLoggedIn && debitCard) {
  // all condition have to true
  console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInfromEmail ) { // any one condition might true
  //
  console.log("user logged In");
}
