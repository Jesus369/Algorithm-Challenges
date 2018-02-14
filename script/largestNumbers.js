/*
Find the largest number in an array
*/

largestOfFour = arr => {
  var largestNumbers = [];
  var currentLargest;
  for (var x = 0; x < arr.length; x++) {
    currentLargest = 0;
    for (var y = 0; y < arr[x].length; y++) {
      if (arr[x][y] > currentLargest) {
        currentLargest = arr[x][y];
      }
    }
    largestNumbers.push(currentLargest);
  }
  return largestNumbers;
};

largestNumbers = arr => {
  var largestNumbers = [];
  arr.forEach(subArr => {
    largestNumbers.push(
      subArr.sort((a, b) => {
        /* Returning the array is descending order */
        return b - a;
      })[0]
    );
  });
  return largestNumbers;
};

console.log(
  largestNumbers([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
