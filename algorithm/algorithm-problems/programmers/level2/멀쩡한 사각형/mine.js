function solution(w, h) {
  if (w === 1 || h === 1) return 0;
  else if (w === h) return w * h - w;
  const [a, b] = w > h ? [w, h] : [h, w];
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const GCD = gcd(a, b);
  const [newA, newB] = [a / GCD, b / GCD];
  let cnt = 2;
  if (newB === 1) {
    cnt += newA;
  } else {
    for (let i = 1; i < newA; i++) {
      cnt += 2;
    }
  }
  return w * h - cnt * GCD;
}
solution(6, 3);
/*
최대공약수로 나눈 것으로 간소화 후 계산 * 최대공약수

최대공약수로 나눈 것의 제거되는 수
양끝 꼭지점을 이은 직선에 닿으면 패스 작거나 크면 양옆 2개 제거

이렇게 풀면 고려해야할 테스트 케이스가 엄청 많아짐...
결국 못풀었음.

*/
