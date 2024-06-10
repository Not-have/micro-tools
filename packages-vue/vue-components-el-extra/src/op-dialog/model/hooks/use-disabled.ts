import {
  isEqual as _isEqual,
  isUndefined as _isUndefined
} from "lodash-es";
import {
  Ref,
  watch,
  ref
} from "vue";

import useModelProps from "./_use-model-props";
import useFooter from "./use-footer";
import useModelState from "./use-model-state";

export default function useDisabled(): Ref<boolean> {
  const _disabled = ref(false);

  const {
    disabled
  } = useFooter();

  if(!_isUndefined(disabled)) {
    _disabled.value = disabled;

    return _disabled;
  }

  const {
    fieldsValue
  } = useModelProps();

  const modelState = useModelState();

  watch(modelState, () => {
    if(_isEqual(fieldsValue, modelState.value)) {
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
