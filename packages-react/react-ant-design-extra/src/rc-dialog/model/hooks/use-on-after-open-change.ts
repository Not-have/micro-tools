import {
  useCallback
} from "react";

import usePropsClose from "./use-props-close";

export default function useOnAfterOpenChange(): (open: boolean) => void {
  const close = usePropsClose();

  return useCallback((open: boolean) => {
    if (!open) {

      // 使用 queueMicrotask 将 close 调用推迟到微任务队列
      // 这样可以避免在 React 渲染过程中同步调用
      queueMicrotask(() => {
        close?.(open);
      });
    }
  }, [
    close
  ]);
}
