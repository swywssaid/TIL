# Stack vs Queue
- [Stack vs Queue](#stack-vs-queue)
  - [**1. Stack & Queue**](#1-stack--queue)
  - [**2. Stack (스택)**](#2-stack-스택)
  - [**3. Queue (큐)**](#3-queue-큐)

<br /><br />

## **1. Stack & Queue**
- Abstract Date Type (ADT: 추상적 자료구조)의 구조를 지님.
- 실제로 프로그래밍 언어들에 존재하는 것은 아님.
- 구체적인 코드로 정의된 것이 아닌 **행동 양식**만 정의 된 것.
- **행동 양식**에 따라 코드를 짜면 해당 자료구조를 만들 수 있음.

<br /><br />

## **2. Stack (스택)**
- top 이라고 하는 곳에서만 요소를 삽입 및 삭제할 수 있는 선형 데이터 구조.
- 스택에서 항상 top 이라는 포인터를 사용하여 목록에 있는 마지막 요소를 추적.
- LIFO (Last In First Out) 원리
- 스택에서 사용하는 연산은 아래와 같다.
    - push: 요소를 스택 끝에 삽입.
    - pop: 스택 끝 요소를 추출.
  
<img src="..\image\algorithm\stack-vs-queue/stack.png" width="300" height="330"><img src="..\image\algorithm\stack-vs-queue/stack2.png" width="200" height="200">

<br /><br />

## **3. Queue (큐)**
- 리스트의 rear(후면)에서만 삽입 가능하고, front(전면)에서만 추출이 가능한 자료구조.
- 큐에서는 항상 front와 rear 포인터를 사용하여 목록의 처음과 끝을 추적.
- FIFO (First In First Out) 원리
- 큐에서 사용하는 연산은 아래와 같다.
    - enqueue: 요소를 큐에 삽입.
    - dequeue: 요소를 큐에서 추출.
  
<img src="..\image\algorithm\stack-vs-queue/queue.png" width="600" height="330">

<br /><br />

## **Reference**<!-- omit in toc -->

[Difference between Stack and Queue Data Structures](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/?ref=gcse)

[자료구조와 자료형](https://ko.javascript.info/array#ref-1700)

[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=Nk_dGScimz8&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=7)

