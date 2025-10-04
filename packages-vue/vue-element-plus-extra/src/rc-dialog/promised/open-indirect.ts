import {
  noop as _noop
} from "lodash-es";

import WithModel from "../with-model/index.vue";
import {
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

  let root: null | App<Element> = null;

  const dialogId = uuid();

  const onClose: DialogProps<T, D>["onClose"] = (result, defaultResult) => {

    if (result instanceof Error) {
      close?.(JSON.parse(result.message as string), true, false);

      return;
    }

    destroy();

    close?.(result, false);

    props?.onClose?.(result, defaultResult);
  };

  function renderDialog(): void {
    container?.setAttribute("class", dialogId);

    root = createApp({
      render() {
        return h(WithModel, {
          props: {
            ...props,
            onClose
          } as DialogProps
        });
      }
    });

    root.mount(container as HTMLElement);
  }

  function destroy(): void {

    // 清理 DOM 和引用
    setTimeout(() => {
      root?.unmount();
      container?.remove();

      root = null;
      container = null;
      close = null;
    }, 800);
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
