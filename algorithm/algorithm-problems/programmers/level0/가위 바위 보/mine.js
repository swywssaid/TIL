function solution(rsp) {
  return [...rsp].map((x) => (+x === 2 ? 0 : +x ? 2 : 5)).join("");
}

/*
2 -> 0
0 -> 5
5 -> 2
*/
