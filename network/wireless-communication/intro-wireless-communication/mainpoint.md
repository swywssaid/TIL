# **Main Point**
- [**Main Point**](#main-point)
  - [**1. Introduction**](#1-introduction)
    - [**1.1. Protocol**](#11-protocol)
    - [**1.2. 아날로그 전송과 디지털 전송**](#12-아날로그-전송과-디지털-전송)
    - [**1.3. PSTN과 MODEM**](#13-pstn과-modem)
    - [**1.4. 셀룰러 이동통신시스템의 구조와 3가지 구성요소**](#14-셀룰러-이동통신시스템의-구조와-3가지-구성요소)
  - [**2. (셀룰러) 이동통신**](#2-셀룰러-이동통신)
    - [**2.1. 위치등록(location registration)과 페이징(paging)이란 무엇이며 왜 필요한가?**](#21-위치등록location-registration과-페이징paging이란-무엇이며-왜-필요한가)
    - [**2.2. 대부분의 이동통신망에서 채택하고 있는 위치등록 방법은 어떤 방법인지 설명하라.**](#22-대부분의-이동통신망에서-채택하고-있는-위치등록-방법은-어떤-방법인지-설명하라)
    - [**2.3. 거리기준 위치등록에 대해 설명하라. 실제 시스템에서 채택되지 못하는 이유는 무엇인가?**](#23-거리기준-위치등록에-대해-설명하라-실제-시스템에서-채택되지-못하는-이유는-무엇인가)
    - [**2.4. 영역기준 위치등록에서 저장가능한 영역의 수를 2개로 할 경우, 1개만 저장하는 경우에 비해 어떤 장, 단점이 있는지 설명하라.**](#24-영역기준-위치등록에서-저장가능한-영역의-수를-2개로-할-경우-1개만-저장하는-경우에-비해-어떤-장-단점이-있는지-설명하라)
  - [**3. 데이터통신망**](#3-데이터통신망)
    - [**3.1. 반이중통신/전이중통신**](#31-반이중통신전이중통신)
    - [**3.2. 비동기식 전송과 동기식 전송**](#32-비동기식-전송과-동기식-전송)
    - [**3.3. 문자중심 전송과 비트중심 전송**](#33-문자중심-전송과-비트중심-전송)
    - [**3.4. 다중화란 무엇인가?**](#34-다중화란-무엇인가)
    - [**3.5. 회선교환과 패킷교환**](#35-회선교환과-패킷교환)
    - [**3.6. 가상회선 방식과 데이터그램 방식**](#36-가상회선-방식과-데이터그램-방식)
  - [**4. OSI 참조모형**](#4-osi-참조모형)
    - [**4.1. 각 계층의 기능**](#41-각-계층의-기능)
    - [**4.2. network layer의 주요 기능**](#42-network-layer의-주요-기능)
    - [**4.3. data link protocol**](#43-data-link-protocol)
  - [**5. LAN**](#5-lan)
    - [**5.1. LAN에서 토큰이용법**](#51-lan에서-토큰이용법)
    - [**5.2. CSMA/CD**](#52-csmacd)
    - [**5.3. pure Alohanet과 slotted Alohanet의 효율**](#53-pure-alohanet과-slotted-alohanet의-효율)

<br /><br />

## **1. Introduction**
### **1.1. Protocol**
- 컴퓨터나 원거리 통신 장비 사이에서 정보를 주고 받는 규약
- 규약에는 신호 송신의 순서, 데이터의 표현법 등이 있다.

### **1.2. 아날로그 전송과 디지털 전송**

**아날로그 전송**

- 정보의 형태와는 무관하게 아날로그 전송신호 전달하는 것.
- 대다수의 전송신호.
- 일정한 거리가 지나면 세기가 감소해 증폭기를 통해 전송.

**디지털 전송**

- 전송신호의 형태와 무관하게 디지털 정보를 전달하는 것.
- 적당한 간격으로 리피터를 설치하여 왜곡된 신호 복구

### **1.3. PSTN과 MODEM**
**PSTN(public switched telephone network, 공중교환전화망)**
- 세계의 공중 회선 교환 전화망들이 얽혀있는 전화망.
- 패킷 교환망인 인터넷과 방식 유사
- 아날로그에서 전화망이 거의 디지털화.
- 현재 고정 전화뿐 아니라 휴대 전화까지 확장.

**MODEM(MODEM, MOdulator and DEModulator)**
- 정보 전달(주로 디지털 정보)을 위해 신호를 변조하여 송신.
  - 변조를 하는 이유는 전송선에 디지털 신호를 바로 보내면 신호 전달이 잘 되지 않기 때문  
  - 디지털 신호를 아날로그 신호로 바꾸어 전송 
- 수신측에서 원래의 신호로 복구하기 위해 복조.
  - 아날로그 신호를 받아 디지털 신호로 읽어냄.

### **1.4. 셀룰러 이동통신시스템의 구조와 3가지 구성요소**
**이동국(MS, Mobile Station)** 
- 기지국과 무선채널을 통하여 통신 

**기지국(BS, Base Station)**
- 이동국과의 무선전송과 교환국과의 유선전송에 적합하도록 신호 변환 

**이동전화교환국(MSC, Mobile Services Switching Center)**
- 공중교환전화망과 이동통신망간 인터페이스, 중앙제어, 요금계산 및 이동국 감시기능,  신호처리기능
  
**셀룰러 이동통신시스템의 구조**
- 이동통신망은 많은 수의 MSC로 구성됨.
- 하나의 MSC는 여러 개의 LA를 관장함.
- 하나의 LA는 여러 개의 BS로 구성됨.
- 하나의 MSC는 하나의 DB(HLR,VLR)를 갖는다.
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\mainpoint\cellular.png" width="600" height="330">

<br /><br />

## **2. (셀룰러) 이동통신**

### **2.1. 위치등록(location registration)과 페이징(paging)이란 무엇이며 왜 필요한가?**

**위치등록(location registration)**
- 가입자의 위치정보가 변하는 경우 DB의 사용자 위치정보(LA)를 갱신하는 과정.

**페이징(paging)**
- MS에 온 전화를 연결하기 위해 BS가 MS의 정확한 위치(cell)를 찾는 과정.

**위치등록과 페이징이 필요한 이유**
- 전화가 걸려오면 MS에 연결해주기 위해 정확한 위치(cell)를 알아야 한다.
- 정확한 위치 파악(cell)를 위해 MS의 위치가 변하는 경우 DB의 사용자 위치 정보(LA)를 등록하고 그 정보를 바탕으로 전화가 왔을 때 등록된 LA의 모든 셀을 탐색해 전화를 연결해주기 때문에 위치등록과 페이징이 필요하다.

### **2.2. 대부분의 이동통신망에서 채택하고 있는 위치등록 방법은 어떤 방법인지 설명하라.**
**ZBR(Zone-Based Registration)**
- MS가 새로운 zone(LA)에 들어왔을 때 위치 등록.
- 구현이 쉽고 성능은 좋다.
- 일반적으로 MS는 하나의 zone을 갖는다. 여러개의 zone을 가질 수도 있다.
 

### **2.3. 거리기준 위치등록에 대해 설명하라. 실제 시스템에서 채택되지 못하는 이유는 무엇인가?**
**DBR(Distance-Based Registration)**
- 현재 셀과 마지막으로 등록된 셀 사이의 거리가 임계값D를 초과할 경우 위치 등록.
- 성능은 좋으나 거리 계산이 복잡해 구현이 어렵다.

### **2.4. 영역기준 위치등록에서 저장가능한 영역의 수를 2개로 할 경우, 1개만 저장하는 경우에 비해 어떤 장, 단점이 있는지 설명하라.**
**장점**
- 이미 리스트에 있는 zone에 입장할 경우 위치등록을 하지 않는다.
  
**단점**
- 1개에 비해 페이징 비용이 증가한다.

<br /><br />

## **3. 데이터통신망**

### **3.1. 반이중통신/전이중통신**
**반이중 통신 (half duplex)**
  - 양방향 통신이 가능하다.
  - 채널이 한 개여서 한번에 한쪽 방향으로만 송수신 가능
  - 양측에서 동시에 데이터 전송 시 충돌 발생, 송신 전 전송매체 사용 가능 여부 확인.

<br />

**전이중 통신 (full duplex)**
  - 동시에 양방향 통신이 가능하다.
  - 송신과 수신을 위해 별도의 채널 두는 것. 
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\communication-method.png" width="600" height="330">

<br /><br />

### **3.2. 비동기식 전송과 동기식 전송**
**비동기식 전송(Asynchronous Transmission)** 
   - start bit + 7bit character + 1bit parity + stop bit
   - frame = character + start/stop bit
   - 문자(character)단위의 비트블록이 전송 기본 단위
   - 2비트(start&stop bit)를 추가로 전송하기 때문에 전송효율 낮음.
   - 상대적으로 낮은 속도로 운영되는 소형컴퓨터와 주변기기에서 사용.
   - 대표적인 예로 ASCII코드의 전송(7비트)
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\Asynchronous.png" width="600" height="330">

<br />

**동기식 전송(Synchronous Transmission)**
- 프레임(Frame) 비트블록을 전송하고 블록 구성형태에 따라 문자중심전송과 비트중심전송으로 구분.
- 프레임(Frame)은 정보비트부분과 제어비트부분으로 구성
- 비트단위 동기화 $\rightarrow$ 프레임 전체 동기화  
- frame = pre-amble bit pattern + data + post-amble bit pattern

### **3.3. 문자중심 전송과 비트중심 전송**
**문자중심(Character-oriented) 전송**
- 전송단위는 일련의 문자
- 두개 이상의 SYN을 연속적으로 앞에 배치하여 문자블록 동기화
- 제어문자 DLE(Date Link Escape)와 STX(Start of Text)로 프레임의 시작 알림.
- 제어문자 DLE(Date Link Escape)와 ETX(End of Text)로 프레임의 끝을 알림.
- 수신측에서 프레임이 시작한 후 DLE와 같은 비트패턴이 있는 경우 프레임이 모두 전송되었다고 잘못 인식하게 되므로 이를 방지하기 위해 DLE와 같은 비트패턴을 두 번 반복하여 전송. 이를 Character stuffing이라 한다.
- 비트 중심 프로토콜보다 비효율 적이므로 오늘날 거의 사용 안함.
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\character-oriented.png" width="600" height="100">

**비트중심(Bit-oriented) 전송**
- 전송단위는 일련의 비트의 묶음.
- 비트블록의 처음과 끝에 플래그(Flag)라는 제어비트블록을 붙여 전송.
- 수신측에서 플래그와 같은 비트패턴이 패킷 중간에 나타나면 이를 제어비트블록으로 인식하는 문제 발생(문자중심전송과 유사)
- 이를 방지하기 위해 중간에 플래그와 같은 비트패턴이 존재하면 여분의 비트를 끼우는 방법인 bit suffing 사용.
  - 플래그와 닮아가는 비트블록이 나타나면 비트 0을 추가로 삽입하고 수신 시 없애 복원.
  
  <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\bit-oriented.png" width="600" height="330">

### **3.4. 다중화란 무엇인가?**
- 중앙컴퓨터와 다수의 원격지 단말들을 각각 전용 전송선으로 연결한다면 비용면에서 매우 비효율적.
- 대규모 통신시스템에서는 그림과 같이 적은 용량만을 필요로 하는 여러 가닥의 정보 흐름을 하나의 용량이 큰 전송선으로 전송하는 방법을 **다중화(multiplexing)** 라고 한다.
- 여러 경로를 통해 들어오는 정보의 흐름을 모으는 다중화 기능을 가진 장비를 **다중화장치(multiplexer, MUX)** 라 한다.
- 다중화된 정보를 다시 여러 가닥으로 갈라주는 기능을 가진 장비를 **역다중화장치(demultiplexer, DEMUX)** 라 한다.
- 다중화 방법에는 **주파수분할다중화(Frequency Division MultiPlexing, FDM)**, **시분할다중화(Time Division Multiplexing, TDM)** 등이 있다.
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\multiplexer.png" width="600" height="330">

### **3.5. 회선교환과 패킷교환**
**회선교환방식(Circuit Switching)**
- 송수신측 사이에 하나의 독점적인 통신경로 확보.
- 회선개설(Circuit Establishment) $\rightarrow$ 데이터전송(Data Transfer) $\rightarrow$ 회선해제(Circuit Disconnect), 3단계 과정
- 경로설정을 위한 시간 많이 걸림.
- 데이터양이 크고, 오래 사용할 때 사용.
- 통신중 문제 발생시 연결 끊어져 회선개설부터 다시해야함.


**패킷교환방식(Packet Switching)**

**패킷**
- 패킷이란 데이터와 목적지 주소를 포함한 일정형식의 데이터블록.
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\packet-switching.png" width="600" height="150">

**패킷교환망**
- 패킷교환망에 연결된 컴퓨터나 단말기 등은 패킷단위로 데이터를 주고 받는다.
- 데이터를 패킷형태로 주고 받을 수 있는 DTE(단말기, Data Terminal Equipment)를 PDTE(Packet Data Terminal Equipment)라 한다.
- 그렇지 못한 단말기는 CDTE(Character mode Data Terminal Equipment)라 하고 대부분의 단말이 여기에 속함.
  - 이를 패킷교환망에 연결하려면 PAD(Packet Assembly/Disassembly)가 필요하다.
  
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\packet-switching2.png" width="600" height="300">

**패킷교환망 장점**
- 하나의 링크를 여러 사용자가 공유 가능해 이용효율 높음.
- 망 장애에 강함. 장애 시 특정 패킷만 재전송 가능.
- 통신망에 과부하 발생해도 전송지연이 발생할 뿐 송신 가능.



### **3.6. 가상회선 방식과 데이터그램 방식**
- 패킷교환방식을 경로 설정 방법에 따라 연결형 개념의 가상회선 방식과 비연결형 개념의 데이터그램 방식으로 분류.
  
**가상회선 방식**   
- 회선교환처럼 경로설립, 데이터전송, 경로해제의 3단계 과정을 통해 송수신측 간 논리적 경로(logical route)로 패킷 전송.
- 회선교환과 다른 점은 설정된 경로가 독점적이진 않다.
- 패킷들은 순서대로 도착하므로 파일전송과 같은 긴 메시지 전송에 적합.
- 아래 그림은 가상회선의 예이다.
  -  A가 B에게 데이터를 전송하는 경우 논리적 경로를 노드1, 2로 설정하였다고 하자.
  - 또한 아래 그림에서 A가 B에게 데이터를 전송하는 경우 논리적 경로를 노드1, 2, 3으로 설정하였다고 하자.
  - 이때 노드1, 2 사이의 링크는 회선교환방식과는 달리 {A, B},{C, D} 쌍에게 공유된다.
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\virtual-circuit.png" width="450" height="300">

**데이터그램 방식**
- 패킷마다 목적지 주소에 의해 개별적으로 송신경로 정해지는 방식.
- 교환노드에서 자신의 버퍼상태에 따라 패킷을 전달하므로 수신순서 바뀔 수 있음.
  - 수신측에선 순서대로 도착하지 않은 패킷을 임시 저장하는 버퍼와 패킷 순서를 정렬하는 기능이 필요.
- 대표적인 예로 TCP/IP 프로토콜을 사용하는 인터넷(Internet).
- 아래그림은 데이터그램의 예이다.
  - 송신측에서 패킷1을 전송 후 2를 보낼 때 노드 1과 2 사이가 과부하가 걸린경우 노드3으로 전달해 우회해서 도착하게 된다.
  - 패킷2를 전송후 노드1 ,2 사이의 링크가 정상화된다면 패킷3을 해당 링크로 전송하게 된다.
  - 이때 도착된 패킷의 순서는 원래 전송순서와 달라진다.
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\datagrams.png" width="450" height="300">

**회선교환방식 VS 패킷교환방식**

<br />

|               |     회선교환방식     | 가상회신교환(패킷교환방식)  |  데이터그램(패킷교환방식)   |
| :-----------: | :------------------: | :-------------------------: | :-------------------------: |
|  데이터전송   |   연속적인 데이터    |          패킷전송           |          패킷전송           |
|   전송경로    |  점유, 하나의 경로   |     비점유, 하나의 경로     |    비점유 여러 경로 가능    |
| 경로설정과정  | 통신망 전체정보 이용 |    통신망 전체정보 이용     | 교환기 주변 지역정보만 이용 |
|   전송지연    |     경로설정지연     | 경로설정 지연,패킷전송 지연 |        패킷전송 지연        |
|  전송대역폭   |        고정적        |           가변적            |           가변적            |
|   오버헤드    |   경로설정 후 없음   |       패킷별 오버헤드       |       패킷별 오버헤드       |
| 패킷 도착순서 |        고정적        |           고정적            |          변동가능           |

<br />

## **4. OSI 참조모형**

### **4.1. 각 계층의 기능**

### **4.2. network layer의 주요 기능**
- routing
- flow control

### **4.3. data link protocol**

- stop-and-wait
- selective repeat
- go back N

## **5. LAN**

### **5.1. LAN에서 토큰이용법**

### **5.2. CSMA/CD**

### **5.3. pure Alohanet과 slotted Alohanet의 효율**

18프로 36프

## **Reference** <!-- omit in toc -->
[셀룰러(Cellular) 이동통신망](http://www.eom.co.kr/3.engineering/2.elec/5.communication/paging/cellular.htm)

[Modeling and cost analysis of zone-based registration in mobile cellular networks](https://onlinelibrary.wiley.com/doi/full/10.4218/etrij.2018-0025)