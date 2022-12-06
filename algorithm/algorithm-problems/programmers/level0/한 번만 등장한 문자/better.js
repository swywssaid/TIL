function solution(s) {
  let answer = [];
  [...s].forEach((x) => {
    if (s.indexOf(x) === s.lastIndexOf(x)) answer.push(x);
  });
  return answer.sort().join("");
}
