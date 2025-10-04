import {
  computed,
  ComputedRef,
  VNode
} from "vue";

import useModelProps from "./_use-model-props";

export default function usePropsFooterExtra(): ComputedRef<VNode | string> {
  const props = useModelProps();

  return computed(() => props.value.footerExtra || "");
}
