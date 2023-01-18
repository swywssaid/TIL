# useRef <!-- omit in toc -->
- [1. useRef란](#1-useref란)
- [2. useRef 예제](#2-useref-예제)
  - [2.1. 변수 관리1: Ref 값 변경 시 렌더링되지 않는다.](#21-변수-관리1-ref-값-변경-시-렌더링되지-않는다)
  - [2.2. 변수 관리2: Ref 값 변경 시 렌더링되지 않는다.](#22-변수-관리2-ref-값-변경-시-렌더링되지-않는다)
  - [2.3. Dom 요소 접근: input에 fucus](#23-dom-요소-접근-input에-fucus)

<br><br>

## 1. useRef란
1. 변수 관리
   - 렌더링 시 값이 변경되지 않길 원하는 데이터 저장하는 용도
   - 엄청 자주 변화하는 값을 저장할 때. 효율적인 컴포넌트 렌더링
     - state로 관리하게 되면 과도한 렌더링에 성능 저하
- state 변화 $\rightarrow$ 렌더링 $\rightarrow$ 컴포넌트 내부 변수 초기화
- Ref 변화 $\rightarrow$ 렌더링 X $\rightarrow$ 변수값 유지
- state 변화 $\rightarrow$ 렌더링 $\rightarrow$ Ref 값 유지

> Ref의 값은 컴포넌트의 생애주기 동안 유지됨. (마운팅 시점부터 언마운트까지)

```jsx
/* 
REF 객체를 반환 
{current: value}
*/
const REF = useRef(value);
```

<br>

1. DOM 요소에 접근
   - Document.querySelector() 와 유사
   - 로그인 시 아이디 인풋에 자동으로 포커스되도록
   - 스크롤 박스 조작
   - 캔버스 요소에 그림 그릴 때

```jsx
/* 
REF 객체를 접근하고자 하는 태그에 ref 속성으로 넣어주면 된다. 
*/
const REF = useRef(value);

<input ref={REF} />
```

<br><br>

## 2. useRef 예제
### 2.1. 변수 관리1: Ref 값 변경 시 렌더링되지 않는다.
```jsx
/*
Increase Ref를 눌러도 화면의 Ref값은 변화되지 않는다.
state를 변경시켜 렌더링이 된다면 그 때 변화된 Ref값이 나타나게 된다.
*/
const [count, setCount] = useState(0);
const countRef = useRef(0);    // {current: 0}

const increaseCountState = () => {
    setCount(count + 1);
}

const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
}

return (
    <div>
        <p>State: {count}</p>
        <p>Ref: {countRef.current}</p>
        <button onClick={increaseCountState}>Update State</button>
        <button onClick={increaseCountRef}>Increase Ref</button>
    </div>
)
```

<br><br>

### 2.2. 변수 관리2: Ref 값 변경 시 렌더링되지 않는다.
- 렌더링의 횟수를 체크해보자
- 아래의 코드는 무한루프에 빠진다.

```jsx
/*
useEffect는 렌더링 시 실행되니 state로 체크할 수 있지 않을까?
-> useEffect가 처음 마운트될 때 setRenderCount를 실행하고 그러면 렌더링이 되고 다시 useEffect가 실행되고 setRenderCount를 실행하고... 
*/
const [count, setCount] = useState(0);
const [renderCount, setRenderCount] = useState(0);

useEffect(() => {
    setRenderCount(renderCount + 1);
});

const increaseCountState = () => {
    setCount(count + 1);
}

return (
    <div>
        <p>State: {count}</p>
        <button onClick={increaseCountState}>Update State</button>
    </div>
)
```

<br>

- 이때 useRef를 사용하면 된다.

```jsx
const [count, setCount] = useState(0);
const renderCount = useRef(0);

useEffect(() => {
    renderCount.current = renderCount.current + 1;
});

const increaseCountState = () => {
    setCount(count + 1);
}

return (
    <div>
        <p>State: {count}</p>
        <button onClick={increaseCountState}>Update State</button>
    </div>
)
```

<br><br>

### 2.3. Dom 요소 접근: input에 fucus
- 로그인 input창에 자동으로 포커싱되도록 해보자.
- 입력한 아이디 값 팝업
  
```jsx
/*
useRef의 초기값을 비워두는 이유({current:undefined})는 어차피 접근하고자 하는 태그가 들어갈 것이기 때문이다.
{current:input}
*/
const inputCount = useRef();

// 처음 마운트될 때 포커싱
useEffect(() => {
    inputRef.current.focus();
},[]);

const login = () => {
    alert({inputRef.current.value});
    inputRef.current.focus();

}

return (
    <div>
        <input ref={inputRef} type="text" placeholder="username"/>
        <button onClick={login}>로그인</button>
    </div>
)
```

## Reference <!-- omit in toc -->
[useRef 완벽 정리 1# 변수 관리](https://www.youtube.com/watch?v=VxqZrL4FLz8&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=3)

[useRef 완벽 정리 2# DOM 요소 접근](https://www.youtube.com/watch?v=EMK8oUUwP5Q)