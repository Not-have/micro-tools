import {
  inject,
  ComputedRef,
  computed
} from "vue";

import {
  MODEL_CONTEXT_KEY
} from "../const";
import {
  IModelContext
} from "../types";

export default function useModelContext(): ComputedRef<IModelContext> {
  return computed(() => inject(MODEL_CONTEXT_KEY) as IModelContext);
}
