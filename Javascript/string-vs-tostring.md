# **1. String() vs toString()**
- [**1. String() vs toString()**](#1-string-vs-tostring)
  - [**1.1. 특징**](#11-특징)

<br><br>

## **1.1. 특징**
- 문자열로 바꿔줌
- 거의 유사하지만 약간의 차이가 있다.
- `null` 이나 `undefined` 의 경우 `toString()` 을 사용할 수 없다.
  
```javascript
var value = null;
String(null);     // "null"
value.toString(); // TypeError
```
- String()은 아래와 비슷하다고 생각하면 된다.

```javascript
value + '';
```

<br><br>

## **1.2. Reference** <!-- omit in toc -->

**[What's the difference between String(value) vs value.toString()](https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring)**