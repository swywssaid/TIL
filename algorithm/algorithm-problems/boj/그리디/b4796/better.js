const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input.pop();

function solution(input) {
  input.forEach((element, i) => {
    let temp = element.split(" ").map(Number);
    let [L, P, V] = temp;
    let remainder = V % P >= L ? L : V % P;
    console.log(`Case ${Number(i) + 1}:`, Math.floor(V / P) * L + remainder);
  });
}

solution(input);

/*
1. map(Number) 로 사용 가능.
2. 배열 내 요소를 변수에 담는 방법 let [L, P, V] = temp;
3. 변화되는 부분만 변수와 조건문으로 표현. remainder
*/
