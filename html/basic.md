# 1. Basic


- [1. Basic](#1-basic)
  - [1.1. 속성](#11-속성)
  - [1.2. 빈 태그(Empty Tag)](#12-빈-태그empty-tag)
  - [1.3. 공백](#13-공백)
  - [1.4. 주석(comment tags)](#14-주석comment-tags)
  - [1.5. HTML 문서의 기본구조](#15-html-문서의-기본구조)
    - [1.5.1. `<!doctype>`](#151-doctype)
    - [1.5.2. `<html>`](#152-html)
    - [1.5.3. `<head>`](#153-head)
    - [1.5.4. `<body>`](#154-body)

<br><br>

## 1.1. 속성
- 태그에 추가로 정보를 제공하거나 태그의 동작이나 표현을 제어할 수 있는 설정값
    - 속성의 선언 순서는 태그에 영향을 미치지 않음.
    - 글로벌 속성과 특정 태그 속성 구분.
    - 필수 속성과 옵션 속성 구분.

```html
<h1 id="title" class="main">Hello, HTML</h1>

<!--class를 id보다 먼저 선언해도 결과는 같다-->
```

<br><br>

## 1.2. 빈 태그(Empty Tag)

- 쌍으로 이루어지지 않은 단일 태그
    - 내용이 없는 빈 태그, 내용이 없어서 종료 태그가 필요없다.

<br><br>

## 1.3. 공백

- 기본적으로 HTML은 두 칸 이상의 공백을 모두 무시합니다.

```html
<h1>Hello, HTML</h1>
<h1>Hello,     HTML</h1>
<h1>
    Hello,
    HTML
</h1>

<!--결과 Hello, HTML로 동일-->
```

<br><br>

## 1.4. 주석(comment tags)

- 주석은 화면에 노출되지 않고 메모의 목적으로만 사용하는 것
    - 브라우저는 해당 부분을 인식하여 해석하지 않습니다.

```html
<!-- 여기에 작성되는 내용들은 모두 주석 처리가 됩니다. -->
<!-- 주석은 여러 줄로 작성할 수도 있습니다.
    <h1>Hello, HTML</h1>
    위 <h1>태그는 브라우저가 해석하지 않습니다.
-->
```

<br><br>

## 1.5. HTML 문서의 기본구조

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>HTML</title>
    </head>
    <body>
        <h1>Hello, HTML</h1>
    </body>
</html>
```

### 1.5.1. `<!doctype>`
    - 브라우저에게 이 문서가 어떤 문서인지 알려줌.
    - 최상단, 제일 먼저 나와야함.
    - 태그 아님.

### 1.5.2. `<html>`
    - `lang` 속성
        - 브라우저가 어떤 언어로 작성됐는지 참고하도록 알려줌.

### 1.5.3. `<head>`
    - 브라우저 화면에 표시되진 않고 문서의 기본정보 나타냄.
    - 외부 파일 연결 (css, js 등)
    - `<meta>`
        - `charset` 속성
            - 문자의 인코딩 방식 지정, UTF-8이 가장 기본적.
            - 서버와 관련있음.
    - `<title>`
        - 탭바에 노출되는 내용
        - 최적화, 검색엔진에 중요하기 때문에 적절하게 설정.


### 1.5.4. `<body>`
    - 실제 브라우저 화면에 나타나는 태그들 위치.

<br><br>

## 1.6. Reference <!-- omit in toc -->

[Void element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)


