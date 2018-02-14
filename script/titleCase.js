/*
Title Case a sentence
Capitalize each word within a sentence
*/

titleCase = str => {
  return (
    str
      /* Turn the string into an array */
      .split(" ")
      /* Map through each word */
      .map(word => {
        /* Uppercase the first letter and lowercase all letters after */
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      /* Join into a string */
      .join(" ")
  );
};
