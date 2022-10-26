function solution(my_string, n) {
  let myArr = my_string.split("");
  var answer = myArr.map((x) => x.repeat(n)).join("");
  console.log({ ...my_string });
  return answer;
}
solution("abc", 4);

/*
string -> array
1. string.split
2. [...string]  

cf) {...string}
if string = "abc"
{ '0': 'a', '1': 'b', '2': 'c' }

*/
