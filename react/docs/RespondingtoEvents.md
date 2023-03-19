# Responding to Events

> 학습목표  
> <details>
> <summary>1. 이벤트 핸들러 사용 방법</summary>
> <div>
> 이벤트 핸들러는 호출하는 것이 아닌 전달하는 것이다  
> `handle`이라는 이름으로 시작되며 뒤에 이벤트 이름이 붙는다.  
> </div>
> </details>
> <details>
> <summary>2. 자녀 컴포넌트로 이벤트 처리 로직을 보내는 방법</summary>
> <div>
> props로 전달
> </div>
> </details>
> <details>
> <summary>3. 이벤트 전파하고 멈추는 방법</summary>
> <div>
> 자녀 컴포넌트의 이벤트를 부모 컴포넌트에서 포착할 수 있다  
> `e.stopPropagation()`를 통해 부모 컴포넌트로 전파되는 것을 막을 수 있다
> </div>
> </details>

<br><br>

- [Responding to Events](#responding-to-events)
  - [1. 이벤트 핸들러 사용하기](#1-이벤트-핸들러-사용하기)
    - [1.1. 이벤트 핸들러는 호출하는 것이 아닌 전달하는 것이다](#11-이벤트-핸들러는-호출하는-것이-아닌-전달하는-것이다)
  - [2. 이벤트 핸들러 props 네이밍](#2-이벤트-핸들러-props-네이밍)
  - [3. 이벤트 전파](#3-이벤트-전파)
  - [4. 전파 중단하기](#4-전파-중단하기)
    - [4.1. 이벤트 전파 3단계](#41-이벤트-전파-3단계)
    - [4.2. 전파를 막으며 이벤트 핸들러 사용하기](#42-전파를-막으며-이벤트-핸들러-사용하기)
    - [4.3. default 기능 막기](#43-default-기능-막기)


<br><br>

## 1. 이벤트 핸들러 사용하기
- 이벤트 핸들러의 특징
1. 보통 컴포넌트 내부에서 정의된다
2. `handle`이라는 이름으로 시작되고 뒤에는 이벤트 이름이 붙는다. (e.g. `handleClick`, `handleMouseEnter`)

- 짧은 함수는 화살표 함수로 전달하기도 한다

> 이벤트 핸들러는 호출하는 것이 아닌 전달하는 것이다!!

### 1.1. 이벤트 핸들러는 호출하는 것이 아닌 전달하는 것이다

| passing a function (correct)     | calling a function (incorrect)     |
| -------------------------------- | ---------------------------------- |
| `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |

- 첫번째 예시는 `onClick` 이벤트 핸들러로 `handleClick`함수를 전달하는 것, 즉 리액트가 기억하고 있다가 클릭 시 호출한다.
- 두번째 예시는 `handleClick`이 렌더링 중에 즉시 실행된다. 그 이유는 JSX 중괄호 안에 있는 자바스크립트는 즉시 실행되기 때문이다.

<br><br>

**인라인**
| passing a function (correct)            | calling a function (incorrect)    |
| --------------------------------------- | --------------------------------- |
| `<button onClick={() => alert('...')}>` | `<button onClick={alert('...')}>` |

- 두번째 예시는 컴포넌트가 렌더링될 때 마다 실행됨
- 첫번째 예시는 렌더링 마다 내부 코드가 실행되고 이는 이후 호출될 함수를 만든다.

<br><br>

## 2. 이벤트 핸들러 props 네이밍
- `on` 으로 시작한다. (e.g. onSmash, onPlayMovie)

<br><br>

## 3. 이벤트 전파     
- 이벤트 핸들러는 컴포넌트가 가질 수 있는 자녀의 이벤트를 포착할 수 있다
  - 이를 이벤트가 트리 위로 "bubbles"(거품) or "propagetes"(전파)된다고 한다
  - 발생 위치에서 트리 위로 올라감

```jsx
// 버튼 클릭 시: 버튼 -> 툴바
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```
> 우리가 부착한 JSX 태그에서 작동하는 `onScroll`를 제외한 모든 이벤트가 전파된다

<br><br>

## 4. 전파 중단하기
- 이벤트 핸들러는 이벤트 객체를 인자로 받고 `e`로 보통 부른다.
- 부모 컴포넌트로의 전파를 막을 수 있다.

```jsx
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

```

<br><br>

### 4.1. 이벤트 전파 3단계
1. 아래로 내려가면서, `onClickCapture`핸들러를 호출한다
2. 클릭한 요소의 `onClick`핸들러를 실행한다
3. 위로 올라가면서, `onClick`핸들러를 실행한다  

> capture 이벤트는 라우터나 분석에 유용하고 앱 코드 안에선 아마 사용 안 할 것

<br><br>

### 4.2. 전파를 막으며 이벤트 핸들러 사용하기
- 자녀 컴포넌트가 이벤트 핸들러를 사용함과 동시에 전파를 막을 수 있다.

```jsx
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
``` 

<br><br>

### 4.3. default 기능 막기
- `<form>`은 제출 시 새로고침이 되는데, 이와 같은 기본 기능을 막을 수 있다.

```jsx
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}
```

> 이벤트 핸들러는 사이드 이펙트의 최적의 장소이다  
> e.g. 입력 마다 입력값 변경, 버튼 클릭 시 숫자 증감 등  
> 이런 정보는 상태로 관리한다

<br><br>

## Reference<!-- omit in toc -->
[Responding to Events](https://beta.reactjs.org/learn/responding-to-events#naming-event-handler-props)