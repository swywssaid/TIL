const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = parseInt(input[0]);

function solution() {
  if (90 <= input && input <= 100) {
    console.log("A");
  } else if (80 <= input && input <= 89) {
    console.log("B");
  } else if (70 <= input && input <= 79) {
    console.log("C");
  } else if (60 <= input && input <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}
solution();
