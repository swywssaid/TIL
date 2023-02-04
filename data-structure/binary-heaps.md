# Binary Heaps (이진 힙)

<br><br>

## Heaps (힙)
- 힙 속성을 지닌 완전 트리 구조이다
- 완전 트리: 마지막 레벨을 제외하고 완전히 채워져 있는 트리
  - 마지막 레벨의 경우, 왼쪽부터 채운다.
- 힙 속성: 부모와 자식 노드 간에 대소관계가 존재한다. 
  - 최대 힙의 경우 부모 노드가 자녀 노드보다 크다.
  - 최소 힙의 경우 부모 노드가 자녀 노드보다 작다.

<br><br>

## Binary Heaps (이진 힙)
- 힙 속성을 지닌 완전 이진 트리 구조이다.
- 부모와 자식 노드 간에 대소관계가 존재한다.
  - 최대이진힙의 경우 부모 노드가 자녀 노드보다 크다.
  - 최소이진힙의 경우 부모 노드가 자녀 노드보다 작다.

<br><br>

## 이진 힙을 배우는 이유
- 우선 순위 큐에 사용
- 그래프 순회 알고리즘에 사용

<br><br>

## 힙 정렬
- 배열의 인덱스: n  
  - 왼쪽 자녀: 2n + 1  
  - 오른쪽 자녀: 2n + 2  
- 자녀의 인덱스: n   
  - 부모 노드: (n-1)/2 (나머지 버림)
 
<br><br>

## 이진힙 구현
### insert
- 최대이진힙을 구현해보자

```javascript
class MaxBianryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

```

<br><br>

## Reference <!-- omit in toc -->
[힙 (자료 구조)](https://ko.wikipedia.org/wiki/%ED%9E%99_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0))

[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

[complete tree](https://xlinux.nist.gov/dads/HTML/completetree.html)
