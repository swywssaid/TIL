# Importing and Exporting Components

> 학습목표  
> <details>
> <summary>1. 리액트에서 루트 컴포넌트 파일은 무엇인가</summary>
> <div>
> 기본으론 'src/App.js'에 있고, 설정 가능하다
> </div>
> </details>
> <details>
> <summary>2. 컴포넌트를 가져오고 내보내기</summary>
> <div>
> 컴포넌트 파일을 생성하고, export and import한다
> </div>
> </details>
> <details>
> <summary>3. default와 named 컴포넌트를 가져오고 내보내는 경우</summary>
> <div>
> default는 한 파일에 하나, named는 여러 컴포넌트를 내보낼 수 있다
> </div>
> </details>
> </details>
> <details>
> <summary>4. 한 파일에서 여러 컴포넌트를 가져오고 내보내는 방법</summary>
> <div>
> 1. 한 파일에선 하나의 default export를 사용하고, 여러개의 named exports를 사용하여 내보냅니다<br> 
> 2. default export를 사용하지 않고, 여러개의 named exports만 사용하여 내보냅니다  
> </div>
> </details>
> </details>
> <details>
> <summary>5. 컴포넌트를 여러 파일로 나누는 방법</summary>
> <div>
> 컴포넌트를 여러 파일로 분리하여 default or named export하고, 그에 상응하는 방식으로 import한다
> </div>
> </details>

<br><br>

- [Importing and Exporting Components](#importing-and-exporting-components)
  - [1. 루트 컴포넌트 파일](#1-루트-컴포넌트-파일)
  - [2. 컴포넌트를 가져오고 내보내기](#2-컴포넌트를-가져오고-내보내기)
  - [3. 한 파일에서 여러 컴포넌트를 가져오고 내보내는 방법](#3-한-파일에서-여러-컴포넌트를-가져오고-내보내는-방법)
    - [3.1. 한 파일에 default and named export 같이 사용하기](#31-한-파일에-default-and-named-export-같이-사용하기)
    - [3.2. 한 파일에 default and named export 같이 사용 안 하기 (파일 분리하기)](#32-한-파일에-default-and-named-export-같이-사용-안-하기-파일-분리하기)

<br><br>

## 1. 루트 컴포넌트 파일
- `create-react-app` 시 앱은 `src/App.js` 에 있다
  - 설정에 따라 다르다, 다른 파일에 있을 수도 있음
- Next.js처럼 파일 기반 라우팅 프레임워크에선, 루트 컴포넌트는 모든 페이지마다 다르다

<br><br>

## 2. 컴포넌트를 가져오고 내보내기
- 컴포넌트를 여러 파일에서 사용해야 한다면 루트 컴포넌트 파일에서 분리하여 관리한다
1. 컴포넌트를 넣을 JS 파일 생성
2. `export` : 컴포넌트를 내보낸다(using either [default or named exports](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export#using_named_exports))
3. `import` : 컴포넌트를 가져온다([importing default or named exports](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import#importing_defaults))


```javascript
// .js 확장자를 없애도 리액트에서 작동함
// .js 붙이는 게 기본 ES 모듈 작동 방식에 더 가까움
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

<br><br>

## 3. 한 파일에서 여러 컴포넌트를 가져오고 내보내는 방법
- 한 파일에선 하나의 default export를 사용하거나, 여러개의 named exports를 사용할 수 있다

> 어떤 방식을 사용하는 지는 선호 문제
> 1. 몇몇 팀에선 하나의 스타일 (default or named)로 정해서 사용  
> 2. 한 파일에서 default and named 같이 사용 피하기

<br>

| Syntax  | Export statement                      | Import statement                        |
| ------- | ------------------------------------- | --------------------------------------- |
| Default | `export default function Button() {}` | `import Button from './button.js';`     |
| Named   | `export function Button() {}`         | `import { Button } from './button.js';` |
- `default export`는 어떤 이름으로도 가져올 수 있다
- `named export`는 내보낸 이름과 동일한 이름을 사용해야 함
  - 식별자 충돌을 피하기 위해, 내보내기 중 이름 바꿀 수 있다
```javascript
  export { myFunction as function1,
         myVariable as variable };
```

<br><br>

### 3.1. 한 파일에 default and named export 같이 사용하기

```jsx
// App.js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
```

```jsx
// Gallery.js
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
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

### 3.2. 한 파일에 default and named export 같이 사용 안 하기 (파일 분리하기)

```jsx
// App.js
import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
```

```jsx
// Gallery.js
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

```jsx
// Profile.js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```

<br><br>

## Reference <!-- omit in toc -->
[Importing and Exporting Components](https://beta.reactjs.org/learn/importing-and-exporting-components)

[export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export#using_named_exports)