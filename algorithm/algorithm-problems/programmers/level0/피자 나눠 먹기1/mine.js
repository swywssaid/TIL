function solution(n) {
  var answer = n % 7 === 0 ? n / 7 : Math.ceil(n / 7);
  return answer;
}

// Math.ceil(x) x와 같거나 큰 최소정수 반환. 7은 7로 반환.
