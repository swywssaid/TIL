# Merge Sort<!-- omit in toc -->

- [1. Merge Sort란](#1-merge-sort란)
- [2. Merge 의사코드](#2-merge-의사코드)
  - [2.1. Merge 합병 구현](#21-merge-합병-구현)
- [3. Merge Sort 의사코드](#3-merge-sort-의사코드)
  - [3.1. Merge Sort 구현](#31-merge-sort-구현)
- [4. Merge Sort Big O](#4-merge-sort-big-o)

## 1. Merge Sort란
- 데이터를 잘게 쪼갠 뒤 병합하며 정렬을 시키는 알고리즘.
- 분할 정복 알고리즘

<br><br>

## 2. Merge 의사코드
1. 두 배열을 돌며 작은 값을 빈 배열에 추가시킨다. (오름차순)
2. 추가하는 과정은 각각의 배열에 i, j 포인터로 루프를 돈다.
3. 각 포인터가 가르키는 값을 비교하고 작은 값을 추가한다. 추가한 포인터는 다음 인덱스로 이동한다.
4. 포인터가 배열의 끝까지 이동했다면 나머지 배열의 남은 값 전체를 추가해준다. (정렬된 상태이기 때문에)

<br><br>  

### 2.1. Merge 합병 구현
1. 두 배열을 돌며 작은 값을 빈 배열에 추가시킨다. (오름차순)
2. 추가하는 과정은 각각의 배열에 i, j 포인터로 루프를 돈다.
3. 각 포인터가 가르키는 값을 비교하고 작은 값을 추가한다. 추가한 포인터는 다음 인덱스로 이동한다.
4. 포인터가 배열의 끝까지 이동했다면 나머지 배열의 남은 값 전체를 추가해준다. (정렬된 상태이기 때문에)

```javascript
// 값이 같은 경우도 포함됨.
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
    result.push(arr1[i]);
    i++;        
    }

    while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    }
    
    return result;
}
merge([1,10,50],[2,14,99,100])
merge([1,2,3,4],[1,2,3,4,5])
```

<br><br>  

## 3. Merge Sort 의사코드
1. 배열의 길이가 1 또는 0이 될 때까지 반으로 쪼갠다.
2. 다시 기존의 배열의 길이가 될 때까지 나눈 배열을 합친다.

<br><br>

### 3.1. Merge Sort 구현
- 
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

> 쉬운 예시로 단계별로 이해해보자!

<br><br>

## 4. Merge Sort Big O
- 입력값이 무엇이던 쪼개고 합치는 과정을 하기 때문에 O(nlogn)으로 동일하다.
- logn은 분할 시 시간 복잡도이며, n은 합병 시 시간 복잡도이다. 따라서 O(nlogn)이 된다.

**time complexity (Best)**
- O(nlogn)
  
**time complexity (Average)**
- O(nlogn)

**time complexity (Worst)**
- O(nlogn)

**space complexity**
- O(n)

> 데이터에 구애받지 않는다면 정렬 알고리즘에서 O(nlogn)이 최선이라고 할 수 있다.

<br><br>

## Reference <!-- omit in toc -->

[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)