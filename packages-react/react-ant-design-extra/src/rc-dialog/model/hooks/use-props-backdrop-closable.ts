import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsBackdropClosable(): boolean {
  const props = useModelProps();

  return useMemo(() => !!props.backdropClosable, [
    props
  ]);
}
