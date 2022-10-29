function solution(n) {
  let i;
  let fac = 1;
  for (i = 1; fac <= n; i++) {
    fac *= i;
  }
  return i - 2;
}
