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

0. 이전값과 같다면 카운트
0. 카운트 시 최빈횟수와 비교 후 더 크면 갱신, (값이 다를 경우는 갱신하는 경우 없다.)
0. 최빈값 중복 체크 (값이 같을 때 다를 때 둘다 해줘야함.)
check1
*/
