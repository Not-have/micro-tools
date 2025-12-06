import {
  inject,
  ComputedRef
} from "vue";

import {
  MODEL_CONTEXT_KEY
} from "../const";
import {
  IModelContext
} from "../types";

export default function useModelContext(): ComputedRef<IModelContext> {
  return inject(MODEL_CONTEXT_KEY) as ComputedRef<IModelContext>;
}
