const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x) % 42);

const set = new Set(input);
console.log(set.size);
