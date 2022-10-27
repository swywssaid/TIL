function solution(age) {
  return [...String(age)]
    .map(Number)
    .map((x) => String.fromCharCode(x + 97))
    .join("");
}

/*
굳이 나이 테이블을 만들지 않고
각 숫자에 대응되는 아스키코드로 바꿈.
*/
