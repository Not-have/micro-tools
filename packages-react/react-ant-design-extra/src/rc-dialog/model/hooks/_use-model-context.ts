import {
  useContext
} from "react";

import ModelContext from "../context";
import {
  IModelContext
} from "../types";

export default function useModelContext<T, D extends object>(): IModelContext<T, D> {
  return useContext(ModelContext) as unknown as IModelContext<T, D>;
}
