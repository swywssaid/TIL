# HTTP <!-- omit in toc -->
가장 많이 사용하는 HTTP 1.1 RFC7230 기준


## 웹/네트워크 기본
### HTTP란
- Hypertext Transfer Protocol
  - 서버/클라이언트 메시지 교환 프로토콜
  - 서버와 클라이언트 간에 TCP/IP 위에서 메시지를 교환하기 위해 사용하는 프로토콜

### 프로토콜 (Protocol)
- 서로 다른 하드웨어 기기 간 송신하기 위한 데이터 통신 규약
  - 맥북, 스마트폼, 네트워크를 통해 통신가능한 기기면 됨.

### 4계층
### TCP (Transmission Contral Protocol)
- 트랜스포트 계층 속 프로토콜
  - TCP를 통해 서버와 클라이언트가 잘 연결되어있는지 확인
  - 서버에게 내(클라이언트)목소리가 잘 들리는 지 확인
- 트랜스포트 계층
  - 서버와 클라이언트 사이 통신 연결 제어

#### 바이트 스트림 (Byte Stream)
- 큰 데이터를 작제 쪼갠 뒤 전송하는 서비스
  - 이때 정확하게 전송되었는지 확인하는 기술이 쓰리웨이 핸드세이킹
  
#### 쓰리웨이 핸드셰이킹 (3way handshaking)
- 요청(SYN) - 응답1(ACK) - 응답2(ACK) 3번의 과정을 거쳐 통신이 연결 됨.
- TCP 프로토콜은 신뢰성을 담당.

### IP (Internet Protocol)
- 분할된 데이터 패킷들을 서버에게 보낸다.
  - 이때 서버의 주소는 MAC 주소.
  - IP 주소는 언제든 변경될 수 있다. IP 주소로 가고자하는 방향을 알 수 있다.

#### ARP (Address Resolution Protocol)
- 주소를 찾아가는 프로토콜
  - 수신자의 IP주소를 수소문하고 도착에서 MAC 주소를 찾아내 배송지 루트를 찾아낸다.
  - 중간에 경유하는 네트워크 기기들(라우터)은 전체 배송지 루트를 알 수 없다.
    - 택배 배송 시 중간 허브는 다음 이동할 허브로만 보내면 되 듯.

### DNS (Domain Name System)
- 도메인 이름 및 IP 주소를 확인하는 기능.
- 도메인 이름을 IP 주소로 변환
- 도메인 이름을 웹브라우저에 입력할 때 최종 사용자를 어떤 서버에 연결할 것인지 제어.

### URL/URI
- URL(Uniform Resource Locator)은 웹페이지 상의 표시 주소
- URI(Uniform Resource Identifier)는 리소스를 식별하는 식별자.
  - URL을 포괄하는 개념.


## HTTP 프로토콜 구성
- 클라이언트의 요청(Request) 메시지
<img src="..\..\image\network\http\http-intro\request.png" width="600" height="330">

- 서버의 응답(Response) 메시지
<img src="..\..\image\network\http\http-intro\response.png" width="600" height="330">


## HTTP 프로토콜 특성
### stateless 특성
- 상태가 없다 -> 과거정보를 남기지 않는다 -> 새로운 request를 날릴 때 마다 새로운 reponse를 보냄.
- 상태와 무관하니 확장이 쉽다.
- 장바구니와 같이 이전 상태의 기억을 원한다면
  - 쿠키, 세션 같은 기술이 함께 쓰임.

### URI로 리소스 식별

## HTTP 메서드
## HTTP 상태코드
## HTTP 메시지


## Reference <!-- omit in toc -->
[HTTP의 진화](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)

[[10분 테코톡] 헌치, 써머의 HTTP](https://www.youtube.com/watch?v=IjxkKQvn8Bc)