const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
const total = parseInt(input[0]);
const kinds = parseInt(input[1]);
let price = 0;

function solution() {
  for (let i = 2; i < kinds + 2; i++) {
    const itemInfo = input[i].split(" ");
    const itemPrice = parseInt(itemInfo[0]);
    const itemCount = parseInt(itemInfo[1]);
    price += itemPrice * itemCount;
  }
  if (price == total) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

solution();
