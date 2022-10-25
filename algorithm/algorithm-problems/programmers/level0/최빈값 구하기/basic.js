function solution(array) {
  array.sort((a, b) => a - b);
  let cnt = 1;
  let checkSame = 1;
  let maxcnt = 1;
  let maxNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      ++cnt;
      if (cnt > maxcnt) {
        maxNum = array[i];
        maxcnt = cnt;
        checkSame = 1;
      } else if (cnt === maxcnt) {
        ++checkSame;
      }
    } else {
      cnt = 1;
      if (cnt === maxcnt) {
        ++checkSame;
      }
    }
  }
  let answer = checkSame === 1 ? maxNum : -1;
  console.log(checkSame, answer);
  return answer;
}
solution([1, 2, 3]);
/*
1. 오름차순정렬
2. 값 카운트
3. 값 바뀌면 리셋
4. 최빈값 기록
5. 중복체크 기록- 같으면 카운트 - 최빈값 바뀌면 리셋
*/
