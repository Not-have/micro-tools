import {
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
  IPropsFooter
} from "../../type";

export default function Footer({
  confirm,
  cancel
}: IPropsFooter): VNode{
  const handleConfirmClick = (): void => {
    confirm.fn();
  };

  const handleCancelClick = (): void => {
    cancel.fn();
  };

  return <>
    <ElButton type="primary" disabled={confirm?.disabled} onClick={handleConfirmClick} loading={unref(confirm?.loading)}>{confirm?.text ?? OK}</ElButton>
    <ElButton disabled={cancel?.disabled} onClick={handleCancelClick}>{cancel?.text ?? CANCEL}</ElButton>
  </>;
}
