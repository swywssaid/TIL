function solution(array) {
  const setArr = [...new Set([...array])];
  const mapArr = new Map();
  setArr.forEach((element) => mapArr.set(element, 0));
  array.forEach((element) => {
    mapArr.set(element, mapArr.get(element) + 1);
  });
  const maxCnt = Math.max(...mapArr.values());
  let checkSame = 0;
  let maxKey;
  mapArr.forEach((val, key) => {
    if (val === maxCnt) {
      maxKey = key;
      checkSame++;
    }
  });
  const answer = checkSame === 1 ? maxKey : -1;
  return answer;
}
solution([1, 2, 3, 4, 5, 5, 5, 3]);
/*
1. set으로 중복값 제거
2. map에 키값 등록
3. map 키 값으로 배열 요소 비교 후 카운트
4. 최빈값 리턴, 여러개면 -1
4-1. val만 비교
*/
