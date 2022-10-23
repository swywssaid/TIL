const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = parseInt(input[0]);
let answer = "";
function solution() {
  for (let i = 1; i < input + 1; i++) {
    answer += " ".repeat(input - i) + "*".repeat(i) + `\n`;
  }
  console.log(answer);
}

solution();
