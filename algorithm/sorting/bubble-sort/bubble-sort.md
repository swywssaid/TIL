# **Bubble Sort**

- [**Bubble Sort**](#bubble-sort)
  - [**1. Bubble Sort (버블 정렬)**](#1-bubble-sort-버블-정렬)
  - [**2. 버블 정렬 구현 (최적화 전)**](#2-버블-정렬-구현-최적화-전)
  - [**3. 버블 정렬 구현 (최적화)**](#3-버블-정렬-구현-최적화)

<br /><br />

## **1. Bubble Sort (버블 정렬)**

- 버블 정렬은 두 요소를 확인하고 올바른 위치에서 교환하는 정렬 알고리즘입니다.
- 여기서 올바른 위치란 오른차순, 내림차순을 고려한 순서가 될 수 있다.
- 루프를 한번 돌 때마다 정렬해야할 항목이 하나씩 줄어든다.
  <img src="..\..\..\image\algorithm\bubble-sort\bubble-sort.png" width="600" height="330">
  <img src="..\..\..\image\algorithm\bubble-sort\bubble-sort2.png" width="600" height="330">

<br /><br />

## **2. 버블 정렬 구현 (최적화 전)**

- 배열의 길이를 N이라 할 때 시간복잡도는 $O(N^2)$이다.
  - 시간복잡도: $(N-1)+(N-2)+...+2+1=(N-1)*(N)/2\rightarrow O(N^2)$
- 정렬된 배열에서도 시간복잡도는 동일하다는 문제점이 있다.

```javascript
let arr = [4, 3, 2, 5, 1];

function bubbleSort(arr) {
  // i는 iteration마다 swap횟수를 줄이기 위함. (n-1, n-2 ...)
  for (let i = 0; i < arr.length; i++) {
    // j는 swap대상 변수.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 값 대소 비교 후 swap, 복제가 되는 값
        let left = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = left;
      }
    }
  }
  console.log(arr);
}
bubbleSort(arr);
```

<br /><br />

## **3. 버블 정렬 구현 (최적화)**

- 배열의 길이를 N이라 할 때 정렬 상태에 따라 시간복잡도가 다르다.
  - 최악 or 평균적인 경우 시간복잡도는 $O(N^2)$이다.
  - 이미 정렬된 상태라면 시간복잡도는 $O(N)$이다.

```javascript
let arr = [4, 3, 2, 5, 1];

function bubbleSort(arr) {
  // i는 iteration마다 swap횟수를 줄이기 위함. (n-1, n-2 ...)
  for (let i = 0; i < arr.length; i++) {
    let isSwaped = false;

    // j는 swap대상 변수.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let left = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = left;
        isSwaped = true;
      }
    }

    // swap되지 않았다면 종료
    if (!isSwaped) {
      break;
    }
  }
  console.log(arr);
}
bubbleSort(arr);
```

<br /><br />

**swap 방법**

1. 변수 사용법

```javascript
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

<br>

2. 구조 분해 할당

```javascript
function swap(arr, idx1, idx2) {
  [idx1, idx2] = [idx2, idx1];
}
```

<br /><br />

> P.S. 결국 최적화된 상태의 버블 정렬이여도 이미 정렬된 배열이 아닌 이상 시간복잡도는 $O(N^2)$이다. 사실 자주 사용되는 알고리즘은 아니다. 더 좋은 알고리즘이 많기 때문에... 하지만 이해하기 쉽기 때문에 정렬 입문으로 좋다.

<br /><br />

## **Reference**<!-- omit in toc -->

[Bubble Sort algorithm using JavaScript](https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/)

[Bubble Sort Algorithm](https://www.geeksforgeeks.org/bubble-sort/?ref=lbp)

[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=NFETSCJON2M&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=2)
