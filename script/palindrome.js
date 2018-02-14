/*
 Create a palindrome function. A word should
 return as the same word spelled backwards
 */

palindrome = str => {
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str.slice(-1)) {
    return palindrome(str.slice(1, -1));
  } else {
    return false;
  }
};

/*Palindrome for sentences*/

palindromeRegex = str => {
  /* 
  (\W) = Capture characters not a number or letter 
  (_) capture underscores
  ("g") = Capture space, punctuation, and underscore
  replace it with an empty string
  */
  str = str.toLowerCase().replace(/[\W_]/g, "");
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
