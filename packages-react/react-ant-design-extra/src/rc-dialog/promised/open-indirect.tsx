import {
  noop as _noop
} from "lodash-es";

import React from "react";
import {
  createRoot
} from "react-dom/client";

import {
  DialogProps
} from "../model";
import {
  IDialogIndirectPromise
} from "../types";
import {
  createDialogContainer
} from "../util";
import WithProvider from "../with-model";

/**
 * 所有 Promise 化的 dialog 的基础。
 *
 * 一般来说你不需要用到这个方法，当希望外部代码可以在 Dialog 生成之后对 Dialog 进行重新渲染（主要是渲染内容），可以用它。
 * 返回一个对象，该对象包含 `renderUpdate` 和 `promise`，你可以利用 `renderUpdate` 对 Dialog 进行重新渲染，需要注意的是，
 * 你必须在 promise 的 `then` 里关注 Dialog 是否被关闭。
 * 这种情况下，这个 `promise` 一般不会被直接返回使用，而是作为一系列 Promise 对象的触发器。
 */
export default function openIndirect<T>(props: DialogProps): IDialogIndirectPromise<T> {

  let close: ((result?: T | Error, rejected?: boolean, isDestroy?: boolean) => void) | null = _noop;

  let container: HTMLDivElement | null = createDialogContainer();

  let root: ReturnType<typeof createRoot> | null = createRoot(container);

  // eslint-disable-next-line no-console
  console.group("弹窗的参数");
  // eslint-disable-next-line no-console
  console.table(props);
  // eslint-disable-next-line no-console
  console.groupEnd();

  const onClose = (result?: undefined | Error, rejected?: boolean | undefined, isDestroy?: boolean): void => {
    close?.(result as T | Error, rejected, isDestroy);

    props?.onClose?.(result);
  };

  function renderDialog(): void {
    const modelProps: DialogProps = {
      ...props,
      onClose
    };

    root?.render(<WithProvider {...modelProps} />);
  }

  function destroy(): void {
    setTimeout(() => {
      root?.unmount();
      container?.remove();

      // 防止内存泄漏
      container = null;
      root = null;
      close = null;
    }, 500);
  }

  const promise = new Promise<T>((resolve, reject) => {

    /**
     * Dialog 被关闭是会执行到此回调，这里会将 Promise 进行 resolve 或 reject，同时做一系列的清理动作
     *
     * isDestroy，用作内部消费，是否立即销毁元素
     */
    close = (result?: T | Error, rejected?: boolean, _isDestroy: boolean = true) => {
      if (!container) {
        return;
      }

      if (rejected) {
        reject(result);
      } else {
        resolve(result as T);
      }

      if (_isDestroy) {
        destroy();
      }
    };

    renderDialog();

  });

  return {
    promise,
    close
  };
}
