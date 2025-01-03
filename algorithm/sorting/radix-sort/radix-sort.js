/*
* 내 풀이

1. 각 숫자의 자리수를 기준으로 수를 정렬한다.
2. 첫째자리부터 정렬을 하며, 자리수를 높이며 정렬을 한다.

- 가장 큰 자리수 확인
- 음수 고려
  - 음수는 아예 따로 빼서 정렬 후 앞부분에 붙이는 방식?

*/

function mostDigits(arr) {
  return Math.max(...arr.map((num) => String(num).length));
}

function splitBySign(arr) {
  return [
    arr.filter((num) => num < 0).map((num) => Math.abs(num)),
    arr.filter((num) => num >= 0),
  ];
}

function radixSort(arr) {
  let arrSplitBySign = splitBySign(arr);
  let mostDigitNegative = mostDigits(arrSplitBySign[0]);
  let mostDigitPositive = mostDigits(arrSplitBySign[1]);

  const arrSplitBySignPad = arrSplitBySign.map((arr, i) =>
    i === 0
      ? arr.map((num) => String(num).padStart(mostDigitNegative, "0"))
      : arr.map((num) => String(num).padStart(mostDigitPositive, "0"))
  );

  for (let i = mostDigitNegative - 1; i >= 0; i--) {
    arrSplitBySignPad[0].sort((a, b) => b[i] - a[i]);
  }

  for (let i = mostDigitPositive - 1; i >= 0; i--) {
    arrSplitBySignPad[1].sort((a, b) => a[i] - b[i]);
  }
  arrSplitBySignPad[0] = arrSplitBySignPad[0].map((num) => -num);
  arrSplitBySignPad[1] = arrSplitBySignPad[1].map((num) => +num);

  return [].concat(arrSplitBySignPad[0], arrSplitBySignPad[1]);
}

radixSort([
  954, 354, 9, 411, -3, 0, 33, 84848201, -442, -53923484213, -232, 939398,
]);
