function solution(n) {
  let mixed = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        mixed++;
        break;
      }
    }
  }
  return mixed;
}
