import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function usePropsZIndex(): number {
  const props = useModelProps();

  return useMemo(() => props.zIndex || 1000, [
    props
  ]);
}
