function solution(my_string) {
  return [...new Set(my_string.split(""))].join("");
}

solution("We are the world");

/*
Set으로 만들기 위해 배열로 바꾸지 않아도 된다.
문자열 사용해도 됨.
console.log(new Set("asb ss"));
-> Set(4) { 'a', 's', 'b', ' ' }
*/
