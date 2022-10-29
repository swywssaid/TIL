function solution(numbers, k) {
  let answer = 0;
  let i = 0;
  while (k) {
    answer = numbers[i];
    i += 2;
    i -= i >= numbers.length ? numbers.length : 0;
    k--;
  }
  return answer;
}
