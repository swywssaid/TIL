function solution(numbers) {
  const [max, min] = [Math.max(...numbers), Math.min(...numbers)];
  if (numbers.length === 2) return max * min;
  numbers.splice(numbers.indexOf(max), 1);
  numbers.splice(numbers.indexOf(min), 1);
  const [nextMax, nextMin] = [Math.max(...numbers), Math.min(...numbers)];
  return max * nextMax >= min * nextMin ? max * nextMax : min * nextMin;
}

/*
1. 양수 최대값 두개 곱
2. 음수 최솟값 두개 곱
3. 1,2 비교

1,2,3
3,1
2,2
*/
