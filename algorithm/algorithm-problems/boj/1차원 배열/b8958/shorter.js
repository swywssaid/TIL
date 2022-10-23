const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const count = input.shift();
function solution() {
  for (let i in input) {
    let oNum = 0;
    let sum = 0;
    const ox = input[i].split("");
    for (let j in ox) {
      if (ox[j] === "O") {
        oNum++;
        sum += oNum;
      } else if (ox[j] === "X") {
        oNum = 0;
      }
    }
    console.log(sum);
  }
}
solution();
