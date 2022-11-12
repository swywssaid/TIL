# 구조 분해 할당

<br>

## 구조 분해 할당이란
- 배열이나 객체의 요소를 변수로 '분해'하는 방법
  - 여기서 '분해'는 기존의 자료구조를 훼손하지 않는다.

```javascript
let arr = ["Bora", "Lee"]
let [firstName, surname] = arr;

let [firstName, surname] = "Bora Lee".split(' ');
```
<br><br>

## Reference
[구조 분해 할당](https://ko.javascript.info/destructuring-assignment)