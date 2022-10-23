const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((x) => Number(x));

function solution() {
  let checkItem;
  let answer = [];
  arr.find((element) => element > 0) === undefined ? (checkItem = true) : (checkItem = false);
  if (checkItem === false) {
    arr.reduce((acc, current, index, array) => {
      if (current <= 0) {
        answer.push(acc);
        console.log(acc, current);
        return array[index + 1];
      }
      return acc + current;
    }, arr[0]);
  } else {
    arr.reduce((acc, current, index, array) => {
      if (arr[index - 1] > current) {
        answer.push(acc);
        console.log(arr, current);

        return array[index + 1];
      }
      return acc + current;
    }, arr[0]);
  }
  console.log(Math.max(...answer));
}
solution();
