function solution(lines) {
  let points = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) points[a + 100]++;
  });

  return points.reduce((a, c) => (c > 1 ? ++a : a), 0);
}

/*
a < b인 이유는 점의 개수가 선의 개수보다 1개 많기 때문에
점으로 선분을 카운트하기 위해서이다. 마지막 점은 포함 안함.

배울게 많은 풀이....

거시적인 풀이 방법이다...

*/
