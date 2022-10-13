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

 ```javascript
const _mode = useState('WELCOME');
const mode = _mode[0];
const setMode = _mode[1];  
// 아래와 같이 바꿀수있음

const [mode, setMode] = useState('WELCOME');
 ```
<br /><br />


### **Reference**
[생활코팅-React](https://opentutorials.org/course/4900)

[state 변경함수 사용할 때 주의점 : async](https://codingapple.com/unit/react-setstate-async-problems/)

[onchange Event](https://www.w3schools.com/jsref/event_onchange.asp)