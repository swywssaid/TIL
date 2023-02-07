function solution(numbers) {
  const answer = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  return answer;
}
/*
복습1 평균값 reduce
*/
