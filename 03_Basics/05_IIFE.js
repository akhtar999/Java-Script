// Immediately Invoked Function Expressions (IIFE)

// functions that are executed immediately after declaring

// (Interview) : sometimes global scope pollution causes problem.
//to avoid that kind of problem we use IIFE

(function me() {
  // Named IIFE
  console.log("My self Akhtar"); //me()
})();

// Arrow function

(() => {
  console.log(`DB CONNECTED`);
})();

//Passing value and argument

((name) => {
  console.log(`My Name is ${name}`); // me("Akhtar")
})("Akhtar");
