function solution(array, height) {
  return array.filter((x) => x > height).length;
}

/*
단순히 배열 내에서 입력한 키보다 큰 값의 수를 체크하는 것임...
굳이 정렬하고 할 필요가 없음..
만약 이런식으로 풀었다고 하더라도 filter보다 
foreach로 반복문돌면서 카운트 했을 것 같음...
*/
