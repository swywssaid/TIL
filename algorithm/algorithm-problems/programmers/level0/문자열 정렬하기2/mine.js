function solution(my_string) {
  return [...my_string.replace(/[a-z]/gi, (x) => x.toLowerCase())].sort().join("");
}
console.log([..."acd"].sort());
