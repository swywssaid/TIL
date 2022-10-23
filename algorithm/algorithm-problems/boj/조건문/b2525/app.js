const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
let hour = parseInt(input[0].split(" ")[0]);
let minute = parseInt(input[0].split(" ")[1]);
const requireTime = parseInt(input[1]);
const requireHour = parseInt(requireTime / 60);
const requireMinute = requireTime % 60;
hour += requireHour;
minute += requireMinute;

function solution() {
  if (minute >= 60) {
    hour++;
    minute -= 60;
  }
  if (hour >= 24) {
    hour = hour % 24;
  }
  console.log(hour, minute);
}
solution();
