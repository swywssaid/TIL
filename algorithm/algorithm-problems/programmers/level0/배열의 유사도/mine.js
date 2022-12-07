function solution(s1, s2) {
  return s1.filter((x) => s2.indexOf(x) !== -1).length;
}
solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]);

/*
1. filter!!!!!!!!!!!!! 중요
반환값을 true, false로 줘야함.
화살표 함수 사용 주의 아래는 리턴값이다.
s1.filter((x) => s2.indexOf(x) !== -1);

s1.filter((x) => {
    return s2.indexOf(x) !== -1;
  });

이건 리턴 값이 아니다!!!!!!!!!!!! 주의 .....
s1.filter((x) => {
    s2.indexOf(x) !== -1;
  });

*/
