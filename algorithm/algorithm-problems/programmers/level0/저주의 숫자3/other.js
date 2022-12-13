function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num) if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
  return arr.pop();
}
/*
arr = [1, 2, 4 ...]
배열에 담아 길이로 접근
*/
