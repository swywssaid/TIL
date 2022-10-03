# Hash Table

## **1. Hash Table (해쉬 태이블)**
- key(키), value(값)로 데이터 저장 
- 해쉬 태이블의 검색시간은 $O(1)$ (배열 내 선형검색의 시간복잡도는 $O(n)$)
  - collision 발생 시 최악의 경우 $O(n)$ 

>데이터를 저장할 때 배열을 사용하기 보다 해쉬태이블에 {"한국":true} 와 같이 저장해서 찾으면 훨씬 빠름.

<br /><br />

## **2. 구성 요소**
- **Hash Table:** index-value로 저장 (array 구조)
- **Hash Function $H(x)$:** 검색하고자하는 키를 입력 받아 Hash Code로 변환 
  
<br /><br />

## **3. 작동 원리**
- H(key) $\rightarrow$ Hash Code $\rightarrow$ Index $\rightarrow$ Value
  1. 해쉬함수가 키를 해쉬 코드로 변환
  2. 해쉬 코드를 인덱스로 변환
  3. 인덱스에 있는 값 서칭

<img src="..\image\algorithm\hash-table\hash-table.png" width="600" height="330">

<br />

## **4. Collision (해쉬 충돌)**
- 동일한 인덱스에 여러 값들이 들어가는 현상.
- 해쉬 충돌이 발생하는 이유는 아래와 같다.
  - 서로 다른 키 $\rightarrow$ 같은 해쉬 코드 
  >$\because$ 키는 문자열로 거의 무한대에 가까운 경우의 수 하지만 해쉬 코드는 정수로 한계가 있다.
  - 서로 다른 해쉬 코드 $\rightarrow$ 같은 인덱스
  >$\because$ 배열 방이 한정되어 있기 때문에 같은 인덱스를 부여하게 된다.
- 해쉬 충돌 시 배열 내에서 찾고자 하는 키 값을 검색한다. 따라서 모든 해쉬태이블의 시간복잡도가 $O(1)$ 인건 아니다. 최악의 경우 $O(n)$ 이 발생한다.
  <img src="..\image\algorithm\hash-table\collision.png" width="600" height="330">

>해쉬 태이블의 성능은 해쉬 알고리즘이 해쉬 태이블에 얼마나 골고루 잘 분배하는 지에 따라 결정된다.



<br /><br />

## **Reference**
[Hash Tables](https://www.codecademy.com/resources/docs/javascript/hashtables)
[개발자라면 꼭 알아야할 Hash Table 의 모든 것!](https://www.youtube.com/watch?v=HraOg7W3VAM&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=6)
[[자료구조 알고리즘] 해쉬테이블(Hash Table)에 대해 알아보고 구현하기](https://www.youtube.com/watch?v=Vi0hauJemxA)