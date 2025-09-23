import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsOnClose<T extends object = Record<string, unknown>>(): ((result?: T | Error, rejected?: boolean, isDestroy?: boolean) => void) | undefined {
  const props = useModelProps();

  return useMemo(() => props?.onClose, [
    props
  ]);
}
