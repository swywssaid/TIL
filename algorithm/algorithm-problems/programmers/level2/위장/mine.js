function solution(clothes) {
  let map = new Map();

  clothes.forEach((c) => {
    map.set(c[1], map.get(c[1]) ? [...map.get(c[1]), c[0]] : [c[0]]);
  });

  return [...map.keys()]
    .map((_, i) => {
      if (i === 0) return comb(clothes.length, i + 1);
      return comb(clothes.length, i + 1);
    })
    .reduce((acc, cur) => acc + cur, 0);
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
let map = new Map();
map.set("a", [1, 2]);
// console.log([...map.keys()].length);
// console.log(
//   Array(4)
//     .fill(0)
//     .map((x) => console.log(x))
// );
/*
1 -> clothes.length
2~key 종류 -> 4개 같은 것을 포함한 뽑기
총개수C뽑는개수 * 해당 품목의 개수* ...
[3,2,2,1]
4C2 3*2 + 3*2 + 3*1 + 2*2 + 2*1 + 2*1  = 23
4C3 3*2*2 3*2*1 3*2*1 2*2*1 = 
4C4 3*2*2*1
const fac = (arr) => {
  return arr
    .map((el) => {
      let leng = 1;
      el.forEach((_, i) => (leng *= i + 1));
      return leng;
    })
    .reduce((acc, cur) => acc * cur, 1);
};

const comb = (n, a) => {
  a = a <= n - a ? a : n - a;
  let mul = 1;
  for (let i = n; i > n - a; i--) {
    mul *= i;
    console.log(i, mul);
  }
  return mul / fac([new Array(a).fill(0)]);
};
 */
