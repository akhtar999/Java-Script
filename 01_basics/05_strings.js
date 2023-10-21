const name = "akhtar";
const repo = 8;

// console.log(name + " have " + repo + " repo") old way to write

// modern way to write, string interpolation (use backticks)
//it gives us a placeholder , we can directly inject varible
// console.log(`my name is ${name}, & i have ${repo} repo`); // we can use method here also

const countryName = new String("In-di-aC-oun-try"); // it will give object with key valur pairs like indexes.
// console.log(countryName[3]);
// console.log(countryName.length);
// console.log(countryName.toUpperCase());
// console.log(countryName.toLowerCase()); // it does not mean that it has changed he original value. beacuse it is primitive data type
// console.log(countryName.charAt(1)); // n
// console.log(countryName.indexOf('d')); // 2
const newString = countryName.substring(1, 6); // ndiaC
// console.log(newString);

const anotherString = countryName.slice(-9, 7);
// console.log(anotherString); // iaCo

const String1 = "   akhtar      ";
// console.log(String1.trim()); // we can omit the unwanted spaces two more method are also there trimStart(), trimEnd()

const url = "https://akhtar.com/product%20laptop";
// console.log(url.replace('%20', '__'))  // it will replace
// console.log(url.includes('akhtar'))  // true
// console.log(url.includes('mobile')) // false

const language = new String("as-sa-me-se"); // it will give object with key valur pairs like indexes.

const array1 = language.split("-");
console.log(array1);
const array2 = language.split("");
console.log(array2);
