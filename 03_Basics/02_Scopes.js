var c = 400; // global scope (we can use global scope inside the block scope also)

let a = 500; // global scope
if (true) {
  let a = 10;
  const b = 20; // block scope (we can't use this variable outside this block scope)
  //   console.log(`block scope ${a}`); // string interpolation
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const myName = "akhtar";
  function two() {
    const myVillage = "hirapara";
    // console.log(myName);
    // console.log(myVillage);
  }
  two(); // it will execute first
}
one();

// *****************************************************************************************************

if (true) {
  const username = "akhtar";
  if (username === "akhtar") {
    const country = "india";
    // console.log(username + country);
  }
  //   console.log(country); // it will not execute beacause it is outside the scope
}
// console.log(username); // it also outside the scope
