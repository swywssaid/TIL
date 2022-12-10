function solution(my_str, n) {
  let answer = [];
  let array = [...my_str];
  let cnt = Math.ceil(my_str.length / n);
  while (cnt--) answer.push(array.splice(0, n).join(""));
  return answer;
}

solution("abc1Addfggg4556b", 6);
console.log("abababab".slice(0, 3));

/*
splice 기존 배열 변경
배열메소드
*/
