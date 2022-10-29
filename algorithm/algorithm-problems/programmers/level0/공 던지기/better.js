function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
/*
수학... 
나열 후 규칙 찾기.
O(n) -> O(1)

k = 1 -> i = 0
k = 2 -> i = 2
k = 3 -> i = 4
k = 4 -> i = 6
k = 5 -> i = 8
k = 6 -> i = 10

i = (k - 1) + 2

if numbers.length = 5

k = 1 -> i = 0
k = 2 -> i = 2
k = 3 -> i = 4
k = 4 -> i = 1 -> 6 % numbers.length
k = 5 -> i = 3 -> 8 % numbers.length
k = 6 -> i = 5 -> 10 % numbers.length

*/
