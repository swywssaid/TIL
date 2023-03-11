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

<br><br>

## Reference
[Responding to Events](https://beta.reactjs.org/learn/responding-to-events#naming-event-handler-props)