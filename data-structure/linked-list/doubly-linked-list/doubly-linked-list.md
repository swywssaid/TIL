# Doubly linked list <!--omit in toc -->

- [Doubly linked list ](#doubly-linked-list-)
  - [1. Doubly Linked List란](#1-doubly-linked-list란)
  - [Doubly Linked list 구현](#doubly-linked-list-구현)
  - [Doubly Linked list Big O](#doubly-linked-list-big-o)
    - [Reference ](#reference-)

</br>

## 1. Doubly Linked List란

![doubly-linked-list](https://github.com/swywssaid/TIL/blob/main/image/data-structure/linked-list/doubly-linked-list.png?raw=true)

- 단일 연결 리스트와 다르게 prev 포인터가 있음
- 단일 연결 리스트에 비해 노드를 찾기 쉽다.
- 브라우저 히스토리 같은 걸 이중 연결 리스트로 많이 사용한다.

</br>

## Doubly Linked list 구현

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
}

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
```

</br>

## Doubly Linked list Big O

단일 연결 리스트와는 다르게 양방향 접근이 가능하기 때문에 앞/뒤 제거 모두 상수 시간을 갖게 된다.

- Insertion: O(1)
- Removal: O(1)
- Searching: O(N)
- Access: O(N)

</br>

### Reference <!--omit in toc -->

[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)
