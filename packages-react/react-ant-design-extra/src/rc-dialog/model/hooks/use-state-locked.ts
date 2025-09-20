import {
  ELockState
} from "../enum";
import useModelState from "./_use-model-state";

export default function useStateLocked(): ELockState {
  return useModelState().locked;
}
