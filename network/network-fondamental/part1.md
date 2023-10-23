- [1. IETF (국제 인터넷 표준화 기구, Internet Engineering Task Force)](#1-ietf-국제-인터넷-표준화-기구-internet-engineering-task-force)
  - [1.1. IETF RFC](#11-ietf-rfc)
- [2. NETWORK SECURITY](#2-network-security)
  - [2.1. 기밀성 (Confidentiality)](#21-기밀성-confidentiality)
  - [2.2. 인증 (Authentication)](#22-인증-authentication)
  - [2.3. 무결성 (Integrity)](#23-무결성-integrity)
- [3. Firewall](#3-firewall)
  - [3.1. Stateless packet filtering](#31-stateless-packet-filtering)
  - [3.2. Stateful packet filtering](#32-stateful-packet-filtering)
- [4. OSI Model vs. TCP/IP Protocol Suite](#4-osi-model-vs-tcpip-protocol-suite)
- [5. 네트워크 구성](#5-네트워크-구성)
  - [5.1. 네트워크 엣지 (Network edge)](#51-네트워크-엣지-network-edge)
  - [5.2. 엑세스 네트워크 (Access network)](#52-엑세스-네트워크-access-network)
  - [5.3. 네트워크 코어 (Network core)](#53-네트워크-코어-network-core)
  - [5.4. Network of networks](#54-network-of-networks)
- [6. 종단간(E2EE,End to End Encryption)](#6-종단간e2eeend-to-end-encryption)
- [7. Performance](#7-performance)
  - [7.1. Delay](#71-delay)
  - [7.2. Loss](#72-loss)
  - [7.3. Throughput](#73-throughput)
  - [7.4. security](#74-security)
- [8. ARPANET(Advanced Research Projects Agency Network)](#8-arpanetadvanced-research-projects-agency-network)
  - [8.1. Layer들마다 기능이 어느 정도 겹친다. transport layer만의 장점(특성이었나?) 2가지](#81-layer들마다-기능이-어느-정도-겹친다-transport-layer만의-장점특성이었나-2가지)
  - [8.2. TCP/IP 모델 관련 문제(단순히 설명하시오는 아니었는데 어쨌든 이거 관련이었습니다)](#82-tcpip-모델-관련-문제단순히-설명하시오는-아니었는데-어쨌든-이거-관련이었습니다)
  - [8.3. 통신이 이루어지고 있는 그림을 준다. 그래서 어떤 세션에서는 메시지 전송이 안되고 그 사실이 전송자에게는 전달이 되지 않은 상태에서 전송자는 계속 메시지를 보내고 있다.(이것들은 다 그림으로 되어 있는데 그냥 말로 적은 거에요) 특정 세션 이후에 예상되는 통신을 그리시오](#83-통신이-이루어지고-있는-그림을-준다-그래서-어떤-세션에서는-메시지-전송이-안되고-그-사실이-전송자에게는-전달이-되지-않은-상태에서-전송자는-계속-메시지를-보내고-있다이것들은-다-그림으로-되어-있는데-그냥-말로-적은-거에요-특정-세션-이후에-예상되는-통신을-그리시오)
  - [8.4. Layer 분할의 장점들과 단점들](#84-layer-분할의-장점들과-단점들)

## 1. IETF (국제 인터넷 표준화 기구, Internet Engineering Task Force)

- IETF는 인터넷의 운영, 관리, 개발에 대해 협의하고 프로토콜과 구조적인 사안들을 분석하는 인터넷 표준화 작업기구이다.

<br>

### 1.1. IETF RFC

- IETF에서 사용하는 문서로 인터넷 기술 사양 및 조직 정보가 포함되어 있다.
- RFCs는 이후로 인터넷 사양, 통신 프로토콜, 프로시저 및 이벤트의 공식 문서로 채택되었습니다.

◆ RFC768: UDP, August 1980
◆ RFC791: IPv4, September 1981
◆ RFC793: TCP, September 1981
◆ RFC2460 IPv6, December 1998

<br><br>

## 2. NETWORK SECURITY

1. 기밀성 (Confidentiality)
2. 무결성 (Integrity)
3. 가용성 (Availability)

<br>

### 2.1. 기밀성 (Confidentiality)

발신자와 의도된 수신자만이 메시지 내용을 이해해야 합니다.

- 발신자가 메시지를 암호화합니다.
- 수신자가 메시지를 해독(복호화)합니다.

<br>

### 2.2. 인증 (Authentication)

발신자와 수신자는 서로의 신원을 확인하려고 합니다.

<br>

### 2.3. 무결성 (Integrity)

발신자와 수신자는 메시지가 변경되지 않도록 하고 변경이 감지되지 않도록 하려고 합니다.

<br><br>

## 3. Firewall

방화벽은 조직의 내부 네트워크를 더 큰 인터넷에서 격리시키는 데 사용되며, 미리 정의된 규칙과 정책에 따라 일부 패킷(데이터)을 허용하고 다른 패킷을 차단합니다.

<br>

### 3.1. Stateless packet filtering

방화벽 필터링 방법 중 하나이다. 이 방식은 패킷 간의 연결 상태를 추적하지 않습니다. 따라서 각 패킷은 개별적으로 처리되며, 이전 패킷과의 관련성을 고려하지 않습니다.

- 내부 네트워크는 방화벽을 통해 인터넷에 연결
- 패킷마다 개별적으로 필터링
- 다음을 기반으로 필터링한다.
  - 소스 IP 주소, 대상 IP 주소
  - TCP/UDP 소스, 대상 포트 번호
  - ICMP 메시지 유형
  - TCP SYN 및 ACK 비트

<br>

### 3.2. Stateful packet filtering

"Stateful packet filtering"은 "Stateless packet filtering"에 비해 더 고급적인 네트워크 보안 방법입니다. 이 방식은 패킷 간의 연결 상태를 추적하며, 연결 상태 정보를 기반으로 패킷을 필터링합니다. 이러한 방식을 통해 더 정교한 보안 정책을 구현하고 불필요한 패킷을 차단할 수 있습니다.

- 각 TCP 연결의 상태를 추적합니다.
- 연결 설정 (SYN), 연결 종료 (FIN) 추적
  - 들어오고 나가는 패킷이 합당한지 판단
  - 연결 설정 (SYN): TCP (전송 제어 프로토콜)의 맥락에서, 두 장치 또는 시스템이 연결을 설정하려면 세 단계의 핸드셰이크 프로세스를 거칩니다. 이 프로세스의 초기 단계는 연결을 시작하기 위해 다른 쪽에 SYN (동기화) 패킷을 보내는 것입니다. 상태 기반 패킷 필터링 방화벽은 이러한 SYN 패킷을 추적하여 이것이 유효한 연결 시작의 일부인지 확인합니다.
  - 연결 종료 (FIN): TCP에서 연결을 종료해야 할 때, 연결 종료를 알리기 위해 FIN (마감) 패킷을 보냅니다. 상태 기반 패킷 필터링 방화벽은 이러한 FIN 패킷을 추적하여 연결 종료가 유효한 것인지를 확인합니다.
- 일정 시간 동안 활성화되지 않은 연결을 차단
- ACL이 패킷을 허용하기 전에 연결 상태 테이블을 확인하도록 확장

<br><br>

## 4. [OSI Model vs. TCP/IP Protocol Suite](https://github.com/swywssaid/TIL/blob/main/network/computer-network/intro.md#1-%ED%86%B5%EC%8B%A0-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EA%B3%BC-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B3%84%EC%B8%B5%EA%B5%AC%EC%A1%B0)

<br><br>

## 5. 네트워크 구성

### 5.1. 네트워크 엣지 (Network edge)

네트워크 말단에 존재하는 여러 구성요소

- end system = host
  - 스마트폰이나 PC, 혹은 회사의 서버 등

<br>

### 5.2. 엑세스 네트워크 (Access network)

엣지가 인터넷 또는 다른 네트워크에 연결되는 지점

- end system 들이 인터넷을 사용할 수 있도록 길을 열어주는 네트워크
- 스마트폰에서 와이파이에 접속하거나 PC에 랜선을 꼽는 것 모두 엑세스 네트워크에 접속하는 것
- KT나 SKT같은 ISP(Internet Service Provider)가 엑세스 네트워크를 제공
- 예를 들어, Wi-Fi, 이더넷, DSL, 케이블 모뎀 등이 엑세스 네트워크에 속합니다.

<br>

### 5.3. 네트워크 코어 (Network core)

전체 네트워크 시스템의 중앙에 위치하여 데이터를 전송하는 핵심적인 역할

- 네트워크 코어의 구조는 'Mesh of interconnected routers' 즉, 수많은 라우터들이 그물처럼 얽혀있는 구조
- 네트워크 코어에서 패킷을 교환하는 것을 Packet switching

  1. 패킷(Packet)은 데이터를 보내는 단위이다.

     - 호스트들이 응용 프로그램 레이어 메시지를 작은 패킷으로 분할한다

  2. 패킷은 store-and-forward 방식으로 전송된다.

     이는 라우터가 하나의 패킷을 다 받고, 그 다음에 전송하는 방법이다.

  3. 만약 라우터에 들어오는 패킷 양이 나가는 패킷 양보다 많으면, queue 형태로 쌓인다.

또한, 네트워크 코어의 핵심 기능은 크게 두가지로 볼 수 있다.

1. Forwarding :

라우터의 input으로 들어오는 패킷을 올바른 output으로 보내는 기능 (forwarding table을 읽어서)

2. Routing :

패킷이 어디로 갈지 판단하는 과정. 즉 forwarding table를 만드는 과정이다. 라우팅 알고리즘으로 판단한다.

즉, 위와 같이 네트워크 코어는 실질적으로 패킷이 어디로 갈지 판단하고 전송하는 기능을 수행한다.

<br>

### 5.4. Network of networks

<br><br>

## 6. 종단간(E2EE,End to End Encryption)

메시지를 처음부터 끝까지 평문으로 저장하지 않고 암호화하는 안전한 통신 방법

- 클라이언트에서 메시지를 전송하는 단계부터 최종적으로 수신자에 전달되는 단계까지 메시지를 암호화

<br><br>

## 7. Performance

### 7.1. Delay

들어오는 패킷의 속도가 계속해서 링크의 전송 용량을 초과된 패킷들은 라우터 내의 버퍼에 대기하거나 큐에 들어감

1. 전파 지연 (Propagation Delay)
   - d : length of physical link 거리
   - s: propagation speed (~2x108 m/sec)
   - d prop = d /s
2. 전송 지연 (Transmission Delay)

   - L : packet length (bits) 패킷 길이(데이터 크기)
   - R : link transmission rate (bps) 대역폭
   - d trans = L/R

3. 대기열 지연 (Queuing Delay)
   - 전송을 위한 출력 링크를 기다리는 시간
   - 라우트의 혼잡 단계에 의존
4. 처리 지연 (Processing Delay)
   - 비트 에러 체크
   - 출력 링크 결정

<br>

### 7.2. Loss

들어오는 패킷의 속도가 계속해서 링크의 전송 용량을 초과하고, 라우터의 메모리(버퍼)가 가득 찬다면, 메모리에 수용할 공간이 없는 패킷은 손실될 수 있다

- 도착 속도가 (일시적으로) 출력 링크 용량을 초과하는 경우 발생

<br>

### 7.3. Throughput

특정 기간 동안 네트워크를 통과하는 데이터의 양

<br>

### 7.4. security

네트워크 성능과는 반비례

<br><br>

## 8. ARPANET(Advanced Research Projects Agency Network)

1969년에 개발된 최초의 컴퓨터 네트워크로, 현재의 인터넷의 원조

1. UCLA (University of California, Los Angeles): ARPANET의 첫 번째 노드로, 1969년 10월 29일에 SRI로 첫 메시지를 보냈습니다.
2. SRI (Stanford Research Institute): UCLA와의 연결을 통해 두 번째 노드로, 첫 번째 메시지를 받았습니다.
3. UCSB (University of California, Santa Barbara): UCLA와 SRI에 이어 세 번째 노드로 참여하였습니다.
4. UTAH (University of Utah): ARPANET의 네 번째 노드로, 초기 네트워크 구축에 참여하였습니다.

**ARPANET** was developed in 1969 and the first message was sent from the UCLA SDS Sigma 7 Host computer to the SRI SDS 940 Host computer

<br>

### 8.1. Layer들마다 기능이 어느 정도 겹친다. transport layer만의 장점(특성이었나?) 2가지

1.  End-to-End Communication 및 신뢰성 확보

    - 송신자와 수신자 간의 신뢰성 있는 통신을 확보
    - 주로 TCP(Transmission Control Protocol) 프로토콜이 이 역할을 수행

2.  포트와 다중 애플리케이션 지원

    - 포트 번호를 사용하여 어플리케이션 간의 통신을 식별합니다. 이를 통해 여러 어플리케이션이 동시에 네트워크에서 통신

3.  다중화 및 역다중화

    - 여러 어플리케이션에서 오는 데이터를 하나의 네트워크 연결로 다중화하고, 수신측에서는 이를 분해하여 올바른 어플리케이션에 전달

<br>

### 8.2. TCP/IP 모델 관련 문제(단순히 설명하시오는 아니었는데 어쨌든 이거 관련이었습니다)

<br>

### 8.3. 통신이 이루어지고 있는 그림을 준다. 그래서 어떤 세션에서는 메시지 전송이 안되고 그 사실이 전송자에게는 전달이 되지 않은 상태에서 전송자는 계속 메시지를 보내고 있다.(이것들은 다 그림으로 되어 있는데 그냥 말로 적은 거에요) 특정 세션 이후에 예상되는 통신을 그리시오

<br>

### 8.4. Layer 분할의 장점들과 단점들

**장점**

1. 다른 계층에 대한 정보 없이도 단일 계층을 하나의 일관도니 계층으로 이해 가능
   - 이더넷이 작동하는 방법을 자세히 몰라도 FTP 서비스 구축 가능
2. 동일한 기본 서비스르 가진 대안 구현으로 계층 대체 가능
   - FTP 서비스는 이더넷, PPP 또는 케이블 회사에서 제공하는 다른 프로토콜 기반에서 변경 없이 작동 가능

**단점**

1. 계층은 전체가 효과적으로 캡슐화되지 않는다. 따라서 뭔가를 변경했을 때 다른 계층에 영향을 미치는 경우 있음
2. 레이어 간 지연

<br><br>

## 참조 <!-- omit from toc -->

[네트워크 구성 (Network core, Network edge, Access network)](https://ddongwon.tistory.com/69)

[종간단 암호화](https://docs.tosspayments.com/common/glossary/e2ee#%EC%A2%85%EB%8B%A8%EA%B0%84-%EC%95%94%ED%98%B8%ED%99%94e2ee)
