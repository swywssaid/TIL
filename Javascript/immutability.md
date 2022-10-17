# **Immutability**

- [**Immutability**](#immutability)
  - [1. **Immutable Value vs. Mutable Value**](#1-immutable-value-vs-mutable-value)
    - [1.1. **Immutable value**](#11-immutable-value)
    - [1.2. **Mutable Value**](#12-mutable-value)
  - [2. **불변 데이터 패턴(immutable data pattern)**](#2-불변-데이터-패턴immutable-data-pattern)
    - [2.1. **Object.assign**](#21-objectassign)
      - [2.1.1. **Object.assign란**](#211-objectassign란)
      - [2.1.2. **Object.assign의 Nested Object**](#212-objectassign의-nested-object)
    - [2.2. **Object.freeze**](#22-objectfreeze)
      - [2.2.1. **Object.freeze란**](#221-objectfreeze란)
      - [2.2.2. **Object.freeze의 Nested Object**](#222-objectfreeze의-nested-object)
      - [2.2.3. **Const vs Object.freeze**](#223-const-vs-objectfreeze)

<br /><br />

- 즉 데이터의 원본이 회손되는 것을 막는 것
- 가변이 안좋은 것은 아니다
  - 가변은 디지털의 특권이다
  - 변하지 않아도 될 것을 얼려 구분한다.

<br /><br />

## 1. **Immutable Value vs. Mutable Value**
### 1.1. **Immutable value**
- 자바스크립트의 원시 타입(primitive data type)
  1. Number
  2. String
  3. Bigint
  4. Boolean
  5. null
  6. undefined
  7. Symbol
- 변경이 불가능하다는 뜻은 메모리 영역에서의 변경이 불가능하다는 뜻. 재할당은 가능.

<br /><br />

### 1.2. **Mutable Value**
- 객체(Object) 타입
- 원시 타입 이외의 모든 값
  1. Object
  2. Array
  3. Function
  4. ...

<br /><br />

## 2. **불변 데이터 패턴(immutable data pattern)**
- 객체의 방어적 복사(defensive copy)
  - Object.assign
- 불변객체화를 통한 객체 변경 방지
  - Object.freeze

<br /><br />

### 2.1. **Object.assign**
#### 2.1.1. **Object.assign란**
``` javascript
Object.assign(target, ...sources)
```
- 타겟 객체로 소스 객체의 프로퍼티를 복사.
- 타겟 객체와 소스 객체의 프로퍼티가 동일하다면 소스 객체의 것으로 덮어쓰기.
- 리턴값으로 타겟 객체.
- 객체 내부의 객체(Nested Object)는 Shallow copy(참조)된다.

```javascript
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```

<br /><br />

#### 2.1.2. **Object.assign의 Nested Object**
- Nested Object(중첩된 객체 = 객체 내부의 객체)
- 배열도 물론 객체이긴 하나 배열을 복제할 때는 `concat, slice, Array.from()` 들을 사용하여 복제한다. 
- `Object.assign`을 사용할 경우 배열이 가진 특수한 기능들이 사라진다고 생각하면 된다. 
<img src="..\image\javascript\immutability\immutability.png" width="400" height="350">
<img src="..\image\javascript\immutability\immutability2.png" width="400" height="350">

<br /><br />

### 2.2. **Object.freeze**
#### 2.2.1. **Object.freeze란**

- 불변(immutable) 객체로 만들수 있다.
- 객체 내부의 객체(Nested Object)는 변경가능.
- 다시 녹일 순 없고 복제를 해야함.
```javascript
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true

user1.address.city = 'Busan'; // 변경된다!
console.log(user1); // { name: 'Lee', address: { city: 'Busan' } }
```
<br /><br />

#### 2.2.2. **Object.freeze의 Nested Object**
- freeze 역시 객체 내부의 객체는 변경 가능.
- 내부 객체까지 변경 불가능하게 만들려면
   1. 내부 객체를 freeze하는 방법
   2. Deep freeze
```javascript
// 2. Deep freeze: 재귀함수를 통해 구현
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

deepFreeze(user);

user.name = 'Kim';           // 무시된다
user.address.city = 'Busan'; // 무시된다

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }
```
<br /><br />

#### 2.2.3. **Const vs Object.freeze**
- const는 변수의 메모리 주소가 바뀌는 것을 방지
- Object.freeze는 메모리 속 값이 바뀌는 것을 방지
<img src="..\image\javascript\immutability\const-vs-freeze.png" width="400" height="350">

<br /><br />

## **Reference** <!-- omit in toc -->

[객체와 변경불가성(Immutability)](https://poiemaweb.com/js-immutability)

[JavaScript immutability](https://www.youtube.com/watch?v=ol239ZUGwHg&list=PLuHgQVnccGMBxNK38TqfBWk-QpEI7UkY8&index=11)
