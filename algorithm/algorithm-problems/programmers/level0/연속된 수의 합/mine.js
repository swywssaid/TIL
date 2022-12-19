function solution(num, total) {
  let answer = [];
  for (let i = (total - ((num - 1) * num) / 2) / num; answer.length < num; i++) {
    answer.push(i);
  }
  return answer;
}
/*
x x+1 x+n-1 = total
3x + 3 = 12 x = 3 

x x+1 x+2 x+3 x+ n -1 = 5
5x + n + 5 = 5
5x = -5

num*x + (0 + ... num-1) = total
(total - (0 ... num-1)) / num
*/
