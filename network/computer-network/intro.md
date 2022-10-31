Main point

- [**1. 통신 프로토콜과 네트워크 계층구조**](#1-통신-프로토콜과-네트워크-계층구조)
  - [**1.1. OSI 참조모형**](#11-osi-참조모형)
    - [**1.1.1. 7계층 계층의 기능**](#111-7계층-계층의-기능)
  - [**1.2. TCP/IP 프로토콜**](#12-tcpip-프로토콜)
    - [**1.2.1. 4계층 계층의 기능**](#121-4계층-계층의-기능)
  - [**1.3. 7계층 vs 4계층**](#13-7계층-vs-4계층)
- [**2. LAN**](#2-lan)
  - [**2.1. LAN**](#21-lan)
  - [**2.2. IEEE 802 표준**](#22-ieee-802-표준)
    - [**2.2.1. LLC (Logical Link Control)**](#221-llc-logical-link-control)
    - [**2.2.2. MAC (Medium Access Control, 매체 접근 제어)**](#222-mac-medium-access-control-매체-접근-제어)
  - [**2.3. CSMA/CD**](#23-csmacd)
  - [**2.4. 10기가 비트 이더넷**](#24-10기가-비트-이더넷)
  - [**2.5. 스위치 (Switch)**](#25-스위치-switch)
- [**3. MAN (Metropolitan Area Network)**](#3-man-metropolitan-area-network)
  - [**3.1. MAN 토폴로지(Topology)**](#31-man-토폴로지topology)
    - [**3.1.1. DQDB(Distributed Queue Dual Bus)**](#311-dqdbdistributed-queue-dual-bus)
      - [**3.1.1.1. 이중버스 구조**](#3111-이중버스-구조)
      - [**3.1.1.2. 분산 큐 구조**](#3112-분산-큐-구조)
      - [**3.1.1.3. DQDB의 프레임**](#3113-dqdb의-프레임)
      - [**3.1.1.4. DQDB (Distributed Queue Dual Bus)의 동작 과정**](#3114-dqdb-distributed-queue-dual-bus의-동작-과정)
  - [**3.2. 메트로 이더넷 (Metro Ethernet)**](#32-메트로-이더넷-metro-ethernet)
- [**4. 무선랜 (WLAN, Wireless LAN)**](#4-무선랜-wlan-wireless-lan)
  - [**4.1. 무선랜 기술**](#41-무선랜-기술)
    - [**4.1.1. CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**](#411-csmaca-carrier-sense-multiple-access-with-collision-avoidance)
    - [**4.1.2. 대역확산 통신방식(Spread-Spectrum Technology)**](#412-대역확산-통신방식spread-spectrum-technology)
    - [**4.1.3. OFDM (Orthogonal Frequency Division Multiplexing: 직교 주파수 분할 다중화 방식)**](#413-ofdm-orthogonal-frequency-division-multiplexing-직교-주파수-분할-다중화-방식)
    - [**4.1.4. MIMO (Multi-Input Multi-Output, 다중 입출력 안테나)**](#414-mimo-multi-input-multi-output-다중-입출력-안테나)
- [**5. 광 네트워크 (Optic Network)**](#5-광-네트워크-optic-network)
  - [**5.1. 다중화**](#51-다중화)
    - [**5.1.1. 다중화 종류**](#511-다중화-종류)
  - [**5.2. SONET/SDH(Synchronous Optical NETwork/Synchronous Digital Hierarchy)**](#52-sonetsdhsynchronous-optical-networksynchronous-digital-hierarchy)

<br /><br />

## **1. 통신 프로토콜과 네트워크 계층구조**
### **1.1. OSI 참조모형**
- 컴퓨터 간 패킷 통신을 위해 거쳐야하는 7계층

<br />

#### **1.1.1. 7계층 계층의 기능**
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

### **1.2. TCP/IP 프로토콜**
**IP (Internet Protocol)** 
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

#### **1.2.1. 4계층 계층의 기능**
|       |        계층        |                       기능                       |
| :---: | :----------------: | :----------------------------------------------: |
| 4계층 |      응용계층      |             응용프로세스간 정보교환              |
| 3계층 |     전송 계층      |             호스트 간의 자료 송수신              |
| 2계층 |    인터넷 계층     | 데이타 전송을 위한 논리적 주소 지정 및 경로 지정 |
| 1계층 | 네트워크 연결 계층 |          실제 데이타인 프레임을 송수신           |

<br /><br />

### **1.3. 7계층 vs 4계층**
<img src="..\..\image\network\computer-network\layer.png" width="600" height="330">

<br /><br />

## **2. LAN**
### **2.1. LAN**
- 제한된 거리에 있는 다수의 독립된 컴퓨터 기기 간 데이터 통신 시스템

<br />

**장점**
- 단말 장치의 이동 및 변경 용이.
- 많은 수의 단말 연결 가능.
- 중앙에 집중되어 있는 컴퓨팅 자원을 편리한 장소에 분배 가능.

<br />

**단점**
- 짧은 거리에서의 통신만 지원, 확장을 위해 리피터와 같은 네트워킹 장비 사용.
- CSMA/CD를 사용할 경우 스테이션의 수 한정.

<br /><br />

### **2.2. IEEE 802 표준**
- 많은 네트워크 장비 공급 업체들로부터 출시되는 관련 장비들간의 호환성 및 장비간 연동을 위하여 IEEE(전기 전자 전문가 협회)는 802 위원회를 조직하여, LAN에 관한 표준화를 추진함
<img src="..\..\image\network\computer-network\iee802.png" width="600" height="330">

<br /><br />

#### **2.2.1. LLC (Logical Link Control)**
- 상위 계층인 네트워크 계층과 LAN의 MAC 계층을 연결해 주는 인터페이스

<br /><br />

#### **2.2.2. MAC (Medium Access Control, 매체 접근 제어)**
- LAN에서 하나의 통신 회선을 여러 단말장치들이 원활하게 공유할 수 있도록 해주는 통신 회선에 대한 접근 방식

<br />

**매체 접근 제어 방식**
- CSMA/CD (반송파 감지 다중 접속 및 충돌탐지, Carrier Sense multiple Access with Collision Detection)
  - 스테이션이 채널의 상태를 미리 감지해 충돌을 피하는 방식

<br />

- 토큰 링 (Token Ring) 
  - 토큰이라는 짧은 프레임을 사용하여 데이터를 보낼 권리를 정하여 데이터를 정하는 방식 

<br />

- 토큰 버스 (Token Bus)
  - 토큰 링 방식과 이더넷이 결합된 형태로 물리적으로는 버스 형태를 띄지만 논리적으로는 토큰  링 방식을 사용하는 매체 접근 제어 방식  
<img src="..\..\image\network\computer-network\mac.png" width="400
" height="250">

<br /><br />

### **2.3. CSMA/CD**
**CSMA/CD(Carrier Sense multiple Access with Collision Detection)**
- 스테이션이 채널의 상태를 감지해 충돌을 피하는 매체 접근 방식.
  - Xerox사가 동축케이블을 매체로 하는 LAN으로 개발
  - 효율이 낮다
    - 트래픽이 많은 곳에서는 사용하지 않는다.
  - 노드의 증설 및 이전을 쉽게 할 수 있음.
  - 우리가 쓰는 LAN의 대부분이 이더넷(CSMA/CD)
  - CSMA/CD프로토콜을 이용한 제품의 이름으로 이더넷이 있다.
  
<br />

**전송절차**
1. 패킷을 버퍼에 저장, 버스가 비워질 때까지 기다림
2. 버스가 비어있음을 통보받은 직후 패킷을 멘체스터방식에 따라 부호화, 버스로 송출
3. 충돌감지 시 패킷전송 중지, 다른 노드에 충돌신호(jam signal) 송출 후 일정시간 대기 후 1과정 반복  
   1. 충돌 감지 시간은 충돌 윈도우(Collision Window)이라함.
   2. 재전송 전 대기시간은 binary exponential backoff 알고리즘에 의해 결정.
   3. 재송출 시도 16번
<img src="..\..\image\network\computer-network\csma-cd.png" width="600" height="330">

<br /><br />

### **2.4. 10기가 비트 이더넷**
- 전이중 방식만 지원
- 10Gbps 전송 속도 지원을 위해 광케이블과 동축케이블 사용 권장.
- 기존의 이더넷과의 호환 용이.

<br />

**구조**
- MAC 계층
  - 이전 이더넷 기술의 MAC 계층과 유사
- 물리 계층
  - 사용되는 매체의 종류와 그 길이, 인코딩 방식 등을 규정하는 계층구조로서 크게 물리매체에 의존적인 부계층구조와 그렇지 않는 계층 구조로 구분됨
    - **물리매체제에 의존적인 부계층: PCS, PMA, PMD, 물리매체에 의존적이지 않는 부계층: RS**
  - 10GMII가 MAC 계층과 물리 계층 간의 
인터페이스를 제공
- 코딩 기법
  - 8B/10B 
  - 스트램블링
  - MB810
<img src="..\..\image\network\computer-network\10g.png" width="600" height="330">
<img src="..\..\image\network\computer-network\10g2.png" width="600" height="330">

<br /><br />

### **2.5. 스위치 (Switch)**
**스위칭 방법에 따른 분류**
- Store-and-Forward 스위치
  - 프레임을 전송하기 전에 전체 프레임을 수신하는 방식으로 기존의 브리지와 거의 같은 방식으로 스위칭
- Cut-Through 스위치
  - 전체 프레임이 수신되기를 기다리는 것 대신에 프레임의 송신지 및 수신지 주소를 얻기 위해 프레임의 첫 번째 몇 바이트만을 읽는다. 즉 프레임의 중계 시간을 최소화한 방식
- Interim Cut-Through 스위치
  - Cut-Through 스위치의 단점 중 크기가 작은 런트 프레임의 중계를 막는 기능을 보강한 스위치
<img src="..\..\image\network\computer-network\switch.png" width="600" height="330">

<br /><br />

## **3. MAN (Metropolitan Area Network)**
- 대도시에 산재해 있는 기업과 가정 등의 가입자들을 연결하는 망구조
  - LAN과 WAN의 중간 크기
  - LAN과 LAN을 연결

**MAN의 역할**
- MAN에서의 롱홀
  - 롱홀은 백본 망과 메트로 엑세스 구간을 연결시켜주는 기능을 수행
     즉, 가입자 망을 백본망으로 연결해 주는 기능 수행

>백본(backbone) 또는 백본망(backbone network, 중추망)  
은 다양한 네트워크를 상호 연결하는 컴퓨터 네트워크.

<br /><br />

### **3.1. MAN 토폴로지(Topology)**
- LAN과 LAN을 효과적으로 연결하고, LAN들 간의 원활한 통신을 제공하기 위한 배치 혹은 연결 방식
  - DQDB(Distributed Queue Dual Bus)
    - MAN의 대표적인 토폴로지
> Topology란?  
컴퓨터 네트워크의 요소들(링크, 노드 등)을 물리적으로 연결해 놓은 것, 또는 그 연결 방식

<br /><br />

#### **3.1.1. DQDB(Distributed Queue Dual Bus)**
- 이중버스형태로 구성되어 있으며, 분산 큐라고 하는 큐잉 방식을 이용하여 준비 큐에 데이터를 삽입하고 자기 차례가 되었을 때 데이터를 전송하는 이더넷 구조

<br />

##### **3.1.1.1. 이중버스 구조**
- 스트림
  - BUS A에서 노드 A는 노드 B의 하향 스트림
  - BUS B에서 노드 A는 노드 B의 상향 스트림
- 정해진 스트림 방향으로만 데이터 전송
- 각 버스의 시작 노드(슬롯 생성기)에서 빈 프레임 슬롯 생성
- 각 노드는 빈 프레임을 받았을 때만 전송가능
- 버스의 마지막 부분으로 갈수록 
기아(Starvation) 현상 발생-가용 대역폭이
줄어들기 때문-해결책: 분산 큐 기법이 제안됨
<img src="..\..\image\network\computer-network\dqdb-bus.png" width="450" height="330">

<br />

##### **3.1.1.2. 분산 큐 구조**
- 대역폭 감소로 인한 기아 현상을 방지하기 위해 제안된 데이터 전송 기법
- 각 노드는 자신이 연결된 각 버스당 하나씩의 큐를 생성
- 해당 버스를 지나는 슬롯 내에 예약정보가 오면 큐에 삽입
- 자신이 데이터를 전송하고자 할 때 큐에 삽입
- 지나가는 슬롯에 예약정보를 삽입
- 자신의 슬롯을 전송하기 전에 다른 노드를 위한 슬롯이 몇 개인지 파악 가능
- 예약은 반대편 버스를 통해 수행
- 노드 A는 버스 A에서 버스 B에 대한 전송 예약을 첫 번째로 수행
- 자신의 큐에 다른 노드에 대한 예약정보가 없다면 자신이 첫 번째임
  - 노드 A는 버스 B에서 최초 슬롯을 받으면 데이터 전송
- B, C, D 역시 버스 A를 이용하여 버스 B에 대한 예약 수행
- D의 경우 4번째로 예약이 된 것을 인지하고 4번째 슬롯이 도달하면 데이터 전송
<img src="..\..\image\network\computer-network\dqdb-queue.png" width="450" height="330">

<br />

##### **3.1.1.3. DQDB의 프레임**
- **B(Busy)**: 슬롯 내부에 데이터의 유무를 나타냄
- ST(Slot Type): 전송 슬롯의 두 가지 유형을 나타냄 
- **R(Reservation)**: 슬롯을 예약하기 위해 사용하는 비트 
- PSR(Previous Slot Read): 슬롯을 읽은 노드에 의해 0 으로 변경 (슬롯을 이전 노드가 읽었는지의 여부)
- RQ(ReQuest): 3개의 비트를 이용하여 전송 우선권을 구분하는 것으로 각 노드에서 예약을 할 때 설정
<img src="..\..\image\network\computer-network\dqdb-frame.png" width="450" height="330">

<br />

##### **3.1.1.4. DQDB (Distributed Queue Dual Bus)의 동작 과정**
1. 그림의 (a): 버스B의 슬롯 생성기에서 생성된 슬롯에 노드B가 예약되어 R비트를 설정함: 이 과정은 노드B가 버스A를 통해서 자신의 데이터를 전송하는 것을 의미함.
2. 노드B는 자신이 슬롯을 예약하여 R비트를 설정한 반대 편 큐에 자신이 전송할 차례임을 알림
3. 그림의 (b): 그림(b)에서 버스 B의 슬롯은 노드A를 지남. 노드A는 슬롯을 전송 받아 예약 비트가 설정되어 있는 것을 확인하고 다음 반대편 큐에 그 사실을 알림.
4. 이 경우 노드A는 버스A에서 생성된 슬롯이 노드B가 사용한 것임을 알게 됨. 
5. 이후 그림의(c)는 버스A에서 생성된 슬롯을 그냥 통과시킴. 그리고 난 후 자신의 큐에 삽입된 노드B의 예약 정보를 삭제함
6. 노드B는 이 슬롯을 전송 받아서 자신이 사용한 슬롯임을 알고 데이터를 실어 전송을 수행함
7. 이때 노드B에는 데이터가 있음을 알리기 위해 슬롯 비트를 Busy비트로 설정하여 데이터를 전송함
8. 이 경우 노드C와 노드D는 Busy비트 B가 설정되어 있음을 알아차리고 데이터 전송을 중단하게 됨.  
<img src="..\..\image\network\computer-network\dqdb.png" width="450" height="330">

<br /><br />

### **3.2. 메트로 이더넷 (Metro Ethernet)**
- MAN이 가지고 있는 여러 가지 문제점들을 해결하면서 고속의 광대역 망 서비스를 제공하기 위해
- 이더넷 프로토콜을 사용
- 패킷 교환 방식

<br /><br />

## **4. 무선랜 (WLAN, Wireless LAN)**
- 기존 네트워크 케이블이나 전화선 등 케이블 대신에 전파를 이용해 컴퓨터 간 네트워크를 구축하는 방식
  - IEEE802.11 기술규격의 브랜드 명이 wireless fidelity이며, 줄여서 Wi-Fi(와이파이), 즉 와이파이는 무선랜의 일종.

<br /><br />

### **4.1. 무선랜 기술**
#### **4.1.1. CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**
- 전송을 원하는 노드가 데이터를 전송하기 전에 먼저 네트워크 사용 여부를 검사하여 사용 중이면 임의의 설정 시간만큼 대기한 후에 다시 전송하는 방법
  - 데이터에 우선순위를 할당할 수 없음.
  - 충돌 발생 시 상위계층에서 이를 처리해야함.
  - 사용빈도가 증가 시 느린 충돌 방지 신호로 인한 전송 지연

<br />

**동작과정**
1. 만약 수신 측에서 CTS(Clear To Send) 패킷을 받지 못하면 일정 횟수만큼 RTS(Request To Send) 패킷을 보낸 다음, 그래도 CTS 패킷을 받지 못할 경우 일정 시간 대기한 후에 패킷을 다시 전송함
2. 두 노드 간이 통신 중일 때는 다른 노드들은 그 시간 동안 채널을 사용하지 못함  

<br /><br />

#### **4.1.2. 대역확산 통신방식(Spread-Spectrum Technology)**
**DSSS (Direct Sequence Spread Spectrum, 직접확산방식)**
- 정보 데이터 신호의 주파수 대역폭보다 훨씬 넓은 대역폭을 갖는 확산코드(PN Code)를 사용해서 정보 데이터 신호를 변조하여 주파수 대역을 확산한 후에 전송하는 통신 방식
  - DSSS방식은 고속 데이터 전송 시 칩 간 간섭의 증가로 하드웨어의 복잡도가 증가함
  
<br />

**FHSS (Frequency Hopping Spread Spectrum, 주파수 도약방식)**
- 코드에 따라 순간적으로 한 주파수로 호핑되어 그 주파수에서 아주 짧은 시간 동안 전송하고, 다시 다른 주파수로 호핑되어 이전과 동일한 과정을 반복하는 방식
  - FHSS방식은 송신측과 수신측 사이에 동기화로 인해 고속 데이터 전송이 어려움
<img src="..\..\image\network\computer-network\dsss.png" width="450" height="330">

<br /><br />

#### **4.1.3. OFDM (Orthogonal Frequency Division Multiplexing: 직교 주파수 분할 다중화 방식)**
- 고속의 송신 신호를 다수의 직교(Orthogonal)하는 협대역 반송파로 다중화시키는 변조 방식
  - DSSS, FHSS 문제점 해결. 
  - 상호 직교성을 갖는 분할된 여러 개의 반송파를 사용하여 주파수 효율이 뛰어남. 
  - 송수신 측에서 여러 개의 반송파로의 고속 구현이 가능함.

>직교성(Orthogonality)이란?   
수학적으로는 각 요소들이 서로 독립적임을 나타내는 용어 .  
일반적으로 정보통신에서 신호/현상의 상호 간에 전혀 관련성이 없음을 의미.

<br /><br />

#### **4.1.4. MIMO (Multi-Input Multi-Output, 다중 입출력 안테나)**
- 기지국과 단말기에 여러 안테나를 사용하여 사용된 안테나 수에 비례하여 용량을 높이는 기술
  - 기지국에 M개 단말기에 N개를 설치할 경우, min(M,N)만큼 평균 통신 용량이 증가.
  - 기지국과 단말기의 수에 따라 MIMO, MISO, SIMO, SISO로 분류됨

<br /><br />

## **5. 광 네트워크 (Optic Network)**

- 광 케이블을 이용한 대표적인 네트워크 구조
  - SONET/SDH 망 구조
- SONET/SDH 망 구조의 다중화 방법 
  - WDM(Wavelength Division Multiplexing: 파장 분할 다중화 방식) 

<br /><br />

### **5.1. 다중화**
- 대규모 통신시스템에서는 그림과 같이 적은 용량만을 필요로 하는 여러 가닥의 정보 흐름을 하나의 용량이 큰 전송선으로 전송하는 방법을 **다중화(multiplexing)** 라고 한다.
  - 중앙컴퓨터와 다수의 원격지 단말들을 각각 전용 전송선으로 연결한다면 비용면에서 매우 비효율적.
  - 여러 경로를 통해 들어오는 정보의 흐름을 모으는 다중화 기능을 가진 장비를 **다중화장치(multiplexer, MUX)** 라 한다.
  - 다중화된 정보를 다시 여러 가닥으로 갈라주는 기능을 가진 장비를 **역다중화장치(demultiplexer, DEMUX)** 라 한다.
<img src="..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\multiplexer.png" width="600" height="330">

<br /><br />

#### **5.1.1. 다중화 종류**
- FDM(Frequency Division MultiPlexing, 주파수분할다중화)
- TDM(Time Division Multiplexing, 시분할다중화)
- CDM(Code-Division Multiplexing, 코드분할다중화)
- WCDM(Wideband Code Division Multiplexing, 광대역 코드 분할 다중화)
- WDM(Wavelength Division Multiplexing, 파장분할다중화)
- DWDM(Dense Wavelength Division Multiplexing, 고밀도 파장 분할 다중화) 
  - WDM 기술을 발전시킨 것으로, 하나의 광섬유에 서로 다른 다수 파장의 광 신호를 전송함으로써 통신 용량과 속도를 확장시킨 통신 기술
  - WDM은  8 이하로 분할된 파장, DWDM은 8 이상으로 파장이 분할된 채널을 말함

<br /><br />

### **5.2. SONET/SDH(Synchronous Optical NETwork/Synchronous Digital Hierarchy)**
- 단일 파장만을 사용
- 대역폭을 확장하기 위해서는 새로운 시스템을 다시 설치해야 하는 제약

<br /><br />

## **Reference** <!-- omit in toc -->
[10 Gigabit Ethernet Physical Layer | 10 Gigabit Ethernet PHY basics](https://www.rfwireless-world.com/Articles/10-Gigabit-Ethernet-Physical-Layer.html)

[Network topology](https://en.wikipedia.org/wiki/Network_topology)

[백본망](https://ko.wikipedia.org/wiki/%EB%B0%B1%EB%B3%B8%EB%A7%9D)
