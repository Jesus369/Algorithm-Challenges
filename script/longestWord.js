longestWord = str => {
  /* Create an array of each word in the sentence */
  var words = str.split(" ");
  var biggest = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > biggest) {
      biggest = words[i].length;
    }
  }
  return biggest;
};

longWord = str => {
  biggest = 0;
  /* Createing an array and looping through each word */
  str.split(" ").forEach(word => {
    if (word.length > biggest) {
      biggest = word.length;
    }
  });
  return biggest;
};
