# micro-style

## 下载

```bash
npm i @mt-kit/style
```

## 样式

### 初始化样式

```ts
import '@mt-kit/style/reset';
```

### 个性化 Html

注：对 `a`、`code`、`del`、`mark` 进行样式的修改。

```ts
import '@mt-kit/style/indivHtml';
```

## 自定义 css 块

### cssEllipsis

- 文本超出行就隐藏并且显示省略号。

```js
import {
    cssEllipsis
} from "@mt-kit/style";

const div =document.createElement('div');
div.setAttribute('class', cssEllipsis(3));

// div.style.width = '40px'

div.innerText = '11111111111111111111111111111111111111111111111111111111111111111111'

document.body.appendChild(div);
```
