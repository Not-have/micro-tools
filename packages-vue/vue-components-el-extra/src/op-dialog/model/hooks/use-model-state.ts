import useModelContext from "./_use-model-context";
import {
  IModelState
} from "../types";

/**
 * TODO 挨个导出 state 的属性，会失去响应，懒得处理了！！！
 */
export default function useModelState(): IModelState {
  const {
    state
  } = useModelContext();

  return state;
}
