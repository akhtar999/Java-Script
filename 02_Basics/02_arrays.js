const marvelHeros = ["Spiderman", "thor", "ironman"];
const dcHeroes = ["Flash", "Superman", "Batman"];

// marvelHeros.push(dcHeroes);
// console.log(marvelHeros); // it will not merge. array in array [ 'Spiderman', 'thor', 'ironman', [ 'Flash', 'Superman', 'Batman' ] ]

// console.log(marvelHeros[3]); // 3rd element [ 'Flash', 'Superman', 'Batman' ]
// console.log(marvelHeros[3][1]); // Superman //bad syntax

const myArr = marvelHeros.concat(dcHeroes); // concate method returns a new array
// console.log(myArr); // it will merge all array [ 'Spiderman', 'thor', 'ironman', 'Flash', 'Superman', 'Batman' ]

// Spread opeartor also do the same

const allHeros = [...marvelHeros, ...dcHeroes];
// console.log(allHeros); // [ 'Spiderman', 'thor', 'ironman', 'Flash', 'Superman', 'Batman' ]

// Suppose we have nested array and we need single array out of it

const newArray = [
  5,
  3,
  7,
  2,
  [8, 4, 9],
  10,
  [12, 63, 65, [2, 6, 4, 7, [3, 6, 7]]],
];

const usable_newArray = newArray.flat(3); // we give infinity also .flat(infinity)
// console.log(usable_newArray); // [ 5, 3, 7, 2, 8, 4, 9, 10, 12, 63, 65, 2, 6, 4, 7, 3, 6, 7]

// console.log(Array.isArray("akhtar")); // false

// console.log(Array.isArray([1, 2, 3, 4])); // true

// console.log(Array.from("akhtar")); // [ 'a', 'k', 'h', 't', 'a', 'r' ]

// console.log(Array.from({ name: "akhtar" })); // interesting interview question

// console.log(Array.from("a"));

// // ***************************************************************************************************

// const obj = { name: "akhtar" };

// const array = [obj.name];

// console.log(array); // [ 'akhtar' ]

// ******************************************************************************************************

let name = "akhtar";
let score = 100;
let isLoggedIn = true;

const array = Array.of(name, score, isLoggedIn);
console.log(array); //[ 'akhtar', 100, true ]
