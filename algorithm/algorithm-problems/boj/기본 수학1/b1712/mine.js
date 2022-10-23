const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .split("\n");
input = input[0].split(" ").map((x) => Number(x));
function solution(input) {
  let answer = input[1] < input[2] ? input[0] / (input[2] - input[1]) : -2;
  answer = answer % 1 === 0 ? ++answer : Math.ceil(answer);
  console.log(answer);
}
solution(input);
