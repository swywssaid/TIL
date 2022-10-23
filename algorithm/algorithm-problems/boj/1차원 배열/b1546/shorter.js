const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .trim()
  .split("\n");
const grades = input[1].split(" ").map((x) => Number(x));
const maxGrade = Math.max.apply(null, grades);
let sum = 0;
grades.map((x) => (x / maxGrade) * 100).forEach((element) => (sum += element));
console.log(sum / input[0]);
