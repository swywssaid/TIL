function solution(my_string) {
  let nums = my_string.split(" ");
  let operator;
  let sum = Number(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (!Number(nums[i])) {
      operator = nums[i];
      continue;
    }
    sum += operator === "+" ? Number(nums[i]) : -Number(nums[i]);
  }
  return sum;
}
solution("3 + 4");
/*
1. 정규표현식 +는 최소 한개를 뜻하기 때문에 문자로 사용 시 \와 같이 사용해야함.
*/
