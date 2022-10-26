function solution(num_list) {
  var answer = [];
  while (num_list.length) {
    answer.push(num_list.pop());
  }
  return answer;
}

/*
1. pop으로 마지막요소를 제거 후 처음요소로 푸쉬.
*/
