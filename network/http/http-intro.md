# HTTP <!-- omit in toc -->
- [**1. 웹/네트워크 기본**](#1-웹네트워크-기본)
  - [**1.1. HTTP란**](#11-http란)
  - [**1.2. 프로토콜 (Protocol)**](#12-프로토콜-protocol)
  - [**1.3. TCP (Transmission Contral Protocol)**](#13-tcp-transmission-contral-protocol)
    - [**1.3.1. 바이트 스트림 (Byte Stream)**](#131-바이트-스트림-byte-stream)
    - [**1.3.2. 쓰리웨이 핸드셰이킹 (3way handshaking)**](#132-쓰리웨이-핸드셰이킹-3way-handshaking)
  - [**1.4. IP (Internet Protocol)**](#14-ip-internet-protocol)
    - [**1.4.1. ARP (Address Resolution Protocol)**](#141-arp-address-resolution-protocol)
  - [**1.5. DNS (Domain Name System)**](#15-dns-domain-name-system)
  - [**1.6. URL/URI**](#16-urluri)
- [**2. HTTP 프로토콜 구성**](#2-http-프로토콜-구성)
- [**3. HTTP 프로토콜 특성**](#3-http-프로토콜-특성)
  - [**3.1. stateless 특성**](#31-stateless-특성)
  - [**3.2. URI로 리소스 식별**](#32-uri로-리소스-식별)
  - [**3.3. 지속 연결**](#33-지속-연결)
- [**4. HTTP 메서드**](#4-http-메서드)
  - [**4.1. GET**](#41-get)
  - [**4.2. POST**](#42-post)
  - [**4.3. PUT/PATCH**](#43-putpatch)
  - [**4.4. DELETE**](#44-delete)
  - [**4.5. ETC**](#45-etc)
- [**5. HTTP 상태코드**](#5-http-상태코드)
  - [**5.1. 1xx**](#51-1xx)
  - [**5.2. 2xx**](#52-2xx)
  - [**5.3. 3xx**](#53-3xx)
  - [**5.4. 4xx**](#54-4xx)
  - [**5.5. 5xx**](#55-5xx)
- [**6. HTTP 메시지**](#6-http-메시지)
  - [**6.1. start line**](#61-start-line)
  - [**6.2. 헤더**](#62-헤더)

<br><br>

## **1. 웹/네트워크 기본**
가장 많이 사용하는 HTTP 1.1 RFC7230 기준

<br>

### **1.1. HTTP란**
- Hypertext Transfer Protocol
  - 서버/클라이언트 메시지 교환 프로토콜
  - 서버와 클라이언트 간에 TCP/IP 위에서 메시지를 교환하기 위해 사용하는 프로토콜

<br><br>

### **1.2. 프로토콜 (Protocol)**
- 서로 다른 하드웨어 기기 간 송신하기 위한 데이터 통신 규약
  - 맥북, 스마트폼, 네트워크를 통해 통신가능한 기기면 됨.

<br><br>

### **1.3. TCP (Transmission Contral Protocol)**
- 트랜스포트 계층 속 프로토콜
  - TCP를 통해 서버와 클라이언트가 잘 연결되어있는지 확인
  - 서버에게 내(클라이언트)목소리가 잘 들리는 지 확인
- 트랜스포트 계층
  - 서버와 클라이언트 사이 통신 연결 제어

<br><br>

#### **1.3.1. 바이트 스트림 (Byte Stream)**
- 큰 데이터를 작제 쪼갠 뒤 전송하는 서비스
  - 이때 정확하게 전송되었는지 확인하는 기술이 쓰리웨이 핸드세이킹
  
<br><br>

#### **1.3.2. 쓰리웨이 핸드셰이킹 (3way handshaking)**
- 요청(SYN) - 응답1(ACK) - 응답2(ACK) 3번의 과정을 거쳐 통신이 연결 됨.
- TCP 프로토콜은 신뢰성을 담당.

<br><br>

### **1.4. IP (Internet Protocol)**
- 분할된 데이터 패킷들을 서버에게 보낸다.
  - 이때 서버의 주소는 MAC 주소.
  - IP 주소는 언제든 변경될 수 있다. IP 주소로 가고자하는 방향을 알 수 있다.

<br><br>

#### **1.4.1. ARP (Address Resolution Protocol)**
- 주소를 찾아가는 프로토콜
  - 수신자의 IP주소를 수소문하고 도착에서 MAC 주소를 찾아내 배송지 루트를 찾아낸다.
  - 중간에 경유하는 네트워크 기기들(라우터)은 전체 배송지 루트를 알 수 없다.
    - 택배 배송 시 중간 허브는 다음 이동할 허브로만 보내면 되 듯.

<br><br>

### **1.5. DNS (Domain Name System)**
- 도메인 이름 및 IP 주소를 확인하는 기능.
- 도메인 이름을 IP 주소로 변환
- 도메인 이름을 웹브라우저에 입력할 때 최종 사용자를 어떤 서버에 연결할 것인지 제어.

<br><br>

### **1.6. URL/URI**
- URL(Uniform Resource Locator)은 웹페이지 상의 표시 주소
- URI(Uniform Resource Identifier)는 리소스를 식별하는 식별자.
  - URL을 포괄하는 개념.

<br><br>

## **2. HTTP 프로토콜 구성**
- 클라이언트의 요청(Request) 메시지
<img src="..\..\image\network\http\http-intro\request.png" width="600" height="330">

- 서버의 응답(Response) 메시지
<img src="..\..\image\network\http\http-intro\response.png" width="600" height="330">

<br><br>

## **3. HTTP 프로토콜 특성**
### **3.1. stateless 특성**
- 상태가 없다 -> 과거정보를 남기지 않는다 -> 새로운 request를 날릴 때 마다 새로운 reponse를 보냄.
- 상태와 무관하니 확장이 쉽다.
- 장바구니와 같이 이전 상태의 기억을 원한다면
  - 쿠키, 세션 같은 기술이 함께 쓰임.

<br><br>

### **3.2. URI로 리소스 식별**
- request에서 URI로 리소스를 식별함.
  - 아래와 같은 3가지 방식
    1. request uri에 포함하기
    2. host 헤더 필드에 로케이션 포함
    3. 자신에게 송신하는 경우에는 와일드카드 지정하기
<img src="..\..\image\network\http\http-intro\request-uri.png" width="600" height="330">

<br><br>

### **3.3. 지속 연결**
- 초기 http는 비지속 연결
  - 요청을 주고 받을 때 마다 새로운 tcp 커넥션 연결, 종료를 함
  - 데이터가 많아지면 자원낭비, 속도저하 심해짐
- 지속연결을 통해 서버부하 줄이고 속도 빨리짐
  - 여기서 나아가서 응답을 기다리지 않고 바로 다음 리퀘스트를 보내는 것 가능해짐(파이프라이닝)
  - 성능 향상 미미, 프록시 버그가 많아서 모던 브라우저에서는 기본적으로 비활성화

<br><br>

## **4. HTTP 메서드**
### **4.1. GET**
- 특정한 리소스를 가져오도록 요청할 때 사용.
  - 데이터를 가져올 때만 사용해야 함.
  - 본문을 담는 게 가능은 하나 구현 된 서비스에서 요청 거부할 수 있음.
  - 여러번 실행해도 특정 리소스를 보내주기만 하면 되는 것이라 멱등성 보장

<br><br>

### **4.2. POST**
- 대상 리소스에게 request 본문을 해당 리소스의 시맨틱에 따라 처리하도록 요청
  - 게시판, 블로그 같은 글 모음에 글 보내기, 서버에 새로운 리소스 생성하기 등에 사용 
  - 새로운 리소스가 생기기 때문에 멱등성 보장하지 않음

<br><br>

### **4.3. PUT/PATCH**
- 리소스를 수정하는데 사용

<br>

**PUT**
- 대상 리소스가 없다면 생성, 있다면 request의 본문대로 교체하는 데 사용
  - 멱등성 보장
 
<br><br>

**PATCH**
- 리소스의 일부를 수정하는 데 사용
  - 의도에 따라 멱등성 보장
    - rfc2616 스펙 상으로는 멱등성 보장 안함.
    - 복수의 PATCH 요청이 부작용을 일으키지 않도록 막는 목적으로 멱등하게 처리해도 된다고 rfc5789에 추가 기술되어 있다.

- http에서는 여러번 요청한 결과 서버의 상태가 항상 통일할 때 
- 메서드 별로 멱등성 성립 여부가 다름.

<br><br>

### **4.4. DELETE**
- 지정한 리소스를 삭제할 대 사용
  - 멱등성 보장해야 함
  - 게시판의 마지막 글 제거를 구현하면서 사용하면 안됨

<br><br>

### **4.5. ETC**
HEAD: GET으로 요청했을 때 응답 헤더만 가져옴
OPTIONS: 해당 리소스의 통신 옵션 알려줌
CONNECT
TRACE


>멱등성 (idempotent)  
수학이나 전산학에서 연산의 한 성질을 나타내는 것으로 연산을 여러 번 적용하다라도 결과가 달라지지 않는 성질

<br><br>

## **5. HTTP 상태코드**
- 요청에 따른 응답의 상태
- 모든 http 응답 코드는 3자리 수(1xx ~ 5xx)

<br><br>

### **5.1. 1xx**
- 요청을 받고 해당 요청에 대한 프로세스를 진행중인 상태
  - 사용할 일이 별로 없다
  - 요청에 대한 처리가 끝나지 않았는데 응답할 경우가 별로 없기 때문

<br><br>

### **5.2. 2xx**
- 요청이 성공적으로 처리되었을 때 사용

<br>

**200 (OK)**
- 요청 처리 완료

<br><br>

**201 (Created)**
- 요청 처리 완료 및 요청에 따른 새로운 리소스가 저장됨을 알림

<br><br>

**204 (No Content)**
- 요청 처리 완료했지만 컨텐츠를 제공하진 않음.
  - 처리 결과만 중요한 API 요청 등에 주로 사용

<br><br>

### **5.3. 3xx**
- 요청에 대한 추가적인 공정이 필요할 때 사용
  - 추가 처리가 필요할 때 해당 처리를 할 수 있는 위치를 함께 알려줌

<img src="..\..\image\network\http\http-intro\3xx.png" width="600" height="330">

<br><br>

**304 (Not Modified)**
- 다른 코드와 달리 리다이렉트 안됨
  - 마지막 요청 이후 요청한 페이지는 변경되지 않았다는 뜻

<br><br>

### **5.4. 4xx**
- 클라이언트의 요청이 잘못되었을 때 사용.
  - 오류가 요청을 잘못 보낸 클라이언트 책임

<br><br>

**400 (Bad Request)**
- 서버가 요청의 구문을 인식하지 못할 때 
  - 브라우저는 해당 코드와 200 OK를 동일하게 취급

<br><br>

**401 (Unauthorized)**
- 해당 요청을 처리하기 위해선 인증이 필요할 때 
  - 주로 로그인이 필요할 때
  - 인증 정보를 보낸 후에도 계속 뜬다면 잘못된 인증 정보로 요청했기 때문(아이디, 비밀번호 등)

<br><br>

**403 (Forbidden)**
- 클라이언트가 리소스에 대한 필요 권한이 없을 때
  - 인증은 됐지만 해당 사용자의 권한이 없다는 뜻
  - 관리자가 아닌 일반 유저의 경우

<br><br>

**404 (Not Found)**
- 해당 페이지를 찾을 수 없을 때 
  - 요청을 거부하고 싶지만 이유가 비밀일 때도 사용.

<br><br>

### **5.5. 5xx**
- 서버가 응답할 수 없을 때 

<br><br>

**500 (Internal Server Error)**
- 서버에 요류가 발생하여 요청을 수행할 수 없을 때 사용

<br><br>

**501 (Not Implemented)**
- 서버에 요청을 수행할 수 있는 기능이 없을 때
  - 서버가 GET, POST 등 요청 메소드를 인식하지 못할 때
  - 웬만해선 볼 일 없다.

<br><br>

**503 (Service Temporarily Unavailable)**
- 서비스를 일시적으로 사용할 수 없을 때
  - 서버의 유지보수로 작동 중단되거나 과부하 걸렸을 때

<br><br>

## **6. HTTP 메시지**
- RFC2616에 정의된 http 1.1 메시지 포멧은 현재 Proposed standard인 RFC7230에서 바뀜
  - request, response 메시지 포멧이 따로 지정되어 있다가 합쳐짐

<br><br>

### **6.1. start line**
**request-line**
- method SP request-target SP HTTP-version CRLF
  - PATCH http://naver.com/admin/setting HTTP1.1

<br><br>

**status-line**
- HTTP-version SP status-code SP reason-phrase CRLF

>Proposed standard  
표준에 비해 성숙도가 떨어지나, 안정적이고 검토된 규격 RFC2616, RFC7230 둘 다 이에 해당

>SP  
Space Character: 공백 문자


>CRLF  
줄바꿈(newline)을 입력하는 문자
CR(Carraige Return): 현재 라인에서 커서의 위치를 가장 앞으로 옮김  
LF(Line Feed): 커서는 그대로 두고 종이를 한 라인 위로 올리는 동작

<br><br>

### **6.2. 헤더**
- start line과 메시지 본문을 제외한 모든 부분

<br><br>

**request header**
- 요청에 대한 정보 나타냄
- 클라이언트가 이해 가능한 컨텐츠 타입과 언어 등 알려줌

<br><br>

**reponse header**
- 응답에 대한 정보 나타냄
- 생성 날짜, 서버 정보, 표현 헤더(바디에 대한 정보) 담을 수 있음

<br><br>

## **Reference** <!-- omit in toc -->
[HTTP의 진화](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)

[[10분 테코톡] 헌치, 써머의 HTTP](https://www.youtube.com/watch?v=IjxkKQvn8Bc)

[멱등성](https://ko.wikipedia.org/wiki/%EB%A9%B1%EB%93%B1%EB%B2%95%EC%B9%99)