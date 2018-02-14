/*Find the factorial of a number
Example: 5
1 * 2 * 3 * 4 * 5 = 120
*/

factorial = num => {
  var array = [];
  for (var i = 1; i <= num; i++) {
    array.push(i);
  }
  /*the reduce will go from left to right of an array 
  and accumulates all values to a single value
  a being the first index, and b being the second*/
  var answer = array.reduce((a, b) => {
    return a * b;
  });
  return answer;
};

/*Using the factorial method*/
fact = num => {
  return num * factorial(num - 1);
};

console.log(fact(5));
