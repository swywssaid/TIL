function solution(n, k) {
  const foodPrice = 12000;
  const drinkPrice = 2000;
  const answer = n * foodPrice + (k - Math.floor(n / 10)) * drinkPrice;
  return answer;
}
