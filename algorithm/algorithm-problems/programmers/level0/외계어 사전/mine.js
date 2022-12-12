function solution(spell, dic) {
  dic = dic.map((x) => {
    spell.forEach((el) => (x = x.replace(new RegExp(`${el}`), 1)));
    x = x.replace(/[^1]/g, "");
    return x;
  });
  return dic.includes("1".repeat(spell.length)) ? 1 : 2;
}
console.log();

/*
1.   
let table = {};
spell.forEach((x) => (table[x] = 1));
*/
