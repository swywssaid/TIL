# HTTP와 HTTPS의 차이점
> HTTPS(https://)는 SSL(Secure Socket Layer) 인증서를 사용하는 HTTP(http://)입니다. SSL(또는 TLS) 인증서는 일반 HTTP 요청 및 응답을 암호화합니다. 따라서 HTTPS는 HTTP보다 더 안전한 보안용 프로토콜이라고 할 수 있습니다.

> HTTP와 HTTPS의 유일한 차이점은 HTTPS를 사용한 웹 페이지를 통해 전송되는 모든 데이터는 추가적인 보안 계층이 있습니다. 이를 TLS(전송 계층 보안) 프로토콜이라고 합니다. 모든 유형의 데이터는 변경되거나 손상될 수 없는 HTTPS 사이트를 통해 전달되며 제3자로부터 보호됩니다.

<br><br>

## HTTP
- HTTP(HyperText Transfer Protocol)는 하이퍼 텍스트 전송 프로토콜으로 간단히 말해서 인터넷을 작동시키는 역할을 하며, 웹 서버 및 웹 브라우저 상호 간의 데이터 전송을 위한 응용계층 프로토콜

<br><br>

### HTTP의 문제점
1. HTTP 는 평문 통신이기 때문에 도청이 가능하다.
2. 통신 상대를 확인하지 않기 때문에 위장이 가능하다.
3. 완전성을 증명할 수 없기 때문에 변조가 가능하다.

<br><br>

## HTTPS
- HTTPS는 SSL 의 껍질을 덮어쓴 HTTP 라고 할 수 있다. 즉, HTTPS 는 새로운 애플리케이션 계층의 프로토콜이 아니라는 것이다. HTTP 통신하는 소켓 부분을 SSL(Secure Socket Layer) or TLS(Transport Layer Security)라는 프로토콜로 대체하는 것 뿐이다
-  HTTP 는 원래 TCP 와 직접 통신했지만, HTTPS 에서 HTTP 는 SSL 과 통신하고 SSL 이 TCP 와 통신 하게 된다. SSL 을 사용한 HTTPS 는 암호화와 증명서, 안전성 보호를 이용할 수 있게 된다.

<br><br>

## HTTP와 HTTPS의 차이점
- HTTP와 HTTPS의 유일한 차이점은 HTTPS를 사용한 웹 페이지를 통해 전송되는 모든 데이터는 추가적인 보안 계층이 있습니다. 이를 TLS(전송 계층 보안) 프로토콜이라고 합니다. 모든 유형의 데이터는 변경되거나 손상될 수 없는 HTTPS 사이트를 통해 전달되며 제3자로부터 보호됩니다

<br><br>

## Reference
[HTTP와 HTTPS](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/Network#http%EC%99%80-https)
[HTTP HTTPS 차이점](https://www.ascentkorea.com/difference-between-http-and-https/)
