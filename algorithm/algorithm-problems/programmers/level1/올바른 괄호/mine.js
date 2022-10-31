function solution(s) {
  let check = 0;
  let sArr = [...s];
  while (sArr.length) {
    let target = sArr.shift();
    check += target === "(" ? 1 : -1;
    if (check < 0) return false;
    if (check > s.length / 2) return false;
  }

  return check ? false : true;
}

/* 
정확도 테스트는 통과
효율성 테스트는 0점
모두 시간초과임. 

음.. 매 루프 마다 shift()메소드를
사용해서 그런가?
생각해보면 push, pop은 O(1)의 시간 복잡도
shift(), unshift()는 O(n)
*/
