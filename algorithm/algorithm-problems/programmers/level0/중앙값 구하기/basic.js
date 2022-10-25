function solution(array) {
  let sortedArr = [];
  while (array.length) {
    let minNum = array[0];
    for (let j = 1; j < array.length; j++) {
      if (array[j] < minNum) minNum = array[j];
    }
    sortedArr.push(minNum);
    array.splice(array.indexOf(minNum), 1);
  }

  return sortedArr[Math.floor(sortedArr.length / 2)];
}

solution([1, 2, 4, -1, 0, 3]);
/*
1. 최솟값 찾는다
2. 새 배열에 최솟값넣는다.
3. 기존배열에서 최솟값 삭제
4. 배열길이만큼실행.
5. 새 배열에서 중간값 뽑기
*/
