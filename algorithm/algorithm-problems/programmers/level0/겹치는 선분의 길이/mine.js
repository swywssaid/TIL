function solution(lines) {
  let points = [];
  let answer = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      let startA = lines[i][0];
      let endA = lines[i][1];
      let startB = lines[j][0];
      let endB = lines[j][1];
      let [commonS, commonE] = [Math.max(startA, startB), Math.min(endA, endB)];
      if (commonS < commonE) points.push([commonS, commonE]);
    }
  }
  let cnt = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let startA = points[i][0];
      let endA = points[i][1];
      let startB = points[j][0];
      let endB = points[j][1];
      let [commonS, commonE] = [Math.max(startA, startB), Math.min(endA, endB)];
      if (commonS < commonE) {
        if (++cnt !== 3) answer -= commonE - commonS;
      }
    }
  }
  answer += points.reduce((acc, cur) => acc + cur[1] - cur[0], 0);
  return answer;
}

/*
1. 겹치는 부분을 각각 구한다.
2. 겹치는 부분이 또 겹치는지 확인한다. 중복체크
3. 3번 중복되면 카운트를 안해 중복을 제거한다.


시작점.
오른차순


끝점.
내림차순
*/
