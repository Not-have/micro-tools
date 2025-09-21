import {
  IDialogProps
} from "../types";
import useModelContext from "./_use-model-context";

export default function useModelProps<T, D extends object>(): IDialogProps<T, D> {

  const context = useModelContext<T, D>();

  return context.props;
}
