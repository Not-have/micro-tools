import {
  IProps
} from "./props";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IPropsExtend extends IProps< Record<string, any>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSuccess: (result: any) => void
  handleError: (error: unknown) => void
}
