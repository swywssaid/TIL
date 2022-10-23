const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .split("\n");
const count = input.shift();
const result = [];
input[0].split(" ").forEach((element) => {
  result.push(Number(element));
});
function solution() {
  const maxValue = Math.max.apply(null, result);
  const minValue = Math.min.apply(null, result);
  console.log(minValue, maxValue);
}

solution();

// const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let count = Number(input[0]);
// let numbers = input[1].split(" ").map((x) => Number(x));

// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < count; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }

//   if (min > numbers[i]) {
//     min = numbers[i];
//   }
// }

// console.log(`${min} ${max}`);
