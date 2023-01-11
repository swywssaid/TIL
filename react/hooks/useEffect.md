# useEffect<!-- omit in toc -->

- [1. useEffect란](#1-useeffect란)
- [2. useEffect 사용법](#2-useeffect-사용법)
  - [2.1. 렌더링 될 때마다 실행](#21-렌더링-될-때마다-실행)
  - [2.2. 특정 값이 바뀔 때마다 실행](#22-특정-값이-바뀔-때마다-실행)
  - [2.3. Clean up (정리)](#23-clean-up-정리)
- [3. useEffect 예제](#3-useeffect-예제)
  - [3.1. useEffect 예제1](#31-useeffect-예제1)
  - [3.2. useEffect 예제2 (Clean Up)](#32-useeffect-예제2-clean-up)

<br><br>

## 1. useEffect란
- 가장 중요한 hook 중 하나이다.
- 특정 컴포넌트가 마운트, 업데이트, 언마운트될 때 실행할 작업을 처리하는 훅
 <img src="..\..\image\react\hooks\useEffect.png" width="600" height="330">
 <img src="..\..\image\react\hooks\lifecycles.png" width="600" height="330">

<br><br>

## 2. useEffect 사용법
### 2.1. 렌더링 될 때마다 실행
- 맨 처음 렌더링 될 때 (Mount) + 다시 렌더링 될 때 (Update)

```javascript
useEffect(() => {
    // 작업...
});
```

<br>

### 2.2. 특정 값이 바뀔 때마다 실행
- 맨 처음 렌더링 될 때 (Mount) + value값이 바뀔 때 (Update)

```javascript
useEffect(() => {
    // 작업...
},[value]);
```

<br>

### 2.3. Clean up (정리)
- 해당 컴포넌트가 언마운트 될 때 or 다음 렌더링 시 불릴 useEffect가 실행되기 이전에 return 실행.
  - 구독을 했다가, 해지하는 것
  - 타이머를 시작했다가, 멈추는 것
  - 어떤 이벤트 리스너를 등록했다가, 제거하는 것

```javascript
useEffect(() => {
    // 작업...

    return() => {
        // 구독 해지...
    }
},[value]);
```

<br><br>

## 3. useEffect 예제
### 3.1. useEffect 예제1

```javascript
const [count, setCount] = useState(1);
const [value, setValue] = useState("");

const handleCountUpdate = () => {
    setCount(count + 1);
};

const handleValueChange = (e) => {
    setValue(e.target.value);
};

// 렌더링 될 때마다 실행 (버튼을 누르거나 무엇인가 입력할 때 마다 렌더링됨.)
// 처음 렌더링 될 때(Mount) + 버튼을 누르거나 무엇인가 입력할 때 마다 렌더링(Update)
useEffect(() => {
    console.log("렌더링 될 때마다");
})

// 처음 렌더링 될 때(Mount) + count 값 변할 때(버튼 누를 때)마다 실행(Update)
useEffect(() => {
    console.log("버튼 누를 때마다");
},[count])

// 처음 렌더링 될 때(Mount) + value 값 변할 때(입력할 때)마다 실행
useEffect(() => {
    console.log("입력할 때마다");
},[value])

// 처음 렌더링될 때(Mount)만 실행 (변수가 비어있기 때문에)
useEffect(() => {
    console.log("입력할 때마다");
},[])

return (
    <div>
        <button onClick={hangleCountUpdate}>Update</button>
        <input type="text" value={value} onChage={handleValueChange}>
        <span>{value}</span>
    </div>
)
```

<br><br>

### 3.2. useEffect 예제2 (Clean Up)
- 아래 코드를 실행하게 된다면 (Clean up 적용 X)
  1. 맨 처음 렌더링될 때, 즉 버튼을 눌러 showTimer가 true가 되고 Timer 컴포넌트가 렌더링이 될 때 타이머 컴포넌트의 useEffect가 실행된다. 1초마다 콘솔
  2. 다시 버튼을 누르게 되면 showTimer가 false가 되고 Timer 컴포넌트는 언마운트가 되며 타이머 시작, 콘솔 확인 글씨가 사라지게 된다.
  3. **하지만 콘솔창의 타이머는 계속 작동 중인 문제가 발생한다.**

```javascript
// Timer.js 컴포넌트
const Timer = (props) => {
    // 처음 렌더링될 때(Mount)만 실행 (변수가 비어있기 때문에)
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 작동중");
        }, 1000)
    },[])

    return (
        <div>
            <span>타이머 시작, 콘솔 확인</span>
        </div>
    )
}

// App.js 컴포넌트
const App = () => {
    const [showTimer, setShowTimer] = useState(false);
    
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => {setShowTimer(!showTimer)}}>Toggle Timer
        </div>
    )
}
```

<br><br>

- 아래 코드를 실행하게 된다면 (Clean up 적용)
  1. 맨 처음 렌더링될 때, 즉 버튼을 눌러 showTimer가 true가 되고 Timer 컴포넌트가 렌더링이 될 때 타이머 컴포넌트의 useEffect가 실행된다. 1초마다 콘솔
  2. 다시 버튼을 누르게 되면 showTimer가 false가 되고 Timer 컴포넌트는 언마운트가 되며 타이머 시작, 콘솔 확인 글씨가 사라지게 된다.
  3. 해당 컴포넌트가 언마운트 될 때 or 다음 렌더링 시 불릴 useEffect가 실행되기 이전에 return 실행, 즉 인터벌이 클리어된다.

```javascript
// Timer.js 컴포넌트
const Timer = (props) => {
    // 처음 렌더링될 때(Mount)만 실행 (변수가 비어있기 때문에)
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 작동중");

            return() => {
                clearInterval(timer);
                console.log("타이머가 종료되었습니다.");
            };
        }, 1000)
    },[])

    return (
        <div>
            <span>타이머 시작, 콘솔 확인</span>
        </div>
    )
}

// App.js 컴포넌트
const App = () => {
    const [showTimer, setShowTimer] = useState(false);
    
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => {setShowTimer(!showTimer)}}>Toggle Timer
        </div>
    )
}
```

<br><br>

## Reference <!-- omit in toc -->
[useEffect 깔끔하게 마스터하기](https://www.youtube.com/watch?v=kyodvzc5GHU&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=2)

[리액트 생명주기](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
