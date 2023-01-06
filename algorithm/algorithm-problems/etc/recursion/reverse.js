// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log("a".slice(0, -1));
/*
awesome emosewa
""      ""
123     321

*/
