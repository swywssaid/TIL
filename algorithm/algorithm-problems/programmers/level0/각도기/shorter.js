function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

/*
삼항 연산자의 성질 이해
결과를 변수에 담는 방식을 사용했었는데
return 으로 줘도됨.
삼항 연산자를 중첩으로 사용함.
가독성은 그리 좋지 않음.
따라서 better 보단 shorter에 가까운듯.
*/
