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



### **Reference**
[생활코팅-React](https://opentutorials.org/course/4900)

[state 변경함수 사용할 때 주의점 : async](https://codingapple.com/unit/react-setstate-async-problems/)

[onchange Event](https://www.w3schools.com/jsref/event_onchange.asp)