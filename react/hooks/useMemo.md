# useMemo

## useMemo 란
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

## useMemo 예제
- 계산기

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

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - useMemo 제대로 사용하기](https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=6)