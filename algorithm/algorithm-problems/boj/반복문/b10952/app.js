const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
let answer = "";

function solution() {
  for (let i = 0; ; i++) {
    const numA = parseInt(input[i].split(" ")[0]);
    const numB = parseInt(input[i].split(" ")[1]);
    if (numA == 0) {
      break;
    }
    answer += `${numA + numB}\n`;
  }
  console.log(answer);
}

solution();

// 문제를 이해하지 못한 결과, 주의!!!!
// const fs = require("fs");
// const input = fs
//   .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
//   .toString()
//   .split("\n");
// let answer = "";

// function solution() {
//   for (let i = 0; i < input.length - 1; i++) {
//     const numA = parseInt(input[i].split(" ")[0]);
//     const numB = parseInt(input[i].split(" ")[1]);
//     answer += `${numA + numB} `;
//   }
//   answer = answer.trimEnd();
//   answer = answer.replace(/ /g, `\n`);
//   console.log(answer);
// }

// solution();
