# Radix Sort (기수 정렬)

## 정렬 알고리즘의 종류

### Comparison Sort (비교 정렬)
- 버블, 퀵 등은 비교 정렬 알고리즘이다.
  - 기본적으로 주어진 시점에서의 두 개의 항목을 비교하는 알고리즘
- 비교 정렬의 시간 복잡도의 최선은 O(nlogn)이다. 단일 비교로 얻을 수 있는 제한적인 정보와 관련됨. 즉, [수학적 한계](https://en.wikipedia.org/wiki/Comparison_sort)가 있다.

<br>

**Bubble Sort**
- O(n^2)

<br>

**Insertion Sort**
- O(n^2)

<br>

**Selection Sort**
- O(n^2)

<br>

**Merge Sort**
- O(nlogn)

<br>

**Quick Sort**
- O(nlogn)

<br><br>

### 비교 정렬이 아닌 알고리즘
- 데이터의 특별한 속성을 이용하는 알고리즘.
- 데이터를 직접 비교하지 않는다. (이 숫자가 이것보다 큰가 작은가?와 같이)
- 정수 정렬 알고리즘(기수 정렬) 등이 있다.

<br><br>

## Radix Sort 란 (기수 정렬)
- 두 수의 크기를 직접 비교하는 것이 아닌 자릿수를 비교한다.
- 정수 정렬 알고리즘의 한 종류이다.

<br><br>

## Radix Sort 의사코드
1. 입력값으로 배열을 받는 함수를 정의한다.
2. 배열 내 숫자 중 가장 큰 자릿수를 구한다.
3. 가장 큰 자릿수만큼 루프를 돈다.
   - 루프마다, 각 자릿수에 버킷을 만든다. (0 ~ 9)
   - 각 버킷에 대응하는 숫자를 배열에 담는다.
   - 기존 배열을 버킷에 담긴 수로 교체한다. (0에서 9로)
4. 배열을 리턴한다.

<br><br>

## Radix Sort 구현

### Radix Sort: helper 메소드 구현
1. 각 자릿수의 숫자를 알아내는 메소드
2. 몇 자릿수인지 확인하는 메소드
3. 자릿수가 가장 많은 수를 알아내는 메소드

<br><br>

#### 각 자릿수의 숫자를 알아내는 메소드

```javascript
/*
getDigit(12345, 0) // 5
getDigit(12345, 5) // 0
*/
function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}


// 내 코드
function getDigit(num, index) {
  num = num.toString();
  if (index >= num.length) return 0;
  return Number([...num][num.length - index - 1]);
}
```

<br><br>

#### 몇 자릿수인지 확인하는 메소드

```javascript
/*
지수를 통해 자리수를 판별할 것이다.
지수는 로그를 통해 구할 수 있다(10진법 기준)

digitCount(0) 1
digitCount(12) 2
digitCount(-133) 3

*/
function digitCount(num) {
  if (num === 0) return 1; // 0일 때 -Infinity됨. 로그함수 생각.
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}


// 내 코드
function digitCount(num) {
  return String(Math.abs(num)).length;
}
```

<br><br>

#### 자릿수가 가장 많은 수를 알아내는 메소드

```javascript
/*
배열에 음수가 들어가는 것은 고려하지 않음
*/
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}


// 내 코드
function mostDigits(arr) {
  return Math.max(...arr.map((x) => digitCount(x)));
}
```

<br><br>

### Radix Sort 구현

```javascript
function radixSort(arr) {
  let mostDigit = mostDigits(arr);
  for (let i = 0; i < mostDigit; i++) {
    let bucket = Array.from({length: 10}, () => []);
    arr.forEach((x) => {
      bucket[getDigit(x, i)].push(x);
    });
    arr = [].concat(...bucket);
  }
  return arr;
}

// 내 코드
function radixSort(arr) {
  let mostDigit = mostDigits(arr);
  for (let i = 0; i < mostDigit; i++) {
    let bucket = new Array(10).fill(0).map((x) => []);
    let temp = [];
    arr.forEach((x) => {
      bucket[getDigit(x, i)].push(x);
    });
    bucket.forEach((x) => temp.push(...x));
    arr = temp;
  }
  return arr;
}
```

<br><br>

## Radix Sort Big O
- 여기서 k는 숫자의 자릿수이다
  
<br>

**time complexity (Best)**
- O(nk)
  
**time complexity (Average)**
- O(nk)

**time complexity (Worst)**
- O(nk)

**space complexity**
- O(n + k)

<br>

> 이론상으론 기수 정렬이 모든 비교 정렬보다 빠를 수 있다.
> 하지만 컴퓨터 메모리에 수를 저장하는 방식에 대한 제한으로 인해 실제와 다를 수 있다. 예상보다 좀 더 느림.

<br><br>

## Reference <!-- omit in toc -->
[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

[Comparison sort](https://en.wikipedia.org/wiki/Comparison_sort)
