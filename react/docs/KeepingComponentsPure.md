# Keeping Components Pure

> 학습목표  
> <details>
> <summary>1. 순수란 무엇인가?</summary>
> <div>
> 1. 자신의 일만 한다. 즉, 호출 전에 있던 외부 객체나 변수를 변경하지 않는다.<br>
> 2. Same inputs, same output.
> </div>
> </details>
> <details>
> <summary>2. 렌더링 단계에서 컴포넌트를 순수하게 하는 방법</summary>
> <div>
> 렌더링 중에 읽을 수 있는 3가지 입력이 있다(항상 읽기 전용으로 취급해야 함)<br>
> 1. props<br>
> 2. state<br>
> 3. context<br>
> 값을 바꾸고 싶다면 set state를 통해 바꿔야 함<br>
> </div>
> </details>
> <details>
> <summary>3. Strict Mode가 무엇인지? Strict Mode가 순수한 코드를 작성하도록 돕는 방법</summary>
> <div>
> 애플리케이션 내에서 잠재적인 문제를 식별하고 경고를 발생시키기 위한 도구입니다.<br>
> <br>
> Strict Mode가 순수한 코드를 작성하도록 돕는 방법으로 2가지가 있습니다<br>
> 1. 감시 대상을 두 배로 늘린다<br>
> 2. 경고를 출력한다
> </div>
> </details>

<br><br>

- [Keeping Components Pure](#keeping-components-pure)
  - [1. 순수 함수란](#1-순수-함수란)
  - [2. 리액트에서의 순수 함수](#2-리액트에서의-순수-함수)
  - [3. Side Effects: 순수 컴포넌트](#3-side-effects-순수-컴포넌트)
  - [4. StrictMode로 비순수 감지](#4-strictmode로-비순수-감지)
    - [4.1. StrictMode가 순수한 코드를 작성하도록 돕는 방법](#41-strictmode가-순수한-코드를-작성하도록-돕는-방법)
      - [4.1.1. 감시 대상을 두 배로 늘린다.](#411-감시-대상을-두-배로-늘린다)
      - [4.1.2. 경고를 출력한다.](#412-경고를-출력한다)
  - [5. Local mutation: 지역 변수 바꾸기](#5-local-mutation-지역-변수-바꾸기)
  - [6. 리액트에서 순수를 중요하게 생각하는 이유?(순수성이 중요한 이유)](#6-리액트에서-순수를-중요하게-생각하는-이유순수성이-중요한-이유)

<br><br>

## 1. 순수 함수란
- 순수 함수는 다음과 같은 특징을 지닌 함수이다.
1. 자신의 일만 한다. 즉, 호출 전에 있던 외부 객체나 변수를 변경하지 않는다.
2. Same inputs, same output.

<br><br>

## 2. 리액트에서의 순수 함수
- 리액트는 모든 컴포넌트가 순수 함수라고 가정한다. 
  - 즉, 같은 인풋이면 같은 JSX를 반환

<br><br>

## 3. Side Effects: 순수 컴포넌트
- 리액트의 렌더링 프로세스는 순수해야 한다
  1. 컴포넌트는 JSX만 반환해야 한다.
  2. 렌더링 전에 존재했던 객체나 변수를 변경하면 안 된다

<br><br>

```javascript
// 잘못된 예: 렌더링 전에 존재했던 객체나 변수를 변경
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

<br>

```javascript
// 올바른 예시: props로 전달!
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

<br><br>

## 4. StrictMode로 비순수 감지
- 렌더링 중에 읽을 수 있는 3가지 입력이 있다(항상 읽기 전용으로 취급해야 함)
  1. props
  2. state
  3. context

- 값을 바꾸고 싶다면 set state를 통해 바꿔야 함
- StrictMode는 production에는 영향을 미치지 않기 때문에 앱 속도를 저하시키지 않는다. (`create-react-app` 시 자동 설정)

<br><br>

### 4.1. StrictMode가 순수한 코드를 작성하도록 돕는 방법
- StrictMode가 순수한 코드 작성을 돕기 위해 사용하는 방법은 두 가지가 있다.

<br>

#### 4.1.1. 감시 대상을 두 배로 늘린다.
- StrictMode는 애플리케이션을 렌더링할 때, 내부적으로 컴포넌트를 두 번 렌더링합니다. 첫 번째 렌더링은 컴포넌트 트리를 만들고, 두 번째 렌더링은 컴포넌트 트리를 업데이트합니다. 이를 통해, StrictMode는 컴포넌트의 부작용(예: 네트워크 요청, DOM 조작 등)을 감지할 수 있습니다.

<br>

#### 4.1.2. 경고를 출력한다.
- StrictMode는 애플리케이션에서 발생한 부작용을 감지하면 경고를 출력합니다. 예를 들어, StrictMode는 안전하지 않은 생명주기 메서드 사용, 내장된 DOM 컴포넌트에서 예상치 못한 부작용 발생, 예상치 못한 부작용을 발생시키는 렌더링 메서드 사용 등을 감지할 수 있습니다. 이를 통해, StrictMode는 개발자가 부작용이 있는 코드를 식별하고 수정할 수 있도록 돕습니다.

<br><br>

## 5. Local mutation: 지역 변수 바꾸기
- 컴포넌트의 외부 변수는 바꾸면 안 되지만, 내부 변수는 조작 가능하다 

<br><br>

## 6. 리액트에서 순수를 중요하게 생각하는 이유?(순수성이 중요한 이유)
1. 컴포넌트를 다른 환경에서 사용 가능
   - 같은 입력값이면, 같은 결과를 반환하기 때문
2. 입력이 변경되지 않는 컴포넌트는 렌더링을 건너뛸 수 있다.
   - 같은 입력값이면, 같은 결과를 반환하기 때문
3. 깊은 컴포넌트 트리를 렌더링하는 도중에 데이터가 바뀌면 끝까지 완료하지 않고 렌더링을 다시 시작할 수 있다. 
   - 순수성은 언제든 계산을 중단해도 안전하기 때문

<br><br>

## Reference<!-- omit in toc -->
[Keeping Components Pure](https://beta.reactjs.org/learn/keeping-components-pure#detecting-impure-calculations-with-strict-mode)