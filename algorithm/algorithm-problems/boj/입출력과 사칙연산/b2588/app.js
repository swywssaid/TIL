const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const firstNum = parseInt(input[0]);
const secondNum = input[1];
const target = secondNum.split("");

// console.log(firstNum, secondNum, target);

function solution() {
  for (let i = 0; i < target.length; i++) {
    console.log(firstNum * parseInt(target.at(-1 * i - 1)));
  }
  console.log(firstNum * parseInt(secondNum));
}
solution();
