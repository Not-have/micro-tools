import {
  noop as _noop
} from "lodash-es";

import {
  ComponentPublicInstance,
  createApp,
  App,
  h
} from "vue";

import {
  createContainer,
  uuid
} from "@mt-kit/utils";

import {
  DialogProps
} from "../model";
import {
  IDialogIndirectPromise
} from "../types";

export default function openIndirect<T = void, D extends object = Record<string, unknown>>(props: DialogProps<T, D>): IDialogIndirectPromise<T> {

  let close: ((result?: T | Error, rejected?: boolean, isDestroy?: boolean) => void) | null = _noop;

  let container: HTMLDivElement | null = createContainer({
    append: true
  }).element;

  let root: ComponentPublicInstance | null | App<Element> = null;

  const dialogId = uuid();

  function renderDialog(): void {
    root = createApp({
      render() {
        return h("div", {
          id: dialogId
        }, props.content);
      }
    }).mount(container as HTMLElement);
  }

  function destroy(): void {

    // 清理 DOM 和引用
    setTimeout(() => {

      // 只有 root 是 App 实例时才调用 unmount
      if (root) {
        (root as App<Element>).unmount();
      }

      container?.remove();

      // 防止内存泄漏
      container = null;
      root = null;
      close = null;
    }, 500);
  }

  const promise = new Promise<T>(() => {
    renderDialog();
  });

  // 销毁 Promise 的方法
  const destroyPromise = (): void => {
    try {

      // 直接调用 destroy 方法，立即销毁 Promise
      destroy();
    } catch (error) {
      console.error("[DialogIndirect] 销毁 Promise 时出错:", error);
    }
  };

  return {
    promise,
    close,
    destroy: destroyPromise
  };
}
