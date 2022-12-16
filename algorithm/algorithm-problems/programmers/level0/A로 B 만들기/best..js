function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

/*
console.log([1, 2, 3] === [1, 2, 3]); // false
console.log([1, 2, 3] == [1, 2, 3]);  // false


*/
