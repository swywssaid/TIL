const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
input = input[0];

function solution(input) {
  let step = 1
  for (let last = 1; last < input ; last += (step-1) * 6) {
    step++
  }
  console.log(step)
}

solution(input);