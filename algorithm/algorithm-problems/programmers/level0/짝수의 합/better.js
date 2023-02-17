function solution(n) {
  let half = Math.floor(n / 2);
  return half * (half + 1);
}

/*
수학이 중요하네...
n은 그수의 중앙값.(홀수일경우 소수점 버림.)
홀수의합:n^2
짝수의합:n(n+1)
O(n)에서 O(1)이됨.

복습1: 수학을 이용한 풀이
*/
