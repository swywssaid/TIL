function solution(age) {
  const stdYear = new Date().getFullYear();
  var answer = stdYear - age + 1;
  return answer;
}

/*
1. 기준년도를 Date 객체를 통해 현재 년도를 설정해줌.
복습1: 범용성 높음
*/
