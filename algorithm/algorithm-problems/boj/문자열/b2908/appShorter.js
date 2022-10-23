const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0];

function solution(input) {
  let pattern = /(\w)(\w)(\w)\s(\w)(\w)(\w)/;
  input = input.replace(pattern, "$3$2$1 $6$5$4");
  input = input.split(" ");
  console.log(Math.max(Number(input[0]), Number(input[1])));
}
solution(input);
