# Rendering Lists

> 학습목표  
> <details>
> <summary>1. map을 통한 컴포넌트 렌더링 방식</summary>
> <div>
>
> </div>
> </details>
> <details>
> <summary>2. filter을 통한 특정 컴포넌트 렌더링 방식</summary>
> <div>
> 
> </div>
> </details>
> > <details>
> <summary>3. 키를 사용할 때와 사용 이유</summary>
> <div>
> 아이템이 정렬되거나, 삽입, 삭제될 때 키를 통해 추적하고 돔 트리를 정확히 업데이트하게 하기 위해서.
> </div>
> </details>

<br><br>

- [Rendering Lists](#rendering-lists)
  - [1. map을 통한 컴포넌트 렌더링 방식](#1-map을-통한-컴포넌트-렌더링-방식)
  - [2. filter을 통한 특정 컴포넌트 렌더링 방식](#2-filter을-통한-특정-컴포넌트-렌더링-방식)
  - [3. 키를 사용할 때와 사용 이유](#3-키를-사용할-때와-사용-이유)
    - [3.1. 키가 없을 시 에러 발생](#31-키가-없을-시-에러-발생)
    - [3.2. 키를 사용하는 이유](#32-키를-사용하는-이유)
    - [3.3. 키를 얻는 방법](#33-키를-얻는-방법)
    - [3.4. 키의 규칙](#34-키의-규칙)
    - [3.5. 리액트가 키를 사용하는 이유](#35-리액트가-키를-사용하는-이유)
    - [3.6. 키 생성 시 주의할 점](#36-키-생성-시-주의할-점)

<br><br>

## 1. map을 통한 컴포넌트 렌더링 방식
- 배열 내의 정보를 이용해 비슷한 여러 컴포넌트를 렌더링하고 싶을 때 사용

```javascript
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
}
```

<br><br>

## 2. filter을 통한 특정 컴포넌트 렌더링 방식
- 조건이 맞는 특정 컴포넌트를 렌더링하고 싶을 때 사용

```javascript
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

<br><br>

## 3. 키를 사용할 때와 사용 이유

### 3.1. 키가 없을 시 에러 발생
- 위의 코드들을 실행 시키면 아래와 같은 에러가 발생한다

```text
Warning: Each child in a list should have a unique “key” prop.
```

<br><br>

### 3.2. 키를 사용하는 이유
- 키는 각각의 컴포넌트에 상응하고 나중에 매치된다.
- 배열 내 아이템이 정렬되거나, 삽입, 삭제될 때 키를 통해 추적하고 돔 트리를 정확히 업데이트하게 된다.

> 키를 즉석에서 생성하는 것보단, 데이터 자체에 포함시켜야 한다

<br><br>

### 3.3. 키를 얻는 방법
1. DB에서 얻는 데이터: DB에서 고유한 키/ID 받기
2. 로컬에서 생성되는 데이터: 증분 카운터 `crypto.randomUUID()`나 `uuid` 같은 패키지를 사용
   - e.g. 메모 작성 앱의 메모

<br><br>

### 3.4. 키의 규칙
1. 키는 형제들 사이에서 유니크 해야 한다. 단, 다른 배열에 JSX 노드에선 같은 키 사용해도 된다.
2. 키는 변경되면 안 되고, 목적에 맞게 사용. 렌더링하는 동안 생성하지 말기

<br><br>

### 3.5. 리액트가 키를 사용하는 이유
- 폴더 내 폴더 명과 유사하다. 키가 없다면 정렬, 삽입, 삭제 시 혼란이 있을 수 있다.
- 위치가 바뀌더라도 키를 통해 생명주기 동안 아이템을 식별할 수 있다 

<br><br>

### 3.6. 키 생성 시 주의할 점
1. 인덱스로 키 생성하지 말기
- 배열이 바뀌면 버그 발생 우려

<br><br>

1. 즉석에서 키 생성하지 말기 `key={Math.random()}`

- 렌더링 간에 키가 일치하지 않아 모든 컴포넌트와 DOM이 재렌더링 됨.

> 컴포넌트는 `key`를 prop으로 받지 않음. 즉 유저가 사용하기 위해서 입력하는 것이 아닌, 리액트가 구분을 위해 사용하는 것. 컴포넌트에서 ID가 필요하다면 `<Profile key={id} userId={id} />`와 같이 다른 아이디를 전달

<br><br>

## Reference <!-- omit in toc -->
[Rendering Lists](https://beta.reactjs.org/learn/rendering-lists)