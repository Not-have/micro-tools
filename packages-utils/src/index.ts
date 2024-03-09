/* 类型判断 */
export { default as isObject } from './is-object';
export { default as isFunction } from './is-function';
export { default as isUndefined } from './is-undefined';
export { default as isElement } from './is-element';
export { default as isNull } from './is-null';
export { default as isEqual } from './is-equal';

export { default as omitBy } from './omit-by';

export { default as debounce } from './debounce';
export { default as throttle } from './throttle';

export { default as clone } from './clone';
export { default as cloneDeep } from './clone-deep';

export { default as injectIconfont } from './inject-iconfont';

export { default as draggable } from './draggable';

export { default as queryStringToObject } from './location';

export { default as animationFrameThrottle } from './animation-frame-throttle';

export { default as copyText } from './copy-text';

export { default as openWindow } from './open-window';

export {
    addResizeListener,
    removeResizeListener,
    triggerWindowResize
} from './dom-resize-utils';

export {
    objectValueToString
} from './handle-object';

/* 本地储存 */
export { default as LocalStorageHelper } from './local-storage-helper';
export { default as CookieHelper } from './cookie-helper';

/* 转换 */
export {
    dataUrlToBlob,
    urlToBase64
} from './base64-conver';

/* 下载 */
export {
    downloadByOnlineUrl,
    downloadByBase64,
    downloadByData,
    downloadByUrl
} from './file-download';