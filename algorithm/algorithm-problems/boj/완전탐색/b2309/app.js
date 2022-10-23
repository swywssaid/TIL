const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

function solution() {
  let arr;
  let answer;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      arr = [...input];
      arr[i] = 0;
      arr[j] = 0;
      let sum = arr.reduce((acc, current) => acc + current, 0);
      if (sum === 100) {
        answer = arr.filter((element) => element > 0);
        return answer.sort((a, b) => a - b).forEach((element) => console.log(element));
      }
    }
  }
}

solution();
