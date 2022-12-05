function solution(numbers) {
  const table = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const nums = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (x) => table[x]);
  console.log(nums);
  return Number(nums);
}
solution("onetwothreefourfivesixseveneightnine");
