const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const count = parseInt(input[0]);
function solution() {
  for (let i = 1; i < count + 1; i++) {
    let result = [];
    let target = input[i].split(" ");
    let num = parseInt(target[0]);
    let word = target[1];
    word = word.replace(/\r/g, "");
    word = word.split("");
    word.forEach((element) => {
      result.push(element.repeat(num));
    });
    console.log(result.join(""));
  }
}

solution();
