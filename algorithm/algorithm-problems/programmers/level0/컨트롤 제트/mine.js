function solution(s) {
  let answer = 0;
  let sumList = [];
  s.split(" ").forEach((item, index) => {
    if (item !== "Z") {
      sumList.push(Number(item));
      answer += Number(item);
    } else {
      if (sumList[sumList.length - 1]) {
        answer -= sumList.pop();
      } else sumList.push(0);
    }
  });
  return answer;
}
solution("Z 10 Z Z 20 30 Z Z 40");
