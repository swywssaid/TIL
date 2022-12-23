function solution(nums) {
  return new Set(nums).size <= nums.length / 2 ? new Set(nums).size : nums.length / 2;
}

/*

333224
321
3

333222
33

같은 풀이. O(1)
function solution(nums) {
  return Math.min(new Set(nums).size,nums.length / 2);
}

*/
