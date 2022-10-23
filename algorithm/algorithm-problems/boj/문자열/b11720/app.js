const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n"); // boj: '/dev/stdin's
const count = parseInt(input[0]);
const target = input[1].split("");
let answer = 0;

function solution() {
  for (let i = 0; i < count; i++) {
    answer += parseInt(target[i]);
  }
  console.log(answer);
}
solution();
