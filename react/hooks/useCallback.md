# useCallback

- [useCallback](#usecallback)
  - [1. useCallback 이란?](#1-usecallback-이란)
  - [2. useCallback 예제](#2-usecallback-예제)

<br><br>

## 1. useCallback 이란?
- useMemo가 값을 Memoization해서 사용하는 훅이었다면, useCallback은 함수를 Memoization하는 훅이다.
  - Memoization이란 자주 사용하는 값을 캐싱해두고 사용할 때 꺼내 쓰는 방법론이다.

<br><br>

> 리액트에서 함수형 컴포넌트는 함수이다!  
> 때문에 렌더링 시 컴포넌트 함수를 호출하게 되고 함수의 성질에 따라 모든 내부 변수가 초기화된다.

<br>

```jsx
// 함수를 실행하는 것이 아닌 저장하는 것이다.
useCallback((num) => {
    return num + 1;
}, [item])

// calculate 변수에는 Memoization된 함수를 갖게 되고 의존성 배열의 값이 바뀔 때만 초기화된다.
const calculate = useCallback((num) => {
    return num + 1;
}, [item])

```

<br><br>

## 2. useCallback 예제 
- 자바스크립트에선 함수도 객체이다. 객체 데이터 타입은 변수에 객체 데이터가 있는 메모리 주소가 담기게 되는데 이는 컴포넌트가 렌더링될 때 초기화된다. 객체 데이터의 값이 동일해도 렌더링되며 새로운 메모리 공간에 데이터를 초기화하기 때문에 메모리 주소는 변경되어 변수가 변경된 것으로 판단한다. 따라서 useEffect의 의존성 배열에 객체 데이터 타입이 담기게 되면 렌더링 마다 useEffect가 불리게 된다.

```jsx
function App() {
    const [value, setValue] = useState(100);

    // 이렇게 사용하면 매 랜더링 마다 useEffect가 불리게 된다. (객체 데이터 타입이기 때문)
    // const someFunc = () => {
    //     console.log(`value: ${value}`);
    //     return;
    // };

    // useCallback를 사용해서 함수를 Memoization한다.value이 바뀔 때 갱신됨.
    const someFunc = useCallback(() => {
        console.log(`value: ${value}`);
        return;
    }, [value]);

    useEffect(() => {
        console.log('someFunc이 바뀜');
    }, [someFunc]);

    return (
    <div>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={someFunc}>call someFunc</button>
    </div>
    );
}

```

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - useCallback 짱 쉬운 강의](https://www.youtube.com/watch?v=XfUF9qLa3mU&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=7)