import {
  isEqual as _isEqual,
  omit as _omit
} from "lodash-es";
import {
  Ref,
  watch,
  ref,
  unref
} from "vue";

import useModelProps from "./_use-model-props";
import useModelState from "./use-model-state";

export default function useDisabled(): Ref<boolean> {
  const _disabled = ref(false);

  const {
    fieldsValue,
    ignoreFields
  } = useModelProps();

  const modelState = useModelState();

  const _fieldsValue = _omit(fieldsValue, ignoreFields || "");

  // 在这处理忽略字段
  watch(modelState, () => {
    const _modelState = _omit(unref(modelState.value), ignoreFields || "");

    if(_isEqual(_fieldsValue, _modelState)) {
      _disabled.value = true;
    }else {
      _disabled.value = false;
    }
  }, {
    deep: true,
    immediate: true
  });

  return _disabled;
}
