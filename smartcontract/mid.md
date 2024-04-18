## VM(가상머신)

### 가상머신이란 무엇인지 간단히 설명해보세요.

물리적 컴퓨터에서 실행하는 모든 소프트웨어를 실행하는 데 사용할 수 있는 "소프트웨어"

### 이더리움에서 EOA(Externally Owned Account)와 CA(Contract Account)의 차이점은 무엇인가요?

EOA는 외부 액터에 의해서 컨트롤 됨.
CA는 Actor없이 트리거 할 수 없으며 ,Code Hash와 Storage Hash를 포함하고 있다.

### EVM의 프로그램 카운터, gas available, 스택, 메모리, storage, calldata, logs에 대해서 간단히 설명하세요.

1. 프로그램 카운터

   - 다음 실행될 OP code를 가리키고 있는 포인터

2. gas availabe

   - 트랜잭션을 실행하는데에 공급된 가스 값

3. 스택

   - 스토리지 메모리 등 에서 데이터를 읽고 연산을 위한 중간 역할 256bit x 1024

4. 메모리

   - 32바이트 마다 데이터가 저장되는 휘발성 메모리

5. stroage

   - 영구저장소 256bits to 256bits key-value 기반 메모리

6. calldata

   - 함수의 매개변수 저장 등 read only

7. logs

   - 이벤트가 발생되면 관련된 데이터가 저장되고 오프체인에서만 읽을 수 있음
