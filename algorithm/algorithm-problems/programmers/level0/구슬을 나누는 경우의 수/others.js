function solution(balls, share) {
  let answer = 1;
  let min = Math.min(share, balls - share);
  while (min > 0) {
    answer = (answer * balls) / min;
    balls--;
    min--;
  }
  return Math.round(answer);
}

/*
이경우 소숫점이 생김.
루프마다 곱셈과 나눗셈이 같이 계산되기 때문.
부정확함. 테스트 케이스가 많아지면 틑릴수도 있지 않을까?
*/
