const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const count = parseInt(input[0]);
let answer = "";
function solution() {
  for (let i = 1; i < count + 1; i++) {
    const caseNum =
      parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]);
    answer += `Case #${i}: ${caseNum}\n`;
  }
  console.log(answer);
}

solution();
