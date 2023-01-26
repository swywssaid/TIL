# Tree 
- [Tree](#tree)
  - [1. Tree](#1-tree)
    - [1.1. Tree란](#11-tree란)
    - [1.2. Tree 구성요소](#12-tree-구성요소)
    - [1.3. Tree 조건](#13-tree-조건)
  - [2. Binary Tree (이진 트리)](#2-binary-tree-이진-트리)
    - [2.1. 이진 트리란](#21-이진-트리란)
    - [2.2. Binary Search Tree (BST, 이진 탐색 트리)](#22-binary-search-tree-bst-이진-탐색-트리)
    - [2.3. 이진 탐색 트리 구현](#23-이진-탐색-트리-구현)
    - [2.4. 이진 탐색 트리 구현1: Insert](#24-이진-탐색-트리-구현1-insert)
    - [2.5. 이진 탐색 트리 구현2: Find(Includes)](#25-이진-탐색-트리-구현2-findincludes)
    - [2.6. 이진 검색 트리 Big O](#26-이진-검색-트리-big-o)

<br><br>

## 1. Tree
### 1.1. Tree란
- 노드와 엣지로 이루어진 자료구조

**사용 예**
- HTML DOM
- Network Routing
- Abstract Syntex Tree
- AI
- Folders
- JSON

<br><br>

### 1.2. Tree 구성요소
- 트리의 구성요소
  1. Root: 트리의 꼭대기
  2. Child: 루트로 부터 멀어지는 노드에 연결된 노드
  3. Parent: Child의 반대
  4. Sibings: 같은 부모노드를 갖는 노드
  5. Leaf: 자녀 노드가 없는 노드
  6. Edge: 노드를 잇는 가지(간선)

<br><br>

### 1.3. Tree 조건
1. 하나의 루트를 가져야한다.
2. 모든 노드는 루트로부터 멀어져가는 구조여야한다.

> List: linear (경로가 하나)
> Tree: nonlinear (경로가 여러 개 될 수 있음)

<br><br>

## 2. Binary Tree (이진 트리)
### 2.1. 이진 트리란
- 자녀 노드가 2개 이하인 트리 구조

<br><br>

### 2.2. Binary Search Tree (BST, 이진 탐색 트리)
- 이진 트리의 특별한 종류
- 특정한 순서로 데이터가 정렬되어 있는 트리 구조
  - 부모 노드 보다 작은 자녀 노드는 왼쪽
  - 부모 노드 보다 큰 자녀 노드는 오른쪽

<br><br>

### 2.3. 이진 탐색 트리 구현
### 2.4. 이진 탐색 트리 구현1: Insert
**반복문 or 재귀**
1. 노드를 만든다.
2. 루트부터 출발한다.
   1. 루트 없다면 새 노드가 루트가 된다.
   2. 루트가 있다면 새 노드값과 루트값을 비교한다.
      1. 새 노드값이 더 크다면
         1. 오른쪽 노드값 확인, 있다면 과정 반복
         2. 오른쪽 노드값 확인, 없다면 오른쪽에 추가
      2. 새 노드값이 더 작다면
         1. 왼쪽 노드값 확인, 있다면 과정 반복
         2. 왼쪽 노드값 확인, 없다면 왼쪽에 추가

```javascript
/*
값이 같은 것을 추가한다면 카운터를 통해서 개수를 세도 되지만 여기선
undefined를 리턴하도록 함.
     10
    5   13
   2 7 12 15
*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert(value) {
    //     let newNode = new Node(value); 
    //     if(this.root === null) {
    //         this.root = newNode;
    //         return this;
    //     } else {
    //         let current = this.root;
    //         while(true) {
    //             if(value === current.value) return undefined;
    //             if(value < current.value) {
    //                 if(current.left === null) {
    //                     current.left = newNode;
    //                     return this;
    //                 } else {
    //                     current = current.left
    //                 }
    //             } else if(value > current.value) {
    //                 if(current.right === null) {
    //                     current.right = newNode;
    //                     return this;
    //                 } else {
    //                     current = current.right
    //                 }
    //             }

    //         }
    //     }
    // }

    // 리팩토링
    insert(value) {
        let newNode = new Node(value); 
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } 
                current = current.right
            }
        }
    }
}
```

<br><br>

### 2.5. 이진 탐색 트리 구현2: Find(Includes)
**insert 메소드와 메커니즘 유사**
1. 루트부터 출발한다.
   1. 루트 없다면, return false
   2. 루트가 있다면 찾는 값과 루트값을 비교한다.
      1. 찾는 값과 같다면, return true
      2. 찾는 값이 더 크다면
         1. 오른쪽 노드값 확인, 있다면 과정 반복
         2. 오른쪽 노드값 확인, 없다면 return false
      3. 찾는 값이 더 작다면
         1. 왼쪽 노드값 확인, 있다면 과정 반복
         2. 왼쪽 노드값 확인, 없다면 return false

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // find(value) {
    //     if(this.root === null) return false;
    //     let current = this.root,
    //         found = false;
    //     while(current && !found) {
    //         if(value < current.value) {
    //             current = current.left;
    //         } else if (value > current.value) {
    //             current = current.right;
    //         } else {
    //             found = true;
    //         }
    //     }
    //     if(!found) return undefined;
    //     return current;
    // }
    includes(value) {
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}
```

<br><br>

### 2.6. 이진 검색 트리 Big O
**삽입**
- O(logn)

<br>

**삽입**
- O(logn)

> 반드시 O(logn)를 보장하지는 않는다.
> 만약 연결 리스트와 같은 형태라면 O(n) 시간복잡도를 갖게 된다.  
> 만약 위와 같은 구조의 형태의 이진 검색 트리를 사용해야 한다면 루트를 새로 세팅하는 방법이 있다.

<br><br>

## Reference <!-- omit in toc -->
[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)