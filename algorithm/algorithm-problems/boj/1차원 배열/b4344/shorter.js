const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .trim()
  .split("\n");
input.shift();
function solution() {
  for (let i = 0; i < input.length; i++) {
    let target = input[i].split(" ").map((x) => Number(x));
    let count = Number(target.shift());
    let overAvg = 0;
    let avg =
      target.reduce(function (sum, element) {
        return sum + element;
      }, 0) / count;
    target.forEach((element) => {
      if (element > avg) {
        overAvg++;
      }
    });

    console.log(((overAvg / count) * 100).toFixed(3) + "%");
  }
}
solution();
