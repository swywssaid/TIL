function solution(num_list) {
  let even = 0;
  let odd = 0;
  num_list.forEach((element) => {
    element % 2 === 0 ? even++ : odd++;
  });
  return [even, odd];
}

/*
1. 반복문 돌면서 짝수, 홀수 각각 카운트

cf) 만약 조건문을 element % 2 ? odd++ : even++; 
이렇게 하면 더 간결하긴 한데. 코드를 읽을 때 직관적이지는 않은 것 같아서
더 좋은 코드라곤 할 수 없을 것 같다.
*/
