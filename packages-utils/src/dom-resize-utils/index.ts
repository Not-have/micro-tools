/* eslint-disable @typescript-eslint/no-explicit-any */
import ResizeObserver from "resize-observer-polyfill"; // 浏览器兼容插件

const isServer = typeof window === "undefined";

/**
 * 这是一个 ResizeObserver 的回调函数，当被观察的元素尺寸发生变化时，将遍历所有的观察项（entries），并执行与之相关联的回调函数
 */
function resizeHandler(entries: any[]) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];

    if (listeners.length > 0) {
      listeners.forEach((fn: () => any) => {
        fn();
      });
    }
  }
}

/**
 * 该函数用于向指定的元素添加尺寸变化的监听器。如果该元素没有注册过监听器，则使用 ResizeObserver 监听元素的尺寸变化。每当尺寸变化时，相关联的回调函数会被执行
 */
export function domAddResizeListener(element: any, fn: () => any) {
  if (isServer) {return;}

  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  }

  element.__resizeListeners__.push(fn);
}

/**
 * 从指定的元素中移除尺寸变化的监听器。该函数会将指定的回调函数从元素的监听器列表中移除，并在没有监听器时断开 ResizeObserver 的观察
 */
export function domRemoveResizeListener(element: any, fn: () => any) {
  if (!element || !element.__resizeListeners__) {return;}

  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

  if (element.__resizeListeners__.length === 0) {
    element.__ro__.disconnect();
  }
}

/**
 * 通过模拟触发 resize 事件，手动触发窗口尺寸变化。这可以在某些情况下用于强制触发页面元素的重新布局，例如在动态添加或删除元素后
 */
export function domTriggerWindowResize() {
  const event = document.createEvent("HTMLEvents");

  event.initEvent("resize", true, true);
  (event as any).eventType = "message";
  window.dispatchEvent(event);
}

/*
// 使用示例

import React, { useEffect } from 'react';
import { addResizeListener, removeResizeListener, triggerWindowResize } from './window-resize-utils'; // 替换成实际的文件路径

const YourComponent = () => {
    useEffect(() => {
        // 添加尺寸变化监听器
        const handleResize = () => {
        console.log('Window resized!');
        // 执行你的其他逻辑...
        };
        addResizeListener(window, handleResize); // 也可监听 dom

        // 在组件卸载时移除监听器
        return () => {
        removeResizeListener(window, handleResize);
        };
    }, []); // 空数组表示仅在组件挂载时添加和卸载监听器

    // 手动触发窗口尺寸变化（示例，实际使用时根据需要触发）
    const handleButtonClick = () => {
        triggerWindowResize();
    };

    return (
        <div>
        <p>Your component content goes here.</p>
        <button onClick={handleButtonClick}>Trigger Window Resize</button>
        </div>
    );
};

export default YourComponent;
 */
