import {
  provide,
  inject
} from "vue";
const key = Symbol("opDialogValue");

import {
  IModelValue
} from "../types";

export function createContext(value: IModelValue): void {
  provide(key, value);
}

export default function useContext(): IModelValue {
  return inject(key)!;
}
