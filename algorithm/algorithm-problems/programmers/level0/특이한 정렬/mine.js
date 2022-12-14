function solution(numlist, n) {
  return numlist
    .map((x) => (x >= n ? Math.abs(x - n) - 0.1 : Math.abs(x - n) + 0.1))
    .sort((a, b) => a - b)
    .map((y) => (y.toString().split(".")[1] === "9" ? y + n + 0.1 : y === -0.1 ? n : n - (y - 0.1)));
}
solution([1, 2, 3, 4, 5, 6], 4);

/*
4,5,3,6,2  4
0,1,1,2,2
-0.1,0.9,1.1,1.9,2.1
y = |x-n|
x >= n, y = x-n, x = y+n, 9
x<n, y = n-x, x = n - y, 1
*/
/*
1. 절대값 오름차순
x >= n 이면 절대값 -0.1, 아니면 +0.1
2. 복원시 소수점으로 대소 판별
*/
function solution(numlist, n) {
  console.log(
    numlist.map((x) => (x >= n ? Math.abs(x - n) - 0.1 : Math.abs(x - n) + 0.1)).sort((a, b) => a - b),
    numlist
      .map((x) => (x >= n ? Math.abs(x - n) - 0.1 : Math.abs(x - n) + 0.1))
      .sort((a, b) => a - b)
      .map((y) => (y.toString().split(".")[1] === "9" ? "+" : "-"))
  );
  return numlist
    .map((x) => (x >= n ? Math.abs(x - n) - 0.1 : Math.abs(x - n) + 0.1))
    .sort((a, b) => a - b)
    .map((y) => (y.toString().split(".")[1] === "9" ? Number((y + n + 0.1).toFixed(1)) : y === -0.1 ? n : Number((n - (y - 0.1)).toFixed(1))));
}
/*
4,5,3,6,2  4
0,1,1,2,2
-0.1,0.9,1.1,1.9,2.1
y = |x-n|
x >= n, y = x-n, x = y+n, 9
x<n, y = n-x, x = n - y, 1
*/
