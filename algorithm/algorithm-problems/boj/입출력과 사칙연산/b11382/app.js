const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0];
input = input.split(" ");

function solution() {
  console.log(
    input.reduce((pre, cur) => {
      return +pre + +cur;
    }, 0)
  );
}

solution();
