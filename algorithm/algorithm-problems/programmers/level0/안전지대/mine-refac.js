function solution(board) {
  let zone = JSON.parse(JSON.stringify(board));
  board.forEach((z, i) => {
    z.forEach((p, j) => {
      if (p === 1) {
        for (let k = -1; k < 2; k++) {
          let row = i + k;
          for (let m = -1; m < 2; m++) {
            let col = j + m;
            if (board[row]) {
              if (!(board[row][col] === undefined)) zone[row][col] = 1;
            }
          }
        }
      }
    });
  });
  return [...zone.map((x) => x.join("")).join("")].filter((x) => x === "0").length;
}

/*
1. 안전지대 체크 배열
2. 전,후,현재 배열 내 i-1, i , i+1 인덱스 안전하지 않음.

*/
