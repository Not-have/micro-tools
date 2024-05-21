import {
  inject
} from "vue";
import type {
  TButtonType
} from "../types";

export default function useContext(key: string): TButtonType{
  return inject(key)!;
}
