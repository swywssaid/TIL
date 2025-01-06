# **Selection Sort**

- [**Selection Sort**](#selection-sort)
  - [**1. Selection Sort (선택 정렬)**](#1-selection-sort-선택-정렬)
  - [**2. Selection Sort VS Bubble Sort**](#2-selection-sort-vs-bubble-sort)

<br /><br />

## **1. Selection Sort (선택 정렬)**

- 배열에서 최소 요소(오름차순 기준)를 선택하여 올바른 위치에 배치하는 정렬 알고리즘이다.
- 정렬된 부분과 아직 정렬되지 않은 부분으로 나뉘며 매 iteration 마다 아직 정렬되지 않은 부분에서 최소 요소를 찾는다.
- 배열의 길이를 N이라 할 때 시간복잡도는 $O(N^2)$이다. - 시간복잡도: $(N-1)+(N-2)+...+2+1=(N-1)*(N)/2\rightarrow O(N^2)$
  <img src="..\..\..\image\algorithm\selection-sort\selection-sort.png" width="600" height="330">

```javascript
// 배열 요소를 스왑한다.
function swap(arr, targetX, targetY) {
  let temp = arr[targetX];
  arr[targetX] = arr[targetY];
  arr[targetY] = temp;
}

// 선택 정렬 함수
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // i인덱스 요소가 최솟값일 때를 고려한다.
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 값을 비교 후 조건에 맞다면 인덱스를 기억한다.
      // 조건이 맞을 때 마다 스왑하는 할 수 있지만 불필요한 작업이다.
      if (arr[i] > arr[j]) {
        minIndex = j;
      }
    }

    // j iteration을 다 돌면 최솟값의 인덱스가 저장된다.
    // 이후 스왑은 iteration 당 한번만 한다.
    if (i !== minIndex) swap(arr, i, minIndex);
  }
  console.log(arr);
}

let arr = [4, 3, 2, 1, 5];
selectionSort(arr);
```

<br /><br />

## **2. Selection Sort VS [Bubble Sort](https://github.com/swywssaid/TIL/blob/main/algorithm/bubble-sort.md#bubble-sort)**

<br />

| 선택정렬                                                                              |                                                                     버블정렬 |
| :------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------: |
| 선택 정렬은 배열에서 최소 요소를 선택하여 올바른 위치에 배치하는 정렬 알고리즘입니다. | 버블 정렬은 두 요소를 확인하고 올바른 위치에서 교환하는 정렬 알고리즘입니다. |
| 최상의경우 시간복잡도는 $O(N^2)$                                                      |                                               최상의경우 시간복잡도는 $O(N)$ |
| 최악의경우 시간복잡도는 $O(N^2)$                                                      |                                             최악의경우 시간복잡도는 $O(N^2)$ |
| 선택방법                                                                              |                                                                     교환방법 |
| 효율적인 분류 기술                                                                    |                                                           비효율적 분류 기술 |
| 더 빠름                                                                               |                                                                      더 느림 |

<br />

> 같은 시간복잡도인데도 선택정렬이 더 빠른 이유는 iteration 당 스왑을 한번만 하기 때문이다.

<br /><br />

## **Reference**<!-- omit in toc -->

[Selection Sort Algorithm](https://www.geeksforgeeks.org/selection-sort/?ref=gcse)

[Selection Sort VS Bubble Sort](https://www.geeksforgeeks.org/selection-sort-vs-bubble-sort/?ref=gcse)

[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=NFETSCJON2M&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=2)
