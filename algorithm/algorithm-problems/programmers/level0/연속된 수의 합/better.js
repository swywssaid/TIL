function solution(num, total) {
  const a = (total - ((num - 1) * num) / 2) / num;
  return new Array(num).fill().map((_, i) => i + a);
}

/*
배열 생성하는 법.
등차 등비 수열 등 생성하기 편한듯.
*/
