const myAccount = 1425
let myEmail = 'akhtar@gmail.com'
var myCountry = 'India'
myUni = 'Mizoram university' //we can reserve memory like this also.but it is not recommended

let accountState; //if we declare a variable without declaring its value.it will be undefined then

// myAccount = 546  //it will not allow. cause it is constant.

myEmail = 'islam@gmail.com'
myCountry = 'Bharat'
myUni ='Assam University'

/* 
prefer do not use var 
cause it has issue with block scope and functional scope
*/


console.table([myAccount, myEmail, myCountry, myUni, accountState])