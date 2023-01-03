# 재귀 함수(Recursion)
- 자기 자신을 호출하는 함수
 
<br><br>

## 사용 목적 및 사례
- JSON.parse/JSON.stringify 
- document.getElementById/DOM traversal algorithm
- Object traversal
- 복잡한 자료구조(데이터 구조/트리/그래프) 내 요소 검색
- 반복문 대신

<br><br>

## 스택 호출하기
- 호출 스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조(static data structure)이다.
- 재귀 함수의 두 가지 필수 요소 
  1. 종료 조건 (Base Case)
  2. 다른 입력값 (Different Input)
- 너무 많이 쌓이면 오류 발생할 수 있음.

<br><br>

## 첫번째 재귀 함수
- 단순 출력 목적

```javascript
function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

<br><br>

## 두번째 재귀 함수
- 반환값을 이용한 재귀 함수.
- 호출 스택에 함수가 호출되며 종료 조건을 만날 때까지 쌓이고 하나씩 pop됨.
```javascript
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
```

<br><br>

## 팩토리얼
### 반복문으로 팩토리얼 구현
```javascript
function factorial(num) {
    let total = 1; 
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}
```

<br><br>

### 재귀 호출로 팩토리얼 구현
```javascript
// 종료조건을 2로한 것은 중복을 제거했기 때문.
function factorial(num) {
    if (num === 2) return 2;
    return num * factorial(num - 1);
}
```

<br><br>

## 재귀 함수 사용 시 주의할 점
- 종료 조건의 부재
- 반환값의 부재 혹은 잘못된 반환값
- 스택 오버 플로우 (Uncaught RangeError: Maximum call stack size exceeded)

<br><br>

## Helper 메소드 재귀
- 재귀와 함께 사용되는 설계 패턴 (Design Pattern)
- 일종의 결과를 컴파일할 때 흔히 사용되는 패턴, 결과는 배열이나 배열과 비슷한 데이터 구조
- 지금까지의 재귀 함수는 팩토리얼처럼 단일 단독 함수 (Single Standalone Function) 이다.

```javascript
// 재귀 함수 밖에 덩그러니 변수를 선언하는 것을 피하고자 하나의 덩어리로 묶는 껍데기이다.
function outer(input) {
    let outerScopedVariable = [];
    // 재귀함수 내에 배열을 선언한다면 호출될 때 마다 초기화 되는 문제 발생
    // 실질적인 기능을 하는 함수이다.
    function helper(helerInput) {
        // modify the outerScopedVariable
        helper(herperInput--)
    }
    helper(input)

    return outerScopedVariable;
}

// 홀수 수집 함수
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)
    return result;
}
```

<br><br>

## Reference <!-- omit in toc -->
[JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)
