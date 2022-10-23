const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input = input[0];

function solution(input) {
  let sum = 0;
  sum = input*(input+1)/2
  console.log(sum)
}

solution(input);
