function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    // 이전값이 더 작은 경우가 나오면 멈춤. 그런경우라면 이미 이전 숫자는 정렬되어있기 때문에
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      // currentValue가 들어갈 공간을 확보
      arr[j + 1] = arr[j];
    }
    // 빈자리에 넣어줌. arr[j]가 아닌 arr[j+1]에 넣어주는 이유는 마지막에 j--이 실행되기 때문
    arr[j + 1] = currentValue;
  }
  return arr;
}

function solution(array) {
  insertionSort(array);
  console.log(array);
  return array[Math.floor(array.length / 2)];
}

solution([1, 3, 5, -2, 4, 0]);
