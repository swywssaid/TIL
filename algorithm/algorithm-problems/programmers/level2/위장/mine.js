function solution(clothes) {
  let map = new Map();
  clothes.forEach((c) => {
    map.set(c[1], c[0]);
  });
  console.log(map);
  return;
}
/*

*/
