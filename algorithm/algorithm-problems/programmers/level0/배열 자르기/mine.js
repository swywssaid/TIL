function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

/*
splice 는 기존 배열을 수정.
삭제. 삽입이 목적인 메소드임.
해당문제에 적합하지 않음.
*/
