const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0];
const result = [];

function solution() {
  for (let i = 97; i <= 122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)));
  }
  console.log(result.join(" "));
}

solution();
