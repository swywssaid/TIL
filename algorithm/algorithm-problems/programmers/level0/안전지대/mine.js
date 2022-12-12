function solution(board) {
  let zone = JSON.parse(JSON.stringify(board));
  board.forEach((z, i) => {
    z.forEach((p, j) => {
      if (p === 1) {
        let beforeP = j - 1;
        let currentP = j;
        let nextP = j + 1;

        if (board[i - 1]) {
          if (!(board[i - 1][beforeP] === undefined)) zone[i - 1][beforeP] = 1;
          if (!(board[i - 1][currentP] === undefined)) zone[i - 1][currentP] = 1;
          if (!(board[i - 1][nextP] === undefined)) zone[i - 1][nextP] = 1;
        }
        if (board[i]) {
          if (!(board[i][beforeP] === undefined)) zone[i][beforeP] = 1;
          if (!(board[i][currentP] === undefined)) zone[i][currentP] = 1;
          if (!(board[i][nextP] === undefined)) zone[i][nextP] = 1;
        }
        if (board[i + 1]) {
          if (!(board[i + 1][beforeP] === undefined)) zone[i + 1][beforeP] = 1;
          if (!(board[i + 1][currentP] === undefined)) zone[i + 1][currentP] = 1;
          if (!(board[i + 1][nextP] === undefined)) zone[i + 1][nextP] = 1;
        }
      }
    });
  });
  return [...zone.map((x) => x.join("")).join("")].filter((x) => x === "0").length;
}
