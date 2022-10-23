let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let rowObj = {};
  for(let column = 0; column < )
  let originBoardLength = board.length;
  board.shift();
  for (let row = 1; row < originBoardLength; row++) {
    board.pop().forEach((element) => {
      rowObj[row] = element;
    });
  }
  console.log(board, rowObj);
  var answer = 0;
  return answer;
}
solution(board, moves);
