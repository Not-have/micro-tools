# @mt-kit/utils

## 下载

```bash
npm i @mt-kit/utils
```

## 使用

[See](https://github.com/Not-have/micro-tools/tree/main/packages-utils/stories)

## API

### animationFrameThrottle

- 使用 requestAnimationFrame 创建函数节流版本，限制函数在特定时间内的调用次数

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

- 将 Base64 格式的图片转换为 Blob 对象

| 参数名      | 说明     |  是否必穿  |
| ----------- | ----------- | ----------- |
| base64 | 图片base64 | 是        |

```ts
const base64Data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...';
const blob = imageBase64ToBlob(base64Data);
```

### imageUrlToBase64

- 将图片 URL 转换为 Base64 格式

| 参数名      | 说明     |  是否必穿  | 默认值 |
| ----------- | ----------- | ----------- | ----------- |
| url | 图片url | 是        | - |
| mineType | 用于指定生成的 base64 字符串的 MIME 类型 | 否 | image/png |

```ts
imageUrlToBase64('https://example.com/image.png')
  .then(base64 => {
    console.log(base64); // data:image/png;base64,...
  });
```

### downloadByUrl

- 根据文件地址进行下载

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

- 根据文件数据进行下载

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

- 根据 Base64 数据下载文件

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

- 根据在线图片的 URL 进行下载

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

- 复制文本到剪贴板

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

- 将查询字符串转换为对象

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| queryString | 查询字符串 | 是 |

```ts
const query = queryStringToObject('?name=John&age=30');
console.log(query); // { name: 'John', age: '30' }
```

### openWindow

- 打开新窗口

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

- Cookie 操作助手

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

- localStorage 操作助手

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

- 判断是否为 DOM 元素

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| element | 元素 | 是 |

```ts
const div = document.createElement('div');
console.log(isElement(div)); // true
console.log(isElement({})); // false
```

### isFunction

- 判断是否为函数

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| fn | 函数 | 是 |

```ts
console.log(isFunction(() => {})); // true
console.log(isFunction({})); // false
```

### isEqual

- 比较两个对象是否相等

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

- 判断是否为 null

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
console.log(isNull(null)); // true
console.log(isNull(undefined)); // false
console.log(isNull(0)); // false
```

### isObject

- 判断是否为对象类型

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

- 判断是否为 undefined

| 参数名      | 说明     |  是否必穿  |
| --------   | ------- | ----------|
| value | 值 | 是 |

```ts
console.log(isUndefined(undefined)); // true
console.log(isUndefined(null)); // false
console.log(isUndefined(0)); // false
```

### clone

- 浅拷贝对象

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

- 深拷贝对象

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

- 创建一个防抖函数，延迟调用函数直到上一次调用后的一段时间已经过去

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

- 创建一个节流函数，限制函数在一段时间内只能调用一次

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

- 创建一个从对象中排除满足条件的属性的新对象

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

- 将对象的值转换为字符串

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

### IframeMessage

- 创建一个 iframe 便签，与内嵌的页面进行通讯

调用界面

```tsx
import {
  JSX,
  useCallback,
  useMemo
} from "react";

import {
  IframeMessage
} from "@mt-kit/utils";

export default function DemoIframeMessage(): JSX.Element {
  const url = "http://localhost:5173/";

  const iframe = useMemo(() => {
    const communicator = new IframeMessage();

    communicator.createIframe(url);

    return communicator;
  }, [url]);

  const handleClick = useCallback(() => {

    iframe.postMessage({
      type: "message",
      data: {
        name: "hello",
        age: 18
      }
    });
  }, [iframe]);

  return <div>
    <p>iframe 通信</p>
    <button onClick={handleClick}>传值</button>
  </div>;
}
```

接收通信

```vue
<script setup lang="ts">
import {
  onMounted,
  onUnmounted
} from "vue";

import {
  Message,
  IframeMessage
} from "@mt-kit/utils";

const iframe = new IframeMessage();

const handleMessage = (e: Message ): void => {
  console.log(e);
};

onMounted(() => {
  iframe.onMessage(handleMessage);
});

onUnmounted(() => {
  iframe.removeMessageListener(handleMessage);
});

</script>

<template>

</template>

<style scoped>
</style>
```

### 设备信息

#### deviceAll

- 获取所有设备信息（包括同步和异步信息）

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`Promise<IDeviceAll>`

```ts
import { deviceAll } from "@mt-kit/utils"
// 获取完整设备信息
const allDeviceInfo = await deviceAll();
console.log(allDeviceInfo);
```

#### deviceOperatingSystem

- 获取操作系统信息

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

```ts
import { deviceOperatingSystem } from "@mt-kit/utils";

const os = deviceOperatingSystem();
console.log(os); // "Windows", "macOS", "Linux", "Android", "iOS", "unknown"
```

#### deviceBrowser

- 获取浏览器信息

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`IBrowser`

```ts
import { deviceBrowser } from "@mt-kit/utils";

const browser = deviceBrowser();
console.log(browser); // { name: "Chrome", version: "120.0.0.0" }
```

#### deviceLanguage

- 获取浏览器语言

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

```ts
import { deviceLanguage } from "@mt-kit/utils";

const language = deviceLanguage();
console.log(language); // "zh-CN", "en-US", etc.
```

#### deviceOnLine

- 获取在线状态

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

```ts
import { deviceOnLine } from "@mt-kit/utils";

const isOnline = deviceOnLine();
console.log(isOnline); // true or false
```

#### deviceScreen

- 获取屏幕信息

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`IScreen`

```ts
import { deviceScreen } from "@mt-kit/utils";

const screen = deviceScreen();
console.log(screen);
// {
//   width: 1920,
//   height: 1080,
//   availWidth: 1920,
//   availHeight: 1040,
//   colorDepth: 24,
//   pixelDepth: 24,
//   devicePixelRatio: 1
// }
```

#### deviceLocation

- 获取地理位置信息（需要用户授权）

| 参数名 | 说明 | 是否必传 | 返回值 |
|--------|------|----------|--------|
| 无 | 无参数 | - | `{ latitude: number, longitude: number }` |

返回类型：`Promise<ILocation>`

**返回值说明：**

- `latitude`: 纬度，范围 -90 到 90
- `longitude`: 经度，范围 -180 到 180

**失败情况：**

- **定位服务不可用**：返回 `{ latitude: 0, longitude: 0 }`
- **用户拒绝授权**：返回 `{ latitude: -1, longitude: -1 }`
- **超时**：返回 `{ latitude: -1, longitude: -1 }`
- **其他错误**：返回 `{ latitude: -1, longitude: -1 }`

```ts
import { deviceLocation } from "@mt-kit/utils";

deviceLocation().then(location => {
  if (location.latitude === -1 && location.longitude === -1) {
    console.log("定位失败或用户拒绝授权");
  } else {
    console.log(`位置: ${location.latitude}, ${location.longitude}`);
  }
});
```

#### devicePublicIp

**IP查询服务列表：**

1. `https://api.ipify.org?format=json` - 官方服务，稳定可靠
2. `https://ipapi.co/json/` - 官方 API，功能丰富
3. `https://ipinfo.io/json` - 官方服务，数据准确
4. `https://api.ip.sb/geoip` - 开源项目，稳定
5. `https://httpbin.org/ip` - 官方测试服务

**服务特点：**

- 按顺序尝试，成功即停止
- 总超时时间：15秒
- 单个服务超时：5秒
- 全部失败时返回 `127.0.0.1`

| 参数名 | 说明 | 是否必传 | 返回值 |
|--------|------|----------|--------|
| 无 | 无参数 | - | `string` |

返回类型：`Promise<string>`

**返回值说明：**

- 成功时：返回公网IP地址字符串，如 `"203.208.60.1"`
- 失败时：返回本地IP地址 `"127.0.0.1"` 作为容错处理
- 可能包含位置信息：`"203.208.60.1 (北京市)"`

```ts
import { devicePublicIp } from "@mt-kit/utils";

devicePublicIp().then(ip => {
  console.log(ip); // "127.0.0.1" (获取失败时返回本地IP)
});
```

#### deviceCpuCores

- 获取CPU核心数

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

```ts
import { deviceCpuCores } from "@mt-kit/utils";

const cores = deviceCpuCores();
console.log(cores); // 8
```

#### deviceMemory

- 获取内存信息

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`IMemory`

```ts
import { deviceMemory } from "@mt-kit/utils";

const memory = deviceMemory();
console.log(memory);
// {
//   usedJSHeapSize: 43.18,
//   totalJSHeapSize: 46.07,
//   jsHeapSizeLimit: 4095.75,
//   deviceMemory: 8
// }
```

#### deviceHardwareConcurrency

- 获取硬件并发数

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

```ts
import { deviceHardwareConcurrency } from "@mt-kit/utils";

const concurrency = deviceHardwareConcurrency();
console.log(concurrency); // 8
```

#### deviceFeatures

- 获取设备特性支持

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`IFeatures`

```ts
import { deviceFeatures } from "@mt-kit/utils";

const features = deviceFeatures();
console.log(features);
// {
//   touchSupport: true,
//   maxTouchPoints: 5,
//   vibrate: true,
//   webglSupport: true,
//   webrtcSupport: true
// }
```

#### deviceSensor

- 获取传感器支持

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`ISensor`

```ts
import { deviceSensor } from "@mt-kit/utils";

const sensor = deviceSensor();
console.log(sensor);
// {
//   accelerometer: true,
//   gyroscope: true,
//   magnetometer: false,
//   ambientLight: false,
//   barometer: false
// }
```

#### deviceI18n

- 获取国际化信息

| 参数名 | 说明 | 是否必传 |
|--------|------|----------|
| 无 | 无参数 | - |

返回类型：`II18n`

```ts
import { deviceI18n } from "@mt-kit/utils";

const i18n = deviceI18n();
console.log(i18n);
// {
//   timeZone: "Asia/Shanghai",
//   daylightSaving: false,
//   numberFormat: "1,234.56",
//   currencyFormat: "¥1,234.56",
//   dateFormat: "2024/1/1",
//   timeFormat: "14:30:00"
// }
```
