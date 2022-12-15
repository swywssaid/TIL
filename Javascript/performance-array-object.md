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
- 제거: O(1) or O(N) $\rightarrow$ shift or unshift
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

<br><br>

## Set
### Set의 성능
- 삽입: O(1) $\rightarrow$ add
- 제거: O(1) $\rightarrow$ delete
- 검색: O(1) $\rightarrow$ has
- 접근: O(N) $\rightarrow$ forEach

<br><br>

### Set 메소드의 성능
- has: O(1)
- add: O(1)
- delete: O(1)
- clear: O(N)
- size: O(N)
- forEach: O(N)


```javascript
/* ChatGPT
In JavaScript, the time complexity of Set depends on the operation being performed. For operations like add(), has(), and delete(), the time complexity is O(1), which means it can be done in constant time. This means that the time taken by these operations does not depend on the size of the Set object.

However, for operations like clear() and size(), the time complexity is O(n), where n is the number of elements in the Set object. This means that the time taken by these operations increases linearly with the size of the Set object.

Overall, Set is an efficient data structure for performing operations that require fast access to elements, but it may not be the best choice for operations that require frequent insertion or deletion of elements.
*/
```
<br><br>

## Map
### Map의 성능
- 삽입: O(N) $\rightarrow$ set
- 제거: O(1) $\rightarrow$ delete
- 검색: O(1) $\rightarrow$ has
- 접근: O(1) $\rightarrow$ get

<br><br>

### Map 메소드의 성능
- has: O(1)
- set: O(N)
- delete: O(1)
- clear: O(N)

```javascript
/* ChatGPT
In JavaScript, the time complexity of Map depends on the operation being performed. For operations like get(), has(), and delete(), the time complexity is O(1), which means it can be done in constant time. This means that the time taken by these operations does not depend on the size of the Map object.

However, for operations like set() and clear(), the time complexity is O(n), where n is the number of elements in the Map object. This means that the time taken by these operations increases linearly with the size of the Map object.

Overall, Map is an efficient data structure for performing operations that require fast access to elements, but it may not be the best choice for operations that require frequent insertion or deletion of elements.
*/
```