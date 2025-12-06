import {
  TModelDispatch
} from "./action";
import {
  IDialogProps
} from "./props";
import {
  IModelState
} from "./state";

export interface IModelContext<R = void, D extends object = Record<string, unknown>> {
  props: IDialogProps<R, D>;
  state: IModelState<D>;
  dispatch: TModelDispatch;
}
