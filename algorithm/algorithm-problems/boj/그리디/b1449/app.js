const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

function solution(input) {
  let L = input[0][1];
  let points = input[1].sort((a, b) => a - b);
  let covered = points[0] + L - 0.5;
  let cnt = 1;
  for (let point = 1; point < points.length; point++) {
    if (points[point] + 0.5 <= covered) {
      continue;
    }
    covered = points[point] + L - 0.5;
    cnt++;
  }
  console.log(cnt);
}

solution(input);

/*
1. 왼쪽에서부터 붙여나간다.
2. 해당 지점에서 테이프길이(L) - 0.5 만큼 떨어진 지점까지 테이프가 붙는다.
3. 다음위치 + 0.5 <= 2번 지점 -> skip
4. 그 다음 위치에서 1-3반복 
즉 현재 맨앞에서부터 붙여나가다 보면 최적해 도달 -> 그리디
*/
