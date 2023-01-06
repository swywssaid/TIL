# Searching Algorithm 
- [Searching Algorithm](#searching-algorithm)
  - [Linear Search (선형 검색 알고리즘)](#linear-search-선형-검색-알고리즘)
    - [Linear Search 개념 및 구현](#linear-search-개념-및-구현)
    - [Linear Search Big O](#linear-search-big-o)
  - [Binary Search (이진 검색 알고리즘)](#binary-search-이진-검색-알고리즘)
    - [Binary Search 개념](#binary-search-개념)
    - [Binary Search 의사코드 (Pseudocode)](#binary-search-의사코드-pseudocode)
    - [Binary Search Big O](#binary-search-big-o)
  - [Linear Search vs Binary Search](#linear-search-vs-binary-search)

<br /><br />

## Searching Algorithm <!-- omit in toc -->

## Linear Search (선형 검색 알고리즘)
### Linear Search 개념 및 구현
- 어느 배열에서도 사용 가능.
- 처음부터 끝까지 순차적으로 확인. 
- 배열의 크기가 커질수록 검색시간 길어짐, Linear time complexity(선형 시간복잡도)를 가짐.
<img src="..\image\algorithm\linear-binary-search\20220930194620.png" width="600" height="330" />

```javascript
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!
function linearSearch(arr,v){
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === v) return i;
  }
  return -1;
}

```

<br /><br />

### Linear Search Big O
**Best**
- O(1)
  
**Average**
- O(n)

**Worst**
- O(n)

<br /><br />

## Binary Search (이진 검색 알고리즘)
### Binary Search 개념
- **Sorted Array(정렬된 배열)**에서만 사용 가능.
<img src="../image\algorithm\linear-binary-search\20220930195440.png" width="600" height="330" />
> Sorted Array에서 삽입은 정렬되지 않은 배열보다 느리나 검색은 훨씬 빠르다. 

<br />

- 배열의 중간에서 검색을 시작한다. 
- 중앙 값과 비교를 한 후 한쪽 배열을 택한다. 과정 반복.
<img src="../image\algorithm\linear-binary-search\20220930202511.png" width="600" height="330" />

<br><br />

### Binary Search 의사코드 (Pseudocode)
- 정렬된 배열과 값을 입력값으로 받는다
- 세 개의 포인터
  1. 왼쪽 시작
  2. 오른쪽 끝
  3. 1, 2의 중앙
- 루프 조건은 왼쪽 포인터가 오른쪽 포인터 앞에 있어야 함.
  - 중앙 포인터를 만든다
  - 중앙 포인터에 우리가 찾는 값이 있다면, 그 인덱스 반환
  - 중앙 포인터 값이 작다면, 왼쪽 포인터를 중앙 포인터로 옮김
  - 중앙 포인터 값이 크다면, 오른쪽 포인터를 중앙 포인터로 옮김
- 값이 없다면, -1을 반환


```javascript
/*
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
*/
  // 중앙값과 비교 length / 2 내림
  // 작으면 왼 크면 오른쪽 배열
  // 내풀이
function binarySearch(arr,v){
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] === v) {
      return middle;
    } else if (arr[middle] < v) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return arr[left] === v ? left : -1;
}

// 리팩토링
function binarySearch(arr,v){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2)
  while (arr[middle] !== v && left <= right) {
    if (arr[middle] < v) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2)
  }
  return arr[middle] === v ? middle : -1;
}
```
<br /><br />

### Binary Search Big O
**Best**
- O(1)
  
**Average**
- O(logn)

**Worst**
- O(logn)

> log 정의  
O(logn)은 n의 크기를 두 배를 늘렸을 때 한 개의 step만 추가되는 관계이다.

<br /><br />

## Linear Search vs Binary Search
- 이진 검색은 매 단계마다 절반의 아이템을 없앰.
- 이진 검색은 자료가 2배가 되어도 단계 1개가 늘어날 뿐.
- 두 검색 간 차이는 자료가 커질수록 커짐.
- 검색이 많은 작업 시 이진 검색이 유리하나 Sorted Array에서의 삽입과 검색의 상충관계를 고려해야함.
<img src="../image\algorithm\linear-binary-search\20220930203111.png" width="600" height="330" />

<br /><br />

## **Reference**<!-- omit in toc -->
[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=NFETSCJON2M&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=2)    

[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

[binary search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/running-time-of-binary-search)
