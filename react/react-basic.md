# React Basic

## **1. React란**
- 사용자 정의 태그를 만드는 
- 이렇게 만든 태그들은 공유할 수 있다.
- 리엑트를 만드는 방법은 크게 두가지가 있고 최근에는 함수를 이용해서 만드는방법이 많아짐.

<br /><br />

## **2. Component (컴포넌트)**
- 리엑트에선 사용자 정의 태그를 컴포넌트라고 한다.
- 컴포넌트는 prop이란 입력을 받아 UI를 리턴한다.  

<br /><br />

## **3. Prop**
- 컴포넌트가 지닌 기본 매개변수이자 내장객체이다.
- 해당 객체에 필요 속성들을 메소드, 프로퍼티로 전달한다.
- 태그안에서는 props.title 사용시 저 문자 자체로 해석.
- 따라서 {props.title}로 내부 문자가 표현식임을 알려준다.
- 리액트는 자동으로 생성한 태그들의 경우 반복문 내에서 고유한 키값을 갖도록한다.
  - 그 이유는 리액트가 그 태그들을 추척하기 위함. 성능을 높이고 정확한 동작을 위해 협조하는 것이라고 정도로 일단 넘어가자.

<br /><br />

## **4. Event**
- 여기서 html 코드는 순수한 html 코드와 다르다. 유사 html이다.
  - 리액트가 최종적으로 브라우저가 이해할 수 있는 html 로 컨버팅해주는 것이다.

<br /><br />

## **5. State**
- 아래 구조는 컴포넌트를 나타낸다.
- 입력값을 prop으로 받고 컴포넌트 함수로 처리하여 리턴값을 만들면 바로 그 리턴값이 새로운 UI가 된다.
- state는 컴포넌트를 다시 실행하여 새로운 리턴값을 만들어내게 된다.
- prop과 state의 값이 바뀌면 새로운 리턴값을 만들어내게된다.
- 이 둘의 차이점은 prop은 컴포넌트를 사용하는 외부자를 위한 데이터이고 state는 컴포넌트를 만드는 내부자를 위한 데이터이다.
- hook이란 리엑트에서 제공하고 있는 기본적인 함수를 말한다. 
 <img src="..\image\react\react-basic\state.png" width="600" height="330">

 ```jsx
const _mode = useState('WELCOME');
const mode = _mode[0];
const setMode = _mode[1];  
// 아래와 같이 바꿀수있음

const [mode, setMode] = useState('WELCOME');
 ```
<br /><br />

### **5.1. State와 데이터타입**
- 원시데이터타입과 객체데이터타입일 때 state 사용방법이 다르다.
- 리엑트는 state값이 변하지 않았다면 굳이 컴포넌트를 재실행하지 않는다.
```jsx
// 원시데이터타입
const [mode, setMode] = useState(1);
setMode(2);  // 재실행됨. 원시데이터이기 때문.

-------------------------------------------------

// 객체데이터타입
const [mode, setMode] = useState([1]);
mode.push(2); // [1,2] 참조이다. 
setMode(mode); // mode값에는 변화가 없다. 

const [mode, setMode] = useState([1]);
let newMode = [...mode]; // mode 복제
newMode.push(2);  // [1,2] 복제한값이 변경
setMode(newMode); // mode와 다르므로 재실행됨.

```
<br /><br />

### **5.2. State 변경함수와 비동기처리**
- state 변경함수들은 전부 asynchronous (비동기적) 으로 처리.
  -  오래걸리면 이거 제껴두고 다른 밑에 있는 코드들부터 실행.  

<br /><br />

## **6. CRUD**
- 대부분의 어플리케이션은 4가지 기능을 갖고 있다.
  - create read update delete

<br /><br />

### **6.1. CREATE**
- 현재 우리는 새로운 페이지로 이동하여 화면을 바꾸는 것이 아닌 state를 변경하므로 바꾸고있다.
  - SPA(Single Page Application) 
- 따라서 create 링크를 만들고 실제 페이지로 이동하는 것이 아닌 state를 변경해준다.

<br /><br />

### **6.2. UPDATE**
- UPDATE = CREATE + READ

<br/>

**기존 값 props를 통해 나타내기**  
```jsx
<form>
    <p>
        <input type="text" name="title" value={props.title} />
    </p>
    <p>
        <textarea name="body" value={props.body}></textarea>
    </p>
    <p>
        <input type="submit" value="Update" />
    </p>
</form>
```
<img src="..\image\react\react-basic\update.png" width="400" height="350">

- 컴포넌트에서 props로 값을 받아 기존의 값을 나타내었다.
- 하지만 값을 변경할 수 없었다. 그 이유는 value를 props.title과 같이 설정을 했는데 이는 ‘어명’ 처럼 좀더 높은 불변의 명령어이다. 
- 우리가 값을 바꾼다고 하더라도 이는 화면에서의 변경일뿐 코드는 변하지 않는다. 
- 따라서 외부에서 받은 prop을 state로 환승? 해준다.

<br/><br/>

**변경되는 값 onChage를 통해 확인하기**

```jsx
const [title, setTitle] = useState(props.title);
const [body, setBody] = useState(props.body);

return (
<p>
    <input
    type="text"
    name="title"
    value={title}
    onChange={(event) => {
        console.log(event.target.value);
    }}
    />
</p>
)

--------------------------------------------------------------------
return (
<p>
    <input
    type="text"
    name="title"
    value={title}
    onChange={(event) => {
        setTitle(event.target.value);
    }}
    />
</p>
)
```
- props를 state로 만들었다고 해서 바로 값이 바뀌는 것은 아니다. 우리가 값을 입력한다고 해서 현재의 state가 바뀌는 것이 아니기 때문.
- html과 리엑트의 `onchange` 는 다르다.
  - html에서는 포커싱이 인풋 필드를 벗어나면 호출된다.
  - 반면에 리엑트는 값을 입력할 때 마다 호출된다.
- 값을 입력받을 때 마다 state를 갱신한다.

<br /><br />


### **6.3. DELETE**
- 리엑트에서는 하나의 부모 태그 안에 태그들이 들어있어야한다. 
- 아래와 같이 빈태그로 복수의 태그들을 묶어준다. html로 변환될때는 아무의미도 없다.
```jsx
<>
    <li>
        <a
        href={"/update/" + id}
        onClick={(event) => {
            event.preventDefault();
            setMode("UPDATE");
        }}
        >
        Update
        </a>
    </li>
    <li>
        <input type="button" value="Delete" onClick={() => {}}></input>
    </li>
</>
```

<br /><br />


### **Reference**
[생활코팅-React](https://opentutorials.org/course/4900)

[state 변경함수 사용할 때 주의점 : async](https://codingapple.com/unit/react-setstate-async-problems/)

[onchange Event](https://www.w3schools.com/jsref/event_onchange.asp)