import {
  computed,
  ComputedRef
} from "vue";

import useModelState from "./_use-model-state";

export default function useStateFormData(): ComputedRef<Record<string, unknown> | unknown> {
  const state = useModelState();

  return computed(() => state.value.formData);
}
