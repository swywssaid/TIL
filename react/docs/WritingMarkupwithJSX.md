# Writing Markup with JSX

> 학습목표  
> <details>
> <summary>1. 리액트가 마크업과 렌더링 로직을 혼합한 이유</summary>
> <div>
> HTML는 정보, CSS는 디자인, Javascript는 로직을 담당하였으나, 웹이 복잡해짐에 따라 자바스크립트가 HTML을 담당하게 됨. 따라서 리액트에선 컴포넌트에 로직과 마크업을 같이 렌더링하게 된다
> </div>
> </details>
> <details>
> <summary>2. JSX와 HTML 차이점</summary>
> <div>
> JSX는 HTML과 비슷하게 생겼지만, 더 엄격하고 동적인 정보를 보여줄 수 있다. 또한 오히려 JSX는 바벨과 같은 컴파일러를 통해 자바스크립트로 변환된다
> </div>
> </details>
> <details>
> <summary>3. JSX로 정보를 표시하는 방법</summary>
> <div>
> 크게 3가지 규칙을 지키며 정보를 표현한다<br>
> 1. 단일 루트 요소로 리턴해야 한다<br>
> 2. 모든 태그는 닫여야 함<br>
> 3. 대부분이 camelCase이다
> </div>
> </details>

<br><br>

- [Writing Markup with JSX](#writing-markup-with-jsx)
  - [1. JSX: 자바스크립트에 마크업 넣기](#1-jsx-자바스크립트에-마크업-넣기)
    - [1.1. 리액트가 마크업과 렌더링 로직을 혼합한 이유](#11-리액트가-마크업과-렌더링-로직을-혼합한-이유)
  - [2. HTML을 JSX로 바꾸기](#2-html을-jsx로-바꾸기)
  - [3. JSX의 규칙](#3-jsx의-규칙)
    - [3.1. 단일 루트 요소로 리턴해야 한다](#31-단일-루트-요소로-리턴해야-한다)
    - [3.2. 모든 태그는 닫여야 함](#32-모든-태그는-닫여야-함)
    - [3.3. 대부분이 camelCase이다](#33-대부분이-camelcase이다)
  - [4. 전문가 팁: JSX 변환기 사용](#4-전문가-팁-jsx-변환기-사용)

<br><br>

## 1. JSX: 자바스크립트에 마크업 넣기
- JSX는 자바스크립트 파일에서 HTML과 유사한 마크업을 넣을 수 있는 자바스크립트 확장 문법이다.

> JSX와 리액트는 별개의 것이다. JSX는 자바스크립트 확장 문법, 리액트는 자바스크립트 라이브러리이다. 단지 리액트에서 JSX를 즐겨 사용하는 것일 뿐

<br>

### 1.1. 리액트가 마크업과 렌더링 로직을 혼합한 이유
- HTML는 정보, CSS는 디자인, Javascript는 로직을 담당하였으나, 웹이 복잡해짐에 따라 자바스크립트가 HTML을 담당하게 됨. 따라서 리액트에선 컴포넌트에 로직과 마크업을 같이 렌더링하게 된다

- 버튼(컴포넌트)의 로직과 마크업은 매 수정마다 동기화 됨
  - 버튼과 사이드바의 마크업처럼 관계가 없는 건 서로 독립적이기 때문에 안전하다

<br><br>

## 2. HTML을 JSX로 바꾸기
- JSX는 HTML과 비슷하게 생겼지만, 더 엄격하고 동적인 정보를 보여줄 수 있다.

<br><br>

## 3. JSX의 규칙
### 3.1. 단일 루트 요소로 리턴해야 한다
- 여러 요소를 반환하려면, 하나의 부모 태그로 감싸야 한다.
  - `<div>` , `<>` 등으로

> `<>`는 Fragment로 브라우저 HTML 트리에 아무 흔적을 남기지 않는다.

<br>

> 여러 JSX 태그들을 감싸야 하는 이유?
> JSX는 HTML처럼 보이지만, 자바스크립트 객체로 변환된다. 함수(리액트에선 컴포넌트)에선 배열에 담는 것이 아니면, 두 객체를 반환할 수 없다. 따라서, 두 개의 JSX 태그를 단일 부모 태그로 감싸지 않고는 반환할 수 없는 것이다.

> JSX는 바벨과 같은 컴파일러를 통해 자바스크립트로 변환된다

<br>

**확인필요~!**
> 리액트가 사용하는 Virtual DOM 방식에서는 컴포넌트 변화를 감지할 때 효율적으로 비교하고자 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙

<br><br>

### 3.2. 모든 태그는 닫여야 함
- JSX에서는 태그가 명시적으로 닫혀야 한다

```jsx
// 아래와 같이 닫아줘야 함
// 자동 닫힘 태그: <img>
<img />

// 한쪽만 있는 래핑 태그: <li>orange
<li>orange</li>
```

<br><br>

### 3.3. 대부분이 camelCase이다
- JSX는 자바스크립트로 변환되고, JSX의 속성은 객체의 키값이 된다. 자바스크립트에선 대쉬(-)와 class와 같은 예약어를 변수명으로 사용할 수 없다. 
- 따라서 HTML과 SVG의 속성이 camelCase로 적힌다. 

```jsx
`stroke-width` ->  `strokeWidth`
`class` -> `className`
```

<br><br>

**참고**

- DOM을 조작하는 데 사용되는 많은 언어에서 "class" 키워드와의 충돌 때문에 class 대신 이 속성에 className이라는 이름이 사용됩니다.

```javascript
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";

```

<br>

> 자바스크립트 변수 작성 규칙
> 1. 언더바(_)는 되지만 대쉬(-)는 안 됨
> 2. 첫 글자로 숫자 안 됨
> 3. 예약어 안 됨(class, for, if 등)

<br><br>

## 4. 전문가 팁: JSX 변환기 사용
- [변환기](https://transform.tools/html-to-jsx)를 사용하면 편하지만, 스스로 적을 수 있도록 원리를 이해하는 것이 중요하다!

<br><br>

## Reference<!-- omit in toc -->
[Writing Markup with JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)

[Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)

[JSX 변환기](https://transform.tools/html-to-jsx)