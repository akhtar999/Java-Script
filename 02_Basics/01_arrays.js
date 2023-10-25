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

// console.log("A ", array);

// const array4 = array.splice(1, 4); // icludes the end range also

// console.log(array4); // [1,2,3,4]

// console.log("C ", array); // original array modified // [0,5,6]

console.log("D", array2);
const array5 = array2.slice(1, 5); // doesn't include end range
console.log(array5); // [12,13,14,15]

console.log("E", array2); // here original array doesn't change
