function solution(numbers) {
  const table = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  table.forEach((x, i) => {
    numbers = numbers.replace(new RegExp(`${x}`, `g`), i);
  });
  return Number(numbers);
}
solution("onetwothreefourfivesixseveneightnine");
/*
1. 하나씩 반복문으로 바꿈
2. 정규표현식
*/
