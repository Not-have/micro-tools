import openIndirect from "./open-indirect";

export function open<T>(): Promise<T> {
  return openIndirect<T>().promise;
}
