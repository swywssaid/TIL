# Content Model

## Content Models
- 요소들의 성격에 따라 그룹화시킨 모델
- Content Models 의 7 분류  
1. Metadata Content
2. Flow Content
3. Sectioning Content
4. Heading Content
5. Phrasing Content
6. Embedded Content
7. Interacitve Content

<img src="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories/content_categories_venn.png">

<br><br>

## Metadata 
- 콘텐츠의 스타일, 동작을 설정하거나 다른 문서와의 관계 등 정보를 포함하는 요소

>대부분 `<head>`내에 들어간다는 것이 특징  
>`<base><link><meta><noscript><script><style><title>`  

<br><br>

## Flow
- 문서의 자연스러운 흐름에 의해 배치되는 요소

> Metadata에 해당하는 일부 태그들만 Flow에서 제외되며 요소 대부분이 Flow에 포함   
>  a, abbr, address, map>area, article, aside, audio, b, bdo, blockquote, br, button,
canvas, cite, code, datalist, del, details, dfn, div, dl, em, embed,
fieldset, figure, footer, form, h1 ~ h6, header, hgroup, hr, i, iframe, img,
 input, ins, kbd, keygen, label, map, mark, math, menu, meter, nav, noscript, object, ol,
output, p, pre, progress, q, ruby, samp, script, section, select, small, span, strong,
style[scoped], sub, sup, svg, table, textarea, time, ul, var, video, wbr 

<br><br>

## Sectioning 
- 문서의 구조와 관련된 요소

> 문서의 구조, 아웃라인에 영향  
> HTML5에서 새로 생긴 `<article>, <aside>, <nav>, <section>` 등이 포함
 
<br><br>

## Heading 
-  section의 header를 정의

> h1, h2, h3, h4, h5, h6

<br><br>

## Phrasing 
- 문서의 텍스트 또는 텍스트를 꾸며주는 문단 내부 레벨로 사용되는 요소

> a, abbr, map>area, audio, b, bdo, br, button, canvas, cite, code, datalist, del, dfn, em, embed,
 i, iframe, img, input, ins, kbd, keygen, label, map, mark, math, meter, noscript, object, output,
 progress, q, ruby, samp, script, select, small, span, strong, sub, sup, svg, textarea, time,
var, video, wbr

<br><br>

## Embedded 
-  외부 콘텐츠를 표현하는 요소

> 오디오나 비디오, 이미지 등 멀티미디어 관련 요소  
> audio,canvas,embed,iframe,img,math,object,svg,video 

<br><br>

## Interactive 
- 사용자와 상호작용을 하는 요소

> 대표적으로 form 요소  
> a, audio[controls], button, details, embed, iframe, img[usemap], input, keygen, label, menu,
object[usemap], select, textarea, video[controls]

<br><br>

## Reference
[콘텐츠 모델](https://www.boostcourse.org/cs120)

[콘텐츠 카테고리](https://developer.mozilla.org/ko/docs/Web/HTML/Content_categories)