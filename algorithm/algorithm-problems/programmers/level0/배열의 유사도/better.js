function solution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}
solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]);

/*
1. filter 는 불리언 값을 요구하는데 
includes로 하는 것이 더 적합하다.
indexOf는 인덱스를 찾는 것.


*/
