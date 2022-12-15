function solution(babbling) {
  let words = ["aya", "ye", "woo", "ma"];
  babbling = babbling.map((x) => {
    words.forEach((e) => (x = x.replace(new RegExp(`${e}`), " ")));
    return x;
  });
  return babbling.filter((x) => !/[^" "]/.test(x)).length;
}

/*
String.prototype.includes
는 정규표현식 인지로 못 받음

정규표현식 사용은

regExp.prototype.test(str)

*/
