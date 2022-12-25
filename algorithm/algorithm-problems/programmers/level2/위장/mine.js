function solution(clothes) {
  let map = new Map();
  const fac = (arr) => {
    arr.map((el) => {
      let leng = 0;
      el.forEach((_, i) => (leng *= i + 1));
      return leng;
    });
    arr.redue();
  };

  clothes.forEach((c) => {
    map.set(c[1], map.get(c[1]) ? [...map.get(c[1]), c[0]] : [c[0]]);
  });

  console.log(map);
  return;
}
let map = new Map();
map.set("a", [1, 2]);
console.log(map.get("a"));
/*
1 -> clothes.length
2~key 종류 -> 4개 같은 것을 포함한 뽑기
총개수C뽑는개수/중복!
 */
