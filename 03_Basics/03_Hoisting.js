//Hoisting                  **********************IMPORTANT********************

addOne(); // in this normal function , we can call it before declaration
function addOne(num) {
  return num + 1;
}

// we can call this function expression also (we are storing a function in a variable )

// addTwo() // in this case it will show error, we can't call it before declaration
const addTwo = (num) => {
  return num + 2;
};
