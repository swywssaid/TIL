## 1. mainpoint2
- [1. mainpoint2](#1-mainpoint2)
  - [1.1. IMT-2000 표준화 (International Mobile Telecommunication-2000)](#11-imt-2000-표준화-international-mobile-telecommunication-2000)
    - [1.1.1. IMT 2000의 특징](#111-imt-2000의-특징)
  - [1.2. 하드 핸드오프와 소프트핸드오프](#12-하드-핸드오프와-소프트핸드오프)
  - [1.3. CDMA 시스템의 장점 (아날로그 시스템에 비하여)](#13-cdma-시스템의-장점-아날로그-시스템에-비하여)
  - [1.4. GMPCS(Global Mobile Personal Communications System)](#14-gmpcsglobal-mobile-personal-communications-system)
  - [1.5. CT2](#15-ct2)
  - [1.6. TRS(주파수공용통신, Trunked Radio System)](#16-trs주파수공용통신-trunked-radio-system)
  - [1.7. 무선호출 (Radio Paging)](#17-무선호출-radio-paging)
  - [1.8. 2G CDMA 시스템의 장, 단점](#18-2g-cdma-시스템의-장-단점)
  - [1.9. CDMA 이동통신 시스템은 기존의 아날로그 시스템보다 몇 배의 수용용량을 갖는지에 대하여 이론적 근거를 제시하여 설명하라.](#19-cdma-이동통신-시스템은-기존의-아날로그-시스템보다-몇-배의-수용용량을-갖는지에-대하여-이론적-근거를-제시하여-설명하라)
  - [1.10. 3G의 대표적인 표준안을 적고 설명(비교)하라.](#110-3g의-대표적인-표준안을-적고-설명비교하라)
  - [1.11. HTTP](#111-http)
    - [1.11.1. HTTP란](#1111-http란)
    - [1.11.2. 그 분야의 발전 전망에 대해 기술하라.](#1112-그-분야의-발전-전망에-대해-기술하라)
  - [1.12. 유럽의 디지털 2세대 이동통신 표준인 (  GSM  )은 반송파당 8채널을 갖는   (    TDMA   )방식의 무선접속기술을 이용한다.](#112-유럽의-디지털-2세대-이동통신-표준인---gsm--은-반송파당-8채널을-갖는-------tdma---방식의-무선접속기술을-이용한다)
  - [1.13. 우리나라의 디지털 2세대 이동통신 표준인 (  IS-95   )는 (  CDMA   )방식의 무선접속기술을 이용한다.](#113-우리나라의-디지털-2세대-이동통신-표준인---is-95---는---cdma---방식의-무선접속기술을-이용한다)
  - [1.14. 통화채널은 64개의 (  Walsh   ) code로 구분되며 (    PN short  ) code는 기지국간의 구분에, (   PN long   ) code는 이동국을 구분하는데 쓰인다.](#114-통화채널은-64개의---walsh----code로-구분되며-----pn-short---code는-기지국간의-구분에----pn-long----code는-이동국을-구분하는데-쓰인다)
  - [1.15. 4G 표준은 ( LTE )와 WiMAX (국내서비스명:WiBro) 가 있다. 이 중 (앞의 빈칸과 동일)는 3G의 (  WCDMA  )에서 진화한 것이고 WiMAX는 3G와 관계없이 개발된 것이다.](#115-4g-표준은--lte-와-wimax-국내서비스명wibro-가-있다-이-중-앞의-빈칸과-동일는-3g의---wcdma--에서-진화한-것이고-wimax는-3g와-관계없이-개발된-것이다)
  - [1.16. 현재 우리나라는 3G, 4G, 5G가 모두 서비스되고 있다. 맞으면 O, 틀리면 X를 적어라. (  O  )](#116-현재-우리나라는-3g-4g-5g가-모두-서비스되고-있다-맞으면-o-틀리면-x를-적어라---o--)

<br><br>

### 1.1. IMT-2000 표준화 (International Mobile Telecommunication-2000)
- 제3세대 무선통신 시스템

<br>

#### 1.1.1. IMT 2000의 특징
1. 멀티미디어서비스 제공
  - 멀티코드(multi-code) 
  - 멀티 캐리어(multi-carrier) 
  - TDD 모드(time division duplex mode) 전송

<br>

2. 패킷처리 및 기타 관리기능
  - 무선채널의 세분화 
  - 패킷 처리를 위한 기능(프로토콜)의 추가 및  보완 
  - 무선자원 관리기능 강화 

<br>

3. 이동성 관리
  - 전세계 단일 표준에 의한 지원 
  - 다중모드(multi-mode)형 단말기에 의한 지원 
  - 스마트 카드에 의한 지원 
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\intro\imt2000-2.png" width="600" height="330">
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\intro\imt2000.png" width="600" height="330">

### 1.2. 하드 핸드오프와 소프트핸드오프
**하드 핸드오프**
- 사용중인 통화채널을 끊고 새로운 채널에 동조하여 통화를 재개하는 핸드오프 방법.
- 일반적으로 사용자가 인지하지 못할 정도의 짧은 시간에 이루어지지만, 간혹 통화단절을 느낄 수 있을 정도의 시간 경과될 수 있음.
- 이동국이 두 셀간의 경계를 중심으로 반복적으로 이동하는 경우, 두 기지국과 번갈아 가면서 연결되는 핑퐁현상이 발생할 수도 있다.

**소프트 핸드오프**
- 이동국이 현 기지국의 서비스권역을 벗어나 인접기지국의 서비스권역으로 진입할 때, 이동국을 인접한 여러 기지국과 동시에 송수신하게 하는 방식.
- 모든 기지국에서 동일주파수를 재사용할 수 있는 CDMA시스템의 특성을 이용

<br><br>

### 1.3. CDMA 시스템의 장점 (아날로그 시스템에 비하여)
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\intro\cdma.png" width="600" height="330">

<br><br>

### 1.4. GMPCS(Global Mobile Personal Communications System)
- 지상 700-10,000km의 저궤도 및 중궤도에 수십 개의 소형통신위성을 쏘아 올려 휴대단말기(hand-held terminal)와 지구국을 연결하여 세계를 단일 통신권으로 연결
- 원격 및 수요과소지역에 대한 서비스가 가능하다는 점에서 셀룰러 전화와는 보완관계
- 위성간 핸드오프

<br><br>

### 1.5. CT2
- 기지국이 설치된 실내 또는 옥외에서의 저속 보행 도중에 발신통화를 가능하게 한다.
- 사용범위를 옥내에서 옥외로 확대시키려는, 일명 텔레포인트(telepoint)서비스를 제공하기 위함.
- CT1에 비해 옥외사용이 가능하고 디지털이다.
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\intro\ct2.png" width="600" height="330">

<br><br>

### 1.6. TRS(주파수공용통신, Trunked Radio System)
- 무선중계국에 할당된 복수의 무선채널을 일정한 제어 하에 다수의 가입자가 공동으로 이용하는 이동통신방식
- 무선채널을 가입자에게 항상 할당하지 않고 통화시에만 할당했다가 통화가 종료되면 다른 가입자가 사용할 수 있도록 하는 방식 
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\intro\trs.png" width="600" height="330">

<br><br>

### 1.7. 무선호출 (Radio Paging)
- 공중통신망과 무선호출시스템을 이용하여 무선호출기(pager)를 휴대한 가입자에게 호출이나 데이터전송서비스를 제공하는 단방향 무선통신서비스 
<img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\intro\radio-paging.png" width="600" height="330">

### 1.8. 2G CDMA 시스템의 장, 단점
**장점**
- 통화품질 우수
- 가입자 수용용량 큼
- 주파수계획에 따른 비용 절감

**단점**
- 용량 증가를 위해 전력제어 및 음성활동상태 감지 기능 필요
- 잡음이 많은 환경에서는 음질 손상
- 다수의 통화 불가능
- 기지국마다 반송파가 다를 경우 핸드오프과정에서 동기를 맞추기 어려움
  
<br><br>

### 1.9. CDMA 이동통신 시스템은 기존의 아날로그 시스템보다 몇 배의 수용용량을 갖는지에 대하여 이론적 근거를 제시하여 설명하라.
- 1.25MHz의 반송파로서 한 셀에서 통화할 수 있는 최대가입자수는 98명으로 알려져 있다. 따라서 한 가입자가 차지하는 주파수댕역은 12.8kHz(=1.25MHz/98)이다. 또한 CDMA시스템에서는 모든 셀에서 동일한 반송파를 사용할 수 있으므로 주파수 재사용패턴은 1이라고 볼 수 있다. 따라서 CDMA시스템의 용량은 아날로그시스템의 약 16배(=30/12.8(kHz)*7) 정도가 된다.
  
<br><br>

### 1.10. 3G의 대표적인 표준안을 적고 설명(비교)하라.
**WCDMA**
- 고속 멀티미디어 처리를 위해 프로토콜의 구조 및 기능이 단순 음성 전송을 위한 기존 시스템(IS-95)에 비해 대폭 보강
- MAC(Medium Access Control)과 RLC(Radio Link Control)가 데이터링크 계층에 추가
- 네트웍계층에 RRC(Radio Resource Control)계층 추가

<br><br>

### 1.11. HTTP
#### 1.11.1. HTTP란
**Hypertext Transfer Protocol**
- 서버와 클라이언트 간에 TCP/IP 통신 위에서 메시지를 교환하기 위해 사용하는 프로토콜
- TCP를 통해 서버와 클라이언트가 잘 연결되어있는지 확인
- IP를 통해 분할된 데이터 패킷들을 서버에게 보낸다.

#### 1.11.2. 그 분야의 발전 전망에 대해 기술하라.
- HTTP는 1965년부터 등장하여 부족한 성능을 개선해나가면서 HTTP 0.9부터 현재 HTTP 3.0 버전까지 발전해오고 있다. HTTP로 웹의 기능을 제어하기 때문에 현재 빠른 속도로 발전하는 웹에 따라 HTTP 역시 빠르게 발전할 것이다.

<br><br>

### 1.12. 유럽의 디지털 2세대 이동통신 표준인 (  GSM  )은 반송파당 8채널을 갖는   (    TDMA   )방식의 무선접속기술을 이용한다.

<br><br>

### 1.13. 우리나라의 디지털 2세대 이동통신 표준인 (  IS-95   )는 (  CDMA   )방식의 무선접속기술을 이용한다. 

<br><br>

### 1.14. 통화채널은 64개의 (  Walsh   ) code로 구분되며 (    PN short  ) code는 기지국간의 구분에, (   PN long   ) code는 이동국을 구분하는데 쓰인다.

<br><br>

### 1.15. 4G 표준은 ( LTE )와 WiMAX (국내서비스명:WiBro) 가 있다. 이 중 (앞의 빈칸과 동일)는 3G의 (  WCDMA  )에서 진화한 것이고 WiMAX는 3G와 관계없이 개발된 것이다.

<br><br>

### 1.16. 현재 우리나라는 3G, 4G, 5G가 모두 서비스되고 있다. 맞으면 O, 틀리면 X를 적어라. (  O  )