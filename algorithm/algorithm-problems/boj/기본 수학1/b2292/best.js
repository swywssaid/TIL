const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
input = input[0];

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);
