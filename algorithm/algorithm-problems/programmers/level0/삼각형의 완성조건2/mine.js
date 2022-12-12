function solution(sides) {
  let nums = [];
  let [min, max] = sides.sort((a, b) => a - b);
  for (let i = max - min + 1; i < max + min; i++) nums.push(i);
  return new Set(nums).size;
}
/*
1. 두변중 최대 길이가 있을 때 3, 6
1.1 최대값을 찾는다. 최소값 + x > 최대값 > 0 --> 최대값 >= x > 최대값 - 최소값
2, 새 변이 최대 길이일 때
2.1 최소값 + 중간값 > x >= 중간값

3. 범위 합집합
최대값 - 최소값 < x < 최소값 + 최대값
*/
