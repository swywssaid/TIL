const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

function solution() {
  const maxNum = Math.max.apply(null, input);
  console.log(maxNum, input.indexOf(maxNum) + 1);
}
solution();
