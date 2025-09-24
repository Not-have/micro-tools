import {
  DialogProps
} from "../model";
import openIndirect from "./open-indirect";

export function open<T = void, D extends object = Record<string, unknown>>(props: DialogProps<T, D>): Promise<T | undefined> {
  return openIndirect<T, D>(props).promise;
}
