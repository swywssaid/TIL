function solution(array, height) {
  let answer = array.length;
  array.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= height) {
      return (answer = i);
    }
  }
  return answer;
}

solution([180, 120, 140], 190);
