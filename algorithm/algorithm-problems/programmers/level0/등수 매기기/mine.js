function solution(score) {
  let [rank, common, before] = [0, 0, -1];
  return score
    .map((x, i) => [x[0] + x[1], i])
    .sort((a, b) => b[0] - a[0])
    .map((x) => {
      if (x[0] === before) {
        common++;
      } else {
        rank += 1 + common;
        common = 0;
      }
      before = x[0];
      return [x[1], rank];
    })
    .sort((a, b) => a[0] - b[0])
    .map((x) => x[1]);
}
/*
1. 기존 인덱스 추가
2. 평균으로 정렬
3. 정렬후 등수 추가
4. 1 인덱스 기준을 다시 정렬
*/
