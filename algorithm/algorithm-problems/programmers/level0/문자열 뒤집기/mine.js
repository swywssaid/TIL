function solution(my_string) {
  let myArr = my_string.split("").reverse();
  const answer = myArr.join("");
  return answer;
}

solution("1234");
