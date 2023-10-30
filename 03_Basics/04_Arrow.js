const User = {
  name: "akhtar",
  price: 499,
  welcomMessage: function () {
    // console.log(`${this.name} , welcome to the website`);
    // console.log(this); // in Node environment here it will print the User object
  },
};

// User.welcomMessage(); // akhtar , welcome to the website
User.name = "buli vai";
// User.welcomMessage(); // buli vai , welcome to the website

// console.log(this); // in Node environment, this will give current context, here it will give {} (empty object)

// IMPORTANT Note : in browser thiskeyword will print : Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

// function beer() {
//   let user = "akhtar";
//     console.log(this);
// }
// beer();

const beer = () => {
  let user = "akhtar";
  //   console.log(this.user);
};
// beer(); // it will return empty oject {}

// ******************************************************************************

// const addTwoNum = (num1, num2) => {
//   return num1 + num2;
// };  // if we use {} we must write return

// console.log(addTwoNum(4, 6));

// Implisite return (if we have 1 line of code)

// const addTwoNum = (num1, num2) => num1 + num2; // implisite return

const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwoNum(4, 6));


// If we want to return object

const Obj = () => ({ name: "akhtar" });
console.log(Obj());
