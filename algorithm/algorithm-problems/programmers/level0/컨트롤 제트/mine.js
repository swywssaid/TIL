function solution(s) {
  let answer = 0;
  s.split(" ").forEach((item, index, arr) => {
    answer += item !== "Z" ? Number(item) : -Number(arr[index - 1]) ? -Number(arr[index - 1]) : 0;
  });
  return console.log(answer);
}
solution("Z 10 Z Z 20 Z 1 Z");
