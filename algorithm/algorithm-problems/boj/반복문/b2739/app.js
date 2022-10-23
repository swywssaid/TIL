const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = parseInt(input[0]);

function solution() {
  for (let i = 1; i < 10; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
}

solution();
