import {
  useMemo
} from "react";

import useModelProps from "./_use-model-props";

export default function usePropsButtons(): React.ReactElement[] | undefined {
  const props = useModelProps();

  return useMemo(() => props.buttons || [], [
    props
  ]);
}
