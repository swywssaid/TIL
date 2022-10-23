let input = require("fs")
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

const fixed = input[0];
const variable = input[1];
const cost = input[2];

const margin = cost - variable;
const sell = Math.floor(fixed / margin) + 1;

console.log(margin <= 0 ? -1 : sell);
