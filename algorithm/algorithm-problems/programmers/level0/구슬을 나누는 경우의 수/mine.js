function solution(balls, share) {
  let answer = [1, 1];
  for (let [i, j] = [balls, 1]; i > balls - Math.min(share, balls - share); i--, j++) {
    answer[0] *= i;
    answer[1] *= j;
  }
  return answer[0] / answer[1];
}
solution(30, 14);

/*
값이 정확한것같음. 다른 풀이는 반올림, 버림등을함. 소수점이 생겨서.
소수점이 생기는 이유는 반복문이 돌면서 곱셈과 나눗셈을 계산하면서 진행되기 때문.
*/
