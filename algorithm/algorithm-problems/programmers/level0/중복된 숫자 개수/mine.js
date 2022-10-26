function solution(array, n) {
  return array.filter((x) => x === n).length;
}

/*
특정요소의 개수를 셀때 cnt변수 등으로 카운트하는 방법도 있지만
배열에 담아 length도 있음.
*/
