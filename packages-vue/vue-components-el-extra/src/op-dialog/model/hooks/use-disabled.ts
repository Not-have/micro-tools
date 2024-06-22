import {
  isEqual as _isEqual,
  omit as _omit,
  isUndefined as _isUndefined
} from "lodash-es";
import {
  Ref,
  watch,
  ref,
  unref
} from "vue";

import useModelProps from "./_use-model-props";
import useInitModel from "./use-init-model";

export default function useDisabled(): Ref<boolean> {
  const _disabled = ref(false);

  const {
    fieldsValue,
    ignoreFields,
    disabled
  } = useModelProps();

  if(!_isUndefined(disabled)) {
    _disabled.value = disabled;

    return _disabled;
  }

  const initModel = useInitModel();

  const _fieldsValue = _omit(fieldsValue, ignoreFields || "");

  // 在这处理忽略字段
  watch(() => initModel.value, () => {
    const _modelState = _omit(unref(initModel.value), ignoreFields || "");

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
