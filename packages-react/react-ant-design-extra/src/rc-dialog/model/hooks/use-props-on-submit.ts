import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsOnSubmit<D extends object = Record<string, unknown>>(): ((result?: D) => Promise<unknown>) | undefined {
  const props = useModelProps();

  return useMemo(() => props.onSubmit, [
    props
  ]);
}
