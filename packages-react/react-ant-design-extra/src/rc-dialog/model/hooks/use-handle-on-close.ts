import {
  useCallback
} from "react";

import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";

/**
 * 关闭弹出
 */
export default function useHandleOnClose(): () => void {
  const dispatchUnlock = useDispatchUnlock();

  const close = usePropsOnClose();

  return useCallback(() => {
    dispatchUnlock();

    /**
     * 使用 queueMicrotask 将 close 调用推迟到微任务队列
     *
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/queueMicrotask
     *
     * 这样可以避免在 React 渲染过程中同步调用
     */
    queueMicrotask(() => {
      close?.();
    });
  }, [
    dispatchUnlock,
    close
  ]);
}
