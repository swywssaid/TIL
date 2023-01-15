# useMemo <!-- omit in toc -->

- [1. useMemo 란](#1-usememo-란)
- [2. useMemo 예제](#2-usememo-예제)
  - [2.1. useMemo 예제1: 무거운 함수](#21-usememo-예제1-무거운-함수)
  - [2.2. useMemo 예제2: 변수와 데이터 타입](#22-usememo-예제2-변수와-데이터-타입)

<br><br>

## 1. useMemo 란
- 컴포넌트 성능 최적화 방법 중 하나이다. (useMemo, useCallback 등)
- Memo는 Memoization을 뜻한다. Memoization이란 자주 사용하는 값을 캐싱해두고 사용할 때 꺼내 쓰는 방법론이다.
- 아래와 같이 컴포넌트가 렌더링될 때 변수들이 초기화되어 무거운 작업 역시 재실행된다.
  - 이때 useMemo를 통해 해당 값을 Memoization하고 재사용할 때 꺼내 사용하게 된다.
<img src="..\..\image\react\hooks\functional-component.png" width="600" height="330">

<br>

```javascript
/*
1. 콜백함수의 리턴값이 useMemo의 리턴값이다
2. [item] 은 의존성 배열로 해당 값이 변할 때, 콜백 함수를 재실행해 Memoization을 업데이트하게 된다. (빈 배열일 경우 컴포넌트가 Mount될 때만 업데이트되고 꺼내쓸 수 있음)  
*/
const value = useMemo(() => {
    return calculate();
}, [item]);
```
<br>

> useMemo는 꼭 필요할 때만!  
> useMemo를 사용하기 위해선 값을 저장하기 위해 따로 메모리 공간을 확보한다는 것이기 때문에 오히려 성능이 악화될 수 있다.

<br><br>

## 2. useMemo 예제
### 2.1. useMemo 예제1: 무거운 함수

```javascript
/*
쉬운 계산기를 사용할 때도 어려운 계산기의 기능이 렌더링되어 성능 저하됨.
useMemo를 통해 어려운 계산기를 사용할 때만 해당 함수를 계산하도록 한다.
*/

const [hardValue, setHardValue] = useState(1);
const [easyValue, setEasyValue] = useState(1);

// const hardSum = hardCalculate(hardValue);

// useMemo 적용
const hardSum = useMemo(() => {
    return hardCalculate(hardValue);
},[hardValue])

const easySum = easyCalculate(easyValue);

return (
    <div>
        <h3>어려운 계산기</h3>
        <input type="number" value={hardValue} onChange={(e) => setHardValue(parseInt(e.target.value))} />
        <span>{hardSum}</span>

        <h3>쉬운 계산기</h3>
        <input type="number" value={easyValue} onChange={(e) => setEasyValue(parseInt(e.target.value))} />
        <span>{easySum}</span>
    </div>
)
```

> 실제로 리액트를 사용하면서 1초 이상의 계산이 걸리는 무거운 함수로 컴포넌트 내부의 변수를 초기화할 일이 많진 않다. useMemo가 빛을 발하는 경우는 아래 경우이다.

<br><br>

### 2.2. useMemo 예제2: 변수와 데이터 타입

```javascript
/*
데이터 타입이 원시 데이터일 때는 숫자를 바꿔도 렌더링이 발생하지 않는다.
*/
const [value, setValue] = useState(0);
const [isHungry, setIsHungry] = useState(true);

// useMemo 적용
const hungry = isHungry ? "먹어" : "굶어";

useEffect(() => {
console.log("렌더링됨");
}, [hungry]);

return (
<div>
    <h3>몇 끼 먹었어?</h3>
    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />

    <h3>배고파?</h3>
    <span>{isHungry ? "응" : "아니"}</span>
    <button onClick={() => setIsHungry(!isHungry)}>{hungry}</button>
</div>
);

```

<br><br>

- 데이터 타입이 객체 데이터 타입이 의존성 배열에 들어갈 시 모든 렌더링에 변화가 일어난다.
- 객체 데이터 타입의 경우 변수에 메모리 주소가 담기게 되는데 렌더링 시 새로운 메모리 주소가 할당되어 값이 변화됐다고 인지한다. 따라서 useEffect의 콜백함수가 실행된다.
- useMemo를 통해 값을 기억해 사용하게 된다. 이렇게 되면 isHungry가 바뀌기 전까진 동일한 메모리주소를 꺼내 사용하기 때문에 useEffect가 호출되지 않고 isHungry가 바뀌면 useMemo가 호출되어 메모리 주소가 바뀌고 useEffect가 호출되게 된다.

```javascript
const [value, setValue] = useState(0);
const [isHungry, setIsHungry] = useState(true);

// useMemo 적용
const isfull = useMemo(() => {
return {
    hungry: isHungry ? "먹어" : "굶어",
};
}, [isHungry]);

useEffect(() => {
console.log("렌더링됨");
}, [isfull]);

return (
<div>
    <h3>몇 끼 먹었어?</h3>
    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />

    <h3>배고파?</h3>
    <span>{isHungry ? "응" : "아니"}</span>
    <button onClick={() => setIsHungry(!isHungry)}>{isfull.hungry}</button>
</div>
);

```

<br>

> 객체 데이터 타입을 의존성 배열에 주면 아래와 같은 경고 문구가 발생하긴 한다.  
> The 'isfull' object makes the dependencies of useEffect Hook (at line 15) change 
on every render. To fix this, wrap the initialization of 'isfull' in its own useMemo() Hook

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - useMemo 제대로 사용하기](https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=6)