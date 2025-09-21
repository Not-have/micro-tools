import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsEsc(): boolean {
  const props = useModelProps();

  return useMemo(() => props.esc || true, [
    props
  ]);
}
