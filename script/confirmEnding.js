/*
Check if a string ends with a given target string
Example ("Bastian", "n")
Would return true since Bastian ends with an n
*/

confirmEnding = (str, target) => {
  str = str.toLowerCase().replace(/\W_/g, "");
  return target === str.slice(-Math.abs(target.length));
};

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("He has to give me a new name", "me"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
