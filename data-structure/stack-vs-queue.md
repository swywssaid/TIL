# 1. Stack vs Queue <!-- omit in toc -->
- [1. Stack \& Queue](#1-stack--queue)
- [2. Stack (스택)](#2-stack-스택)
  - [2.1. 스택이란](#21-스택이란)
  - [2.2. 스택 구현하기](#22-스택-구현하기)
    - [2.2.1. 스택 구현하기1: 내장 메소드 이용](#221-스택-구현하기1-내장-메소드-이용)
    - [2.2.2. 스택 구현하기2: 단일 연결 리스트를 이용한 구현](#222-스택-구현하기2-단일-연결-리스트를-이용한-구현)
  - [2.3. Stack Big O](#23-stack-big-o)
- [3. Queue (큐)](#3-queue-큐)
  - [3.1. 큐란](#31-큐란)
  - [3.2. 큐 구현하기](#32-큐-구현하기)
    - [3.2.1. 큐 구현하기1: 내장 메소드 사용](#321-큐-구현하기1-내장-메소드-사용)
    - [3.2.2. 큐 구현하기2: 단일 연결 리스트를 이용한 구현](#322-큐-구현하기2-단일-연결-리스트를-이용한-구현)
  - [3.3. Queue Big O](#33-queue-big-o)

<br /><br />

## 1. Stack & Queue
- Abstract Date Type (ADT: 추상적 자료구조)의 구조를 지님.
- 실제로 프로그래밍 언어들에 존재하는 것은 아님.
- 구체적인 코드로 정의된 것이 아닌 **행동 양식**만 정의 된 것.
- **행동 양식**에 따라 코드를 짜면 해당 자료구조를 만들 수 있음.

<br /><br />

## 2. Stack (스택)
### 2.1. 스택이란
- top 이라고 하는 곳에서만 요소를 삽입 및 삭제할 수 있는 선형 데이터 구조.
- 스택에서 항상 top 이라는 포인터를 사용하여 목록에 있는 마지막 요소를 추적.
- LIFO (Last In First Out) 원리
- 스택에서 사용하는 연산은 아래와 같다.
    - push: 요소를 스택 끝에 삽입.
    - pop: 스택 끝 요소를 추출.
<img src="..\image\data-structure\stack-vs-queue/stack.png" width="300" height="330"><img src="..\image\data-structure\stack-vs-queue/stack2.png" width="200" height="200">

<br><br>

**언제 사용하나?**
- 함수 호출 관리
  - 콜스택 역시 스택 구조이다.
- Undo / Redo
- Routing (the history object)

<br><br>

### 2.2. 스택 구현하기
#### 2.2.1. 스택 구현하기1: 내장 메소드 이용
- 스택을 지원하는 프로그래밍 언어도 있지만 javascript는 없음.
- 배열의 특성상 push,pop이 효율적

```javascript

let stack = [];
stack.push("a");
stack.pop();

stack.unshift("a");
stack.shift();

```

<br><br>

#### 2.2.2. 스택 구현하기2: 단일 연결 리스트를 이용한 구현
- 단일 연결 리스트의 shift, unshift를 이용
  - 상수 시간을 갖기 위해서
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

}
```

<br><br>

### 2.3. Stack Big O
- 삽입, 제거에 용이

**삽입**
- O(1)

<br>

**제거**
- O(1) 

<br>

**탐색**
- O(n)

<br>

**접근**
- O(n)

<br><br>

## 3. Queue (큐)
### 3.1. 큐란
- 리스트의 rear(후면)에서만 삽입 가능하고, front(전면)에서만 추출이 가능한 자료구조.
- 큐에서는 항상 front와 rear 포인터를 사용하여 목록의 처음과 끝을 추적.
- FIFO (First In First Out) 원리
- 큐에서 사용하는 연산은 아래와 같다.
    - enqueue: 요소를 큐에 삽입.
    - dequeue: 요소를 큐에서 추출.
  
<img src="..\image\data-structure\stack-vs-queue/queue.png" width="600" height="330">

<br />

**언제 사용하나?**
- 백그라운드 작업
- 소스 업로딩
- 프린팅/태스크 프로세싱

<br /><br />

### 3.2. 큐 구현하기
#### 3.2.1. 큐 구현하기1: 내장 메소드 사용
- 성능이 좋진 않음.shift, unshift가  O(n)이기 때문

```javascript
let q = [];
// push & shift
q.push("first");
q.push("second");
q.push("third");
q.shift();
q.shift();
q.shift();


// unshift & pop
q.unshift("first");
q.unshift("second");
q.unshift("third");
q.pop();
q.pop();
q.pop();

```

<br /><br />

#### 3.2.2. 큐 구현하기2: 단일 연결 리스트를 이용한 구현
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enQueue(value) {
    let newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  deQueue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

}
```

<br /><br />

### 3.3. Queue Big O
- 삽입, 제거에 용이

**삽입**
- O(1)

<br>

**제거**
- O(1) 

<br>

**탐색**
- O(n)

<br>

**접근**
- O(n)

<br><br>

> 스택과 큐는 좀 더 복잡한 자료구조와 알고리즘의 기초가 되기 때문에 중요하다

<br><br>

## Reference<!-- omit in toc -->

[Difference between Stack and Queue Data Structures](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/?ref=gcse)

[자료구조와 자료형](https://ko.javascript.info/array#ref-1700)

[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=Nk_dGScimz8&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=7)

