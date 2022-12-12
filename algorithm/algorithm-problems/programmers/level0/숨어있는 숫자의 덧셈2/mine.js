function solution(my_string) {
  let nums = my_string.match(/\d{1,4}/g);
  if (!nums) return 0;
  return nums.map(Number).reduce((acc, cur) => acc + cur, 0);
}

// TypeError: Cannot read properties of null (reading 'map')
// filter, map, reduce 등에서 호출이 안됨.
// console.log([null][0].map(Number));

// console.log([null].length); // 1
// console.log([null][0]); // null
// console.log([null][0] === null); //true
