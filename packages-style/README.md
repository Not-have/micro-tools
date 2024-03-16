# micro-style

## 1、样式

### 1）root css 变量

```css
@import url('micro-style/style/root.css');
```

### 2）初始化样式

```js
import "micro-style/style/reset.css";
```

### 3）个性化 Html

注：对 `a`、`code`、`del`、`mark` 进行样式的修改。

```css
@import url('micro-style/style/individuality-html.css');

/* js 的引用方式

import "micro-style/style/individuality-html.css";
*/
```

## 2、自定义 css 块

### 1）ellipsis

文本超出行就隐藏并且显示省略号。

```js
import {
    ellipsis
} from "micro-style";

const div =document.createElement('div');
div.setAttribute('class', ellipsis(3));

// div.style.width = '40px'

div.innerText = '11111111111111111111111111111111111111111111111111111111111111111111'

document.body.appendChild(div);
```
