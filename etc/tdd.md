# TDD
## TDD(테스트 주도 개발, Test Driven Development) 란

- 테스트 코드를 작성하여 해당 코드를 Pass할 수 있는 코드를 작성하며 개발하는 방법

<br><br>

## React Testing Library

- 리액트 컴포넌트를 테스트하는 가벼운 솔루션!
- 행위 주도 테스트 (Behavior Driven Test)
    - 사용자의 입장에서 테스트
    - `<p>`태그가 쓰이던 `<h3>`태그가 쓰여서 글을 표현하는지가 중요한지 보다 어떠한 이벤트를 발생시켰을때 화면이 어떻게 변화가 되는지 같은 테스트
- 리액트 설치 시 자동 설치

<br><br>

## Jest 란
- 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인
- 단위 (Unit) 테스트를 위해서 이용합니다.
- 특정 형식으로 파일명을 작성하거나 폴더를 생성 시 Jest가 test 파일을 알아서 찾는다.
- 리액트 설치 시 자동 설치

<br><br>

### Jest 파일 구조

```jsx
// 리액트 설치 시 기본 App.test.js

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // learn react 텍스트가 있나
  expect(linkElement).toBeInTheDocument(); // toBeInTheDocument() : matcher
});
```

- `describe` : 여러 관련 테스트를 **그룹화**하는 블록을 만듭니다
- `it` or `test` : **개별 테스트**를 수행하는 곳. 각 테스트를 작은 문장처럼 설명합니다.
<img src="..\image\etc\describe-it.png" width="400" height="350">

<br><br>

- `expect` : 값을 테스트할 때마다 사용
- `matcher` : 다른 방법으로 값을 테스트 하도록 “매처”를 사용
<img src="..\image\etc\expect-matcher.png" width="400" height="350">

<br><br>

- `render(<App />)` 테스트를 하기 전에 먼저 DOM에 컴포넌트를 랜더링하여 밑에서 랜더링한 컴포넌트로 테스트를 하게 된다.
- `getByText` : 쿼리함수이다. 쿼리함수는 아래서 설명

<br><br>

## 쿼리 함수란
- 페이지에서 요소를  찾기 위해 테스트 라이브러리가 제공하는 방법
- `get`, `query`, `find` 가 있다.
    - [React Testing Library 쿼리 함수 종류](https://testing-library.com/docs/dom-testing-library/cheatsheet/)
- `get` 없으면 에러
- `query` 없으면 null, 어설션할 때
- `find` 는 **getBy + waitFor 이다. Promise 반환**
    - 기다렸다 가져오게 하는 것
    - 비동기 처리할 때 사용 (`async/await`)
    - 되면 resolve 에러나면 reject

<img src="..\image\etc\query-function.png" width="400" height="350">

<br><br>

## Reference <!-- omit in toc -->
[따라하며 배우는 리액트 A-Z](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)

[TDD(Test-Driven-Development) 방법론](http://clipsoft.co.kr/wp/blog/tddtest-driven-development-%EB%B0%A9%EB%B2%95%EB%A1%A0/)