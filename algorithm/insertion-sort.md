# **Insertion Sort**
- [**Insertion Sort**](#insertion-sort)
  - [**1. Insertion Sort (삽입 정렬)**](#1-insertion-sort-삽입-정렬)
  - [**2. Bubble Sort VS Selection Sort VS Insertion Sort**](#2-bubble-sort-vs-selection-sort-vs-insertion-sort)
    - [**2.1. Bubble Sort**](#21-bubble-sort)
    - [**2.2. Selection Sort**](#22-selection-sort)
    - [**2.3. Insertion Sort**](#23-insertion-sort)

<br /><br />

## **1. Insertion Sort (삽입 정렬)**
- 현재 요소와 이전 요소를 비교하고 규칙에 맞게 스왑한다. arr[1]에서 arr[N]까지 반복한다.
- 스왑하게 되면 그 이전 요소들과 계속해서 비교하고 스왑한다. 
- 정렬된 부분과 아직 정렬되지 않은 부분으로 나뉜다.
- 배열의 길이를 N이라 할 때 정렬 상태에 따라 시간복잡도가 다르다.
  - 최악 or 평균적인 경우 시간복잡도는 $O(N^2)$이다.
  - 이미 정렬된 상태라면 시간복잡도는 $O(N)$이다.
<img src="..\image\algorithm\insertion-sort\insertion-sort.png" width="600" height="330">

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]
```

> 아래는 먼저 구현해본 것. 처참하다...
```javascript
function swap(arr,targetX,targetY) {
    let temp = arr[targetX];
    arr[targetX] = arr[targetY];
    arr[targetY] = temp;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            swap(arr, i, i-1)
            for (let j = i - 1; j > 0; j--) {
                if (arr[j] < arr[j-1]) swap(arr, j, j-1)
            }
        }
    }

    console.log(arr)
}
```
<br /><br />

## **2. Bubble Sort VS Selection Sort VS Insertion Sort**

<br />

<img src="..\image\algorithm\insertion-sort\insertion-sort2.png" width="600" height="330">


<br />

>여기서 주의할 점은 시간복잡도가 같다고 동일한 성능의 알고리즘은 아니라는 것이다. 

<br /><br />

### **2.1. Bubble Sort**
**Best Case:** 시간복잡도는 $O(N)$ , swaps는 $O(1)$  
**Worst Case:** 시간복잡도는 $O(N^2)$ , swaps $O(N^2)$  
**Average Case:** 시간복잡도는 $O(N^2)$ , swaps $O(N^2)$  
**장점:** 
- 제자리 정렬(In-place Sorting) $\rightarrow$ 정렬하고자 하는 배열 안에서 교환하는 방식, 다른 메모리 공간 필요 없음.   
- 안정 정렬(Stable Sort) $\rightarrow$ 동일한 키 값의 요소 순서가 정렬 후 유지가 되는 정렬 알고리즘.  
  
**단점:**
- 최선일 때를 제외하고 swaps이 $O(N^2)$ 로 많이 발생.
- 비교적 느린 알고리즘.
  
<br />

### **2.2. Selection Sort**
**Best Case:** 시간복잡도는  $O(N^2)$ , swaps는 $O(1)$  
**Worst Case:** 시간복잡도는 $O(N^2)$ , swaps $O(N)$  
**Average Case:** 시간복잡도는 $O(N^2)$ , swaps $O(N)$ 
**장점:** 
- swaps이 $O(N)$으로 적게 발생한다.
- 제자리 정렬(In-place Sorting) $\rightarrow$ 정렬하고자 하는 배열 안에서 교환하는 방식, 다른 메모리 공간 필요 없음.    
  
  
**단점:**
- 시간복잡도는 $O(N^2)$으로 빠른 알고리즘은 아님.
- 불안정 정렬(Unstable Sort) $\rightarrow$ 동일한 키 값의 요소 순서가 정렬 후 바뀌는 정렬 알고리즘.
  
<br />

### **2.3. Insertion Sort**
**Best Case:** 시간복잡도는 $O(N)$ , swaps는 $O(1)$  
**Worst Case:** 시간복잡도는 $O(N^2)$ , swaps $O(N^2)$  
**Average Case:** 시간복잡도는 $O(N^2)$ , swaps $O(N^2)$ 
**장점:** 
- Selection Sort나 Bubble Sort과 같은 O(n^2) 알고리즘에 비해 상대적으로 빠름.
- 부분적으로 정렬된 배열의 경우 더 효율적인 알고리즘.
- 제자리 정렬(In-place Sorting) $\rightarrow$ 정렬하고자 하는 배열 안에서 교환하는 방식, 다른 메모리 공간 필요 없음.    
- 안정 정렬(Stable Sort) $\rightarrow$ 동일한 키 값의 요소 순서가 정렬 후 유지가 되는 정렬 알고리즘.  
  
**단점:**
- 일반적으로 N 값이 작은 경우에 사용됩니다. N 값이 크면 비효율적.
  
<br />

>결국 3개 모두 정렬에 자주 쓰이는 좋은 알고리즘은 아니다. 구현이 쉬워 입문 시 접하기 좋은 알고리즘인 것 같다. 

<br /><br />

## **Reference**<!-- omit in toc -->  
[Insertion Sort](https://www.geeksforgeeks.org/insertion-sort/?ref=lbp)

[Comparison among Bubble Sort, Selection Sort and Insertion Sort](https://www.geeksforgeeks.org/comparison-among-bubble-sort-selection-sort-and-insertion-sort/?ref=rp)

[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=Bor_CRWEIXo&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=5) 