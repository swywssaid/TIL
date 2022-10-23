const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = parseInt(input[0]);

function solution() {
  if (input % 4 == 0 && input % 100 != 0) {
    console.log("1");
  } else if (input % 100 == 0 && input % 400 != 0) {
    console.log("0");
  } else if (input % 400 == 0) {
    console.log("1");
  } else {
    console.log("0");
  }
}

solution();
