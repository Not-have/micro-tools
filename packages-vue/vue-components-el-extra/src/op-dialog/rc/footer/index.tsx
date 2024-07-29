import {
  defineComponent,
  VNode,
  unref
} from "vue";

import {
  ElButton
} from "element-plus";

import {
  useFooter,
  useSubmit,
  useModelState,
  useDisabled,
  useDispatchModelValue
} from "../../model";

export default defineComponent({
  setup() {
    const {
      isSubmit,
      ok,
      cancel
    } = useFooter();

    const submit = useSubmit();

    const {
      label: okLabel,
      click: okClick,
      ...okRest
    } = ok;

    const {
      label: cancelLabel,
      click: cancelClick,
      ...cancelRest
    } = cancel;

    const handleOkClick = (): void => {
      submit();
      okClick?.();
    };

    const dispatchModelValue = useDispatchModelValue();

    const handleCancelClick = (): void => {
      dispatchModelValue(false);
      cancelClick?.();
    };

    const state = useModelState();

    const disabled = useDisabled();

    return (): VNode => (
      <div>
        {isSubmit ? <ElButton loading={unref(state.loading)} disabled={unref(disabled)} {...{
          ...okRest
        }} onClick={handleOkClick}>{okLabel}</ElButton> : null}
        <ElButton disabled={unref(state.loading)} {...cancelRest} onClick={handleCancelClick}>{cancelLabel}</ElButton>
      </div>
    );
  }
});
