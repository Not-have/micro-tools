import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

/**
 * 获取 props.data
 */
export default function usePropsData<D extends object = Record<string, unknown>>(): D {
  const props = useModelProps();

  return useMemo(() => props.data as D, [
    props
  ]);
}
