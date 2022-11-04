function solution(w, h) {
  const [a, b] = w > h ? [w, h] : [h, w];
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const GCD = gcd(a, b);
  return w * h - (w + h - GCD);
}

// 음... 현실적인 풀이는 아닌 것 같다...
