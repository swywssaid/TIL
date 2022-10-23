const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}

// const fs = require("fs");
// const input = fs
//   .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
//   .toString()
//   .split("\n");
// let answer = "";
// console.log(input);
// function solution() {
//   for (let i = 0; i < input.length; i++) {
//     const numA = parseInt(input[i].split(" ")[0]);
//     const numB = parseInt(input[i].split(" ")[1]);
//     answer += `${numA + numB}\n`;
//   }
//   console.log(answer);
// }

// solution();
