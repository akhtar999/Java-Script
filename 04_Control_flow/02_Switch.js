// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 13;
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break; // if we remove the break then it will excute all code after that, except default
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Sorry We have only 12 month");
    break;
}
