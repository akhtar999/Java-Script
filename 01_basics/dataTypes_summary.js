// JavaScript is a dynamically typed language.
// Because data type of the variable will determined by its value.

//                Type                                   typeof

// i)             Number                                   number
// ii)            String                                   string
// iii)           Boolean                                boolean
// iv)           Bigint                                      bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined

// - Number
// - String
// - Boolean
// - null = empty
// - undefined = variable declared, memory space is declared but value not decided yet
// - symbol = to make value unique
// - BigInt = long value or scientific value which will be not handled by Int that will be handled by BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// * Non-Primitive OR Referance OR Object datatype

//                  Type                                   typeof

// i)               Object                                object
// ii)              Array                                 object
// iii)             Function                            function(object)

// Non - primitive (Reference type)

// - Arrays
// - Objects
// - Functions

const heros = ["Saktiman", "naagraj", "doga"]

let myProfile = {
    name: "Akhtar",
    email: "iaktr999@gmaail.com",
    gender: "Male"
}

const myFunction = ()=>{
    console.log("hello world");
}

// console.log(typeof heros); //object
// console.log(typeof myProfile);  // object
// console.log(typeof myFunction); // it will return function. but it is actually function object
