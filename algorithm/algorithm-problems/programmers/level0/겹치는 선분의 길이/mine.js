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
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let startA = points[i][0];
      let endA = points[i][1];
      let startB = points[j][0];
      let endB = points[j][1];
      let [commonS, commonE] = [Math.max(startA, startB), Math.min(endA, endB)];
      if (commonS < commonE) answer -= commonE - commonS;
      console.log(i, j, points, commonE - commonS, answer);
    }
  }
  answer += points.reduce((acc, cur) => acc + cur[1] - cur[0], 0);
  return answer;
}

/*
시작점.
오른차순


끝점.
내림차순
*/
