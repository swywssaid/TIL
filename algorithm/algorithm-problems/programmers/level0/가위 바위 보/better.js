function solution(rsp) {
  let rps = {
    2: 0,
    0: 5,
    5: 2,
  };
  return [...rsp].map((x) => rps[x]).join("");
}

/*
테이블 만들기 귀찮았는데.
성능은 이게 더 좋음.

  2 -> 0
  0 -> 5
  5 -> 2
*/
