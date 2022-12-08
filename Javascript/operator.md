# 1. Operator

- [1. Operator](#1-operator)
  - [1.1. || vs \&\&](#11--vs-)
    - [1.1.1. ||](#111-)
    - [1.1.2. javascript의 falsy한 값](#112-javascript의-falsy한-값)

<br><br>


## 1.1. || vs &&

### 1.1.1. ||

• || 는 첫 번째 truthy 값을 반환

```javascript
let value = 0
let result = value ?? "정의되지 않은 변수"
console.log(result);

result = value || "falsy한 변수"
console.log(result);
```

<br><br>

### 1.1.2. javascript의 falsy한 값

```javascript
false
null
undefined
0
-0
0n
NaN
""
```

<br><br>

## Reference <!-- omit in toc -->

****[|| , && 연산자 사용법 [javascript] :: 마이구미](https://mygumi.tistory.com/33)****

**[[Javascript] null 병합 연산자 '??' 와 OR 연산자 '||' 의 차이 (자바스크립트, nullish coalescing, falsy값)](https://bbaktaeho-95.tistory.com/48)**

**[자바스크립트에서 || 은 참과 거짓을 판단하는 연산자가 아닙니다](https://mynameisdabin.tistory.com/10)**

[**Falsy**](https://developer.mozilla.org/ko/docs/Glossary/Falsy)

