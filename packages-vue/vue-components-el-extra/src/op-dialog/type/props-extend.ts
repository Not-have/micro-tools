import {
  IProps
} from "./props";

export interface IPropsExtend extends IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSuccess: (result: any) => void
  handleError: (error: unknown) => void
}
