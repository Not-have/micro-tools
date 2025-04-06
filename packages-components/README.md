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
