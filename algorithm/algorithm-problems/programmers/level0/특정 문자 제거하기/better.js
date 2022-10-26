function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

/*
굳이 반복문 돌면서 값을 비교하지 않아도 됨.
split의 기준점이 되는 것은 return에 포함이 안됨.
즉 letter이란 기준점을 문자열에서 제거하는 것과 같음.
*/
