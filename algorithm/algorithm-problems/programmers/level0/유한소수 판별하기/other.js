function solution(a, b) {
  let tmpB = b;
  while (tmpB % 2 === 0) tmpB /= 2;
  while (tmpB % 5 === 0) tmpB /= 5;
  if (a % tmpB === 0) tmpB = 1;
  return tmpB === 1 ? 1 : 2;
}

/*
먼저 기약분수를 만드는 것이 아닌
분모에서 2와 5를 먼저 약분한 후 
남아있는 수와 분자를 비교해 판단.
기약분수일 경우엔 유한소수면 1만 남고
약분이 돼야하면 분자와 나눠 약분이됨.

3
2*5*3*7

*/
