function solution(my_string) {
  console.log(Function('"use strict";return (' + my_string + ")")());
  return Function('"use strict";return (' + my_string + ")")();
}
solution("3 + 4");
/*
  1. 정규표현식 +는 최소 한개를 뜻하기 때문에 문자로 사용 시 \와 같이 사용해야함.
  */

/*
eval을 절대 사용하지 말 것!
let solution = eval 한 줄로 가능하지만 사용하지 말 것.
해킹 노출
Function 사용하자.
*/
