function solution(quiz) {
  let parsing = [];
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    parsing.push([quiz[i].split(/\s\+\s|\s-\s|\s=\s/), quiz[i].match(/\s\+\s|\s-\s/)[0]]);
  }
  parsing.forEach((x) => {
    let left = Number(x[0][0]);
    let right = Number(x[0][1]);
    let result = x[1] === " + " ? left + right : left - right;
    result === Number(x[0][2]) ? answer.push("O") : answer.push("X");
  });
  return answer;
}
