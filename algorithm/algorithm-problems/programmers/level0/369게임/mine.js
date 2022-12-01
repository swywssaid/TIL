function solution(order) {
  return String(order)
    .split("")
    .filter((x) => x === "3" || x === "6" || x === "9").length;
}
solution(29423);
