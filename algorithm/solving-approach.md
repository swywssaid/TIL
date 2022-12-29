# 문제 해결법 (problem solving approach)

## algorithm
- 특정 작업을 달성하기 위한 단계나 일련의 과정

<br><br>

## 1단계: 문제의 이해 (Understand the Problem) 
- 문제를 보자 마자 푸는 것은 뭔가 진행이 되는 것처럼 느낄 수 있지만 한 걸음 물러서서 문제를 확실히 이해하는 것은 정말 중요하다.

<br>

### 문제의 이해 과정
1. 문제를 나만의 방식으로 다시 생각해봐라.
2. 문제가 어떤 입력값을 받는가.
3. 문제의 출력값은 무엇인가.
4. 입력값이 출력값을 결정하나
   - 문제 해결을 위한 충분한 정보를 갖고 있나.
5. 중요한 정보를 어떻게 라벨링할 것인지.
   - 무엇이 중요한지 정의하는 것부터
```javascript
/* 두 숫자를 더하는 문제
1. 덧셈 구현
2. 단순히 두 숫자! 라기 보단.
- 정수?
- 실수? 
- 큰 숫자일땐? -> js의 경우 큰 숫자는 무한대로 표현됨.
1. 출력값 역시 2번과 같은 문제다 
- 정수?
- 실수? 
- 큰 숫자일땐? -> js의 경우 큰 숫자는 무한대로 표현됨.

1. 예를들면 숫자가 한개만 주어졌을 경우?
- 나머지 한 숫자는 0으로 가정하나?
- undefined or null을 반환하나?
- 면접 시에는 그런 문제는 무시하라고 할 수도 있지만 면접에서 두 숫자를 더해라 같은 문제는 안나올거다. 따라서 생각하는 것 자체로 의미있음.

5. 무엇이 중요한지
- 두 숫자를 더한 후 결과값을 반환한다. 
- 문제가 복잡해지면 단계별로 생각하는 것이 차이를 만든다.
*/
```
<br><br>

## 2단계: 구체적 예제들 (Explore Concrete Examples) 
- 예제를 떠올리는 것은 입력값과 출력값을 확인할 수 있다.
- 예시를 적용하면서 더 많은 정보를 습득할 수 있다.
- 단위 검사를 수행.
  - 단위 검사는 더 작은 기능에 대해 무언가가 어떻게 작동해야 하는지 틀을 잡는 데 사용.

<br>

### 예제의 예제 
- 간단한 예제 2~3개
- 좀 더 복잡한 예제
- 빈 입력값
- 유효하지 않은 입력값

<br><br>

## 3단계: 세부 분석 (Break It Down) 
- 문제를 세부 단계로 나눠 분석하는 것.
  - 단계의 틀을 잡고 항상 집중할 수 있도록 함.
  - 확신이 들지 않는 문제를 짚을 수 있다.
- 문제를 세분화 하여 단계를 작성하는 것은 달성 방법은 확신하지 못하더라도 어떤 작업을 해야하는 지는 알고 있다는 의미.
  - 적어도 면접관에게 작업에 대한 틀을 알고 있다는 것을 알릴 수 있다.

```javascript
function charCout(str) {
    // 무언가 처리한다.
    // 소문자 키를 지닌 
}

function charCout(str) {
    // 리턴할 객체 생성
    // 문자열 선회 루프
        // 숫자/문자 && 객체에 키가 있다면, 카운트
        // 숫자/문자 && 객체에 카가 없다면, 객체 추가하고 값은 1
        // 문자가 다른 거면, 아무것도 안한다.
    // 객체 반환
}
```
<br><br>

## 4단계: 해결 또는 단순화 (Solve/Simplify) 
- 해결이 바로 되지 않은 문제는 단순화한다.
  - 다른 모든 것에 집중하기 위해 시간이 많이 소요되는 부분을 무시.
  - 문제를 시작 조차 못하는 것보다 낫다.
```javascript
// 느낌표와 공백 등을 해결하지 못해 이상적이진 않아도 근접하였다.
// 90% 정도 진행한 채 작은 부분들을 해결할 수 있음.
function charCout(str) {
    // 리턴할 객체 생성
    let result = {};
    // 문자열 선회 루프
        for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
             
        // 숫자/문자 && 객체에 키가 있다면, 카운트
        if (result[char] > 0) result[char]++;
        // 숫자/문자 && 객체에 카가 없다면, 객체 추가하고 값은 1
        else result[char] = 1;
        }
        // 문자가 다른 거면, 아무것도 안한다.
    // 객체 반환
    return result;
}
```

<br><br>

## 5단계: 되돌아 보기와 리팩터 (Look Back and Refactor) 
- 다른 접근 방식이 있나
- 한눈에 이해할 수 있나, 직관적인가
- 결과나 방법을 다른 문제에 적용할 수 있나
- 코드를 향상시킬 수 있나
  - 성능의 향상: 주로 시·공간 복잡도 분석
  - 가독성 향상: 회사 스타일 가이드, 언어 규칙, 간격 등
- 다른 사람들은 어떻게 해결하는가

```javascript
function charCout(str) {
    // 리턴할 객체 생성
    let result = {};
    // 문자열 선회 루프
        for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            // 숫자/문자 && 객체에 키가 있다면, 카운트
            if (result[char] > 0) result[char]++;
            // 숫자/문자 && 객체에 카가 없다면, 객체 추가하고 값은 1
            else result[char] = 1;
        }
        }
    // 객체 반환
    return result;
}

// 1. 루프 조건 변화
function charCout(str) {
    // 리턴할 객체 생성
    let result = {};
    // 문자열 선회 루프
        for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            // 숫자/문자 && 객체에 키가 있다면, 카운트
            if (result[char] > 0) result[char]++;
            // 숫자/문자 && 객체에 카가 없다면, 객체 추가하고 값은 1
            else result[char] = 1;
        }
        }
    // 객체 반환
    return result;
}

// 2. if else 단순화
function charCout(str) {
    // 리턴할 객체 생성
    let result = {};
    // 문자열 선회 루프
        for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
        }
    // 객체 반환
    return result;
}

/* 3. 정규표현식
면접이라면: 
이 정규 표현식이 특정 패턴을 확인할 수 있는 빠르고 비교적 짧은 방법이라서 이 경우에 상용하였지만 실제로 얼마나 효율적인지는 잘 모르겠습니다.
자바스크립트에서는 정규 표현식이 수행 중인 작업과 사용 중인 브라우저에 따라 성능이 달라질 수 있다고 알고 있기 때문입니다.
따라서 다른 더 좋은 방법이 있을 수 있다고 생각합니다.

정도의 답변을 한다.

여기선 charCodeAt으로 리팩토링을 할 것임.
"hi".charCodeAt(0) -> 104
"i".charCodeAt(0) -> 105
*/
function charCout(str) {
    // 리턴할 객체 생성
    let result = {};
    // 문자열 선회 루프
        for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
        }
    // 객체 반환
    return result;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}
```
> 정규 표현식을 사용하면 55% 더 느리다. 하지만 이걸 떠올리라는 말은 아니다. 면접을 마치며 사족을 다는 정도면 됨.
<img src="..\image\algorithm\solving-approach/charCodeAt-regexp.png" width="200" height="200">  