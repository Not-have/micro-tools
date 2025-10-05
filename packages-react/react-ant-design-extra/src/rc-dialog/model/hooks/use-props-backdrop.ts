import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsBackdrop(): boolean {
  const props = useModelProps();

  return useMemo(() => props.backdrop ?? true, [
    props
  ]);
}
