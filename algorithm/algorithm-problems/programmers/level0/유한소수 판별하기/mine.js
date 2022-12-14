function solution(a, b) {
  const gcd = (x, y) => {
    [x, y] = x > y ? [x, y] : [y, x];
    return x % y === 0 ? y : gcd(y, x % y);
  };
  const isFinite = (m) => (m % 2 === 0 ? isFinite(m / 2) : m % 5 === 0 ? isFinite(m / 5) : m === 1 ? 1 : 2);
  return isFinite(b / gcd(a, b));
}
solution(7, 20);
/*
1. 기약분수 => 최대공약수로 분모,분자 나눔
2. 분모를 2,5로 나눔 재귀함수

*/
// function test(a, b) {
//   const gcd = (x, y) => (x % y === 0 ? y : gcd(y, x % y));
//   [a, b] = a > b ? [a, b] : [b, a];
//   const GCD = gcd(a, b);
//   console.log(GCD);
// }
// test(7, 20);
