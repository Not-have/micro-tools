import {
  useCallback
} from "react";

import usePropsClose from "./use-props-close";

export default function useOnAfterOpenChange(): (open: boolean) => void {
  const close = usePropsClose();

  return useCallback((open: boolean) => {
    if (!open) {
      close?.();
    }
  }, [
    close
  ]);
}
