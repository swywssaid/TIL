const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0];
input = input.split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);

function solution() {
  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else if (A == B) {
    console.log("==");
  }
}

solution();
