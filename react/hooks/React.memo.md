# React.memo

## React.memo 란
- 일반 컴포넌트를 Prop Check를 하는 컴포넌트로 변환해준다.
  - Props의 변화가 있다면, 렌더링을 하고
  - Props의 변화가 없다면, 기존의 렌더링 내용을 재사용한다.
- 리액트에서 제공하는 고차 컴포넌트 (HOC, Higher Order Component)
  - 고차 컴포넌트란 어떤 컴포넌트를 인자로 받아서 새로운 컴포넌트로 반환해주는 컴포넌트.
<img src="..\..\image\react\hooks\React.memo.png" width="600" height="330">


> 리액트에선 부모 컴포넌트가 렌더링되면 자녀 컴포넌트도 렌더링된다.

> 메모이제이션이될 때 추가적인 메모리 공간이 필요하기 때문에 무분별하게 사용하면 성능 저하

<br><br>

## React.memo 언제 사용?
1. 컴포넌트가 같은 Props로 자주 렌더링 될 때
2. 컴포넌트가 렌더링 될 때마다 복잡한 로직을 처리할 때

<br><br>

## React.memo 주의 사항
- Props 변화에만 의존하는 최적화 방법이다.
- 컴포넌트 내부에 useState, useContext, useReducer와 같은 상태와 관련된 훅을 사용한다면 Props의 변화가 없더라도 상태와 Context의 변화에 따라 렌더링이 된다.

<br><br>

## React.memo 예제
### React.memo 예제1: 컴포넌트가 같은 Props로 자주 렌더링 될 때
- Child 컴포넌트의 props가 변하지 않을 때도 렌더링이 된다.
- React.memo를 통해 자녀 컴포넌트를 리턴해준다.

```jsx
// App 컴포넌트
function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("parent component redering!");

  return (
    <div>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child name={"홍길동"} age={childAge} />
    </div>
  );
}

// Child 컴포넌트
import React, { memo } from "react";

export const Child = ({ name, age }) => {
  console.log("Child component redering!");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default memo(Child);
```

<br><br>

### React.memo 예제2: 객체 데이터 타입일 때
- props가 객체 데이터 타입이기 때문에 React.memo는 props가 바뀌었다고 판단
- useMemo + React.memo

```jsx
// useMemo + React.memo
function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("parent component redering!");

  const name = useMemo(() => {
    return {
      lastname: "홍",
      firstname: "길동",
    };
  }, []);

  return (
    <div>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}

export default App;

// Child 컴포넌트
export const Child = ({ name }) => {
  console.log("Child component redering!");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>자녀</h3>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
    </div>
  );
};

export default memo(Child);
```

<br><br>

### React.memo 예제3: 객체 데이터 타입(함수)일 때
- props가 객체 데이터 타입이기 때문에 React.memo는 props가 바뀌었다고 판단
- useCallback + React.memo

```jsx
function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("parent component redering!");

  const tellMe = useCallback(() => {
    console.log("love me");
  }, []);

  return (
    <div>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}

export default App;


// Child 컴포넌트
import React, { memo } from "react";

export const Child = ({ name, tellMe }) => {
  console.log("Child component redering!");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>자녀</h3>
      <p>이름: {name}</p>
      <button onClick={tellMe}>나 사랑해?</button>
    </div>
  );
};

export default memo(Child);
```

<br>

> useMemo, useCallback과 마찬가지로 무분별하게 사용하면 안됨.

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - useMemo 제대로 사용하기](https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=6)