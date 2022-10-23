const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const T = parseInt(input[0]);

function solution() {
  for (let i = 1; i < T + 1; i++) {
    const A = parseInt(input[i].split(" ")[0]);
    const B = parseInt(input[i].split(" ")[1]);
    console.log(A + B);
  }
}

solution();
