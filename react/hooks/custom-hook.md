# Custom Hook 
- [Custom Hook](#custom-hook)
  - [1. Custom Hook이란](#1-custom-hook이란)
  - [2. Custom Hook 언제 사용하나](#2-custom-hook-언제-사용하나)
  - [3. Custom Hook 예제](#3-custom-hook-예제)
    - [3.1. Custom Hook 예제1: useInput](#31-custom-hook-예제1-useinput)
    - [3.2. Custom Hook 예제2: useFetch](#32-custom-hook-예제2-usefetch)

<br><br>

## 1. Custom Hook이란
- 우리가 커스텀에서 만드는 훅
- 커스텀 훅 내부에 리액트 훅을 사용할 수 있다.
- 다른 컴포넌트, 한 컴포넌트 내에서 커스텀 훅 마다 독립적인 state와 effect를 관리할 수 있다.

<br><br>

## 2. Custom Hook 언제 사용하나
1. 한 컴포넌트 내 중복되는 코드들이 있을 때
2. 다른 컴포넌트 간에 중복되는 코드들이 있을 때

<br><br>

## 3. Custom Hook 예제
### 3.1. Custom Hook 예제1: useInput

```javascript
// App.js
function displayMessage(message) {
  alert(message);
}

function App() {
  const [value, handleChange, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={value} onChange={handleChange}></input>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;


// 커스텀 훅 useInput
export default function useInput(initialValue, submitAction) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setValue("");
    submitAction(value);
  };

  return [value, handleChange, handleSubmit];
}

```

<br><br>

### 3.2. Custom Hook 예제2: useFetch
- javascript fetch 이용하는 훅
- baseUrl을 기준으로 다양한 api를 사용할 때 유용

**useFetch 기본**

```javascript
// useFetch 기본
// App.js
const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const [data, fetchUrl]  = useFetch(baseUrl, "users");

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

// 커스텀 훅 useFetch
export default function useFetch(baseUrl, initialType) {
  const {data, setDate} = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setDate(res));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return {data, fetchUrl};
}
```

<br><br>

**useFetch 응용**

```javascript
// useFetch 응용
// App.js
const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  console.log(userData, postData);
  return (
    <div>
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;

// 커스텀 훅 useFetch
export default function useFetch(baseUrl, initialType) {
  const [data, setDate] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setDate(res));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return { data };
}
```

<br><br>

## Reference <!-- omit in toc -->
[React Hooks에 취한다 - Custom Hooks 커스텀 훅](https://www.youtube.com/watch?v=S6POUU2-tr8&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=10) 