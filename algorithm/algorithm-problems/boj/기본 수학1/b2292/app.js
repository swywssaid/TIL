const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
num = input[0];

function solution(num) {
  let last = 1;
  for (let i = 1; ; i++) {
    if (num === 1) {
      console.log(1)
      break
    }
    last += i * 6;
    if (last >= num) {
      console.log(i+1);
      break;
    }
  }
}

solution(num);
