const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const count = parseInt(input[0]);
let answer = "";

function solution() {
  const start = new Date();
  for (let i = 1; i < count + 1; i++) {
    const nums = input[i].split(" ");
    const firstNum = parseInt(nums[0]);
    const secondNum = parseInt(nums[1]);
    const sum = firstNum + secondNum;
    answer += `${sum}\n`;
  }
  console.log(answer);
  console.log(new Date() - start);
}

solution();
// 시간초과 오답
// const fs = require("fs");
// let input = fs
//   .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
//   .toString()
//   .split("\n");
// const count = parseInt(input[0]);

// function solution() {
//   const start = new Date();
//   for (let i = 1; i < count + 1; i++) {
//     const nums = input[i].split(" ");
//     const firstNum = parseInt(nums[0]);
//     const secondNum = parseInt(nums[1]);
//     console.log(firstNum + secondNum);
//   }
//   console.log(new Date() - start);
// }

// solution();
