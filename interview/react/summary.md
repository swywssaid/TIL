# summary

### 재조정 (Reconciliation)에 대해서 설명해주세요
- 가상돔을 이용하여 실제돔을 갱신하는 과정입니다. Diffing 알고리즘에 의해 갱신되며 이는 두가지 가정을 기반으로 동작합니다.
1. 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
2. 개발자가 key prop을 통해, 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할지 표시해 줄 수 있다.

<br>

#### Diffing 알고리즘에 대해서 설명해주세요
- 엘리먼트의 타입이 다른 경우, 새로운 트리를 구축합니다.
- DOM 엘리먼트의 타입이 같은 경우, 동일한 내역은 유지하고 변경된 속성들만 갱신합니다. 이후 자식에 대한 재귀적인 처리를 합니다.
- 자식에 대한 재귀적 처리를 할 때, 두 리스트를 비교하여 갱신합니다.
  -  이때 key prop를 통해 비효율을 해결합니다.

<br><br>

### CSR과 SSR의 유저와 상호작용이 가능한 시점까지의 단계를 설명해주세요


<br><br>

### 리액트에서 함수형 컴포넌트라고 부르지 않고 함수 컴포넌트라고 부르는 이유가 무엇인가요?

<br><br>

### Flux란 무엇인가요?
    - 등장배경에 대해서 설명해주세요

<br><br>

### 순수함수란 무엇인가요? (불변성과 사이드 이펙트와 연관지어서 설명해주세요, 순수함수 컴포넌트란?)
- 순수 함수는 2가지 조건을 만족하는 함수입니다.
1. 자신의 일만 한다. 즉, 호출 전에 있던 외부 객체나 변수를 변경하지 않는다.
2. Same input, same output.
- 리액트의 렌더링 프로세스는 순수해야 한다
1. 렌더링 전에 존재했던 객체나 변수를 변경하면 안 된다
2. 컴포넌트는 JSX만 반환해야 한다.

<br><br>

### render phase와 commit phase에 대해 설명해주세요
- render phase와 commit phase는 React가 페이지를 업데이트 과정입니다.
- render phase는  React는 가상 DOM을 생성합니다. 이때 실제로 페이지를 변경하진 않습니다.
- commit phase는 실제 DOM과 가상 DOM이 일지하도록 업데이트합니다. 렌더링 단계에서 얻은 가상 DOM과 이전 가상 DOM을 비교하여 업데이트합니다.

<br><br>

### 선언형 프로그래밍이란 무엇일까요?
- 선언형 프로그램은 목표를 명시하고 알고리즘을 명시하지 않는 것입니다. 그에 반해 명령형 프로그램은 알고리즘을 명시하고 목표는 명시하지 않습니다.

<br><br>

### useEffect내부에서 데이터페칭요청을 하는게 안티패턴이라한다. 왜인지 아는가?
- 비동기 처리이기 때문에
- Race condition이란 무엇일까요?
  - 두 개 이상의 프로세스가 공통 자원을 병행적으로(concurrently) 읽거나 쓰는 동작을 할 때, 공용 데이터에 대한 접근이 어떤 순서에 따라 이루어졌는지에 따라 그 실행 결과가 같지 않고 달라지는 상황을 말한다.  

<br><br>

### 함수 컴포넌트에서 왜 state를 직접 바꾸지않고 useState hook을 사용하나요?
- 직접 변경하게 되면 리액트가 state의 변화를 감지하지 못하기 때문입니다. set state를 통해 state를 변경하여 렝더링을 관리하게 됩니다.

<br><br>

### 컴포넌트에서 라이프 사이클을 단계별로 분류해주시고 단계별 역할을 설명해주세요
- 라이프 사이클은 마운트, 업데이트, 언마운트 3단계가 있습니다.
- 마운트는 컴포넌트가 처음 DOM에 삽입되는 단계이고, 업데이트는 컴포넌트의 props 또는 state가 변경되어 컴포넌트가 다시 렌더링되는 단계입니다. 마지막으로 언마운트는 컴포넌트가 DOM에서 제거되는 단계입니다 

<br><br>

### 리엑트를 사용하면서 브라우저에 라우팅을 구현하기 위해 사용해보신 라이브러리가 있으신가요? 있으시다면 사용하신 경험에대해 간략하게 말씀해주세요
- react-router-dom을 사용해보았습니다.
- 라우팅 뿐만 아니라 Link나 useNavigate로 특정 링크로 이동할 때 사용하였습니다. 또한 outlet을 통해 레이아웃 구성할 때도 사용하였습니다.

<br><br>

### React에서 useRef란 무엇이고 주로 어떤 상황에 사용하는지 말씀해주세요
- React의 Hook 중 하나로, DOM 요소나 컴포넌트 인스턴스에 접근하기 위해 사용됩니다.
- DOM 요소에 접근: useRef를 사용하여 DOM 요소에 대한 참조를 생성하고, 이 참조를 컴포넌트의 ref 속성에 전달하여 DOM 요소에 접근할 수 있습니다.
- 이전 값 저장: useRef는 컴포넌트가 리렌더링될 때마다 초기화되지 않습니다. 따라서 이전 렌더링에서의 값을 저장하는 데 사용할 수 있습니다.

<br><br>

### 리액트의 상태에 대해 설명해주세요.
#### 상태 관리 라이브러리 중 사용해본 경험에 대해 얘기해주세요.
- React의 상태(state)는 컴포넌트의 동적인 데이터를 저장하는 데 사용됩니다. 상태는 컴포넌트 내부에서 관리되며, 상태가 변경되면 컴포넌트가 다시 렌더링됩니다.

<br><br>

### 리덕스의 동작원리에 대해 설명해주세요.
1. 뷰에서 사용자 인터랙션에 따라 액션을 생성합니다.
2. 액션을 스토어의 dispatch 메서드에 전달합니다.
3. 스토어는 리듀서 함수를 호출하여 새로운 상태를 계산합니다.
4. 스토어의 상태가 변경됩니다.
5. 뷰가 스토어의 상태 변경을 감지하고 다시 렌더링됩니다.

<br><br>

### react-query란 무엇인지, 장점과 함께 설명해주세요.
- React Query는 React 애플리케이션에서 서버의 상태를 가져오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리입니다.
- 캐싱: React Query는 가져온 데이터를 자동으로 캐싱합니다. 이를 통해 동일한 데이터를 여러 번 요청할 때 네트워크 요청을 줄일 수 있습니다.
- 데이터 동기화: React Query는 stale time과 refetch interval을 설정하여 데이터를 지속적으로 동기화할 수 있습니다. 이를 통해 항상 최신 데이터를 사용자에게 제공할 수 있습니다.

<br><br>

### 다음 코드를 함수 컴포넌트로 바꿔주세요.
```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

<br><br>

### Virtual Dom (가상돔) 은 무엇인가? 
- Virtual Dom의 diffing 알고리즘에 대해 설명해주세요. 
- 항상 Virtual Dom이 Dom보다 빠를까요? 
- Virtual Dom의 렌더링 과정

<br><br>

### Suspense에 대해 들어보셨나요? suspense란 무엇인가요?

<br><br>

### JSX를 사용하면 장점이 무엇이 있나요?

<br><br>

### JSX에서 props를 어떻게 사용하나요?

<br><br>

### state(상태)와 props(속성)은 컴포넌트의 데이터를 다루는데 핵심적인 역할을 하는데요. 상태와 속성의 차이점은?

<br><br>

### 요즘 리액트에서 데이터 패칭라이브러리가 많이 사용하고있는데요. 데이터 패칭라이브러리가 무엇이고 왜 많이 사용한다고 생각하시나요?

<br><br>

### 리액트 장단점이 무엇이라고 생각하시나요? 단점 보완하는 방안이 있을까요?

<br><br>

### usecallback은 무엇이며 필요한 이유가 무엇인가요?

<br><br>

### forwardref는 무엇이며 어떨때 사용하나요?

<br><br>


<br><br>

## Reference
[재조정 (Reconciliation)](https://ko.reactjs.org/docs/reconciliation.html)
[[ 기술 스터디 ] SSR과 CSR의 차이](https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4)
[함수형 컴포넌트는 왜 함수 컴포넌트가 되었을까?](https://woojenoh.blog/%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%95%A8%EC%88%98-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%80-%EB%90%98%EC%97%88%EC%9D%84%EA%B9%8C)
[React Flux 란?](https://so-tired.tistory.com/95)
[useEffect 잘못 쓰고 계신겁니다.](https://velog.io/@jay/you-might-need-useEffect-diet#data-fetching%EC%9D%80%EC%9A%94)