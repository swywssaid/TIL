const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .split("\n");
input = input[0];

function solution() {
  const pattern = /c=|c-|dz=|d-|lj|nj|s=|z=|[a-z]/g;
  console.log(input.match(pattern).length);
}

solution();
