truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  } else if (num <= 3) {
    return str.slice(0, num) + "...";
  } else {
    return str.slice(0, num - 3) + "...";
  }
};

console.log(truncateString("A-tisek a-tisek A green and yellow basket", 11));
