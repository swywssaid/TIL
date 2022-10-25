function solution(n) {
  var answer = [];
  let i = 0;
  while (2 * i + 1 <= n) {
    answer.push(2 * i + 1);
    ++i;
  }
  console.log(answer);
  return answer;
}
solution(100);
