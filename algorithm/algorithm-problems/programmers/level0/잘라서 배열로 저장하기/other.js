function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  console.log(res);
  return res;
}
solution("abc1Addfggg4556b", 6);

/*
slice 문자열 기존 문자열 변환 안함.


*/
