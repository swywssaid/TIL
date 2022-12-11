function solution(keyinput, board) {
  let answer = [0, 0];
  keyinput.forEach((c) => {
    switch (c) {
      case "up":
        if (answer[1] < (board[1] - 1) / 2) answer[1]++;
        break;
      case "down":
        if (answer[1] > -(board[1] - 1) / 2) answer[1]--;
        break;
      case "left":
        if (answer[0] > -(board[0] - 1) / 2) answer[0]--;
        break;
      case "right":
        if (answer[0] < (board[0] - 1) / 2) answer[0]++;
        break;
    }
  });
  return answer;
}

/*
1. 최대 범위 찾기: +-(x-1)/2
2.  



*/
