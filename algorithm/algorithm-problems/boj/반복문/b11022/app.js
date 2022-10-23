const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const count = parseInt(input[0]);
let answer = "";
function solution() {
  for (let i = 1; i < count + 1; i++) {
    const firstNum = parseInt(input[i].split(" ")[0]);
    const secondNum = parseInt(input[i].split(" ")[1]);
    answer += `Case #${i}: ${firstNum} + ${secondNum} = ${
      firstNum + secondNum
    }\n`;
  }
  console.log(answer);
}

solution();
