// singleton
// Object.create
// const User = {}; this is non singleton object

const User = new Object(); // this is singleton object
// console.log(User); // {} empty object

User.name = "akhtar";
User.id = "1";
User.isLoggedIn = true;

// console.log(User);

// ***********************************************************************************************

// Nested Object

const regularUser = {
  email: "rinn@gmail.com",
  name: {
    userName: {
      firstName: "Rinn",
      lastName: "thomas",
    },
  },
};

// console.log(regularUser.name.userName.firstName);

//**************************************************************************************************

// we can merge object
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 6: "c" };
const obj3 = { 7: "a", 8: "b", 9: "c" };

const allObject = Object.assign({}, obj1, obj2, obj3); // {} target object. all the object will store heres
// console.log(allObject);

// easy & simplest way to marge object (spread operator)

const newObject = { ...obj1, ...obj2, ...obj3 };
// console.log(newObject);

console.log(User); // { name: 'akhtar', id: '1', isLoggedIn: true }

// we can access only key also & value
console.log(Object.keys(User)); //datatype: array [ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(User)); // datatype: array [ 'akhtar', '1', true ]
console.log(Object.entries(User)); // datatype: array [ [ 'name', 'akhtar' ], [ 'id', '1' ], [ 'isLoggedIn', true ] ]

console.log(User.hasOwnProperty("name")); // true
