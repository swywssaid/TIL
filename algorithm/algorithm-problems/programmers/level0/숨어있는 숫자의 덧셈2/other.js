function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, " ")
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(Number(""));

/*
찾아야하는 것이 아닌 것들 없애서 구하기
console.log(Number("")); // 0
console.log(Number("  ")); // 0
*/
