import {
  inject
} from "vue";

import {
  MODEL_CONTEXT_KEY
} from "../const";
import {
  IModelContext
} from "../types";

export default function useModelContext(): IModelContext {
  return inject(MODEL_CONTEXT_KEY) as IModelContext;
}
