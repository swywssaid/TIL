const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n")
  .map((x) => Number(x));

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
