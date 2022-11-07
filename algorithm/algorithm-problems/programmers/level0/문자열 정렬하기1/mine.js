function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .sort((a, b) => a - b)
    .map(Number);
}
// \d : 숫자 문자에 대응 [0-9]와 동일 /\d/g
