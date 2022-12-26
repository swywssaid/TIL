function solution(genres, plays) {
  let map = new Map();
  let answer = [];
  genres.forEach((x, i) => {
    map.set(x, map.get(x) ? [...map.get(x), { [i]: plays[i] }] : [{ [i]: plays[i] }]);
  });
  map.forEach((x) => x.sort((a, b) => Object.values(b) - Object.values(a)));

  let table = [...map];

  table.forEach((x) => {
    x.push(x[1].reduce((acc, cur) => acc + Number(Object.values(cur)), 0));
  });
  table
    .sort((a, b) => b[2] - a[2])
    .forEach((x) => {
      for (let i = 0; i < 2; i++) {
        if (x[1][i]) answer.push(Number(Object.keys(x[1][i])[0]));
      }
    });

  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop", "jazz"], [500, 600, 150, 800, 2500, 3000]);
/*
10^4 -> nlogn n 

1. class => {0:500, 2:150, 3:800}
2. 장르 종류 돌면서 최대값 2개 추림.
    2.1 최대값 Math.max 하고 0으로 바꾼뒤 다시 Math.max 

*/
