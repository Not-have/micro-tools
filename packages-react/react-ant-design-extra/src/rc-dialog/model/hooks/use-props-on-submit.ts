import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsOnSubmit(): ((result?: unknown) => Promise<unknown>) | undefined {
  const props = useModelProps();

  return useMemo(() => props.onSubmit, [
    props
  ]);
}
