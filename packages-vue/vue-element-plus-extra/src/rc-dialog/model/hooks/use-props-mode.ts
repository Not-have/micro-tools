import {
  ComputedRef,
  computed
} from "vue";

import {
  EMode
} from "../enum";
import useModelProps from "./_use-model-props";

export default function usePropsMode(): ComputedRef<EMode> {
  const props = useModelProps();

  return computed(() => props.value.mode ?? EMode.DRAWER);
}
