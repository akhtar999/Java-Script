const date = new Date();
// console.log(date.toString()); // Sat Oct 21 2023 22:56:18 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); // Sat Oct 21 2023
// console.log(date.toISOString()); // 2023-10-21T17:26:18.672Z
// console.log(date.toJSON()); // 2023-10-21T17:26:18.672Z

// console.log(date.toLocaleString()); // 21/10/2023, 10:54:23 pm

// console.log(typeof date); // object

let newDate = new Date(2024, 6, 15);
let newDate2 = new Date(2024, 6, 15, 8, 10);
let newDate3 = new Date("2024-08-15");
// console.log(newDate.toDateString());  // Mon Jul 15 2024
// console.log(newDate.toLocaleString()); // 15/7/2024, 12:00:00 am
// console.log(newDate2.toLocaleString()); // 15/7/2024, 8:10:00 am
// console.log(newDate3.toLocaleString()); // 15/8/2024, 5:30:00 am

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // 1697910082652 (mili second from 1970, Jan 1st)
// console.log(Math.floor(myTimeStamp / 1000));

let newDate4 = new Date();
// console.log(newDate4);
// console.log(newDate4.toLocaleString()); // 21/10/2023, 11:20:26 pm (according to this date)
// console.log(newDate4.getHours()); // 23
// console.log(newDate4.getFullYear()); // 2023
// console.log(newDate4.getDay()); // 6
// console.log(newDate4.getDate()); // 21
console.log(newDate4.getMonth() + 1); // 9 (month start from 0-11)

let storeDate = newDate4.toLocaleString("default", {
  weekday: "long",
  month : "long"
});
console.log(storeDate); // october Saturday
