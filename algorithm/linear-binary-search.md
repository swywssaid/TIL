# **Linear Search vs Binary Search**
- [**Linear Search vs Binary Search**](#linear-search-vs-binary-search)
  - [**1. Linear Search (선형 검색 알고리즘)**](#1-linear-search-선형-검색-알고리즘)
  - [**2. Binary Search (이진 검색 알고리즘)**](#2-binary-search-이진-검색-알고리즘)
  - [**3. Linear Search vs Binary Search**](#3-linear-search-vs-binary-search)

<br /><br />

## **1. Linear Search (선형 검색 알고리즘)**
- 어느 배열에서도 사용 가능.
- 처음부터 끝까지 순차적으로 확인. 
- 배열의 크기가 커질수록 검색시간 길어짐, Linear time complexity(선형 시간복잡도)를 가짐.
<img src="..\image\algorithm\linear-binary-search\20220930194620.png" width="600" height="330" />

<br /><br />

## **2. Binary Search (이진 검색 알고리즘)**
- Sorted Array(정렬된 배열)에서만 사용 가능.
<img src="../image\algorithm\linear-binary-search\20220930195440.png" width="600" height="330" />
> Sorted Array에서 삽입은 정렬되지 않은 배열보다 느리나 검색은 훨씬 빠르다. 

<br /><br />

- 배열의 중간에서 검색을 시작한다. 
- 중앙 값과 비교를 한 후 한쪽 배열을 택한다. 과정 반복.
<img src="../image\algorithm\linear-binary-search\20220930202511.png" width="600" height="330" />

<br /><br />

## **3. Linear Search vs Binary Search**
- 이진 검색은 매 단계마다 절반의 아이템을 없앰.
- 이진 검색은 자료가 2배가 되어도 단계 1개가 늘어날 뿐.
- 두 검색 간 차이는 자료가 커질수록 커짐.
- 검색이 많은 작업 시 이진 검색이 유리하나 Sorted Array에서의 삽입과 검색의 상충관계를 고려해야함.
<img src="../image\algorithm\linear-binary-search\20220930203111.png" width="600" height="330" />

<br /><br />

## **Reference**<!-- omit in toc -->
[알고리즘.데이터구조 with Nico](https://www.youtube.com/watch?v=NFETSCJON2M&list=PL7jH19IHhOLMdHvl3KBfFI70r9P0lkJwL&index=2)    