import {
  ModelProps
} from "../model";
import openIndirect from "./open-indirect";

export function open<T>(props: ModelProps): Promise<T> {
  return openIndirect<T>(props).promise;
}
