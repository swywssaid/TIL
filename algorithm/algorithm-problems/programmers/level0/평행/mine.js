function solution(dots) {
  let answer = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) answer.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
  }
  return answer.length === new Set(answer).size ? 0 : 1;
}
/*
평행하다는 것은 기울기가 같다는 것.
다만 일치하면 안됨.
하지만 이문제는 일치도 1로 리턴
4c2 = 6
6/2 = 3번의 비교만 해도 알 수 있다.
*/
