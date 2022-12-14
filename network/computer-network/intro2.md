# 1. network
- [1. network](#1-network)
  - [1.1. TCP/IP](#11-tcpip)
    - [1.1.1. TCP/IP vs OSI 7](#111-tcpip-vs-osi-7)
      - [1.1.1.1. OSI 참조모형](#1111-osi-참조모형)
      - [1.1.1.2. 7계층 계층의 기능](#1112-7계층-계층의-기능)
      - [1.1.1.3. TCP/IP 프로토콜](#1113-tcpip-프로토콜)
      - [1.1.1.4. 4계층 계층의 기능](#1114-4계층-계층의-기능)
      - [1.1.1.5. 7계층 vs 4계층](#1115-7계층-vs-4계층)
    - [1.1.2. IP (Internet Protocol)](#112-ip-internet-protocol)
      - [1.1.2.1. IP 특성](#1121-ip-특성)
      - [1.1.2.2. IP 주소체계](#1122-ip-주소체계)
    - [1.1.3. 서브넷팅 (Subnetting)](#113-서브넷팅-subnetting)
    - [1.1.4. 서브넷팅이란](#114-서브넷팅이란)
      - [1.1.4.1. 서브넷팅 예](#1141-서브넷팅-예)
    - [1.1.5. UDP vs TCP](#115-udp-vs-tcp)
    - [1.1.6. UDP(User Datagram Protocol)](#116-udpuser-datagram-protocol)
    - [1.1.7. UDP 헤더](#117-udp-헤더)
    - [1.1.8. TCP(Transmission Control Protocol)](#118-tcptransmission-control-protocol)
    - [1.1.9. TCP 헤더](#119-tcp-헤더)
  - [1.2. Routing](#12-routing)
    - [1.2.1. CIDR(Classless Inter-Domain Routing)](#121-cidrclassless-inter-domain-routing)
    - [1.2.2. RIP (Routing Information Protocol)](#122-rip-routing-information-protocol)
      - [1.2.2.1. 문제점](#1221-문제점)
      - [1.2.2.2. 해결방안](#1222-해결방안)
      - [1.2.2.3. 라우팅 테이블 생성방법](#1223-라우팅-테이블-생성방법)
    - [1.2.3. 링크상태 알고리즘 (Link State Algorithm)](#123-링크상태-알고리즘-link-state-algorithm)
    - [1.2.4. OSPF (Open Shortest Path First)](#124-ospf-open-shortest-path-first)
  - [1.3. IPv6](#13-ipv6)
    - [1.3.1. IPv6에서 정의된 표준 기술](#131-ipv6에서-정의된-표준-기술)
    - [1.3.2. IPv6 주소](#132-ipv6-주소)
      - [1.3.2.1. 주소 표기법](#1321-주소-표기법)
      - [1.3.2.2. 주소 생략법](#1322-주소-생략법)
        - [1.3.2.2.1. 0 생략](#13221-0-생략)
        - [1.3.2.2.2. 이중콜론](#13222-이중콜론)
        - [1.3.2.2.3. IPv4와 IPv6의 주소를 함께 표현하는 경우](#13223-ipv4와-ipv6의-주소를-함께-표현하는-경우)
      - [1.3.2.3. 주소 프리픽스 표현 방법](#1323-주소-프리픽스-표현-방법)
    - [1.3.3. IPv4 vs IPv6](#133-ipv4-vs-ipv6)
      - [1.3.3.1. IPv4/IPv6 전환](#1331-ipv4ipv6-전환)
        - [1.3.3.1.1. 이중 스택 (Dual Stack)](#13311-이중-스택-dual-stack)
        - [1.3.3.1.2. 터널링 (Tunneling)](#13312-터널링-tunneling)
        - [1.3.3.1.3. IPv4/IPv6 변환 (Translation)](#13313-ipv4ipv6-변환-translation)
  - [1.4. VoIP](#14-voip)
    - [1.4.1. VoIP에서의 QoS에 영향을 미치는 요인들](#141-voip에서의-qos에-영향을-미치는-요인들)
    - [1.4.2. RTP와 RTCP](#142-rtp와-rtcp)
      - [1.4.2.1. RTP (Real-time Transport Protocol)](#1421-rtp-real-time-transport-protocol)
      - [1.4.2.2. RTCP(RTP Control Protocol)](#1422-rtcprtp-control-protocol)
    - [1.4.3. SIP vs MGCP (h323)](#143-sip-vs-mgcp-h323)
      - [1.4.3.1. SIP (Session Initiation Protocol)](#1431-sip-session-initiation-protocol)
      - [1.4.3.2. MGCP (Media Gateway Control Protocol)](#1432-mgcp-media-gateway-control-protocol)
  - [1.5. VPN](#15-vpn)
    - [1.5.1. VPN 구현 기술](#151-vpn-구현-기술)
    - [1.5.2. 터널링](#152-터널링)
      - [1.5.2.1. PPTP와 L2TP의 차이점](#1521-pptp와-l2tp의-차이점)
    - [1.5.3. 인증 방식](#153-인증-방식)
      - [1.5.3.1. Peer-Peer 방식](#1531-peer-peer-방식)
      - [1.5.3.2. 클라이언트-서버(Client/Server) 방식](#1532-클라이언트-서버clientserver-방식)

<br /><br />

## 1.1. TCP/IP
### 1.1.1. TCP/IP vs OSI 7
#### 1.1.1.1. OSI 참조모형
- 컴퓨터 간 패킷 통신을 위해 거쳐야하는 7계층

<br />

#### 1.1.1.2. 7계층 계층의 기능
|       |      계층      |                    기능                     |
| :---: | :------------: | :-----------------------------------------: |
| 7계층 |    응용계층    |           응용프로세스간 정보교환           |
| 6계층 |    표현계층    |   정보 표현방식 관리, 암호화, 정보압축 등   |
| 5계층 |    세션계층    |           응용프로세스간 대화관장           |
| 4계층 |    전달계층    | 응용프로세스간 통신채널 설정 및 메시지 전달 |
| 3계층 |  네트워크계층  |        통신전담 프로세서간 패킷전송         |
| 2계층 | 데이터링크계층 |           링크상에서의 패킷 전송            |
| 1계층 |    물리계층    |         링크상에서의 비트정보 전송          |

<br /><br />

#### 1.1.1.3. TCP/IP 프로토콜
**IP (Internet Protocol)** 
- 인터넷이 통하는 네트워크에서 정보를 수신하고 송신하는 통신에 대한 규약.
  - 패킷 데이터들을 최대한 빨리 특정 목적지 주소로 보내는 프로토콜
  - 패킷 전달 여부를 보증하지 않으며, 패킷을 보낸 순서와 받는 순서가 다를 수 있습니다. (빨리 보내는게 목적이기 때문에)
  
<br />

**TCP (Transmission Control Protocol)**
- 패킷을 정상적으로 받을 수 있도록 하는 프로토콜
  - IP 보다 패킷 전송 속도 느림.
  - 패킷 전달 여부 보증, 패킷 정렬.

<br />

**TCP/IP**
- 두 가지 프로토콜 방식을 조합하여 인터넷 통신하는 것
  - IP 를 통해 빠르게 패킷 전송
  - TCP 를 통해 패킷 정상적 수신 

<br /><br />

#### 1.1.1.4. 4계층 계층의 기능
|       |        계층        |                       기능                       |
| :---: | :----------------: | :----------------------------------------------: |
| 4계층 |      응용계층      |             응용프로세스간 정보교환              |
| 3계층 |     전송 계층      |             호스트 간의 자료 송수신              |
| 2계층 |    인터넷 계층     | 데이타 전송을 위한 논리적 주소 지정 및 경로 지정 |
| 1계층 | 네트워크 연결 계층 |          실제 데이타인 프레임을 송수신           |

<br /><br />

#### 1.1.1.5. 7계층 vs 4계층
<img src="..\..\image\network\computer-network\layer.png" width="600" height="330">

<br /><br />

### 1.1.2. IP (Internet Protocol)
#### 1.1.2.1. IP 특성
- 전송 경로의 확립이나 네트워크 주소와 호스트 주소의 정의에 의한 네트워크의 논리적 관리 등을 담당 
- TCP/IP 프로토콜에서 가장 많이 사용되는 프로토콜 
 
<br>

1. 비 신뢰성 (Unreliable) 
   - IP 데이터그램이 목적지에 성공적으로 도달한다는 것을 보장하지 않음
2. 비접속형 (Connectionless) 
   - 전달되는 데이터그램에 대해 상태 정보 유지하지 않음
3. 주소 지정 
   - 각 네트워크 상에 접속해 있는 노드의 주소를 지정해서  데이터를 전송할 목적지 지정
4. 경로 설정
   - IP의 주요 기능으로서 목적지의 주소를 가지고 패킷을 전송하기 위하여 최적의 경로를 설정해 주는 역할 

#### 1.1.2.2. IP 주소체계
**IP 주소**
- 각각의 네트워크 장비들이 가진 고유한 주소
- 네트워크 식별자와 호스트 식별자로 구성

**IP 주소 체계**
1. Class A
   - 첫 바이트의 7비트가 네트워크 식별자
   - 한 네트워크에 가장 많은 호스트를 가짐 224
2. Class B 
   - 14비트의 네트워크 식별자
   - 한 네트워크에 약 216 대의 호스트를 수용
3. Class C
   - 세 번째 바이트까지가 네트워크 식별자
   - 한 네트워크에 254대까지 수용
4. Class D 
   - 이 클래스는 멀티캐스트 주소로 사용
   - 향후 예약주소로 사용
<img src="..\..\image\network\computer-network\ip-adress.png" width="600" height="330">

> ipv4 주소 클래스 4개 제일 많이 사용되는게 c 클래스

<br><br>

### 1.1.3. 서브넷팅 (Subnetting)
### 1.1.4. 서브넷팅이란
- 주어진 네트워크 주소를 작게 나누어 여러 개의 서브넷으로 구성
- 네트워크 식별자 부분을 구분하기 위한 mask를 서브넷 마스크(subnet mask)라고 함
- 일반적인 Class C를 두 비트의 서브넷 마스크를 사용하여 구성하면 다음과 같음
<img src="..\..\image\network\computer-network\subnetting.png" width="600" height="330">

<br><br>

#### 1.1.4.1. 서브넷팅 예
- Class C인 203.252.53 네트워크를 할당 받은 기관에서 6개의 서브 네트워크를 구성할 때
  - 서브넷의 id가 모두 0인 것과 1인 서브넷은 특수 주소로 제외
  - 총 8개의 서브넷 필요
  <img src="..\..\image\network\computer-network\subnetting2.png" width="600" height="330">

- 8개의 서브넷으로 나누므로 세 비트의 subnet id 사용
- 6개의 서브넷에 할당되는 주소의 범위는 다음과 같음
<img src="..\..\image\network\computer-network\subnetting3.png" width="600" height="330">

- 할당된 주소범위에서 맨 왼쪽과 오른쪽은 각각 host id가 0과 1이므로 제외하고 할당
- 6개의 네트워크에 각각 30대의 호스트를 할당함
<img src="..\..\image\network\computer-network\subnetting4.png"width="600" height="330">

| Bitmask (서브넷 마스크로 사용된 1의 개수) | Netmask(255.255.255.x) | 네트워크 수 (서브넷 개수) | 호스트 수 |
| ----------------------------------------- | ---------------------- | ------------------------- | --------- |
| /25                                       | 128                    | 2                         | 128       |
| /26                                       | 192                    | 4                         | 64        |
| /27                                       | 224                    | 8                         | 32        |
| /28                                       | 240                    | 16                        | 16        |
| /29                                       | 248                    | 32                        | 8         |
| /30                                       | 252                    | 64                        | 4         |
| /31                                       | 254                    | 128                       | 2         |
| /32(Host Rount)                           | 225                    | 256                       | 1         |

서브넷 마스크의 마지막인 32bit는 (255.255.255.255)를 호스트루트(Broadcast)라고 하는데 이것은 특정 호스트로 가는 경로를 알릴때 사용한다.

```javascript
IP Address 192.168.40.1
이진수 변환 -> 1100 0000. 1010 1000. 0010 1000. 0000 0001

Subnet Mask /24 (255.255.255.0)
이진수 변환 -> 1111 1111. 1111 1111. 1111 1111. 0000 0000

AND 연산

1100 0000. 1010 1000. 0010 1000. 0000 0001
1111 1111. 1111 1111. 1111 1111. 0000 0000
-------------------------------------------
1100 0000. 1010 1000. 0010 1000. 0000 0000

Network Address 192.158.40.0 이 된다.
Broadcast Address 192.158.40.255

Host Address 192.158.40.1 ~ 192.158.40.254
Total IP Address count 256 (=2의8승)
Total Host Address count 254 (Network Address 0, Broadcast 255 제외)

---------------------------------------------------------

IP Address 192.168.42.50
이진수 변환 -> 1100 0000. 1010 1000. 0010 1010. 0011 0010

Subnet Mask /21 (255.255.248.0)
이진수 변환 -> 1111 1111. 1111 1111. 1111 1000. 0000 0000

AND 연산

1100 0000. 1010 1000. 0010 1010. 0011 0010
1111 1111. 1111 1111. 1111 1000. 0000 0000
-------------------------------------------
1100 0000. 1010 1000. 0010 1000. 0000 0000

Network Address 192.158.40.0

Host Address 192.158.40.1 ~ 192.158.47.254
Broadcast Address 192.158.47.255
Total IP Address count 2048 (=2의11승)
Total Host Address count 2046 (Network Address 0, Broadcast 255 제외)
```

<br><br>

### 1.1.5. UDP vs TCP
### 1.1.6. UDP(User Datagram Protocol)
- 인터넷에서 정보를 주고받을 때, 서로 주고받는 형식이 아닌 한쪽에서 일방적으로 보내는 방식의 통신 프로토콜, 즉  보내는 쪽에서는 받는 쪽이 데이터를 받았는지 받지 않았는지 확인할 수 없고, 또 확인할 필요도 없도록 만들어진 프로토콜

1. 비연결형 (Connectionless) 
   - TCP와 달리 연결설정 없이 데이터를 전송
   - 연결 설정을 위한 지연 시간이 걸리지 않음
2. 비 상태정보 (Non-State) 
   - 연결 정보나 상태 정보를 저장하지 않음
3. 경량의 오버헤드 (Small Overhead) 
   - TCP 세그먼트의 헤더는 20바이트, UDP는 8바이트 
4. 비정규적인 송신률 (Unregulated Send Rate)
   - 일부 패킷의 손실이 생기더라도 최소 전송률을 요구하는 실시간 전송의 경우 비정규적 송신률 이용
5. 최선의 서비스 (Best Effort) 
   - 서비스의 지연 없이 최선의 서비스를 제공 

<br><br>

### 1.1.7. UDP 헤더
1. 포트번호 (Port Number) 
   - 송신 프로세스와 수신 프로세스를 구분하며, IP로부터의 들어오는 데이터를 수신하기 위하여 목적지 포트 번호를 사용
2. UDP 길이 (UDP Length) 
   - UDP 헤더와 데이터의 바이트 길이를 합친 값
3. UDP 체크섬 (UDP Checksum) 
   - UDP 헤더와 UDP 데이터를 모두 포함하여 체크  
<img src="..\..\image\network\computer-network\udp-header.png" width="600" height="330">

<br><br>

### 1.1.8. TCP(Transmission Control Protocol)
1. 접속형 (Connection-Oriented) 
   - TCP를 사용하는 두 어플리케이션이 데이터를 교환하기 전에 TCP접속을 성립
2. 신뢰성 (Reliability) 
   - 수신 확인을 통하여 신뢰성 있는 통신을 수행 
3. 흐름 제어 (Flow Control) 
   - 각 TCP 접속의 종단에 일정 크기의 버퍼 공간을 갖고, 송신하는 TCP가 수신 측이 갖고 있는 버퍼의 크기만큼 데이터를 보내도록 제어하여, 처리 속도가 느린 수신 측 호스트의 버퍼 크기를 넘치게 하는 것을 방지 
4. 혼잡 제어 (Congestion Control) 
   - 네트워크 내에 존재하는 패킷의 수가 과도하게 증가되는 현상을 혼잡(Congestion)이라 함
   - 혼잡 현상을 방지하거나 제거하는 기능을 혼잡 제어(Congestion Control)라고 함 
<img src="..\..\image\network\computer-network\tcp.png" width="600" height="330">

### 1.1.9. TCP 헤더
1. 포트번호 (Port Number) 
   - TCP세그먼트를 송수신하는 응용을 구분
   - IP주소와 포트번호의 조합을 소켓(Socket)이라 함
2. 순서번호 (Sequence Number) 
   - 전송되는 데이터 스트림의 바이트를 구분
3. 확인응답번호 (Acknowledgement Number) 
   - 데이터의 수신을 확인하는 번호
   - 수신한 마지막 바이트의 순서번호에 1을 더한 값 
4. 헤더 길이 (Header Length) 
   - 32비트 워드 단위로서 헤더의 길이를 지정
   - 옵션(option)필드가 가변길이를 가지기 때문에 정확한 길이를 알기 위하여 필요  
<img src="..\..\image\network\computer-network\tcp-header.png" width="600" height="330">

5. 6개의 플래그 비트
<img src="..\..\image\network\computer-network\tcp-flag.png" width="600" height="330">

6. 체크섬 (Checksum) 
   - TCP 헤더와 TCP 데이터에 대한 체크섬을 수행 
7. 긴급포인터 (Urgent Pointer) 
   - URG 플래그가 설정되어 있을 때만 유효한 값을 가짐
송신 측에서 데이터를 긴급히 보낼 때 사용되는 방법 

<br>

> 즉, 신뢰성이 요구되는 애플리케이션에서는 TCP를 사용하고 간단한 데이터를 빠른 속도로 전송하고자 하는 애플리케이션에서는 UDP를 사용한다.


<br><br>

## 1.2. Routing
**라우팅**
- 패킷을 전송하기 위해 송신측에서 목적지까지의 경로를 정하고 정해진 경로를 따라 패킷을 전달하는 일련의 과정
- 소스에서 목적지까지 데이터 전송을 위해 거쳐가는 경로

<br><br>

### 1.2.1. CIDR(Classless Inter-Domain Routing)
- 라우터관점에서 IP공간은 네트워크 번호와 호스트 번호로 구성됨.
- 라우터들은 모든 호스트들은 알 필요가 없지만 모든 네트워크들은 반드시 알고 있어야 함
- CIDR: 여러IP주소를 보다 작은 라우팅 테이블 엔트리로 표현하는 방법(예, 단일 사이트에 10개의 C클래스 주소가 할당되어 있다면 이를 한 개의 라우팅 테이블로 합칠 수 있음. 이 경우 10개의 엔트리는 한 개의 라우팅 테이블 엔트리로 줄어들게 됨)
- CIDR을 사용하는 이유: 인터넷 라우팅 테이블의 크기가 매우 커지는 것을 방지하기 위해
- CIDR은 새로운C클래스 주소 뿐만 아니라 모든 주소에 동일하게 적용됨
<img src="..\..\image\network\computer-network\cidr.png" width="600" height="330">

<br><br>

### 1.2.2. RIP (Routing Information Protocol)
- 라우팅 경로 계산을 위해 거리벡터알고리즘을 사용하는 라우팅 프로토콜
- 가장 단순한 라우팅 프로토콜
- Bell-man이 제안한 알고리즘으로써 Bellman Ford 프로토콜이라 함
- 라우터는 주기적으로 이웃 라우터와 라우팅 정보 교환
- 특징: 유효 경로를 최대 2개까지 만 채택함
<img src="..\..\image\network\computer-network\rip.png" width="600" height="330">

<br><br>

#### 1.2.2.1. 문제점
- 홉수가 15이상인 네트워크에 사용할 수 없으므로 네트워크 규모의 제한
- 메트릭을 홉수로 제한함에 따라 항상 가장 빠른 경로를 선택할 수 없음
- 라우팅 정보가 30초 마다 교환되므로 장애시 전체 네트워크의 복구시 많은 시간이 소요
- 특정 경로에 루프 가능성

<br><br>

#### 1.2.2.2. 해결방안
- Triggered Update(트리거 갱신): 변경시 즉시 변경 정보를 통보함으로써 복구 시간을 줄임
- Hold down: Triggered Update의 반대 개념으로써 무한대인 경로에 대해서 전체 네트워크의 경로가 새로 갱신될 때까지 일정 시간 동안 기다림
- Split horizon: 라우팅 정보를 전달해준 인터페이스로 재 전송하지 않음으로 루프 방지
- Route poison:  회선이 고장난 경우 즉시 홉을 16으로 지정하여 전체 네트워크에 전송

<br><br>

#### 1.2.2.3. 라우팅 테이블 생성방법
- 거리 벡터 라우팅 테이블은 목적지 주소와 비용 그리고 이웃 라우터의 주소 저장
- 라우터의 초기 라우팅 테이블은 자신의 이웃 정보로 구성
<img src="..\..\image\network\computer-network\distance-vector1.png" width="600" height="330">
<img src="..\..\image\network\computer-network\distance-vector.png" width="600" height="330">

<br><br>

### 1.2.3. 링크상태 알고리즘 (Link State Algorithm)
- 링크 상태 프로토콜에서 모든 라우터는 이웃에 대한 연결 정보를 가지고 있음
- 라우터는 이웃에 대한 연결정보를 다른 모든 라우터에 전달
- 네트워크 전체 토폴로지에 대한 정보를 얻고 이를 바탕으로 최적의 경로 선택하는 알고리즘

<br><br>

### 1.2.4. OSPF (Open Shortest Path First)
- 모든 라우터는 동일한 토폴로지 데이터베이스 유지, 자신을 중심으로 최적의 경로를 계산
- 링크 상태 알고리즘을 사용
- 네트워크에 변화시 플러딩과정을 통해 갱신

<br><br>

## 1.3. IPv6
### 1.3.1. IPv6에서 정의된 표준 기술
1. 범위(Scale)
2. 토폴로지 유연성
3. 매체 독립성
4. 비신뢰성 데이터그램 서비스
5. 안전한 동작
6. 고유한 이름
7. 멀티캐스트
8. 이동성 지원 등

<br><br>

### 1.3.2. IPv6 주소
#### 1.3.2.1. 주소 표기법
- IPv6의 주소 표기는 16진수 콜론 표기법(hexadecimal colon notation)을 사용
- 128비트를 16비트씩 8개의 필드로 나누어 콜론(:)으로 구분

>예) BEAF:2002:0221:F207:0000:0000:FFFF:4002

<br><br>

#### 1.3.2.2. 주소 생략법
##### 1.3.2.2.1. 0 생략
- IPv6의 주소 표현법은 16진수의 128비트로 긴 주소를 표현함
- 그러나 이 주소 표기법을 그대로 사용할 때는 “0”의 주소 표기로 인해 문제점 발생
- 이를 해결하기 위한 방법으로 각 필드에서 “0” 표기 생략법 도입하여 문제 해결 
- 즉, 각 필드에서 선행하는 0은 생략
<img  src="..\..\image\network\computer-network\ipv6-adress.png"  width="600"  height="330">

>예) 0221은 221로, 00AB는 AB로, 0000은 0으로 생략
     단, 뒤에 나오는 0은 생략 불가 

<br><br>

##### 1.3.2.2.2. 이중콜론
- 0으로만 나타난 연속된 필드는 0을 모두 삭제하고 2개의 콜론(이중콜론) 만으로 나타냄
  - “::”기호를 사용하는 경우 주소당 한 번만 허용
  - “::”는 주소 내에서 선행과 후행에 관계없이 사용
<img  src="..\..\image\network\computer-network\ipv6-adress2.png"  width="600"  height="330">

<br><br>

##### 1.3.2.2.3. IPv4와 IPv6의 주소를 함께 표현하는 경우
- 하위 32비트를 IPv4 형식으로 표기
- x:x:x:x:x:x:d.d.d.d   -   “x”는 16진수 값, “d”는 10진수 값
- 
> 예)      ::203.252.1.1 
       ::FFFF:123.1.0.42 

<br><br>

#### 1.3.2.3. 주소 프리픽스 표현 방법
- IPv6의 주소 뒤에 “/”를 표기하고 프리픽스의 길이를 10진수의 숫자로 표기
  - 프리픽스란 앞에 0이 아닌 숫자 전부 한칸당 4비트(16)
<img  src="..\..\image\network\computer-network\ipv6-adress3.png"  width="600"  height="330">

>예)    BEAF :: ABCD : 0 : FFFF / 70

<br><br>

### 1.3.3. IPv4 vs IPv6
<img  src="..\..\image\network\computer-network\ipv4-ipv6.png"  width="600"  height="330">

<br><br>

#### 1.3.3.1. IPv4/IPv6 전환 
- IPv4의 IPv6 주소로의 전환을 하기 위해 현재에는 이들 주소가 공존하여 사용되고 있음
- 서로 다른 IPv4와 IPv6를 연동하기 위한 연동 방법
  1. 이중 스택 (Dual Stack) 기법
  2. 터널링 (Tunneling) 기법
  3. IPv4/IPv6 변환 기법

<br><br>

##### 1.3.3.1.1. 이중 스택 (Dual Stack)
- IP계층에 두 가지(IPv4, IPv6)의 프로토콜이 모두 탑재되어 있고 통신 상대방에 따라 해당 IP 스택을 선택하는 기법
- 양쪽의 프로토콜 스택 모두를 채택하는 기법
- 이중 스택 기법은 IPv6 시스템들과 통신하기 위해서 IPv6를 사용하고, 기존의 시스템들과 통신하기 위해 IPv4를 사용함

##### 1.3.3.1.2. 터널링 (Tunneling)
- 터널링 기법: 어떤 프로토콜의 패킷을 다른 프로토콜의 패킷 안에 캡슐화하여 통신하는 기법
<img  src="..\..\image\network\computer-network\tunneling.png"  width="600"  height="330">

<br><br>

##### 1.3.3.1.3. IPv4/IPv6 변환 (Translation)
- IPv4-IPv6 게이트웨이를 통해 서로 다른 네트워크 상의 패킷을 변환하는 기법
- 네트워크 레벨의 게이트웨이 vs. 어플리케이션 레벨의 게이트웨이
<img  src="..\..\image\network\computer-network\ipv4-to-ipv6.png"  width="600"  height="330">

<br><br>

## 1.4. VoIP
### 1.4.1. VoIP에서의 QoS에 영향을 미치는 요인들

1. 지연
- 신호가 네트워크를 경유하는데 소요되는 시간
- PSTN 망에서는 전송 지연에 의해 주로 결정되며 네트워크 교환 장비를 통한 지연은 아주 적음
- 패킷 지연은 주로 버퍼링, 큐잉, 스위칭 또는 IP 라우터의 라우팅 지연에 의해 결정
- VoIP 장비 지연

2. 지터
- 지연 시간이 일정하지 못하고 시간에 따라 변동되는 지연으로서 음성 패킷들이 도착하는데 있어서 규칙성을 나타냄


### 1.4.2. RTP와 RTCP
- 정의: 멀티미디어 서비스를 위한 프로토콜 
- 수행 기능: OSI 7계층 구조의 네트워크 계층에서 전송 계층으로 음성 패킷을 전달하는 기능 수행
- RTP: 인터넷 상에서 음성 또는 영상과 같은 실시간 데이터를 전송하기 위한 인터넷 표준 프로토콜
- RTCP 사용 이유: 실시간 특성을 반영하면서 지연을 효율적으로 대처하고 다양한 미디어 지원을 위해서 사용됨 
- 특징: RTP와 RTCP는 낮은 지연을 유지하기 위하여 TCP 프로토콜이 아닌 UDP 프로토콜을 사용

<br><br>

#### 1.4.2.1. RTP (Real-time Transport Protocol)
- RTP는 음성 영상 데이터 등과 같은 실시간 정보를 멀티캐스트나 유니캐스트 서비스를 통해서 전송하는데 적합한 프로토콜
- 특징: 
  - QoS나 전송의 신뢰성은 보장하지 않음
  - UDP를 사용

<br><br>

#### 1.4.2.2. RTCP(RTP Control Protocol)
- RTP의 QoS(Quality of Service)를 유지하기 위해 데이터 전송을 감시하고, 세션 관련 정보를 전송하는데 사용되는 프로토콜
- 특징
  - 세션의 품질에 대한 종단간 정보를 전달
  - 패킷 지연, 지터, 수신 패킷, 패킷 손실 등의 품질 정보를 통하여 실시간으로 네트워크의 상태 평가

<br><br>

### 1.4.3. SIP vs MGCP (h323)
#### 1.4.3.1. SIP (Session Initiation Protocol)
- 정의: 인터넷 전화기, PDA, 휴대폰 등과 같이 음성 통신이 가능한 VoIP단말기 간의 호를 설정하기 위해 개발된 프로토콜
- 기능: 단말 간 또는 사용자들 간에 기존의 VoIP 서비스 뿐만 아니라 멀티미디어 컨퍼런스, 인터넷 텔레폰, 원격 교육 등의 세션 및 호를 생성, 변경, 해제 하는 기능 수행
- SIP의 특징
   - 최소 상태(Minimal State)유지
   - 하위 계층 프로토콜에 중립
   - 텍스트 기반 프로토콜
   - 사용자 이동성-

<br><br>

#### 1.4.3.2. MGCP (Media Gateway Control Protocol)
- 미디어 전송을 제어하기 위한 프로토콜
- 게이트웨이를 제어하기 위한 시그널링 프로토콜
- 서비스 기능: 인터넷 망과 기존의 PSTN 망 사이에 게이트웨이를 사용함으로써 서로 다른 네트워크를 연동하여 VoIP 서비스 제공

<br><br>

## 1.5. VPN
### 1.5.1. VPN 구현 기술
1. 암호화 기술
- 송신측이 데이터 전송 전에 암호화 하고 수신측은 이를 복호화 하여 보안성 강화

2. 터널링 기술
- 전송하고자 하는 데이터를 특정 프로토콜로 캡슐화 하여 전송

3가지 알고리즘 

<br><br>

### 1.5.2. 터널링
- 송신자와 수신자 사이의 전송로에 외부로부터의 침입을 막기 위해 일종의 파이프를 구성하는 것
- 파이프는 터널링을 지원하는 프로토콜을 사용하여 구현하고 있으며 사설망과 같은 보안 기능을 지원
- 터널링 되는 데이터를 페이로드(Payload)라고 부르며 터널링 구간에서 페이로드는 그저 전송되는 데이터로 취급되어 그 내용은 변경되지 않음

<br><br>

#### 1.5.2.1. PPTP와 L2TP의 차이점
<img  src="..\..\image\network\computer-network\pptp-l2tp.png"  width="600"  height="330">

<br><br>

### 1.5.3. 인증 방식
#### 1.5.3.1. Peer-Peer 방식
- 독립적인 2개의 호스트 간에 요청 및 응답을 통한 사용자 인증
- PAP(Password Authentication Protocol)
  - two-way handshaking 방식
  - 인증을 요청하는 호스트에서 - 사용자 ID와 암호를 일반 텍스트 형태로 전달
  - 인증 정보의 외부 노출이 손쉽게 이루어 질 수 있음
- CHAP(Challenge Handshake Authentication Protocol)
  - three-way handshaking 방식
  - 인증서버는 호스트로 challenge 메시지를 보내면, 호스트는 보안을 위해 해시 함수(Hash function)를 이용하여 계산한 값을 보내고 그런 다음 인증서버는 값이 일치하면 인증하는 방식
- Peer-Peer 방식은 동일한 호스트를 사용하는 사용자 별로 차별화된 네트워크 접근 권한을 할당할 수 없다는 단점을 갖고 있음 

<br><br>

#### 1.5.3.2. 클라이언트-서버(Client/Server) 방식
- 보안 관리 기능에 대해 좀 더 편리하고 유연하게 제공하기 위한 방식
- TACACS (Terminal Access Controller Access-Control System)
  - 인증에 필요한 사용자 ID, 암호, PINs 및 암호키 정보를 인증서버에서 데이터베이스 형태로 관리, 클라이언트로부터의 인증 요청을 처리
  - 사용자와 서버 사이에 전달되는 모든 데이터는 일반 텍스트 형태
  - TACACS+에서는 MD(Message-Digest), 즉 해시 함수를 추가하여 인증 데이터에 대한 보안 기능을 강화
  - TACACS+는 멀티프로토콜 로그인(Multiprotocol login)을 지원
  IP 이외에도 IPX, AppleTalk 등의 네트워크에서도 로그인이 가능
- RADIUS(Remote Access Dial-In User Service)
  - 사용자 인증 이외에도 사용자 연결 관리를 위해 NAS와 연동
  - NAS는 사용자가 네트워크로의 접속을 제공하는 서버 기능을 제공하면서 동시에 RADIUS에 대해 클라이언트 역할을 수행
  - RADIUS도 TACACS와 마찬가지로 인증서버에서 인증에 관련된 정보를 단일의 데이터베이스 형태로 관리
  - RADIUS서버와 클라이언트는 사용자 암호의 안전한 송수신을 위해 비밀키 암호화 방식을 사용 

<br><br>

## 1.6. Reference <!-- omit in toc -->
[TCP와 UDP 차이](https://velog.io/@hidaehyunlee/TCP-%EC%99%80-UDP-%EC%9D%98-%EC%B0%A8%EC%9D%B4)