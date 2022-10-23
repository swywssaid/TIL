const src = "111100100011";

function solution(src) {
  let answer = [];
  let count = [];
  let num = src.split("");
  let same = 1;
  let countTable = [];
  for (let i = 65; i < 91; i++) {
    countTable.push(String.fromCharCode(i));
  }
  for (let j = 0; j < num.length; j++) {
    if (num[j] === num[j + 1]) {
      same++;
    } else if (num[j] !== num[j + 1]) {
      count.push(same);
      same = 1;
    }
  }

  count.forEach((element) => answer.push(countTable[element - 1]));
  answer.unshift(num[0]);

  return answer.join("");
}
solution(src);
