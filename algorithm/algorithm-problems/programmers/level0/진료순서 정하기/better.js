function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((x) => sorted.indexOf(x) + 1);
}

/*
기존 배열에 순서테이블을 가져와 적용.
나는 순서테이블에서 배열로 적용.
*/
