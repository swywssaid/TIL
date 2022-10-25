function solution(n) {
  var answer = 0;
  let cnt = 1;
  while (cnt) {
    if ((6 * cnt) % n === 0) {
      return (answer = cnt);
    }
    cnt++;
  }
  return answer;
}

// 사람의 수가 6의 배수.
