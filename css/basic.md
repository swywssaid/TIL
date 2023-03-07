# CSS

## CSS 구문
```css
h1 { color: yellow; font-size:2em; }
```
- 선택자(selector) - "h1"
- 속성(property) - "color"
- 값(value) - "yellow"
- 선언(declaration) - "color: yellow", "font-size: 2em"
- 선언부(declaration block) - "{ color: yellow; font-size:2em; }"
- 규칙(rule set) - "h1 { color: yellow; font-size:2em; }"

<br><br>

```css
/*[올바른 CSS]*/ 
h1
{ color: yellow; font-size:2em; }

h1 {
    color: yellow;
    font-size:2em;
}

```

<br>

```css
/*[잘못된 CSS]*/ 
h1 {
    color:
    yellow;
}
```