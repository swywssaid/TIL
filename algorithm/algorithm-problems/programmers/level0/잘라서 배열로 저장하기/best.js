function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

solution("abc1Addfggg4556b", 6);
/*
정규표현식

.: 개행 문자(행(줄)을 고치는 문자/ 줄바꿈 문자/ EOL(End of line))를 제외한 모든 단일 문자와 대응


{n,m}: 앞 표현식이 최소 n번 최대 m번 나타나는 부분에 대응


*/
