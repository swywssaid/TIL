const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  for (let i in input) {
    let temp = input[i].split(" ").map(Number);
    let L = temp[0];
    let P = temp[1];
    let V = temp[2];
    if (V === 0) break;
    if (V % P >= L) {
      console.log(`Case ${Number(i) + 1}:`, Math.floor(V / P) * L + L);
    } else if (V % P < L) {
      console.log(`Case ${Number(i) + 1}:`, Math.floor(V / P) * L + (V % P));
    }
  }
}

solution(input);

/*
1. 연속기간중 앞에 부터 휴가 가야함.
map(Number) 로 사용 가능.
*/
