# JavaScript In JSX With Curly Braces

> 학습목표  
> <details>
> <summary>1. 따옴표로 문자열 전달하는 방법</summary>
> <div>
> JSX 속성은 문자열(작은 따옴표, 큰 따옴표)로 전달
> </div>
> </details>
> <details>
> <summary>2. JSX에서 자바스크립트 변수,함수 참조하는 방법</summary>
> <div>
> 중괄호
> </div>
> </details>
> <details>
> <summary>3. JSX에서 자바스크립트 객체 사용하는 방법</summary>
> <div>
> 이중 중괄호
> </div>
> </details>

<br><br>

## JSX에서 중괄호 사용 방법 2가지
1. JSX 태그 안에 텍스트 직접 전달
- `<h1>{name}'s To Do List</h1>`
- `<{tag}>Gregorio Y. Zara's To Do List</{tag}>`는 안 됨

2. `=`뒤에 속성으로 전달하기
- `src={avatar}`
- src="{avatar}" 안 됨. 문자열로 인식

<br><br>

## 이중 중괄호: CSS와 객체
- 문자열, 숫자 등을 비롯해 객체 역시 JSX에 전달 가능하다.
- 객체는 중괄호를 사용하기에 이중 중괄호가 된다.
  - 인라인 CSS를 권장하진 않는다.


```jsx
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

<br>

> 리액트에서 스타일을 적용할 때 인라인 스타일을 권장하지 않는 이유? (팩트 체크 필요...)
> 불필요한 리렌더링을 하게 되기 때문. 리액트의 버추얼 돔이 바뀐 곳을 찾다가   
> 객체 데이터 타입은 주소를 참조하기 때문 
> 이건 팩트 체크가 필요함 찾기 어려운데 이 이유는? 그리고 만약 사실이라면 무한 리렌더링이 돼는데 실제론 아니지 않나? 

<br>

> 가장 큰 이유가 지원하는 기능이 적어서라는데??? 

<br><br>

## Reference <!-- omit in toc -->
[JavaScript in JSX with Curly Braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)

[Why you shouldn’t use inline styling in production React apps](https://blog.logrocket.com/why-you-shouldnt-use-inline-styling-in-production-react-apps/)