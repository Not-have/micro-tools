import {
  IModelValue
} from "../types";
import useContext from "../context";

export default function useModelContext(): IModelValue {
  return useContext();
}
