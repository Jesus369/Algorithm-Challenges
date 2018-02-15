/*
Slasher flick!
Given an array(argument 1) return a new array where the total length
is deducted by a number(argument 2)
*/

slasher = (arr, howMany) => {
  if (howMany >= arr.length) {
    return [];
  } else {
    /* Iterate through howMany */
    for (var i = 1; i <= howMany; i++) {
      /* 
        Take the [0] index of the array and remove it
        as we iterate through the loop
       */
      arr.shift();
    }
    return arr;
  }
};

console.log(slasher([1, 2, 3, 5, 6, 2], 4));

slasherFlick = (arr, howMany) => {
  /* .splice(starting point, count to delete) */
  arr.splice(0, howMany).join();
  return arr;
};

console.log(slasherFlick([1, 2, 3, 5, 6, 2], 1));
