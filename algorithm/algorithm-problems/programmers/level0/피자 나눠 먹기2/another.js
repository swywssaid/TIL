function solution(n) {
  let i;
  for (i = 1; (6 * i) % n !== 0; i++) {}
  const answer = i;
  console.log(answer);
  return answer;
}
solution(60);
// 사람의 수가 6의 배수.
