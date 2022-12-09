function solution(my_string) {
  return [...my_string]
    .map((x) => x.toLowerCase())
    .sort()
    .join("");
}
