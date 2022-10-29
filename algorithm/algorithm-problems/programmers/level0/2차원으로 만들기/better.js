function solution(num_list, n) {
  let answer = [];
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

/*
배열 인덱스 계산할 필요 없이 더 깔끔함.
기존 배열을 바꾸긴하지만 복사해서 사용하면 상관없음.
*/
