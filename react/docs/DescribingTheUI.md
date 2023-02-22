# 첫 컴포넌트

> 학습목표  
> <details>
> <summary>1. 컴포넌트란 무엇인가</summary>
> <div>
> 재사용 가능한 UI 요소이며, 마크업을 뿌릴 수 있는 자바스크립트 함수
> </div>
> </details>
> <details>
> <summary>2. 리엑트 앱에서 컴포넌트의 역할</summary>
> <div>
> 마크업, CSS, Javascript를 결합해 사용자 정의 UI 요소로써 재사용할 수 있다
> </div>
> </details>
> <details>
> <summary>3. 컴포넌트 작성</summary>
> <div>
> 아래를 제외하면 일반 자바스크립트 함수와 같다<br>
> 1. 컴포넌트는 대문자로 시작한다<br>  
> 2. 컴포넌트는 JSX를 반환한다  
> </div>
> </details>

- [첫 컴포넌트](#첫-컴포넌트)
  - [1. 컴포넌트란 무엇인가](#1-컴포넌트란-무엇인가)
  - [2. 리엑트 앱에서 컴포넌트의 역할](#2-리엑트-앱에서-컴포넌트의-역할)
  - [3. 컴포넌트 작성](#3-컴포넌트-작성)
    - [3.1. 컴포넌트 내보내기](#31-컴포넌트-내보내기)
    - [3.2. 함수 정의](#32-함수-정의)
    - [3.3. 마크업 추가](#33-마크업-추가)
  - [4. 컴포넌트의 사용](#4-컴포넌트의-사용)
    - [4.1. 브라우저에 표시되는 것](#41-브라우저에-표시되는-것)
  - [5. 컴포넌트 중첩과 구성](#5-컴포넌트-중첩과-구성)
    - [5.1. 컴포넌트 중첩](#51-컴포넌트-중첩)
    - [5.2. 컴포넌트 구성](#52-컴포넌트-구성)

<br><br>

## 1. 컴포넌트란 무엇인가
- 재사용 가능한 UI 요소이며, 마크업을 뿌릴 수 있는 자바스크립트 함수

<br><br>

## 2. 리엑트 앱에서 컴포넌트의 역할
- 마크업, CSS, javascript를 결합해 사용자 정의 UI 요소로써 재사용할 수 있다 

<br><br>

## 3. 컴포넌트 작성
### 3.1. 컴포넌트 내보내기
- `export default`는 자바스크립트 표준 문법이다.
  - 내보내기할 메인 함수를 나타내는 문법

```jsx
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```

<br><br>

### 3.2. 함수 정의
- 컴포넌트의 이름은 대문자로 시작한다 (안 그러면 작동 안 함)

<br><br>

### 3.3. 마크업 추가
- 컴포넌트는 JSX 마크업을 반환한다
  - HTML처럼 보이지만 실제론 자바스크립트이다
  - 이는 JSX라 하며 자바스크립트 안에 마크업을 삽입할 수 있도록 돕는 문법이다
- JSX의 반환문은 한 줄로 작성할 수 있으며, 한 줄이 아니라면 괄호로 묶어야 한다

```jsx
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

<br><br>

## 4. 컴포넌트의 사용
- 컴포넌트는 중첩해서 사용 가능

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

<br><br>

### 4.1. 브라우저에 표시되는 것
- 대소문자에 따라 다르다
  1. `<section>` 은 소문자이기 때문에, 리엑트가 HTML 태그로 인식
  2. `<Profile />` 은 대문자로 시작하기 때문에, 리엑트가 컴포넌트로 인식
- 결국 브라우저에 표시되는 내용은 다음과 같다

```jsx
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

<br><br>

## 5. 컴포넌트 중첩과 구성
### 5.1. 컴포넌트 중첩
- 컴포넌트는 중첩이 가능하다
   - 부모 컴포넌트와 자녀 컴포넌트

<br><br>

### 5.2. 컴포넌트 구성
- 컴포넌트를 정의할 땐 최상위 레벨에서 정의한다
  - 컴포넌트 내에서 정의하면, 매우 느려지고 버그 생김
  - 인자를 전달해야 한다면, props 사용

<br><br>

## Reference <!-- omit in toc -->
https://beta.reactjs.org/learn/describing-the-ui