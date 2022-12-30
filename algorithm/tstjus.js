let arr1 = [1, 2, 2, 3];
let arr2 = [4, 4, 2, 9];

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
function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }
  return true;
}
console.log(solution(arr1, arr2));
// let test = { 2: 3 };
// console.log(3 in test);
