const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const A = parseInt(input[0].split(" ")[0]);
const B = parseInt(input[0].split(" ")[1]);
const C = parseInt(input[0].split(" ")[2]);

function solution() {
  if (A == B && B == C) {
    console.log(10000 + A * 1000);
  } else if (A != B && B != C && C != A) {
    console.log(Math.max(A, B, C) * 100);
  } else {
    if (A == B) {
      console.log(1000 + A * 100);
    } else if (A == C) {
      console.log(1000 + A * 100);
    } else {
      console.log(1000 + B * 100);
    }
  }
}

solution();
