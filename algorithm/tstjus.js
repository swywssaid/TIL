let str1 = "anagram";
let str2 = "nagaram";

// // 중첩 루프 O(n^2)
// function solution(arr1, arr2) {
//   return !arr1
//     .map((x) => {
//       if (arr2.includes(x ** 2)) {
//         arr2.splice(arr2.indexOf(x ** 2), 1);
//         return "";
//       }
//     })
//     .filter((x) => x !== "").length;
// }
function solution(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};
  for (let val of str1) lookup[val] = (lookup[val] || 0) + 1;

  for (let val of str2) {
    if (!lookup[val]) return false;
    lookup[val]--;
  }
  return true;
}
console.log(solution(str1, str2));
// let test = { 2: 3 };
// console.log(3 in test);
