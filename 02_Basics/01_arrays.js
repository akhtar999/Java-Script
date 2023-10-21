//Arrays

let array = [0, 1, 2, 3, 4, 5, 6];
// console.log(array);

let array2 = new Array(11, 12, 13, 14, 15, 16);
// console.log(array2[2]);
// console.log(typeof array2);

array2.push(17, 18, 19);
// console.log(array2); // [11, 12, 13, 14, 15, 16, 17, 18, 19]

array2.pop();
// console.log(array2); //  [11, 12, 13, 14, 15, 16, 17, 18]

// console.log(array2.includes(12)); // true
// console.log(array2.includes(1)); // false

// console.log(array2.indexOf(15)); // 4
// console.log(array2.indexOf(9)); // -1 (element does't exist)

const array3 = array2.join(); // turns to string
// console.log(array3);
// console.log(typeof array3); // string

//******************************splice(), slice() ******************************************

console.log("A ", array2);

const array4 = array2.splice(1, 4);

console.log(array4);

console.log("B ", array2);
