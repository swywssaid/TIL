const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = parseInt(input[0]);
const size = input;
let sum = 0;

// function solution() {
//   for (let i = 0; i < size; i++) {
//     sum += input;
//     input--;
//   }
//   console.log(sum);
// }

solution();

// better
function solution() {
  for (let i = 1; i < input + 1; i++) {
    sum += i;
  }
  console.log(sum);
}
