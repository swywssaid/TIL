function solution(before, after) {
  [...before].forEach((el) => {
    after = after.replace(`${el}`, "");
  });
  return after ? 0 : 1;
}

console.log(
  [1, 2, 3, 4].forEach((x) => {
    return x;
  })
);
/*
forEach()
루브를 중단시킬 방법은 예외처리해서만 가능
return은 true든 false든 continue로 작동

try catch throw를 통해 예외처리.

만약 그 외 다른 방식으로 루프를 종료시킬 일이 있다면 다른 방식을 
사용하는 것을 권고.

forEach 자체의 return은 undefined이다.
return을 한다고 그 값이 return 되는게 아님.

*/
