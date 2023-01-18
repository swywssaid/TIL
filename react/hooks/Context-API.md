# Context API <!-- omit in toc -->
- [1. Context 란](#1-context-란)
- [2. Context 사용 이유](#2-context-사용-이유)
- [3. Context 예제](#3-context-예제)

## 1. Context 란
- 컴포넌트에서 Props가 아닌 또 다른 방식으로 컴포넌트간에 값을 전달하는 방법

<img src="..\..\image\react\hooks\component-tree.png" width="600" height="330">

<br><br>

## 2. Context 사용 이유
- prop으로 전달 시 데이터가 필요하지 않은 중간 컴포넌트도 전달을 위해 prop을 받아야 함.
- [중간 컴포넌트에서 실수로 prop이 변경되면](https://ko.reactjs.org/docs/components-and-props.html#props-are-read-only) 부모 컴포넌트들을 역으로 탐색하며 오류를 해결해야하는 번거로움이 있음. 
<img src="..\..\image\react\hooks\prop-drilling.png" width="600" height="330">

> **Context는 꼭 필요할 때만 사용하자!**  
> - Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다.
> - 단순히 Prop drilling을 피하기 위한 목적이면 Component Composition (컴포넌트 합성)을 먼저 고려해보자.

<br><br>

## 3. Context 예제
```jsx
// Prop drilling
function App() {
  return <GrandParent value="Hello World!" />;
}

function GrandParent({ value }) {
  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <GrandChild value={value} />;
}

function GrandChild({ value }) {
  return <Message value={value} />;
}

function Message({ value }) {
  return <div>Received: {value}</div>;
}
```

```jsx
// Context API 적용
import { createContext, useContext } from 'react';

function Message() {
  const value = useContext(MyContext);
  return <div>Received: {value}</div>;
}

import { createContext, useContext } from 'react';
const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="Hello World">
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <Message />;
}

function Message() {
  const value = useContext(MyContext);
  return <div>Received: {value}</div>;
}

export default App;
```

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - useContext + Context API](https://www.youtube.com/watch?v=LwvXVEHS638&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=5)

[Components와 Props](https://ko.reactjs.org/docs/components-and-props.html#props-are-read-only)

[다른 사람들이 안 알려주는 리액트에서 Context API 잘 쓰는 방법](https://velog.io/@velopert/react-context-tutorial)