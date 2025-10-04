import {
  ComputedRef
} from "vue";

import {
  IDialogProps
} from "../types";
import usePropsOnClose from "./use-props-on-close";

export default function useHandleClose(): ComputedRef<IDialogProps["onClose"]> {

  const onClose = usePropsOnClose();

  return onClose;
}
