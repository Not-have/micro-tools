import {
  ESize
} from "../enum";
import useModelState from "./_use-model-state";

export default function useStateSize(): number | ESize {
  return useModelState().size;
}
