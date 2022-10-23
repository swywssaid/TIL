const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .trim()
  .split("\n");
input = input[0];

function solution() {
  let origin = input.padStart(2, "0");
  for (let i = 1; ; i++) {
    input = input.padStart(2, "0");
    let each = input.split("").map((x) => Number(x));
    let sum = each
      .reduce((a, c) => a + c, 0)
      .toString()
      .padStart(2, "0")
      .split("");
    input = each[1] + sum[1];
    if (origin === input) {
      console.log(i);
      break;
    }
  }
}
solution();
