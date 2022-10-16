# LAN
- [LAN](#lan)
  - [**1. LAN(Local Area Network)의 구조**](#1-lanlocal-area-network의-구조)
    - [**1.1. LAN 프로토콜의 구조 및 제어방법**](#11-lan-프로토콜의-구조-및-제어방법)
    - [**1.2. LAN의 형태(Topology)에 의한 분류**](#12-lan의-형태topology에-의한-분류)
  - [**2. LAN의 표준안**](#2-lan의-표준안)
    - [**2.1. ALOGANET**](#21-aloganet)
    - [**2.2. CSMA/CD와 이더넷(Ethernet)**](#22-csmacd와-이더넷ethernet)
    - [**2.3. 토큰링 (Token Ring)**](#23-토큰링-token-ring)
    - [**2.4. 토큰버스 (Token Bus)**](#24-토큰버스-token-bus)
    - [**2.5. FDDI(Fiber Distributed Date Interface)**](#25-fddifiber-distributed-date-interface)
    - [**2.6. DQDB (Distributed Quenue Dual Bus)**](#26-dqdb-distributed-quenue-dual-bus)
    - [**2.7. 고속 이더넷**](#27-고속-이더넷)
  
<br /><br />

**LAN(Local Area Network, 근거리통신망)**
- 근거리의 각종 정보처리기기 연결, 정보교환 네트워크
- 점대점 연결의 station들간 physical medium 공유
- 일반적으로 수 km이내로 제한
- 거의 모든 조직은 자체적인 LAN을 갖고 있음. 이것들이 연결되어 인터넷(Internet)을 형성.
- OSI 7계층모형에선 데이터링크계층과 물리계층
- TCP/IP 모형에선 네트워크접속계층.

**WAN(Wide Area Network, 광통신망)**
- 보다 넓은 지역을 대상
- 조직차원에서 여러 개의 LAN을 연결하는 네트워크

**MAN(Metropolitan Area Network, 도시지역통신망=중거리통신망)**
- 대도시를 대상으로 한 지역망
- DQDB 등의 기술을 이용하여 네트워크 구성

<br /><br />

**LAN**
- 전송방식에 의한 분류
  - 자유경쟁법
  - 토큰이용법
- 망형태에 의한 분류
  - 버스형
  - 링형
  - 스타형
  - 나무형
- 유선 LAN
  - 일반 유선 LAN
    - CSMA/CD와 이더넷(Etherner)
    - 토큰링(Token Ring)
    - 토큰버스(Token Bus)
  - 고속 유선 LAN
    - FDDI
    - DQDB
    - 고속이더넷(패스트이더넷, 기가비트이더넷)

<br /><br />

## **1. LAN(Local Area Network)의 구조**
- ALOHA 시스템이 뿌리
- 대표적인 LAN 기술이 이더넷.
- 이더넷 프로토콜 기반 표준안이 CSMA/CD.
- FDDI, DQDB, SMDS 등 고속 LAN 보급
  - 패스트 이더넷과 기가비트 이더넷에 의해 밀려남.

<br /><br />

### **1.1. LAN 프로토콜의 구조 및 제어방법**
- LLC(Logical Link Control) 계층
  - 상위계층을 위한 패킷전달
  - 패킷단위의 흐름 및 에러제어 기능
- MAC(Medium Access Control) 계층
  1. 상위계층의 패킷을 프레임으로 구성
  2. 전송매체를 통해 전송
  3. 다시 패킷으로 복원
  4. 상위계층에 전달

- 물리계층 : 비트단위 전송, 전송매체 및 LAN 형태 지정
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\LAN.png" width="600" height="330">

<br /><br />

### **1.2. LAN의 형태(Topology)에 의한 분류**

<br /><br />

## **2. LAN의 표준안**

<br /><br />

### **2.1. ALOGANET**
세계최초의 무선랜

<br /><br />

### **2.2. CSMA/CD와 이더넷(Ethernet)**
**CSMA/CD**
- 보내고 쫑나면 잠시후 다시 보낸다
(또 쫑이 나면 잠시후 다시보냄)
- 효율이 낮다
  - 트래픽이 많은 곳에서는 사용하지 않는다.
- 우리가 쓰는 LAN의 대부분이 이더넷(CSMA/CD)

**이더넷(Ethernet)**
- 이더넷은 CSMA/CD프로토콜을 이용한 제품의 이름
  

<br /><br />

### **2.3. 토큰링 (Token Ring)**
- 전송효율이 좋다.
  - 트래픽이 높아도 괜찮다.

<br /><br />

### **2.4. 토큰버스 (Token Bus)**
- 버스에 토큰 사용 
  - 충돌 가능성 제거 및 우선순위 제공
- 공장자동화에 많이 사용

<br /><br />

### **2.5. FDDI(Fiber Distributed Date Interface)**
- 한곳에 모여있는 LAN들을 연결, 단일 LAN으로도 이용
- 100Mbps의 전송속도를 제공하는 이중 링 구조
- 점대점으로 연결
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\fddi.png" width="600" height="330">

<br /><br />


### **2.6. DQDB (Distributed Quenue Dual Bus)**
- MAN 국제 표준안 : 화상전송서비스를 위한 MAN으로 개발

<br /><br />


### **2.7. 고속 이더넷**
- 고속 이더넷이 주류.

<br /><br />

**Reference**