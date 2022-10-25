function solution(money) {
  const price = 5500;
  var answer = [Math.floor(money / price), money % price];

  return answer;
}
