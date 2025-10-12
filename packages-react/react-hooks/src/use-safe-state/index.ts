import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState
} from "react";

import useIsUnmounted from "../use-is-unmounted";

/**
 * 安全的 useState，在组件卸载后不会更新状态
 * @param initialState 初始状态
 * @returns [S, Dispatch<SetStateAction<S>>] 返回状态和设置状态的函数
 */
export default function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [
    state,
    setState
  ] = useState<S>(initialState);

  const isUnmounted = useIsUnmounted();

  const setSafeState = useCallback((v: SetStateAction<S>): void => {
    if (!isUnmounted()) {
      setState(v);
    }
  }, [
    isUnmounted
  ]);

  return [
    state, setSafeState
  ];
}
