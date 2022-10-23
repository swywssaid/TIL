const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");
input = input[0].split("");
function solution() {
  const dict = {};
  let startNum = 65;
  let result = 0;
  for (let i = 2; i < 10; i++) {
    if (i === 7 || i === 9) {
      for (let j = 0; j < 4; j++) {
        dict[String.fromCharCode(startNum++)] = i;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        dict[String.fromCharCode(startNum++)] = i;
      }
    }
  }
  input.forEach((element) => {
    result += dict[element] + 1;
  });
  console.log(result);
}

solution();
