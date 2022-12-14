function solution(score) {
  return score.map((el) => {
    return score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1;
  });
}

/*
등수는 곧 자기 자신보다 큰 점수를 받은 인원수보다 1크다

100, 90, 90, 80, 70
70점 맞은 사람의 등수는 5등이다.


*/
