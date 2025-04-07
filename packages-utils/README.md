# micro-util

## 下载

```bash
npm i @mt-kit/utils
```

## 使用

[See](https://github.com/Not-have/micro-tools/tree/main/packages-utils/stories)

## API

### animationFrameThrottle

使用 requestAnimationFrame 创建函数节流版本，限制函数在特定时间内的调用次数。

| 参数名      | 说明     |  是否必穿  |
| ----------- | ------------------------- | ----------|
| fn          | 回调函数 | 是        |

```ts
// 滚动事件处理
window.addEventListener('scroll', animationFrameThrottle(handleScroll));

// 窗口大小改变
window.addEventListener('resize', animationFrameThrottle(handleResize));

// 动画效果
const animatedFunction = animationFrameThrottle(updateAnimation);
```

### imageBase64ToBlob

将 Base64 格式的图片转换为 Blob 对象。

| 参数名      | 说明     |  是否必穿  |
| ----------- | ----------- | ----------- |
| base64 | 图片base64 | 是        |

```ts
const base64Data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...';
const blob = imageBase64ToBlob(base64Data);
```

### imageUrlToBase64

将图片 URL 转换为 Base64 格式。

| 参数名      | 说明     |  是否必穿  | 默认值 |
| ----------- | ----------- | ----------- |
| url | 图片url | 是        | - |
| mineType | 用于指定生成的 base64 字符串的 MIME 类型 | 否 | image/png |

```ts
imageUrlToBase64('https://example.com/image.png')
  .then(base64 => {
    console.log(base64); // data:image/png;base64,...
  });
```

### downloadByUrl

根据文件地址进行下载。

| 参数名      | 说明     |  是否必穿  |
| ----------- | ----------- | ----------- |
| url | 图片url | 是        |
| target | 链接的打开方式，默认为 '_blank' | 否 |
| fileName | 文件名 | 否 |

```ts
downloadByUrl({
  url: 'https://example.com/document.pdf',
  target: '_blank',
  fileName: 'my-document.pdf'
});
```

### downloadDataFile

根据文件数据进行下载。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| data | Blob 对象的 BlobPart 参数 | 是 |
| filename | 保存的文件名 |是 |
| mime | 文件的 MIME 类型 | 否 |
| blob | Blob 对象的 BlobPart 参数 | 否 |

```ts
const data = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" 的 ASCII 码
downloadDataFile(data, 'hello.txt', 'text/plain');
```

### downloadBase64File

根据 Base64 数据下载文件。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| base64 | base64字符串 | 是 |
| filename | 保存的文件名 |是 |
| blob | 文件的 MIME 类型 | 否 |

```ts
const base64Data = 'data:text/plain;base64,SGVsbG8gV29ybGQh'; // "Hello World!"
downloadBase64File(base64Data, 'hello.txt');
```

### downloadUrlFile

根据在线图片的 URL 进行下载。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| url | 图片url | 是 |
| filename | 保存的文件名 |是 |
| mime | 文件的 MIME 类型 | 否 |
| blob | Blob 对象的 BlobPart 参数 | 否 |

```ts
downloadUrlFile(
  'https://example.com/image.png',
  'my-image.png',
  'image/png'
);
```

### copyText

复制文本到剪贴板。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| text | 要复制的文本 | 是 |
| fn | 复制成功的回调 | 否 |

```ts
copyText('Hello World!').then(() => {
  console.log('文本已复制到剪贴板');
});
```

### queryStringToObject

将查询字符串转换为对象。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| queryString | 查询字符串 | 是 |

```ts
const query = queryStringToObject('?name=John&age=30');
console.log(query); // { name: 'John', age: '30' }
```

### openWindow

打开新窗口。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| url | 链接地址 | 是 |
| options | 链接的打开方式，默认为 '_blank' | 否 |

```ts
openWindow('https://example.com', {
  target: '_blank',
  features: 'width=800,height=600'
});
```

### cookieHelper

Cookie 操作助手。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| name | cookie名称 | 是 |
| value | cookie值 | 是 |
| options | cookie的配置选项 | 否 |

方法：

- get(name) : 获取指定名称的 cookie
- set(name, value, options) : 设置 cookie
- remove(name) : 删除指定名称的 cookie

```ts
// 设置 cookie
cookieHelper.set('username', 'John', { expires: 7 }); // 7天过期

// 获取 cookie
const username = cookieHelper.get('username');

// 删除 cookie
cookieHelper.remove('username');
```

### localStorageHelper

localStorage 操作助手。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| name | 本地存储名称 | 是 |
| value | 本地存储值 | 是 |

方法：

- get(name) : 获取指定名称的本地存储
- set(name, value) : 设置本地存储
- remove(name) : 删除指定名称的本地存储
- clear() : 清空所有数据

```ts
// 设置数据
localStorageHelper.set('user', { name: 'John', age: 30 });

// 获取数据
const user = localStorageHelper.get('user');

// 删除数据
localStorageHelper.remove('user');

// 清空所有数据
localStorageHelper.clear();
```

### isElement

判断是否为 DOM 元素。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| element | 元素 | 是 |

```ts
const div = document.createElement('div');
console.log(isElement(div)); // true
console.log(isElement({})); // false
```

### isFunction

判断是否为函数。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| fn | 函数 | 是 |

```ts
console.log(isFunction(() => {})); // true
console.log(isFunction({})); // false
```

### isEqual

比较两个对象是否相等。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| a | 比较值 | 是 |
| b | 比较值 | 是 |

```ts
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(isEqual(objA, objB)); // true
console.log(isEqual(objA, objC)); // false
```

### isNull

判断是否为 null。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
console.log(isNull(null)); // true
console.log(isNull(undefined)); // false
console.log(isNull(0)); // false
```

### isObject

判断是否为对象类型。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(null)); // false
console.log(isObject('string')); // false
```

### isUndefined

判断是否为 undefined。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
console.log(isUndefined(undefined)); // true
console.log(isUndefined(null)); // false
console.log(isUndefined(0)); // false
```

### clone

浅拷贝对象。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
const obj = { a: 1, b: { c: 2 } };
const cloned = clone(obj);

console.log(cloned); // { a: 1, b: { c: 2 } }
console.log(cloned.b === obj.b); // true，浅拷贝，引用相同
```

### cloneDeep

深拷贝对象。

| 参数名      | 说明    |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
const obj = { a: 1, b: { c: 2 } };
const cloned = cloneDeep(obj);

console.log(cloned); // { a: 1, b: { c: 2 } }
console.log(cloned.b === obj.b); // false，深拷贝，引用不同
```

### debounce

创建一个防抖函数，延迟调用函数直到上一次调用后的一段时间已经过去。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| fn | 要防抖的函数 | 是 |
| wait | 延迟时间（毫秒） | 是 |
| options | 配置选项 | 否 |

```ts
// 搜索输入防抖
const debouncedSearch = debounce((query) => {
  fetchSearchResults(query);
}, 300);

// 在输入框中使用
inputElement.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

### throttle

创建一个节流函数，限制函数在一段时间内只能调用一次。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| fn | 要节流的函数 | 是 |
| wait | 节流时间（毫秒） | 是 |
| options | 配置选项 | 否 |

```ts
// 滚动事件节流
const throttledScroll = throttle(() => {
  updateScrollPosition();
}, 100);

// 在滚动事件中使用
window.addEventListener('scroll', throttledScroll);
```

### omitBy

创建一个从对象中排除满足条件的属性的新对象。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| obj | 源对象 | 是 |
| condition | 用于判断是否排除属性的条件函数 | 是 |

```ts
const sampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// 从对象中排除值大于 2 的属性
const result = omitBy(sampleObject, (value) => value > 2);
console.log(result); // { a: 1, b: 2 }
```

### objectValueToString

将对象的值转换为字符串。

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| obj | 源对象 | 是 |

```ts
const obj = {
  id: 123,
  active: true,
  score: 98.5
};

const stringified = objectValueToString(obj);
console.log(stringified);
// 输出: { id: '123', active: 'true', score: '98.5' }
```
