# Referencing Values with Refs

> 학습목표  
> <details>
> <summary>1. ref 사용 방법</summary>
> <div>
> `useRef`를 통해서 사용, ref.current에 직접 업데이트 가능
> </div>
> </details>
> <details>
> <summary>2. ref와 state 차이점</summary>
> <div>
> ref는 값이 변해도 리렌더링되지 않는다  
> </div>
> </details>
> <details>
> <summary>3. 언제 ref를 사용하나</summary>
> <div>
> 일반적으로 React 외부 API와 통신할 때 사용
> </div>
> </details>

<br><br>

- [Referencing Values with Refs](#referencing-values-with-refs)
  - [1. ref 사용 방법](#1-ref-사용-방법)
  - [2. ref와 state 차이점](#2-ref와-state-차이점)
  - [3. useRef 내부 작동 원리](#3-useref-내부-작동-원리)
  - [4. 언제 ref를 사용하나](#4-언제-ref를-사용하나)
  - [5. ref 사용 원칙](#5-ref-사용-원칙)

<br><br>

## 1. ref 사용 방법
- `useRef`를 통해서 사용
- ref.current에 직접 업데이트 가능
- 리렌더링 없이 값을 기억하고 싶을 때 사용하는 것

```jsx
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
```

<br><br>

## 2. ref와 state 차이점
- ref는 값이 변해도 리렌더링되지 않는다 

| refs                                                          | state                                                                      |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `useRef(initialValue)`는 `{ current: initialValue }`를 반환   | `useState(initialValue)` 는 ( `[value, setValue]`)를 반환                  |
| 변해도 리렌더링 안 됨                                         | 변하면 리렌더링                                                            |
| 변하기 쉬움 - 렌디링 프로세스 밖에서 값 수정 및 업데이트 가능 | 불변 - set state를 통해 관리                                               |
| 렌더링 중에 값을 읽거나 쓰지 않아야 함                        | 언제든 읽을 수 있음. 그러나 각 렌더링은 변하지 않는 상태의 스냅샷을 가진다 |

<br><br>

## 3. useRef 내부 작동 원리
- `useState`를 통해서 구현할 수 있다
- 하지만 일반적으로 많이 사용하기 때문에 리액트에서는 내장 `useRef`를 제공한다

```jsx
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```

<br><br>

## 4. 언제 ref를 사용하나
- 일반적으로 React 외부 API와 통신할 때 사용
1. timeout IDs 저장
2. DOM 요소 저장 및 조작
3. JSX를 계산하는 데 필요하지 않은 객체 저장

<br><br>

## 5. ref 사용 원칙
1. ref를 탈출구로 사용하라. ref는 외부 시스템이나 브라우저 API 사용 시에 유용하다
2. 렌더링 중에는 `ref.current`를 읽거나 쓰지 마라. 리액트가 값을 추적하지 않기 때문에 예측이 어렵다(초기 세팅 시는 예외)


```javascript
ref.current = 5;
console.log(ref.current); // 5
```

> ref는 일반 자바스크립트 객체이다.  
> state는 매 렌더링의 스냅샷이고 동기적으로 업데이트하지 않는다.  

<br><br>

## Reference<!-- omit in toc -->
[Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs#how-does-use-ref-work-inside)