import {
  defineComponent,
  unref,
  VNode
} from "vue";

import {
  ElButton
} from "element-plus";

import {
  OK,
  CANCEL
} from "../../../intl";

import {
  useFooter,
  useSubmit,
  useDispatchModelValue,
  useModelState,
  useDisabled
} from "../../model";

export default defineComponent({
  setup() {
    const {
      isSubmit,
      okText,
      okType,
      cancelText,
      cancelType
    } = useFooter();

    const submit = useSubmit();

    const disabled = useDisabled();

    const state = useModelState();

    const handleOkClick = (): void => {
      submit(state.value);
    };

    const dispatchModelValue = useDispatchModelValue();

    const handleCancelClick = (): void => {
      dispatchModelValue(false);
    };

    return (): VNode => (
      <div>
        {isSubmit ? <ElButton type={okType ?? "primary"} loading={state.loading} disabled={unref(disabled)} onClick={handleOkClick}>{okText || OK}</ElButton> : null}
        <ElButton type={cancelType} onClick={handleCancelClick}>{cancelText || CANCEL}</ElButton>
      </div>
    );
  }
});
