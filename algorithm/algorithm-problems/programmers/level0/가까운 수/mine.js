function solution(array, n) {
  let distance = [...array].map((x) => Math.abs(x - n));
  let closed = [];
  distance.forEach((v, i) => {
    if (v === Math.min(...distance)) closed.push(i);
  });
  return Math.min(...closed.map((x) => array[x]));
}
solution([10, 11, 12, 14], 13);
