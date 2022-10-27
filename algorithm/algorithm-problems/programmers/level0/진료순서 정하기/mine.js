function solution(emergency) {
  let answer = [...emergency];
  [...emergency]
    .sort((a, b) => b - a)
    .forEach((x, i) => {
      answer[emergency.indexOf(x)] = i + 1;
    });
  return answer;
}
solution([1, 4, 5, 6, 2, 3, 7]);

/*
주의!!!!!!!!!
(기존에러코드)

function solution(emergency) {
  [...emergency]
    .sort((a, b) => b - a)
    .forEach((x, i) => {
      emergency[emergency.indexOf(x)] = i + 1;
    });
  return emergency;
}

forEach가 돌면서 기존 배열을 변경해 이후에 영향을 미침.
*/
