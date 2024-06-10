import {
  IProps
} from "./props";

export interface IPropsExtend<T, D> extends IProps<T> {
  handleSuccess: (result: D) => void
  handleError: (error: unknown) => void
}
