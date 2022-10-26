function solution(num_list) {
  var answer = [];
  for (let i = 0; i < num_list.length; i++) {
    answer[i] = num_list[num_list.length - 1 - i];
  }
  return answer;
}

/*
1. 직접 배열의 인덱스에 요소 입력하기.
*/
