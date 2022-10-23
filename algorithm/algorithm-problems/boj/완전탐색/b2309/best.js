const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x))
  .sort((a, b) => a - b);

function solution() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let arr = [...input];
      arr.splice(i, 1);
      arr.splice(j, 1);
      let sum = arr.reduce((acc, current) => acc + current, 0);
      if (sum === 100) {
        return arr.forEach((element) => console.log(element));
      }
    }
  }
}

solution();
