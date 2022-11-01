# TAG <!-- omit in toc -->
- [1. TAG](#1-tag)
  - [1.1. 제목과 단락요소](#11-제목과-단락요소)
    - [1.1.1. 제목 태그 (heading)](#111-제목-태그-heading)
    - [1.1.2. 단락 태그 (paragraph)](#112-단락-태그-paragraph)
    - [1.1.3. 개행 태그 (linebreak)](#113-개행-태그-linebreak)
  - [1.2. 텍스트 표현 요소](#12-텍스트-표현-요소)
    - [1.2.1. `<b>`](#121-b)
    - [1.2.2. `<i>`](#122-i)
    - [1.2.3. `<u>`](#123-u)
    - [1.2.4. `<s>`](#124-s)
  - [1.3. 앵커 (Anchor)](#13-앵커-anchor)
  - [1.4. 의미가 없는 컨테이너 요소](#14-의미가-없는-컨테이너-요소)
    - [1.4.1. `<div>` vs `<span>`](#141-div-vs-span)
  - [1.5. 리스트 요소](#15-리스트-요소)
    - [1.5.1. `<ul>` (unordered list)](#151-ul-unordered-list)
    - [1.5.2. `<ol>` (ordered list)](#152-ol-ordered-list)
    - [1.5.3. `<dl>` (definition/description list)](#153-dl-definitiondescription-list)
  - [1.6. 이미지 요소](#16-이미지-요소)
    - [1.6.1. `src` 속성 : 이미지의 경로, 필수 속성](#161-src-속성--이미지의-경로-필수-속성)
    - [1.6.2. `alt` 속성 : 대체 텍스트](#162-alt-속성--대체-텍스트)
    - [1.6.3. `width/height` 속성 : 이미지의 가로/세로 크기](#163-widthheight-속성--이미지의-가로세로-크기)
    - [1.6.4. 이미지 파일 형식](#164-이미지-파일-형식)
  - [1.7. 테이블 요소](#17-테이블-요소)
    - [1.7.1. 표의 구성 요소](#171-표의-구성-요소)
    - [1.7.2. 표의 구조와 관련된 태그](#172-표의-구조와-관련된-태그)
    - [1.7.3. 복잡한 표](#173-복잡한-표)
  - [1.8. 폼 요소](#18-폼-요소)
    - [1.8.1. `<input> type`](#181-input-type)
    - [1.8.2. `<select>, <textarea>, <button>`](#182-select-textarea-button)
      - [1.8.2.1. `<select>`](#1821-select)
      - [1.8.2.2. `<textarea>`](#1822-textarea)
      - [1.8.2.3. `<button>`](#1823-button)
    - [1.8.3. `<label>, <fieldset>, <legend>, <form>`](#183-label-fieldset-legend-form)
      - [1.8.3.1. `<label>`](#1831-label)
      - [1.8.3.2. `<fieldset>, <legend>`](#1832-fieldset-legend)
      - [1.8.3.3. `<form>`](#1833-form)

<br><br>

# 1. TAG
- 텍스트를 정보로써 표현하기 위한 수단.
  - HTML 버전 업그레이드 시 태그 추가/삭제.
  - 기본 태그(html, head 등)을 제외하면 실제 사용 태그 적음.

<br><br>

## 1.1. 제목과 단락요소
### 1.1.1. 제목 태그 (heading)
- 문서 내에 제목을 표현할 때 사용하는 태그
  - heading을 줄여서 h.
  - `<h1>`~`<h6>`
  - 일반 텍스트보다 더 강조되는 스타일.

<br><br>

### 1.1.2. 단락 태그 (paragraph)
-  paragraph를 줄여서 p.
-  `<p>` 사용 시 자동 개행.

<br><br>

### 1.1.3. 개행 태그 (linebreak)
- linebreak 를 줄여서 br. 

<br><br>

## 1.2. 텍스트 표현 요소
- 텍스트를 표현해주는 태그
  - 웹 표준화가 대두하면서 웹 문서의 구조와 표현을 분리
  - 의미가 없는 표현용 태그는 사용 시 주의

<br><br>

### 1.2.1. `<b>`
- bold 태그는 글자를 굵게 표현하는 태그입니다.

<br><br>

### 1.2.2. `<i>`
- italic 태그는 글자를 기울여서 표현하는 태그입니다.
  - 특정 이유(기술적인 용어, 외국어 문구, 소설속 인물의 생각 등)로 다른 글자와 구분.
  - 단순 표현용 태그에서 의미를 가지는 태그로 변경

<br><br>

### 1.2.3. `<u>` 
- underline 태그는 글자의 밑줄을 표현하는 태그입니다.

<br><br>

### 1.2.4. `<s>` 
- strike 태그는 글자의 중간선을 표현하는 태그입니다.

<br><br>

## 1.3. 앵커 (Anchor)
- 링크를 생성 태그.
  -  a태그, 앵커, 링크 등으로 불림.
- `href` 속성
  -  목적지가 되는 URL, 필수 속성.
- `target` 속성
  - 링크된 리소스 표시 위치.
  - `_self` : 현재 페이지
  - `_blank` : 새 창
- 내부링크 가능
  -  href 속성값에 # + id 속성값.
  -  top 또는 맨 위로 이동하기 버튼 등.

<br><br>



## 1.4. 의미가 없는 컨테이너 요소
- 태그 자체에 아무 의미가 없으며, 단순히 요소들을 묶기 위해 사용되는 태그
  - 스타일을 주거나 서버에 보내는 데이터를 담기 위한 용도
  - 사용빈도는 매우 높음.
    - html 태그들은 문서를 웹에 나타내기 위해 제작, 기본적으로 문서에 최적화.
    - 현재 웹의 형태는 문서 형태에서 많이 벗어남.
  
<br>

### 1.4.1. `<div>` vs `<span>`
- div(division) 태그
  - 블록 레벨 태그    
- span 태그
  - 인라인 레벨 태그

<br><br>

## 1.5. 리스트 요소
### 1.5.1. `<ul>` (unordered list)
- 순서가 없는 리스트

### 1.5.2. `<ol>` (ordered list)
- 순서가 있는 리스트

### 1.5.3. `<dl>` (definition/description list)
- 용어와 그에 대한 정의를 표현
  - `<dt>` : 용어를 나타내는 태그
  - `<dd>` : 용어에 대한 정의 또는 설명을 나타내는 태그
    - 용어 하나에 여러 정의가 들어갈 때, `<dd>`를 한 개 이상 쓰는 것 가능.

```html
<dl>
    <dt>리플리 증후군</dt>
    <dd>허구의 세계를 진실이라 믿고 거짓된 말과 행동을 상습적으로 반복하는 반사회적 성격장애를 뜻하는 용어</dd>
    <dt>피그말리온 효과</dt>
    <dd>타인의 기대나 관심으로 인하여 능률이 오르거나 결과가 좋아지는 현상</dd>
    <dt>언더독 효과</dt>
    <dd>사람들이 약자라고 믿는 주체를 응원하게 되는 현상</dd>
</dl>
```

<br><br>

## 1.6. 이미지 요소
- `<img>` : 문서에 이미지를 삽입하는 태그

<br>

### 1.6.1. `src` 속성 : 이미지의 경로, 필수 속성
  - 상대경로/절대경로

<br>

### 1.6.2. `alt` 속성 : 대체 텍스트
  - 대체 텍스트는 이미지를 대체하는 글
  - 웹 접근성 측면에서 중요한 속성
  - src 속성과 더불어 반드시 들어가야 하는 속성
  - 시각장애인분들의 경우 스크린 리더기를 통해 이미지를 파악하는데 이때 alt 속성을 읽게 됨.

<br>

### 1.6.3. `width/height` 속성 : 이미지의 가로/세로 크기
  - default pixel
  - 선택적인 속성 
  - 이미지의 크기 고정적이면 선언하는 것이 성능적인 측면에서 좋음.

<br>

### 1.6.4. 이미지 파일 형식  
- gif : 제한적인 색을 사용하고 용량이 적으며 투명 이미지와 애니메이션 이미지를 지원하는 형식
- jpg : 사진이나 일반적인 그림에 쓰이며 높은 압축률과 자연스러운 색상 표현을 지원하는 형식(투명을 지원하지 않는다.)
- png : 이미지 손실이 적으며 투명과 반투명을 모두 지원하는 형식

<br><br>

## 1.7. 테이블 요소
### 1.7.1. 표의 구성 요소
- `<table>` : 표를 나타내는 태그  
- `<tr>` : 행을 나타내는 태그  
- `<th>` : 제목 셀을 나타내는 태그  
- `<td>` : 셀을 나타내는 태그  

<table>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
    </tr>
    <tr>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
    </tr>
</table>

```html
<table>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
    </tr>
    <tr>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
    </tr>
</table>

```

- 테두리 설정 css
```css

<style>
    th, td { border: 1px solid; }
</style>

```

<br><br>

### 1.7.2. 표의 구조와 관련된 태그

- `<caption>`: 표의 제목을 나타내는 태그
- `<thead>`: 제목 행을 그룹화하는 태그
- `<tfoot>`: 바닥 행을 그룹화하는 태그
- `<tbody>`: 본문 행을 그룹화하는 태그

<table>
    <caption>Monthly Savings</caption>
    <thead>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Sum</td>
            <td>$180</td>
        </tr>
    </tfoot>
</table>

```html
<table>
    <caption>Monthly Savings</caption>
    <thead>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Sum</td>
            <td>$180</td>
        </tr>
    </tfoot>
</table>

```

<br><br>

### 1.7.3. 복잡한 표
- `rowspan` 속성 : 행(가로)를 세로로 합치는 건
- `colspan` 속성 : 열(세로)를 가로로 합치는 건
- `<colgroup>`
- `<col>`
- `scope` 속성
- `header` 속성


<table>
  <caption>Specification values</caption>
  <thead>
  <tr>
    <th rowspan="2">Grade.</th>
    <th rowspan="2">Point.</th>
    <th colspan="2">Strength.</th>
    <th rowspan="2">Percent.</th>
  </tr>
  <tr>
    <th>kg/mm</th>
    <th>lb/in</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Hard</td>
    <td>0.45</td>
    <td>56.2</td>
    <td>80,000</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>0.45</td>
    <td>49.2</td>
    <td>70,000</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Soft</td>
    <td>0.45</td>
    <td>42.2</td>
    <td>60,000</td>
    <td>30</td>
  </tr>
  </tbody>
</table>

```html
<table>
  <caption>Specification values</caption>
  <thead>
  <tr>
    <th rowspan="2">Grade.</th>
    <th rowspan="2">Point.</th>
    <th colspan="2">Strength.</th>
    <th rowspan="2">Percent.</th>
  </tr>
  <tr>
    <th>kg/mm</th>
    <th>lb/in</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Hard</td>
    <td>0.45</td>
    <td>56.2</td>
    <td>80,000</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>0.45</td>
    <td>49.2</td>
    <td>70,000</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Soft</td>
    <td>0.45</td>
    <td>42.2</td>
    <td>60,000</td>
    <td>30</td>
  </tr>
  </tbody>
</table>
```

<br><br>

## 1.8. 폼 요소
- 사용자로부터 데이터를 받아야 하는 경우 사용되는 요소
  - 서버에 데이터를 전달하기 위한 요소
  - `<input>` 이 대표적.
  - `<select>, <textarea>, <button>`
  - `<label>, <fieldset>, <legend>, <form>`

### 1.8.1. `<input> type`
- `type = "text"` : 아이디, 이름, 주소, 전화번호 등 단순한 텍스트
- `placeholder` : 미리 화면에 노출하는 값, 입력하는 값의 양식
- `type = "password"` : 암호와 같이 공개할 수 없는 내용, 값을 노출 안함
- `type = "radio"` : 라디오 버튼, 중복 선택이 불가능
- `type = "checkbox"` : 체크박스, 중복 선택이 가능
- `type = "file"` : 파일을 서버에 올림
- `type="submit|reset|image|button"`
  - 모두 클릭 가능한 버튼 
  - submit : form의 값을 전송하는 버튼
  - reset : form의 값을 초기화하는 버튼
  - image : 이미지를 삽입할 수 있는 버튼 (submit과 동작이 동일함)
    -  src, alt 속성이 반드시 필요하며 width/height 속성을 적용 가능
  - button : 아무 기능이 없는 버튼

<br><br>

### 1.8.2. `<select>, <textarea>, <button>`
- 폼 요소의 종류
  
<br><br>

#### 1.8.2.1. `<select>`
- 선택 목록 상자 또는 콤보박스
  - multiple 속성을 사용하면 다중 선택도 가능
  - ctrl 누르면서 선택해도 됨  
  - `<option>`의 속성으로는 `selected`가 있으며 이는 선택된 항목


<select>
    <option>서울</option>
    <option>경기</option>
    <option>강원</option>
</select>

```html
<select>
    <option>서울</option>
    <option>경기</option>
    <option>강원</option>
</select>
```
<br><br>

#### 1.8.2.2. `<textarea>`
- 여러 줄의 텍스트를 입력
  - 상자의 크기를 조절하는 `rows, cols` 속성
    - cols : 가로 크기를 조절하는 속성(한 줄에 들어가는 글자의 수, 수치의 의미는 평균적인 글자의 너비로 정확히 글자 수를 나타내지는 않음.)
    - rows : 세로 크기를 조절하는 속성(화면에 보여지는 줄 수)


<textarea rows="5" cols="30">
    ...
</textarea>

```html
<textarea rows="5" cols="30">
    ...
</textarea>
```

<br><br>

#### 1.8.2.3. `<button>`
- 버튼을 만들 때 사용
  - `submit, reset, button` 3가지의 타입
    - input 타입의 `submit, reset, button` 과 같은 기능.
    - 다만, 빈 태그가 아님. 내용을 안에 직접 넣을 수 있으므로 좀 더 자유로운 스타일 표현 가능

<br><br>

### 1.8.3. `<label>, <fieldset>, <legend>, <form>`

<br><br>

#### 1.8.3.1. `<label>`
- form 요소의 이름과 form 요소를 명시적으로 연결
  - 모든 form 요소에서 사용 가능.
  - form 요소의 id 속성값과 `<label>`의 for 속성값 같아야 함.
  - `<label>` 클릭 시 form 요소 클릭한 것처럼 동작
  - 스크린 리더기에서  form 요소에 접근 시 `<label>`읽음
  - 사용성, 접근성적인 측면으로 중요한 역할, 반드시 쓰자.

<br><br>

#### 1.8.3.2. `<fieldset>, <legend>`
- form 요소를 구조화
- `<fieldset>` : 여러 개의 폼 요소를 그룹화하여 구조적으로 만들기 위해 사용
  - 보통 form의 성격으로 구분
- `<legend>` : 폼 요소의 제목으로 `<fieldset>` 내부에 작성
  - `<fieldset>`의 자식으로 반드시 최상단에 위치

<fieldset>
    <legend>기본 정보</legend>
    ... 폼 요소들 ...
</fieldset>
<fieldset>
    <legend>부가 정보</legend>
    ... 폼 요소들 ...
</fieldset>

```html
<fieldset>
    <legend>기본 정보</legend>
    ... 폼 요소들 ...
</fieldset>
<fieldset>
    <legend>부가 정보</legend>
    ... 폼 요소들 ...
</fieldset>
```

<br><br>

#### 1.8.3.3. `<form>`
- form 요소들을 감싸는 태그
  - 데이터를 묶어서 실제 서버로 전송
  - `<fieldset>`으로 구조화 시 함께 `<fieldset>`도 감쌈
- `action`: 데이터를 처리하기 위한 서버의 주소
- `method`: 데이터를 전송하는 방식을 지정
  - get/post

<br><br>

## Reference <!-- omit in toc -->

[tag ranking](https://www.advancedwebranking.com/seo/html-study/#overview)

[`<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

[`<ul>`: The Unordered List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

[`<ol>`: The Ordered List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

[`<dl>`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

[`<table>`: The Table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

[비전공자를 위한 HTML/CSS](https://www.boostcourse.org/cs120/lecture/92885?isDesc=false)

[`<input>`: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)