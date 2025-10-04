import {
  ComputedRef,
  computed
} from "vue";

import {
  ELockState
} from "../enum";
import useStateLocked from "./use-state-locked";

/**
 * 根据锁定状态计算弹窗是否应该打开
 *
 * 逻辑说明：
 * - YES: 弹窗已锁定，应该显示
 * - NO: 弹窗未锁定，应该隐藏
 * - LOADING: 弹窗正在加载，应该显示
 */
export default function useStateOpen(): ComputedRef<boolean> {
  const locked = useStateLocked();

  return computed(() => {
    switch (locked.value) {
      case ELockState.YES: {
        return true;
      }
      case ELockState.NO: {
        return false;
      }
      case ELockState.LOADING: {
        return true;
      }
      default: {
        return false;
      }
    }
  });
}
