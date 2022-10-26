const discountTable = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

function solution(price) {
  for (let discount of discountTable) {
    if (price >= discount[0]) {
      return Math.floor(price * (1 - discount[1] / 100));
    }
  }
  return price;
}

/*
할인율을 태이블로 관리하면 추후 추가 수정이 편리함.
if(조건문) 실행문
구조는 실행문을 실행하는 것이지 return으로 반환하는 것이 아니다..!!!
return은 return이라고 명시해줘야함.
또한 함수 구조 안에서 for문 return은 반복문을 끝낼뿐아니라 함수return을 해준다. 즉 함수가 종료되는것.!!!!!!
*/
