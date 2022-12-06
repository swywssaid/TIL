function solution(s) {
  let table = {};
  [...s].forEach((x) => {
    table[x] ? table[x]++ : (table[x] = 1);
  });
  let answer = Object.keys(table).filter((x) => table[x] === 1);
  return answer.sort().join("");
}
