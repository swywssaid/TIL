# **Algorithm Efficiency**

## **1. 알고리즘의 성능**
- 단순한 속도로 비교하기엔 하드웨어의 차이가 있다.
- 알고리즘의 실행 시간은 크게 두 부분으로 나눠 생각한다.  
    1. 입력값의 크기에 따른 알고리즘의 실행 시간
    2. 입력값의 크기에 따라 이 함수가 얼마나 빨리 커지는지  = 실행 시간의 **증가율(rate of growth)**
- 최악의 경우를 고려한다.
  
<br /><br />

## **2. 점근적 표기법**
- 알고리즘의 시/공간 복잡도 비교를 위한 수학적 표기법.
- 실제 러닝타임/메모리를 측정하는 것이 아닌 데이터나 사용자의 **증가율**에 따른 알고리즘 성능을 예측하기 위함.
- 알고리즘 실행 시간에서 중요한 **증가율**에 집중하기 위해 상수 계수와 중요하지 않은 항목을 제거한 것.

<br /><br />

### **2.1. Big-O notation (빅 오 표기법)**
$if\quad g(n) \leq k*f(n) \ \rightarrow \ O(f(n)) \quad\quad\quad    (\ running\ \ time = g(n),\ n \rightarrow \infty,\ k < 0\ )$
- 알고리즘의 성능의 상한선을 의미한다. (점근적 상한선)
    - g(n) = n 일 때 n <= k*n를 만족하는 k 존재.(예시. k = 1) 따라서 실행 시간은 O(n)로 표기.
    - g(n) = 2n 일 때 2n <= k*n를 만족하는 k 존재.(예시. k = 2) 따라서 실행 시간은 O(n)로 표기.     
    - g(n) = n 일 때 n <= k*100n를 만족하는 k 존재.(예시. k = 1/10) 따라서 실행 시간은 O(100n)로 표기.
- 위 3번째 예시처럼 정확한 상한선을 나타내지는 않는다. 좀 더 쉽게 말해서 아래와 같은 상황이다.
  > 실제론 내가 1만원을 가지고 있는데, 친구에게 가서 "지갑에 돈이 있는데 많으면 1억 정도 있어" 라고 하는 상황. 

<img src="..\image\algorithm\algorithm-efficiency\big-o.png" width="600" height="330">

<br /><br />

### **2.2. Big-Ω notation (빅 오메가 표기법)**
$if\quad g(n) \geq k*f(n) \ \rightarrow \ Ω(f(n)) \quad\quad\quad    (\ running\ \ time = g(n),\ n \rightarrow \infty,\ k < 0\ )$
- 알고리즘의 성능의 하한선을 의미한다. (점근적 하한선)
    - g(n) = n 일 때 n >= k*n를 만족하는 k 존재.(예시. k = 1) 따라서 실행 시간은 Ω(n)로 표기.
    - g(n) = 2n 일 때 2n >= k*n를 만족하는 k 존재.(예시. k = 2) 따라서 실행 시간은 Ω(n)로 표기.     
    - g(n) = 100n 일 때 100n >= k*n를 만족하는 k 존재.(예시. k = 100) 따라서 실행 시간은 Ω(n)로 표기.
- 마찬가지로 위 3번째 예시도 정확한 하한선을 나타내지는 않는다. 역시 아래와 같은 상황이다.
  > 실제론 내가 100만원을 가지고 있는데, 친구에게 가서 "지갑에 돈이 있는데 적어도 천원은 있어" 라고 하는 상황.

<img src="..\image\algorithm\algorithm-efficiency\big-Ω.png" width="600" height="330">

<br /><br />

### **2.3. Big-θ notation (빅 세타 표기법)**
$if\quad k_1 * f(n) \leq g(n) \leq k_2 * f(n) \ \rightarrow \ θ(f(n)) \quad\quad\quad    (\ running\ \ time = g(n),\ n \rightarrow \infty,\ k_1 < 0,\ k_2 < 0\ )$
- 알고리즘의 성능의 경계값을 의미한다. (점근적 경계값)
    - g(n) = n 일 때 $k_1 * n \leq n \leq k_2 * n$ 를 만족하는 $k_1,k_2$ 존재.(예시. $k_1 = 1,\ k_2 = 1$) 따라서 실행 시간은 θ(n)로 표기.
    - g(n) = $2n^2$ 일 때 $k_1 * n^2 \leq 2n^2 \leq k_2 * n^2$ 를 만족하는 $k_1,k_2$ 존재.(예시. $k_1 = 1,\ k_2 = 2$) 따라서 실행 시간은 θ($n^2$)로 표기.     
    - g(n) = $2n^5+2n^3+300n+2$ 일 때 $k_1 * n^5 \leq 2n^5 + 2n^3 + 300n + 2 \leq k_2 * n^5$  를 만족하는 $k_1,k_2$ 존재.(예시. $k_1 = 1,\ k_2 = 2$) 따라서 실행 시간은 θ($n^5$)로 표기.
- 위 3번째 예시를 보면 최고 차항의 지수만 고려하였다. 그 이유는 n이 충분히 큰 값일 때를 고려하기 때문에 나머지 항은 발산했을 때 미미한 영향을 미치기 때문이다. 아래와 같은 상황이다
  > 실제론 내 재산이 10조 2백만 3백원일 때, 친구에게 가서 "내 재산이 10조 정도 됨" 이라고 하는 상황.

<img src="..\image\algorithm\algorithm-efficiency\big-θ.png" width="600" height="330">

<br /><br />

### **2.4. 그렇다면 무엇을 사용하면 좋을까**
- 개념은 Big-θ를 적용하지만 표기는 Big-O을 사용한다.
  > 실제론 내가 1만원을 가지고 있는데, 친구에게 가서 "지갑에 돈이 있는데 많으면 1억 정도 있어".

  와 같은 상황을 우기지 않기로 암묵적으로 동의한다. 

<br /><br />

## **Reference**
[Understanding Big-O Notation With JavaScript](https://dev.to/b0nbon1/understanding-big-o-notation-with-javascript-25mc)

[빅오 표기법(Big-O notation), 시간복잡도, 공간복잡도](https://blog.naver.com/PostView.naver?blogId=kks227&logNo=220769859177&parentCategoryNo=&categoryNo=299&viewDate=&isShowPopularPosts=false&from=postList)

[Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)

[빅오(Big-O)표기법 완전정복](https://www.youtube.com/watch?v=6Iq5iMCVsXA)

[점근적 표기법](https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
