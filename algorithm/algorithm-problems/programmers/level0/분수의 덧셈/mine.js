function solution(denum1, num1, denum2, num2) {
  var answer = [];
  const denumSum = denum1 * num2 + denum2 * num1;
  const numSum = num1 * num2;
  for (let i = 1; i < Math.min(denumSum, numSum) + 1; i++) {
    if (denumSum % i === 0 && numSum % i === 0) {
      answer[0] = denumSum / i;
      answer[1] = numSum / i;
    }
  }

  return answer;
}
