function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((x) => n % x === 0);
}

/*
1. Array.from()
배열을 만든다.
이 코드가 속도는 더 느림.
굳이 배열을 만들고 거기서 필터링을 할 이유가 없는듯.

*/
