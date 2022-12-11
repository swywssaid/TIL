const CONTROL = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(key, [n, m]) {
  const [x1, x2] = [-(n - 1) / 2, (n - 1) / 2];
  const [y1, y2] = [-(m - 1) / 2, (m - 1) / 2];
  return key.reduce(
    ([x, y], k) => {
      const [nx, ny] = [x + CONTROL[k][0], y + CONTROL[k][1]];
      if (x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
      return [x, y];
    },
    [0, 0]
  );
}

/*
1. control에서 간단하게 만들려고 
up: 1,
down: -1

과 같이 만들면 밑에서 조건문으로 더 복잡해진다.


2. 구조분해 할당 활용 정점.....!
*/
