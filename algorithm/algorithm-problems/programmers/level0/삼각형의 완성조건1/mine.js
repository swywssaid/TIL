function solution(sides) {
  let max = Math.max(...sides);
  sides.splice(sides.indexOf(max), 1);
  return max < sides.reduce((acc, cur) => acc + cur, 0) ? 1 : 2;
}
solution([199, 72, 222]);
