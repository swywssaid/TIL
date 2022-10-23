const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0];

function solution() {
  console.log(`${input}??!`);
}

solution();
