# Data Communication Network

## 1 데이터통신망의 기초개념
- 데이터통신망(Data Networks)의 시작은 미 국방성의 ARPA 네트워크로 지속적으로 발전해왔다.

<br />

### 1.1 통신대화방식 (Communication Method)
두 시스템 사이의 통신을 위해서는 송신자와 수신자를 명확히 구분하고 정보를 주고 받는 방식이 결정되어야하는데 이를 **통신대화방식** 이라한다. 

<br />

- 단방향 통신 (simplex)
    - TV, 라디오, 컴퓨터와 모니터와 같이 한쪽으로만 데이터를 전송하는 방식.
    - 수신된 데이터의 에러발생 여부를 송신측이 알 수 없다. 
  
<br />  

- 반이중 통신 (half duplex)
  - 양방향 통신이 가능하다.
  - 채널이 한 개여서 한번에 한쪽 방향으로만 송수신 가능
  - 양측에서 동시에 데이터 전송 시 충돌 발생, 송신 전 전송매체 사용 가능 여부 확인.

<br />

- 전이중 통신 (full duplex)
  - 동시에 양방향 통신이 가능하다.
  - 송신과 수신을 위해 별도의 채널 두는 것. 
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\communication-method.png" width="600" height="330">

### 1.2 병렬형 전송과 직렬형 전송
- 병렬형 (Parallel) 전송
    - 비트별 전송선 
      - 다량의 데이터를 동시에 전송
      - 이 때 비트블록의 크기는 보통 하나의 문자를 표시하는데 필요한 비트수 정도 
    - 제한된 전송거리 
      - 전송거리가 길어지면 각 전송선별로 비트가 도착하는 시간이 다를 수 있어 원래의 비트블록을 정확히 복원하기 어려워진다. 
      - 컴퓨터 내부의 CPU와 주변장치처럼 전송거리 짧은 경우에 사용.
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\parallel.png" width="600" height="330">

<br />

- 직렬형 (Serial) 전송
  - 하나의 전송선 
    - 비트블록의 비트를 하나씩 전송
    - 수신측에서는 들어온 일련의 비트들을 정해진 크기의 블록단위로 묶어 원래의 정보로 복원
  - 원거리전송에 적합.
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\serial.png" width="600" height="330">

<br />  

### 1.3 비동기식 전송과 동기식 전송
- 송신측과 수신측 사이에 송신시점과 수신시점을 합의하는 절차를 **동기화(synchronization)** 라 한다.
- **비동기식 전송(Asynchronous Transmission)** 
   - start bit + 7bit character + 1bit parity + stop bit
   - frame = character + start/stop bit
   - 문자(character)단위의 비트블록이 전송 기본 단위
   - 2비트(start&stop bit)를 추가로 전송하기 때문에 전송효율 낮음.
   - 상대적으로 낮은 속도로 운영되는 소형컴퓨터와 주변기기에서 사용.
   - 대표적인 예로 ASCII코드의 전송(7비트)
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\Asynchronous.png" width="600" height="330">
- **동기식 전송(Synchronous Transmission)**
  - 

### 1.4 동기식 전송방식/문자중심전송과 비트중심전송

- bit stuffing?

### 1.5 DTE-DCE 인터페이스(Interface)

## 2 다중화
- 중앙컴퓨터와 다수의 원격지 단말들을 각각 전용 전송선으로 연결한다면 비용면에서 매우 비효율적.
- 대규모 통신시스템에서는 그림과 같이 적은 용량만을 필요로 하는 여러 가닥의 정보 흐름을 하나의 용량이 큰 전송선으로 전송하는 방법을 **다중화(multiplexing)** 라고 한다.
- 여러 경로를 통해 들어오는 정보의 흐름을 모으는 다중화 기능을 가진 장비를 **다중화장치(multiplexer, MUX)** 라 한다.
- 다중화된 정보를 다시 여러 가닥으로 갈라주는 기능을 가진 장비를 **역다중화장치(demultiplexer, DEMUX)** 라 한다.
- 다중화 방법에는 **주파수분할다중화(Frequency Division MultiPlexing, FDM)**, **시분할다중화(Time Division Multiplexing, TDM)** 등이 있다.
   <img src="..\..\..\image\network\wireless-communication\intro-wireless-communication\data-communication\multiplexer.png" width="600" height="330">



### 2.1 주파수분할다중화(Frequency Division MultiPlexing, FDM)

### 2.2 사분할다중화(Time Division Multiplexing, TDM)

### 2.3 코드분할다중화(Code Division Multiplexing, CDM)

## 3 데이터통신망의 유형
- 데이터통신망은 통신망에 접속된 컴퓨터들간에 데이터를 송수신 하는 경우, 경로를 설정하는지의 여부에 의해 크게 **방송통신망(broadcast communication network)** 과 **교환통신망(switched communication network)** 로 나뉜다.
- 방송통신망의 대표적인 예로 인공위성을 이용한 데이터통신망과 **근거리통신(LAN)** 이다.
- 교환통신망은 **회선교환망(circuit switched network)** 과 **패킨교환망(packet switched network)** 로 구분된다.

### 3.1 회선교환망

### 3.2 패킷교환망