function solution(my_string) {
  return [...my_string].filter((x) => x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u").join("");
}
solution("nice to meet you");
