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
  - [Tree Traversal (트리 순회)](#tree-traversal-트리-순회)
    - [트리 순회](#트리-순회)
    - [BFS(Breadth Firsh Search, 너비 우선 탐색)](#bfsbreadth-firsh-search-너비-우선-탐색)
      - [BFS란](#bfs란)
      - [BFS 구현](#bfs-구현)
    - [DFS(Depth Firsh Search, 깊이 우선 탐색)](#dfsdepth-firsh-search-깊이-우선-탐색)
      - [DFS - PreOrder (전위 순회)](#dfs---preorder-전위-순회)
      - [전위 순회 구현](#전위-순회-구현)
      - [DFS - PostOrder (후위 순회)](#dfs---postorder-후위-순회)
      - [후위 순회 구현](#후위-순회-구현)
      - [DFS - InOrder (중위 순회)](#dfs---inorder-중위-순회)
      - [중위 순회 구현](#중위-순회-구현)
      - [DFS 비교](#dfs-비교)
    - [BFS vs DFS](#bfs-vs-dfs)

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

**탐색**
- O(logn)

> 반드시 O(logn)를 보장하지는 않는다.
> 만약 연결 리스트와 같은 형태라면 O(n) 시간복잡도를 갖게 된다.  
> 만약 위와 같은 구조의 형태의 이진 검색 트리를 사용해야 한다면 루트를 새로 세팅하는 방법이 있다.

<br><br>

## Tree Traversal (트리 순회)
### 트리 순회
- 특정 값을 찾기 위해선 모든 노드를 한 번씩 거쳐 가야 함
- 크게 두 가지 방법이 있다 (탐색 방향을 뜻함)
  1. BFS(Breadth Firsh Search, 너비 우선 탐색)
  2. DFS(Depth Firsh Search, 깊이 우선 탐색)

### BFS(Breadth Firsh Search, 너비 우선 탐색)
#### BFS란
- 같은 레벨의 노드 순으로 거쳐가는 방법
- 오른쪽, 왼쪽 방향은 중요하지 않다. 수평 방향인 것이 중요
- 큐를 사용

<br><br>

#### BFS 구현
1. 큐와 노드 값을 방문한 노드들 저장할 변수 생성
2. 큐에 루트 넣기
3. 큐가 빌 때까지 루프
   1. 큐에서 노드를 제거하고 그 노드는 변수에 저장
   2. 그 노드에 왼쪽 노드가 있다면, 왼쪽 노드를 큐에 저장
   3. 그 노드에 오른쪽 노드가 있다면, 오른쪽 노드를 큐에 저장
4. 변수 리턴

```javascript
class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor {
        this.root = null;
    }
    BFS() {
        let node = this.root,
            queue = [], 
            visited = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;    
    }
}
```

> 이진 트리이기 때문에 left, right으로 한 것임. 
> 삼진이면 3개의 자식이다. 모든 자식에 대해 루프를 돌면 됨.

<br><br>

### DFS(Depth Firsh Search, 깊이 우선 탐색)
#### DFS - PreOrder (전위 순회)
- 루트 - (노드 - 왼쪽 - 오른쪽)재귀
- 루트를 앞에 위치
- 재귀적

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Preorder-traversal.gif" width="600" height="330">

<br>

#### 전위 순회 구현
1. 방문한 노드 저장할 visited 변수 생성
2. BST의 루트를 저장할 current 변수 생성 (여기선 직접 인자에 전달)
3. helper function, 인자로 노드 받음
   1. visited에 노드 값 넣는다
   2. 그 노드에 왼쪽 노드가 있다면, helper에 왼쪽 노드 전달
   3. 그 노드에 오른쪽 노드가 있다면, helper에 오른쪽 노드 전달
4. helper에 current 전달 후 호출
5. visited 반환

```javascript
class BinarySearchTree {
    constructor {
        this.root = null;
    }
    DFSPreOrder() {
        let visited = []; 
        function traverse(node) {
            visited.push(node.value);
            if (node.left) traverse(node.left); // node.left && traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}
```

<br><br>

#### DFS - PostOrder (후위 순회)
- (왼쪽 - 오른쪽 - 노드)재귀 - 루트
- 루트를 마지막에 위치
- 재귀적

<img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Postorder-traversal.gif" width="600" height="330">

<br>

#### 후위 순회 구현
1. 방문한 노드 저장할 visited 변수 생성
2. BST의 루트를 저장할 current 변수 생성 (여기선 직접 인자에 전달)
3. helper function, 인자로 노드 받음
   1. 그 노드에 왼쪽 노드가 있다면, helper에 왼쪽 노드 전달
   2. 그 노드에 오른쪽 노드가 있다면, helper에 오른쪽 노드 전달
   3. 노드값을 visited에 담기
4. helper에 current 전달 후 호출
5. visited 반환 

```javascript
class BinarySearchTree {
    constructor {
        this.root = null;
    }
    DFSPostOrder() {
        let visited = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(this.root);
        return visited;
    }
}
```

<br><br>

#### DFS - InOrder (중위 순회)
- (왼쪽 - 노드 - 오른쪽)재귀 - 루트
- 루트가 중간에 위치
- 재귀적

<img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Inorder-traversal.gif" width="600" height="330">

<br>

#### 중위 순회 구현
1. 방문한 노드 저장할 visited 변수 생성
2. BST의 루트를 저장할 current 변수 생성 (여기선 직접 인자에 전달)
3. helper function, 인자로 노드 받음
   1. 그 노드에 왼쪽 노드가 있다면, helper에 왼쪽 노드 전달
   2. 노드값을 visited에 담기
   3. 그 노드에 오른쪽 노드가 있다면, helper에 오른쪽 노드 전달
4. helper에 current 전달 후 호출
5. visited 반환 

```javascript
class BinarySearchTree {
    constructor {
        this.root = null;
    }
    DFSInOrder() {
        let visited = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}
```

<br><br>

#### DFS 비교
**전위 순회(PreOrder)**
- 맨 앞에 루트가 있기 때문에 트리를 복원할 때 좋다.

**중위 순회(InOrder)**
- BST를 오름차순으로 저장하고 싶을 때 좋다.

> 하지만 결국 서로 바꾸기 아주 쉬운 것들이다.

<br><br>

### BFS vs DFS
**시간복잡도**
- 동일하다.
 
<br>

**공간복잡도**
- 트리 구조에 따라 공간복잡도 차이 있다.
- 트리의 폭이 넓다면
  - BFS는 큐를 사용하고, 폭에 비례해서 저장공간이 필요하다
  - 따라서 DFS가 유리
- 트리의 깊이가 깊다면
  - DFS는 재귀를 사용하고, 깊이에 비례해서 호출스택에 쌓임
  - 따라서 BFS가 유리

<br><br>

## Reference <!-- omit in toc -->
[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

[File:Preorder-traversal.gif](https://commons.wikimedia.org/wiki/File:Preorder-traversal.gif)

[File:Postorder-traversal.gif](https://commons.wikimedia.org/wiki/File:Postorder-traversal.gif)

[File:Inorder-traversal.gif](https://commons.wikimedia.org/wiki/File:Inorder-traversal.gif)