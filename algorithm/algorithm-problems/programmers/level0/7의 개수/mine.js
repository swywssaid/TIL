function solution(array) {
  return [...array.join("")].filter((x) => x === "7").length;
}
solution([7, 77, 17]);
