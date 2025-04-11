# micro-rc-container

## 下载

```bash
npm i @mt-kit/components
```

## API

### cssGenerateTriangle

css 三角形

```js
import {
    cssGenerateTriangle
} from "@mt-kit/components";

<div style=`${cssGenerateTriangle("red", 10)}`></div>
```

### imitationViteError

生成一个类似 Vite 报错的提示

<img src="https://not-have.github.io/file/images/vite-error.png" alt="ErrorOverlay" style="zoom:40%;" />

```js
import {
    imitationViteError
} from '@mt-kit/components';

const overlay = imitationViteError(err);

document.body.appendChild(overlay);

// 或

获取到的页面元素.appendChild(overlay);
```

### draggable

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>demo-draggable</title>
    <style>
        html, body {
            height: 100%;
            width: 100%;
            overflow: hidden;
            margin: 0;
        }
        div {
            display: inline-block;
            position: relative;
        }
    </style>
</head>
<body>
    <div>
        <div class="demo-draggable-test01">
            拖动1
        </div>
        <div class="demo-draggable-test02">
            拖动2
        </div>
    </div>
</body>
</html>
<script type="module">
    import { draggable } from '@mt-kit/components'
    const el = document.querySelector(".demo-draggable-test01");
    draggable(el)
    const el2 = document.querySelector(".demo-draggable-test02");
    draggable(el2, true)
</script>
```