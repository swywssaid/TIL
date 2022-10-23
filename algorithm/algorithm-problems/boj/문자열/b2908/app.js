const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0].split(" ");
let firtstNum = input[0];
let secondNum = input[1];

function solution(firtstNum, secondNum) {
  let firtstNumArr = firtstNum.split("");
  let secondNumArr = secondNum.split("");
  let firstNumSangsu = [];
  let secondNumSangsu = [];
  firtstNumArr.forEach((element) => {
    firstNumSangsu.unshift(element);
  });
  secondNumArr.forEach((element) => {
    secondNumSangsu.unshift(element);
  });
  firstNumSangsu = firstNumSangsu.join("");
  secondNumSangsu = secondNumSangsu.join("");
  if (firstNumSangsu > secondNumSangsu) {
    console.log(firstNumSangsu);
  } else {
    console.log(secondNumSangsu);
  }
}

solution(firtstNum, secondNum);
