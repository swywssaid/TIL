function solution(age) {
  let ageTable = {};
  for (let i = 97; i < 107; i++) ageTable[i - 97] = String.fromCharCode(i);
  return [...String(age)].map((x) => ageTable[x]).join("");
}
solution(23);
