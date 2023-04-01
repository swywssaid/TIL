# REST API

> 학습목표  
> <details>
> <summary>1. RESTful API란</summary>
> <div>
> REST는 HTTP 프로토콜로 자원에 대한 CRUD 요청을 URI로 표현하는 기법을 의미하며, RESTful API란 REST 구현을 위해 개발자들 사이에서 통용되는 일반적인 REST API 구현 가이드를 따른 API를 의미합니다.
> </div>
> </details>

<br><br>

## REST란
### REST란
- Representational State Transfer(REST)는 API 작동 방식에 대한 조건을 부과하는 소프트웨어 아키텍처입니다.

<br><br>

### REST 아키텍쳐 스타일 원칙
- 여러가지가 있지만 균일한 인터페이스를 살펴보자
1. 클라이언트-서버
2. 균일한 인터페이스
3. 무상태
4. 계층화 시스템
5. 캐시 가능성
6. 온디맨드 코드

<br>

#### 균일한 인터페이스
1. 자원에 대한 식별
- 자원: 이름을 지닐 수 있는 모든 정보(문서, 이미지, 자원들의 집합, 실존하는 대상 등)
- 요청은 리소스를 식별해야 합니다. 이를 위해 균일한 리소스 식별자를 사용합니다.
- 즉, URI를 통해 자원을 식별해야 합니다 ( /user/1 )

2. 표현을 통한 자원에 대한 조작
- 표현: 특정한 상태의 자원에 대한 표현
- 자원은 다양한 방식으로 표현 가능 (e.g. 문서, 파일, HTTP 메시지 엔티티 등)
- 클라이언트는 원하는 경우 리소스를 수정하거나 삭제하기에 충분한 정보를 리소스 표현에서 가지고 있습니다. 서버는 리소스를 자세히 설명하는 메타데이터를 전송하여 이 조건을 충족합니다.
- 클라이언트는 표현을 추가로 처리하는 방법에 대한 정보를 수신합니다. 이를 위해 서버는 클라이언트가 리소스를 적절하게 사용할 수 있는 방법에 대한 메타데이터가 포함된 명확한 메시지를 전송합니다.
- 클라이언트는 작업을 완료하는 데 필요한 다른 모든 관련 리소스에 대한 정보를 수신합니다. 이를 위해 서버는 클라이언트가 더 많은 리소스를 동적으로 검색할 수 있도록 표현에 하이퍼링크를 넣어 전송합니다.

<br><br>
6
## REST API
### REST API란
- REST 아키텍처 스타일을 따르는 API를 REST API라고 합니다.

<br><br>

### REST API 목적

<br><br>

### REST API 사용방법

<br><br>

### REST API 장단점

<br><br>

## RESFUL
- REST 아키텍처를 구현하는 웹 서비스를 RESTful 웹 서비스라고 합니다

> REST API와 RESTful API라는 용어는 같은 의미로 사용할 수 있습니다.

<br><br>

## Reference
[RESTful API란 무엇인가요?](https://aws.amazon.com/ko/what-is/restful-api/)

[[Network] REST란? REST API란? RESTful이란?](https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html)

[[10분 테코톡] 정의 REST API](https://www.youtube.com/watch?v=Nxi8Ur89Akw)