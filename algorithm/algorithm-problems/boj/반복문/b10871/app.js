const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const length = parseInt(input[0].split(" ")[0]);
const limit = parseInt(input[0].split(" ")[1]);
const sequence = input[1].split(" ");
let answer = "";

function solution() {
  for (let i = 0; i < length; i++) {
    if (parseInt(sequence[i]) < limit) {
      answer += `${parseInt(sequence[i])} `;
    }
  }
  console.log(answer.trimEnd());
}

solution();
