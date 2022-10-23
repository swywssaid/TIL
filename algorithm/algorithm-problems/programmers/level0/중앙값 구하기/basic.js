function solution(array) {
  array.foreach((x) => {
    array.find((Math.min(...array), index));
  });
  return array[Math.floor(array.length / 2)];
}

/*
1. 최솟값 찾는다
2. 새 배열에 최솟값넣는다.
3. 기존배열에서 최솟값 삭제
4. 배열길이만큼실행.
5. 새 배열에서 중간값 뽑기
*/
