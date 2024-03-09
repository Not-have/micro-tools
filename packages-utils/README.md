# micro-util-ts

## 1、下载

```bash
npm i micro-util-ts
```

## 2、使用

[See](https://github.com/Not-have/micro-tools/tree/main/packages-utils/stories)

## 3、bug

```json
{
  "scripts": {
    "build": "npx rimraf lib && webpack --config webpack.config.js",
    "build:tsc": "npx rimraf dist && tsc",
    "start": "tsc --watch",
    "start:webpack": "webpack --watch",
    "publish:build": "npm run build:tsc && npm publish",
    "clear": "npx rimraf node_modules",
    // 不能存在 postinstall，负责使用的时候 会报错，扯淡啊
    "postinstall": "tsc && pnpm run start:webpack",
    "prepublishOnly": "npm run build:tsc && npm run build"
  }
}
```

## 4、API

### 1）类型判断

#### ① isObject

是否对象类型判断

#### ② isFunction

是否函数类型判断

#### ③ isUndefined

是否为 undefined

#### ④ isElement

是否为 DOM

#### ⑤ isNull

判断是否为 null

#### ⑥ isEqual

比较对象是否相等

### 2）debounce

防抖

### 3）throttle

节流

### 4）clone

浅拷贝

### 5）cloneDeep

深拷贝

### 6）queryStringToObject

window.location.search 并转换为 Object

### 7）animationFrameThrottle

创建一个使用 requestAnimationFrame 的函数节流（throttle）版本

函数节流的目的是限制一个函数在特定时间内的调用次数，以避免过于频繁的执行，以确保性能优化或更平滑的动画效果时

### 8）copyText

文本复制

### 9）openWindow

用于在浏览器中打开窗口

### 10）元素监听

#### ① addResizeListener

该函数用于向指定的元素添加尺寸变化的监听器
如果该元素没有注册过监听器，则使用 ResizeObserver 监听元素的尺寸变化。每当尺寸变化时，相关联的回调函数会被执行

#### ② removeResizeListener

从指定的元素中移除尺寸变化的监听器

#### ③ triggerWindowResize

通过模拟触发 resize 事件，手动触发窗口尺寸变化

### 12）Object

#### ① objectValueToString

obj 中所有 value 转换为 string

#### ② omitBy

从创建的一个从对象中，排除满足某些条件的属性的属性

### 13）本地储存

#### ① LocalStorageHelper

localStorage 的一些扩展

#### ② CookieHelper

CookieHelper 的一些扩展

### 14）转换

#### ① dataUrlToBlob

将 base64 编码的图像数据转换为 Blob 对象

#### ② urlToBase64

将图像 URL 转换为 base64 编码的字符串

### 15）下载

#### ① downloadByOnlineUrl

根据在线图片的 URL 进行下载

#### ② downloadByBase64

根据 Base64 编码的字符串进行下载

#### ② downloadByData

根据文件数据进行下载

#### ② downloadByUrl

根据文件地址进行下载
