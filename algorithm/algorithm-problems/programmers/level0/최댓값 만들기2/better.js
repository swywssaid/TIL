function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}

/*
최대 최소 구할 때 정렬로 접근하는거...
계속 간과함.
*/
