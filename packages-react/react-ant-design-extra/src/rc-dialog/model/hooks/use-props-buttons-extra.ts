import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsButtonsExtra(): React.ReactElement[] {
  const props = useModelProps();

  return useMemo(() => props.buttonsExtra || [], [
    props
  ]);
}
