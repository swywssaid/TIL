# performance of array and object

## object
### 객체의 성능
- 삽입: O(1)
- 제거: O(1)
- 검색: O(N)
- 접근: O(1)

<br><br>

### 객체 메소드의 성능
- Object.keys: O(N)
- Object.values: O(N)
- Object.entries: O(N)
- hasOwnProperty: O(1)

<br><br>

## [array](https://github.com/swywssaid/TIL/blob/main/data-structure/array.md)
### 배열의 성능
- 삽입: O(1) or O(N) $\rightarrow$ push or pop
- 제거: O(1) or O(N) $\rightarrow$ shift or unshift)
- 검색: O(N)
- 접근: O(1)

<br><br>

### 배열 메소드의 성능
- push: O(1)
- pop: O(1)
- shift: O(N)
- unshift: O(N)
- cocat: O(N)
- slice: O(N)
- splice: O(N)
- sort: O(N * logN)
- forEach/map/filter/reduce/etc: O(N)