const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");
input = input[0].split("");
let dict = {};

function countWords() {
  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = 0;
    // console.log(String.fromCharCode(i));
  }
  input.forEach((element) => {
    dict[element.toUpperCase()] += 1;
    // console.log(element.toUpperCase());
  });

  let maxValue = Math.max.apply(null, Object.values(dict));
  return maxValue;
}

function checkKey(key, maxValue) {
  if (dict[key] === maxValue) {
    return true;
  }
}

function findMostWords() {
  const maxValue = countWords();
  let result = Object.keys(dict).filter((key) => checkKey(key, maxValue));
  if (result.length === 1) {
    return console.log(result[0]);
  } else {
    return console.log("?");
  }
}

findMostWords();
