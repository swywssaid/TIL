function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

/*
나머지를 활용함.
순서가 있다고 해서 반복문을 꼭 사용할 필요는 없음.
*/
