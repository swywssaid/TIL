function solution(babbling) {
  const words = { aya: 1, ye: 2, woo: 3, ma: 4 };
  let able = [];
  for ()
  babbling.forEach((x) =>
    Object.keys(words).forEach((y) => {
      let reg = new RegExp(`${y}`, `g`);
      able.push(x.replace(reg, words[y]));
      console.log(able.length, x, y, reg, words[y]);
    })
  );
  console.log(babbling);

  return;
}
solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
console.log("abcaad".replace(/caa/g, 1));

/* 
1. 정규표현식, 숫자로 변경
2. 문자 있으면 못함.
3. 숫자가 연속되면 못함.
*/
