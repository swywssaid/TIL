# Quick Sort <!-- omit in toc -->

- [1. Quick Sort란](#1-quick-sort란)
- [2. Pivot Helper](#2-pivot-helper)
  - [2.1. Pivot Helper 의사코드](#21-pivot-helper-의사코드)
  - [2.2. Pivot Helper 구현](#22-pivot-helper-구현)
- [3. Quick Sort 의사코드](#3-quick-sort-의사코드)
- [4. Quick sort 구현](#4-quick-sort-구현)
- [5. Quick Sort Big O](#5-quick-sort-big-o)
  
<br><br>

## 1. Quick Sort란
- 요소를 피벗($\fallingdotseq$파티션)으로 선택하고 선택한 피벗을 중심으로 지정된 배열을 분할하며 정렬하는 알고리즘.
- 병합 정렬 과 마찬가지로 Quick Sort 는 Divide and Conquer 알고리즘
- 제자리정렬

> 피벗보단 파티션이 직관적인 듯.

<br><br>

## 2. Pivot Helper
- 배열이 주어지면 요소를 피벗 포인트로 지정하여 배열 속 요소를 재배치하는 함수.
  - 피벗을 기준으로 왼쪽(작음), 오른쪽(큼)으로 나눠 이동시킴. (오름차순 기준)

### 2.1. Pivot Helper 의사코드
1. 3 인자를 받는다: 배열, 시작 인덱스, 끝 인덱스 (시작은 0 ,끝은 -1로 default)
2. 피벗을 배열의 시작으로 잡는다 (시작, 끝, 무작위 등이 가능하지만 편의상 시작으로 선택)
3. 현재 피벗 인덱스를 저장 (마지막에 피벗을 바꿀 위치를 계속 확인)
4. 시작부터 끝까지 루프
   - 비벗이 현재 요소보다 크다면, 비벗 인덱스를 증가 후 현재 요소와 스왑
   - 끝까지 확인 후 증가된 비벗 인덱스와 비벗과 스왑
5. 피벗 인덱스 리턴

<br><br>

### 2.2. Pivot Helper 구현

```javascript
function swap(arr,idx1,idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}
pivot([4,6,5,3,1,2])
```

<br><br>

## 3. Quick Sort 의사코드
1. Pivot Helper를 통해 피벗 인덱스를 반환받는다.
2. 반환받은 인덱스를 기준으로 왼쪽과 오른쪽에 Pivot Helper를 재귀적으로 적용한다. **중요한 점은 새로운 배열을 만들지 않는다는 것이다. 제자리 정렬**

<br><br>

## 4. Quick sort 구현
```javascript
/*
제자리정렬이기에 arr는 변하지 않는다.
left와 right만 변하게 되고
base에 가까워질 수 록 left와 right는 가까워지고
left === right가 되면 한 요소를 가르키게 된다.
따라서 종료조건을 아래와 같이 설정해준다.
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right); // 3
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
quickSort([4,6,5,3,1,2])
/*
재귀함수 특성상 종료조건이 될 때까지 호출 위치의 윗부분을 재귀한다.
left의 경우 그 위쪽을 재귀한다. 이후 종료되면 아래로 내려가 right이 실행된다.
*/
```

<br><br>

## 5. Quick Sort Big O
**time complexity (Best)**
- O(nlogn)
  
**time complexity (Average)**
- O(nlogn)

>Best & Average: logn은 분할 시 시간 복잡도이며, n은 Pivot 시 시간 복잡도이다. 따라서 O(nlogn)이 된다.

**time complexity (Worst)**
- O(n^2)

>Worst: 이미 정렬된 상태일 경우. n은 분할 시 시간 복잡도이며 (pivot 리턴값이 pivot 시작값으로 피벗을 제외한 배열에서 다시 찾아야한다.), n은 Pivot 시 시간 복잡도이다. 따라서 O(n^2)이 된다.

>위 문제는 피벗 시작값을 매번 가장 작은 수를 뽑거나 가장 큰 수를 뽑을 때 발생한다. 따라서 이미 정렬된 상태일 경우 무작위(중간값)로 비벗을 고르면 해결할 수 있다. 단, 이 또한 알고리즘 특성상 완전한 해결책이 될 수 없다. 왜냐하면 무작위(중간값)로 선택하더라도 매법 최솟값 혹은 최댓값을 뽑는 경우가 포함될 수 있기 때문이다.


**space complexity**
- O(logn)

<br><br>

## Reference <!-- omit in toc -->
[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

[Quick Sort](https://www.geeksforgeeks.org/quick-sort/)