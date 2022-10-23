const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

function solution() {
  input = input[0];
  input = input.split(" ");
  console.log(Number(input[0]) + Number(input[1]));
}

solution();
