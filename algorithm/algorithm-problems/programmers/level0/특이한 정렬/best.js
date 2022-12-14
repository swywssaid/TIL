function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

/*
정렬 응용...
절대값 오름차순 정렬 및 기본값 내림차순정렬...
*/
