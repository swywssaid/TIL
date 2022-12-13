function skip(num) {
  return num.toString().includes("3") || !(num % 3) ? skip(++num) : num;
}

function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer = skip(++answer);
  }
  return answer;
}
/*
num.toString().includes("3") ? skip(++num) : num % 3 ? num : skip(++num)

는 아래와 같다.

num.toString().includes("3") || !(num % 3) ? skip(++num) : num
*/
