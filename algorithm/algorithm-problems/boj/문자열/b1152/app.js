const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0].split(" ");
const result = input.filter((element) => {
  if (element !== "") {
    return element;
  }
});

function solution() {
  console.log(result.length);
}

solution();
