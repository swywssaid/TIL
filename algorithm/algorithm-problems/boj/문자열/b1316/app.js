const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
const count = input.shift();
function solution() {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    let same = [];
    for (let j = 97; j < 123; j++) {
      let target = String.fromCharCode(j);
      const pattern = new RegExp(`${target}+`, "g");
      if (input[i].match(pattern) === null) {
        continue;
      }
      if (input[i].match(pattern).length !== 1) {
        same.push(input[i].match(pattern));
      }
    }
    if (same.length === 0) {
      result++;
    }
  }
  console.log(result);
}

solution();
