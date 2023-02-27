# Passing Props to a Component

> 학습목표  
> <details>
> <summary>1. props란</summary>
> <div>
> 컴포넌트 간에 정보를 주고 받는 수단이다. 컴포넌트에 대한 유일한 인자이다.
> </div>
> </details>
> <details>
> <summary>2. 컴포넌트에 props 전달하고 읽는 방법</summary>
> <div>
> 1. 부모 컴포넌트에서 자녀 컴포넌트로 HTML 속성처럼 값을 전달<br>
> 2. 자녀 컴포넌트에선 {} 로 인자를 받는다
> </div>
> </details>
> <details>
> <summary>3. props default 값 지정 방법</summary>
> <div>
> 구조 분해 할당을 사용합니다. props 내에서 `=`를 통해 지정한다.<br>
> prop 값을 전달 받지 않거나 undefined일 때 default 값이 사용되고, null이나 0일 땐 사용되지 않습니다
> </div>
> </details>
> <details>
> <summary>4. 컴포넌트로 JSX 전달하기</summary>
> <div>
> children prop을 통해 부모 컴포넌트로 전달하게 됩니다
> </div>
> </details>
> > <details>
> <summary>5. 시간에 따라 어떻게 props 변화하는지</summary>
> <div>
> 변경된 값을 받거나 set state를 통해 변경을 요청하게 됩니다. <br>
> props는 immutable하며 자녀 컴포넌트에서 직접 변경하면 안 됩니다.
> </div>
> </details>

<br><br>

- [Passing Props to a Component](#passing-props-to-a-component)
  - [1. 컴포넌트에 props 전달하는 방법](#1-컴포넌트에-props-전달하는-방법)
  - [2. 컴포넌트의 유일한 인자이다!](#2-컴포넌트의-유일한-인자이다)
  - [3. props에 default값 전달하기](#3-props에-default값-전달하기)
  - [4. 스프레드 연산자를 통한 props 전달](#4-스프레드-연산자를-통한-props-전달)
  - [5. children으로 JSX 전달하기](#5-children으로-jsx-전달하기)
  - [6. props의 변화](#6-props의-변화)


<br><br>

## 1. 컴포넌트에 props 전달하는 방법 
- 부모 컴포넌트에서 자녀 컴포넌트로 전달해서 변수처럼 사용 가능하다.

```jsx
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
```

<br><br>

## 2. 컴포넌트의 유일한 인자이다! 
- 컴포넌트는 단일 인자로 props 객체를 받는다  
  - 변수 각각이 props가 아니고 {a,b,c} 객체 자체가 props다. a, b, c는 prop이라고 한다
  - 따라서 `()` 안에 `{}`를 빼먹으면 안 된다

```jsx
// { person, size }가 props 객체
function Avatar({ person, size }) {
  // ...
}

// 구조 분해 할당으로 함수 파라미터로부터 속성값 읽는 것과 동일하다
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

```

<br><br>

## 3. props에 default값 전달하기
- props 내에서 `=`를 사용해 구조 분해 할당을 한다.
  - size prop이 전달되지 않거나, `size={undefined}`이면 default값으로 설정된다
  - `size={null}`,`size={0}`일 땐 default값 사용 안 됨

```jsx
// =를 통해 default값 설정
function Avatar({ person, size = 100 }) {
  // ...
}

// size prop이 없어도 100이 기본값이다
<Avatar person={...} />

```

<br><br>

## 4. 스프레드 연산자를 통한 props 전달
- 전달 받은 props를 그대로 자녀 컴포넌트에 전달한다면 스프레드 연산자를 통해 props를 전달할 수 있다
  - 제한적으로 사용해야 한다. 사용이 잦은 경우 문제가 있다는 것임. 컴포넌트를 분리하고 자식을 JSX로 전달해야 할 수 있다. 추후 자세히 살펴볼 예정

```jsx
// Profile은 전달 받은 props를 직접 사용하지 않는다. 또한 전달 받은 props를 그대로 전달한다
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

// 스프레드 연산자를 통해 그대로 전달하게 된다
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

<br>

## 5. children으로 JSX 전달하기
- `children` prop을 통해 JSX를 부모 컴포넌트로 전달할 수 있다.
  - visual wrappers으로 자주 사용: 패널, 그리드 등

```html
<!--내장 브라우저 태그 중첩-->
<div>
  <img />
</div>
```

```javascript
// 컴포넌트 중첩
<Card>
  <Avatar />
</Card>
```

```javascript
// Avatar 컴포넌트가 children prop이 된다
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

<img src="..\..\image\react\docs\children.png" width="400" height="350">

> children이라는 구멍이 있다고 생각

<br><br>

## 6. props의 변화
- props는 고정된 값이 아니고 바뀔 수 있다.
  - props 자체는 immutable(불변)하다. 
  - 즉, 직접 변경해선 안 되고 set state를 사용해서 변경할 수 있다.


<br><br>

## Reference<!-- omit in toc -->
[Passing Props to a Component](https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children)
