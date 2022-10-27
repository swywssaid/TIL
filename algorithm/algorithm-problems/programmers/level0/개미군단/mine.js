function solution(hp) {
  let answer = 0;
  [5, 3, 1].forEach((p) => {
    answer += Math.floor(hp / p);
    hp -= p * Math.floor(hp / p);
  });
  return answer;
}

/*
  그리디 알고리즘
  */
