// 유효성 검사 오류 질문 답변해줌.
function solution(my_string, letter) {
  isValid(my_string, letter); // 유효성 검사
  return my_string
    .split("")
    .filter((e) => e !== letter)
    .join("");
}

function isValid(my_string, letter) {
  // 유효성 검사
  const regex = /[a-zA-Z]/;
  if (my_string.length < 1 || my_string.length > 100) throw new TypeError();
  if (my_string.split("").filter((e) => !regex.test(e)).length !== 0) throw new TypeError();
  if (!regex.test(letter) || letter.length !== 1) throw new TypeError();
  // 유효성 검사를 통과하지 못할 경우, typeError
}

let my_string = "AAAAAA AA";
let letter = "A";
solution(my_string, letter);

/* 내 답변
안녕하세요.
코드를 확인해보니
if (my_string.split("").filter((e) => !regex.test(e)).length !== 0) throw new TypeError();
에서 케이스 1번 런타임 에러가 발생하네요.

if (mystring.split("").filter((e) => !regex.test(e)).length === 0) throw new TypeError();
사용 시 1번은 통과하고 2,3번에서 에러가 발생하는 것을 보아
mystring 인풋값이 대소문자를 제외한 다른 문자열이 들어간다고 생각했습니다.

아마 숫자나 다른 문자는 아닐 것 같고 공백 정도가 들어가지 않았을까 싶어 테스트하였습니다.
if (my_string.trim().split("").filter((e) => !regex.test(e)).length === 0) throw new TypeError();
실제로 문자열의 양 끝 공백을 제거하니 정상적으로 작동합니다.

유효성 테스트까지 하시는 것 보고 저도 더 파이팅 해야겠습니다.
감사합니다.
*/
