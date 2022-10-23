const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0];
input = input.split(" ");
const H = parseInt(input[0]);
const M = parseInt(input[1]);

function solution() {
  if (M >= 45) {
    console.log(H, M - 45);
  } else if (M < 45 && H != 0) {
    console.log(H - 1, M + 60 - 45);
  } else if (M < 45 && H == 0) {
    console.log(23, M + 60 - 45);
  }
}
solution();

// lower time & code
// let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

// let hour = Number(input[0]);  // Hour
// let minute = Number(input[1]);  // Minute

// minute -= 45;

// if (minute < 0) {
//     minute += 60;
//     hour--;

//     if (hour === -1) {
//         hour = 23;
//     }
// }

// console.log(hour + ' ' + minute);
