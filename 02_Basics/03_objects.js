
//object literals

const mySym = Symbol("key1"); // interview : how to add symbol in object and access it ?

const user = {
  name: "akhtar",
  [mySym]: "key2", // this is how we declare symbol
  "full name": "akhtarul islam", // we cant access this by dot notation
  age: 23,
  email: "akhtar@gmail.com",
  pin: 784146,
  isLoggedIn: true,
};

//behind the scene key are treated as string. ex {name: "akhtar"} ---> {"name": "akhtar"}
// console.log(user.email); // akhtar@gmail.com
// console.log(user["email"]); // akhtar@gmail.com
// console.log(user["full name"]); // akhtarul islam
// console.log(user[mySym]); // key2

//we can manipulate values of object

user.email = "akhtar999@gmail.com";
// console.log(user);

//we can freeze object (after changes will not apply)
// Object.freeze(user);

user.email = "akhtar888@gmail.com"; // it will not change

// console.log(user);

user.greeting = function () {
  console.log("good moorning");
};

user.greetingTwo = function () {
  console.log(`hi Aspire, ${this.name}`);
};

console.log(user.greeting());
console.log(user.greetingTwo());
console.log(user);
