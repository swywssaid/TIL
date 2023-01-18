# useState<!-- omit in toc -->
- [1. useState란](#1-usestate란)
- [2. useState 예제](#2-usestate-예제)
  - [2.1. state와 setState](#21-state와-setstate)
  - [2.2. prevState](#22-prevstate)
  - [2.3. 초기값이 무거운 잡업일 때](#23-초기값이-무거운-잡업일-때)

<br>

## 1. useState란
- 상태를 설정할 수 있는 훅

<br><br>

## 2. useState 예제
### 2.1. state와 setState
```jsx
const [value, setValue] = useState(0)

const updateValue = () => {
    setValue(value + 1)
}

return (
    <div>
        <button onClick={updateValue}>Update</button>
    </div>
)
```

<br><br>

### 2.2. prevState
- setState의 콜백함수 인자에는 이전 상태값이 들어있다.

```jsx
const [value, setValue] = useState("")
const [todos, setTodos] = useState([])

const updateValue = (e) => {
    setValue(e.target.value)
}

const updateTodo = () => {
    setTodos((prevState) => {
        return [value, ...prevState]
    })
} 

return (
    <div>
        <input type="text" value={value} onChange={updateValue} />
        <button onClick={updateTodo}>update</button>
        {todos.map((todo,idx) => {
            return (<p key={idx}>{todo}</p>)
        })}
    </div>
)
```

<br><br>

### 2.3. 초기값이 무거운 잡업일 때
- 초기값이 무거운 작업일 때 콜백 함수로 전달하면 된다.
- 아래의 경우 렌더링 될 때마다 무거운 작업이 실행된다.

```jsx
const heavyWork = () => {
    console.log("무거운 작업");
    return [];
}

function App() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState(heavyWork())

    const updateValue = (e) => {
        setValue(e.target.value)
    }

    const updateTodo = () => {
        setTodos((prevState) => {
            return [value, ...prevState]
        })
    } 

    return (
        <div>
            <input type="text" value={value} onChange={updateValue} />
            <button onClick={updateTodo}>update</button>
            {todos.map((todo,idx) => {
                return (<p key={idx}>{todo}</p>)
            })}
        </div>
    )
}

```

<br>

- 마운트될 때만 실행된다.
  
```jsx
const heavyWork = () => {
    console.log("무거운 작업");
    return [];
}

function App() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState(() => {
        return heavyWork();
        })

    const updateValue = (e) => {
        setValue(e.target.value)
    }

    const updateTodo = () => {
        setTodos((prevState) => {
            return [value, ...prevState]
        })
    } 

    return (
        <div>
            <input type="text" value={value} onChange={updateValue} />
            <button onClick={updateTodo}>update</button>
            {todos.map((todo,idx) => {
                return (<p key={idx}>{todo}</p>)
            })}
        </div>
    )
}

```

<br><br>


> 재 랜더링 시 state가 초기화되지 않는 이유?  
클로저의 개념 때문! 



## Reference <!-- omit in toc -->
[Web: useState의 동작 원리와 함정](https://medium.com/hcleedev/web-usestate%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC%EC%99%80-%ED%95%A8%EC%A0%95-7b4825c16b9)

[useState 15분만에 마스터하기](https://www.youtube.com/watch?v=G3qglTF-fFI)