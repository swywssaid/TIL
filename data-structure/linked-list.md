# Linked List

## Linked List (연결 리스트)

### Linked List(연결 리스트)란
- 각 값이 노드를 이루고 있으며 각 노드는 다음 노드를 가리키고 있는 자료구조.
  - 각 노드는 자신의 값과 다음 노드를 가리키는 포인터를 갖고 있음.
  - 인덱스가 존재하지 않는다.

<img src="../image/data-structure/linked-list/linked-list.png" width="600" height="330" />

<br>

>리스트(list)란?  
선형적으로(순서가 존재한다는 뜻) 값들을 가지고 있는 자료구조.  
흔히 [①배열(array)](https://github.com/swywssaid/TIL/blob/main/data-structure/array.md)과 ②연결 리스트(linked list)로 나뉨.

### Array VS Linked List
**Linked List**
- 인덱스가 없다.
- 포인터를 통해 노드들이 연결
- 임의의 접근 안됨. (인덱스가 없기 때문에 포인터를 따라 찾아야 함)

<br><br>

**Array**
- 인덱스가 있다
- 삽입, 삭제가 비효율적일 수 있다.
- 특정 인덱스에 빠르게 접근 가능함.
<img src="../image/data-structure/linked-list/linked-list2.png" width="600" height="330" />

> 임의의 접근이 필요 없는 아주 긴 데이터 세트나 많은 정보를 저장할 때 연결 리스트를 쓰는 것이 유리하다.

<br><br>

## Singly Linked List (단일 연결 리스트)
### Singly Linked List (연결 리스트) 구현
- 기본적인 연결 리스트를 구현해보자.
  - 여기서 기본적이라 함은 별도의 용도로 만든 포인터가 없는 경우를 말한다.
  
```javascript
// node class 
class Node {
    // constructor
    constructor(value)
    {
        this.value = value;
        this.next = null
    }
}

// linkedlist class
class LinkedList {
    // constructor
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
```
<br><br>

#### push
- 리스트의 마지막에 요소를 추가.
- 아래 두가지 상황을 고려해야함
  1. 리스트가 비어있는 경우
       - 추가하는 노드가 head가 됨
  2. 리스트가 비어있지 않은 경우
       - 끝으로 이동 후 마지막 노드의 next가 추가하는 노드 됨. 
- head 포인터만 갖고 추가할 경우 O(N)의 시간 걸림.
  - 만약 마지막 값을 가리키고 있는 tail 포인터 사용 시 O(1).(끝을 계속 추적)

**1. head 포인터만 존재**
```javascript 
push(value)
{
  // 노드 생성
  let newNode = new Node(value);

  // 현재 노드 생성, 여기서 현재 노드란 끝으로 이동하기 위한 임시 노드.
  let current;

  if (this.length === 0){
    this.head = newNode;
  } else {
    // 제일 앞 부분 노드가 현재 노드가 됨.
    current = this.head;

    // 제일 앞 노드 부터 끝으로 이동, 끝 노드의 next는 null
    while(current.next){
      current = current.next;
    }

    // 마지막 노드의 next가 추가할 노드 가리킴.
    current.next = newNode;
  
  }

  // 연결리스트 사이즈 키움
    this.length++;
}

``` 

<br><br>

**2. head, tail 포인터 존재**
1. 추가할 값을 입력값으로 받는다.
2. 새로운 노드를 만든다.
3. 헤드 포인터가 비어있다면(리스트가 비어있음), 헤드와 꼬리 포인터를 새 노드를 가리킨다.
4. 헤드 포인터가 있다면, 마지막 노드의 'next'를 새 노드를 가리키고, 꼬리 포인터도 새 노드를 가리킨다.
5. 길이를 증가 시킨다.

```javascript 
push(value)
{
  // 노드 생성
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
}

``` 

<br><br>

#### pop
- push처럼 tail 포인터를 통해 마지막 요소를 제거하면 될 것 같지만, 제거를 위해선 이전 요소를 알아야 하기 때문에 약간의 차이가 있다. 

1. 리스트에 노드가 없다면, return undefined
2. tail 포인터까지 루프
3. tail의 이전 노드를 추적
4. tail 포인터를 tail 이전 노드를 가리킨다.
5. 리스트의 길이를 1 감소 시킨다.
6. 제거된 노드를 반환한다. 


```javascript
pop()
{
  if (!this.head) return undefined;

  let current = this.head;
  let newTail = newTail;
  while (current.next) {
    newTail = current;
    current = current.next;
  }
  newTail.next = null;
  this.tail = newTail;
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}

```

<br><br>

#### shift
1. 노드 없다면, return undefined
2. 현재 헤드 포인터를 변수에 저장한다.
3. 헤드 포인터를 헤드의 다음 노드로 옮긴다.
4. 헤드의 'next'를 null로 바꾼다.
5. 길이를 1 감소한다.
6. 제거된 노드를 리턴한다. 

```javascript
shift()
{
  if (!this.head) return undefined;

  // 현재 헤드를 저장한다.
  let currentHead = this.head;

  // 헤드를 다음 노드를 가리키게 한다.
  this.head = currentHead.next;

  // 이전 헤드의 연결을 끊는다. 이 과정은 필요 없는 과정이다.
  // currentHead.next = null;

  // 길이를 줄인다.
  // 기존에 노드가 1개였다면 자연스레 this.head = null이됨.
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
  return currentHead;
}

```

> 자바스크립트의 가비지 컬렉션은 참조 당하고 있지 않은 것을 더 이상 필요하지 않은 것, 즉 제거 대상으로 판단한다. currentHead의 경우 굳이 next를 null로 하지 않아도 currentHead를 참조하고 있는 것이 없기 때문에 제거된다.

<br><br>

#### unshift

```javascript
unshift()
{
  let newNode = new Node();

  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  // 길이를 늘린다.
  // 기존에 노드가 1개였다면 자연스레 this.head = null이됨.
  this.length++;
  
  return this;
}

```

<br><br>

#### get
- 특정 인덱스의 노드를 가져오는 메소드
1. 가져올 인덱스를 입력값으로 받는다.
2. 인덱스만큼 루프를 돈다.
3. 루프마다 'next' 노드를 가져온다.

```javascript
get(index)
{
  if (index < 0 || index >= this.length) return null;
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next
  }
  return current;
}

```

<br><br>

#### set
- 원하는 인덱스에 원하는 값을 업데이트
1. 값과 인덱스를 입력값으로 받는다.
2. get 메소드를 이용하여 노드를 찾는다.
3. 노드가 없다면, return false
4. 노드가 있다면, 값을 업데이트하고 true를 반환한다.

```javascript
set(value, index)
{
  let foundNode = this.get(index);
  if(foundNode) {
    foundNode.value = value;
    return true;
  }
  return false;
}
```

<br><br>

#### insert(value, index)

**1. 이전 메소드를 활용하지 않는 방법**
- 특정 인덱스에 노드 삽입 기능.
- 아래 세가지 상황을 고려해야함.
  1. 제일 앞에 삽입할 경우, index가 0일 때
     - 삽입할 노드가 head가 됨
  2. 제일 끝에 삽입할 경우 (3번에 포함됨)
     - push 메소드 활용
  3. 1,2를 제외한 중간에 삽입할 경우
     - 삽입할 노드의 next를 curr를 가리킨다.
     - prev.next는 삽입할 노드를 가리킨다.

```javascript
insert(value, index) {
  if (index < 0 || index > this.length) return false;
  // 노드 생성
  let node = new Node(value);

  let curr = this.head;
  let prev;

  // 제일 앞에 삽입할 경우
  if (index === 0) {
    node.next = this.head;
    this.head = node;
  } /*else if (index === this.length) {      해당 조건은 아래 코드에 포함돼 생략하고 해결 가능.
    return this.add(value);
  }*/else {
    for (let i = 0; i < index; i++) {     
      prev = curr;
      curr = curr.next;  // 만약 리스트 마지막에 삽입 시 curr.next === null
    }

    node.next = curr;
    prev.next = node;
  }

  this.length++;
}
```

<br><br>

**2. 이전 메소드를 이용하는 방법**
1. 인덱스 유효하지 않으면, return false
2. index와 length 같다면 push 메소드 활용 (불리언을 반환하기 위해 이중부정 사용)
3. index가 0이라면 unshift 메소드 활용 (불리언을 반환하기 위해 이중부정 사용)
4. get 메소드를 통해 index 이전 노드 가져옴 (이전 노드를 알면 다음노드도 알 수 있기 때문)
5. true를 반환
```javascript
insert(value, index) {
  if (index < 0 || index > this.length) return false;
  if (index === this.length) return !!this.push(value);
  if (index === 0) return !!this.unshift(value);
  
  // 노드 생성
  let newNode = new Node(value);

  // get 메소드를 통해 index 전 노드를 가져온다.
  let prev = this.get(index - 1);
  let temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;

  this.length++;
  return true;
}
```

<br><br>

#### remove
1. 유효하지 않은 인덱스, return undefined
2. 인덱스가 length - 1이라면, pop 메소드 활용
3. 인덱스가 0이라면, shift 메소드 활용
4. get 메소드를 통해 index - 1 노드 가져옴
5. 노드 제거
6. 길이 감소
7. 제거된 노드 반환

```javascript
remove(index) {
  if (index < 0 || index >= this.length) return undefined;
  if (index === index - 1) return this.pop();
  if (index === 0) return this.shift();

  let previousNode = this.get(index - 1);
  let removed = previousNode.next
  previousNode.next = removed.next;
  this.length--;
  return removed;
}
```
<br><br>

#### reverse
- 포인터를 역방향으로 변환하는 메소드
1. 헤드랑 테일 포인터를 스왑한다.
2. current, prev 변수 생성
3. 

```javascript
reverse() {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;
  for(let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}

print() {
  let arr = []; 
  let current = this.head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  console.log(arr);
}

```
<br><br>

#### Singly Linked List Big O
**삽입**
- O(1)

<br>

**제거**
- 맨 앞 제거: O(1) 
- 마지막 요소: O(n)

<br>

**탐색**
- O(n)

<br>

**접근**
- O(n)

<br><br>
## Reference <!-- omit in toc -->

[리스트(List), 배열(Array), 연결 리스트(Linked List)](https://blog.naver.com/PostView.naver?blogId=kks227&logNo=220781402507&parentCategoryNo=&categoryNo=299&viewDate=&isShowPopularPosts=false&from=postList)

[Linked List](https://opentutorials.org/module/1335/8821)

[Implementation of LinkedList in Javascript](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/)

[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

[자바스크립트의 메모리 관리](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)