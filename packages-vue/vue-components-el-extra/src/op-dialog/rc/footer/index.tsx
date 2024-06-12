import {
  defineComponent,
  VNode
} from "vue";

import {
  ElButton
} from "element-plus";

import {
  useFooter,
  useSubmit,
  useDispatchModelValue,
  useModelState
} from "../../model";

export default defineComponent({
  setup() {
    const {
      isSubmit,
      ok,
      cancel
    } = useFooter();

    const submit = useSubmit();

    const state = useModelState();

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
      submit(state.value);
      okClick?.();
    };

    const dispatchModelValue = useDispatchModelValue();

    const handleCancelClick = (): void => {
      dispatchModelValue(false);
      cancelClick?.();
    };

    return (): VNode => (
      <div>
        {!isSubmit ? <ElButton {...okRest} onClick={handleOkClick}>{okLabel}</ElButton> : null}
        <ElButton {...cancelRest} onClick={handleCancelClick}>{cancelLabel}</ElButton>
      </div>
    );
  }
});
