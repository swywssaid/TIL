let str1 = "anagram";
let str2 = "nagaram";
let arr = [1];

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
function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j - 1] !== arr[j]) i++;
  }
  return i + 1;
}
console.log(countUniqueValues(arr));
// let test = { 2: 3 };
// console.log(3 in test);
