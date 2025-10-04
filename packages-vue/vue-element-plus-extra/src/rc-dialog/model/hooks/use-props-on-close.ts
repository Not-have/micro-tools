import {
  computed,
  ComputedRef
} from "vue";

import {
  IDialogProps
} from "../types";
import useModelContext from "./_use-model-context";

export default function usePropsOnClose(): ComputedRef<IDialogProps["onClose"]> {
  const context = useModelContext();

  return computed(() => context?.props.onClose);
}
