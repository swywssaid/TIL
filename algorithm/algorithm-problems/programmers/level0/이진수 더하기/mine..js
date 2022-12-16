function solution(bin1, bin2) {
  var answer = [];
  let up = 0;
  [bin1, bin2] = bin1.length >= bin2.length ? [bin1, bin2] : [bin2, bin1];
  for (let i = bin1.length - 1, j = bin2.length - 1; i >= 0 || j >= 0; i--, j--) {
    if (bin2[j] !== undefined) {
      let sum = Number(bin1[i]) + Number(bin2[j]) + up;
      if (sum >= 2) {
        up = 1;
        answer.push(sum % 2);
      } else {
        up = 0;
        answer.push(sum);
      }
    } else {
      sum = Number(bin1[i]) + up;
      if (sum >= 2) {
        up = 1;
        answer.push(sum % 2);
      } else {
        up = 0;
        answer.push(sum);
      }
    }
  }
  if (up === 1) answer.push(up);
  return answer.reverse().join("");
}

let u = "100";
let su = "111";

console.log(u[2] + su[2]);
/*
1. 십진수로 바꾼후 더하고 다시 이진수

2. 이진수로 더함.

*/
