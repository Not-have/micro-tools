import {
  computed,
  ComputedRef
} from "vue";

import useModelProps from "./_use-model-props";

export default function usePropsEsc(): ComputedRef<boolean> {
  const props = useModelProps();

  return computed(() => props.value.esc ?? true);
}
