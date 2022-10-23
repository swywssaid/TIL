let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0].split(" ").map((x) => Number(x));
let table = [1, 1, 2, 2, 2, 8];
function solution() {
  let answer = [];
  input.forEach((element, i) => {
    answer.push(table[i] - element);
  });
  console.log(answer.join(" "));
}

solution();
