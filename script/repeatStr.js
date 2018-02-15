/*
Create a function that takes in two arguments
the first argument takes in a string and the second is a number
The string must be repeated the amount of times the second argument takes in
if a negative number then return an empty string
*/

repeatStrNumTimes = (str, num) => {
  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
};

repeatStr = (str, num) => {
  /* Ternary operation. Test a condition, "if", ("?" = then) perform a function
    (":" = else) return an empty string
    */
  return num > 0 ? str.repeat(num) : "";
};

console.log(repeatStr("abc", 3));
console.log(repeatStr("me", -1));
console.log(repeatStrNumTimes("me", 3));
console.log(repeatStrNumTimes("abc", -2));
