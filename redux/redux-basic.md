Redux

## Redux
A predictable state container for JavaScript apps.

- 소프트웨어를 개발할 때 복잡성이 위협적
  - 눈에 보이지 않기 때문

Single Source of Truth
- 여기서 상태는 객체

- module


<img src="..\image\redux\redux.png" width="600" height="330">

## redux 개관
<img src="..\image\redux\redux2.png" width="600" height="330">

- store
  - 글목록, 현재선택한 글정보 등의 정보가 모두 저장됨
  - 은행이라고 생각해보자
- state
  - 실제정보
  - 직접접속 금지, 불가
  - 현금, 장부
- reducer
  - 리덕스에서 가장 어려움 이해하기
  - 스토어를 만들면서 공급해줘야함
  - dispatch에게 전달받은 이전의 state값과 action을 통해 새로운 state를 리턴
  - 새로운 state를 리턴할 땐 이전의 state를 자체를 바꾸는 것이 아닌 복제해서 바꾼다.(assign보다 spread가 간결)
- reder
  - UI를 만들어주는 우리가 짤 코드
- getState
  - state 값을 가져옴
  - 은행 안내원
- subscribe
  - render함수를 등록하게 됨
  - state가 갱신될때마다 render 호출되며 UI 갱신
- dispatch
  - action이라는 객체가 전달됨.
  - 두가지일을함
    - reducer를 호출해서 state값을 바꿈
      - reducer 호출할때 두개의값전달. 현재state,action 데이터
      - 리턴값으로 가공된 새로운 state
    - subscribe을 호출해서 render함수를 호출, 화면 갱신
- action

## Redux 사용이유
- 중앙집권적인 전역 상태관리 툴을 통한 로직 간소화
  - 하나의 store가 존재하고 store는 리듀서를통해 관리되기때문에 reducer에서 많은것을 확인할수있다.(이전상태, 새상태, 타입 등)
- Time Traveling 을 통한 좀 더 쉬운 디버깅

- 부품들이 왜 좋아지는가? 디커플링
- 각자의 부품이 어떻게 스탠드얼론할수있게되었나

## 시간여행과 로깅 
- 액션들의 버전관리
## Reference <!-- omit in toc -->
[Redux](https://opentutorials.org/course/4901)
