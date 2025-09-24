import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

type TPropsData<D> = D | null | Record<string, unknown> | unknown | ((params?: number | Record<string, unknown>) => Promise<D | unknown>);

/**
 * 获取 props.data
 */
export default function usePropsData<D>(): TPropsData<D> {
  const props = useModelProps();

  return useMemo(() => props.data as TPropsData<D>, [
    props
  ]);
}
