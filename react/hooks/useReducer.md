# useReducer

- [useReducer](#usereducer)
  - [1. useReducer 란](#1-usereducer-란)
  - [2. useReducer 3 요소](#2-usereducer-3-요소)
  - [3. useReducer 예제](#3-usereducer-예제)
    - [3.1. useReducer 예제1: 은행 장부](#31-usereducer-예제1-은행-장부)
    - [3.2. useReducer 예제2: 출석부](#32-usereducer-예제2-출석부)

<br><br>

## 1. useReducer 란
- useState처럼 컴포넌트의 state를 관리하는 훅
- 여러 하위 값을 지닌 상태를 관리할 때 유용

```javascript
// 이와 같이 여러 하위 값을 지닌 상태를 관리
{
    name: "Tom",
    age: 21,
    assets: [
        {type: "stock", value: 150,000},
        {type: "cash", value: 100,000},
    ]
}
```

<br><br>

## 2. useReducer 3 요소
- Dispatch, Action, Reducer
- 쉽게 예를 들어보자. 은행의 장부(State)는 우리가 직접 수정할 수 없고 은행(Reducer)에서 관리를 하게 된다. 우리는 은행에 장부 변경에 대한 내용(Action)을 요청(Dispatch)하게 된다. 은행(Reducer)는 요청(Dispatch)의 내용(Action)에 따라 장부(State)를 변경하게 된다.
<img src="..\..\image\react\hooks\useReducer.png" width="600" height="330">
<img src="..\..\image\react\hooks\useReducer2.png" width="600" height="330">

<br><br>

## 3. useReducer 예제
### 3.1. useReducer 예제1: 은행 장부
- 입금과 출금
  - 이정도의 상태는 복잡하지 않기 때문에 useState가 나을 수 있다.

```jsx

// 변수 관리
const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

// reducer는 첫번째 인자로 reducer함수가 불리는 시점의 money 상태 값이 들어가게 된다. action은 state 변경에 대한 내용이다.
// reducer는 상태 업데이트 조건들을 걸어주기 때문에 우리가 예상한 대로만 변경이 돼 실수를 줄일 수 있다.
// 상황(type)에 따라 다른 payload를 반영해야하기 때문에 보통 reducer 함수 내에 if else나 switch문을 사용한다.
// action = {type: "내용", payload: 변화값}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;

    case ACTION_TYPES.withdraw:
      return state - action.payload;

    default:
      return state;
  }
};

function App() {
  const [value, setValue] = useState(0);
  // dispatch를 호출하면 reducer함수가 호출되고 인자로 받는 action을 통해 money(state)를 업데이트하게 된다.
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>잔고: {money}원</h3>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} step="1000" />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: value });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: value });
        }}
      >
        출금
      </button>
    </div>
  );
}

```

<br><br>

### 3.2. useReducer 예제2: 출석부
- 명단 추가, 삭제
- 출석 시 취소선



```jsx
/*
관리해야하는 상태

const initialState = {
  count: 0,
  students: [
    id: Date.now(),
    name: "",
    isHere: false,
    ],
};
*/


// Student 컴포넌트
export default function Student({ student, dispatch }) {
  return (
    <li>
      <span
        style={{ textDecoration: student.isHere ? "line-through" : "none", color: student.isHere ? "gray" : "black" }}
        onClick={() => dispatch({ type: "isHere", payload: student.id })}
      >
        {student.name}
      </span>
      <button onClick={() => dispatch({ type: "delete", payload: student.id })}>삭제</button>
    </li>
  );
}

// App.js 
const ACTION_TYPES = {
  add: "add",
  delete: "delete",
  isHere: "isHere",
};

const initialState = {
  count: 0,
  students: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      const name = action.payload;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return { count: ++state.count, students: [...state.students, newStudent] };

    case ACTION_TYPES.delete:
      return { count: --state.count, students: state.students.filter((student) => student.id !== action.payload) };
    case ACTION_TYPES.isHere:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload) {
            return {
              ...student,
              isHere: !student.isHere,
            };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

function App() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>출석부</h3>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input type="text" value={name} placeholder="이름을 입력해주세요" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: name });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return <Student key={student.id} student={student} dispatch={dispatch} />;
      })}
    </div>
  );
}
```

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - useReducer 확실히 정리해드려요](https://www.youtube.com/watch?v=tdORpiegLg0&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=8)

[React docs - useReducer](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)