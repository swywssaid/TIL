# 서버 사이드 렌더링 vs 클라이언트 사이드 렌더링

> SSR은 사용자가 웹 페이지에 접근 할때, 서버에 각각 페이지에 대해 요청하고 서버에서 HTML, JS 파일 등을 모두 다운로드하여 화면에 렌더링 하는 방식이다.  
> CSR은 클라이언트측에서 HTML, JS, 리소스 파일들을 받은 이후에 브라우저에서 렌더링을 진행하는 것으로, JS가 동작하면서 데이터만을 주고 받는다.

<br><br>

## 서버 사이드 렌더링(SSR)
- SSR은 사용자가 웹 페이지에 접근 할때, 서버에 각각 페이지에 대해 요청하고 서버에서 HTML, JS 파일 등을 모두 다운로드하여 화면에 렌더링 하는 방식이다. 
<img src="..\..\image\interview\SSR.png" width="400" height="350">

<br><br>

## 클라이언트 사이드 렌더링(CSR)
- CSR은 클라이언트측에서 HTML, JS, 리소스 파일들을 받은 이후에 브라우저에서 렌더링을 진행하는 것으로, JS가 동작하면서 데이터만을 주고 받는다.
<img src="..\..\image\interview\CSR.png" width="400" height="350">

<br><br>

## 서버 사이드 렌더링와 클라이언트 사이드 렌더링 차이점
1. 초기로딩속도 측면에서, SSR은 필요한 부분의 HTML과 스크립트만 서버에서 렌더링 하여 가져오기 때문에 속도가 빠른 반면, CSR은 HTML, JS 파일을 다운 받고 브라우저에서 렌더링 하기 때문에 초기에 오래걸린다.
2. 서버 부담측면에서, SSR은 서버와 잦은 응답(View가 바뀔 때마다 서버에 요청)을 하기 때문에 서버에 부담이 되고 UX측면이 떨어진다(새로고침 많음), CSR은 데이터 요청이 있을때만 서버에 요청하기 때문에 서버에 부담이 적다.
3. SEO 측면에서, SSR은 HTML에 대한 정보가 처음에 포함되어 있어(SEO에 사용되는 meta 태그들이 미리 정의되어있음) 데이터를 수집할 수 있어 SEO에 유리하지만, CSR은 맨 처음 HTML 파일이 비어있어 구글을 제외한 크롤러가 데이터를 수집할 수 없다.

<br><br>

## Reference
[서버 사이드 렌더링 vs 클라이언트 사이드 렌더링](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/FrontEnd#%EC%84%9C%EB%B2%84-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-vs-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81)
[[면접준비] 프론트엔드 개발자 취업 면접 질문 및 답변 정리(64문)](https://amyhyemi.tistory.com/224)