/*
Chunky Monkey
Create a function that takes two arguments
The first argument is an array, the second a number
Divide the array into an amount of arrays equaling the second argument
*/

chunkArrayInGroups = (arr, size) => {
  var newArray = [];
  var counter = 0;

  while (counter < arr.length) {
    newArray.push(arr.slice(counter, counter + size));
    counter += size;
  }
  return newArray;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
