import {
  DialogProps
} from "../model";
import openIndirect from "./open-indirect";

export function open<T>(props: DialogProps): Promise<T> {
  return openIndirect<T>(props).promise;
}
