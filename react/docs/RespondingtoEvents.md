# Responding to Events

> 학습목표  
> <details>
> <summary>1. 이벤트 핸들러를 적는 다른 방법</summary>
> <div>
>
> </div>
> </details>
> <details>
> <summary>2. 부모 컴포넌트에 이벤트 핸들러 보내는 방법</summary>
> <div>
>
> </div>
> </details>
> <details>
> <summary>3. 이벤트 전파하고 멈추는 방법</summary>
> <div>
> 
> </div>
> </details>

<br><br>

## 이벤트 핸들러 사용하기
- 이벤트 핸들러의 특징
1. 보통 컴포넌트 내부에서 정의된다
2. `handle`이라는 이름으로 시작되고 뒤에는 이벤트 이름이 붙는다. (e.g. `handleClick`, `handleMouseEnter`)

- 짧은 함수는 화살표 함수로 전달하기도 한다

> 이벤트 핸들러는 호출하는 것이 아닌 전달하는 것이다!!

| passing a function (correct)     | calling a function (incorrect)     |
| -------------------------------- | ---------------------------------- |
| `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |

<br><br>

## 이벤트 핸들러 props 네이밍
- `on` 으로 시작한다. (e.g. onSmash, onPlayMovie)

<br><br>

## 이벤트 전파     
- 이벤트 핸들러는 컴포넌트가 가질 수 있는 자녀의 이벤트를 포착할 수 있다
  - 이를 이벤트가 트리 위로 "bubbles"(거품) or "propagetes"(전파)된다고 한다
  - 발생 위치에서 트리 위로 올라감

```jsx
// 버튼 클릭 시: 버튼 -> 툴바
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```
> 우리가 부착한 JSX 태그에서 작동하는 `onScroll`를 제외한 모든 이벤트가 전파된다

<br><br>

## 전파 중단하기
- 이벤트 핸들러는 이벤트 객체를 인자로 받고 `e`로 보통 부른다.
- 부모 컴포넌트로의 전파를 막을 수 있다.

```jsx
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

```

<br><br>

### 이벤트 점파 3단계
1. 아래로 내려가면서, `onClickCapture`핸들러를 호출한다
2. 클릭한 요소의 `onClick`핸들러를 실행한다
3. 위로 올라가면서, `onClick`핸들러를 실행한다  

> capture 이벤트는 라우터나 분석에 유용하고 앱 코드 안에선 아마 사용 안 할 것

<br><br>

## Reference
[Responding to Events](https://beta.reactjs.org/learn/responding-to-events#naming-event-handler-props)