import {
  Component,
  h
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

export default function footer({
  confirm,
  cancel
}: IPropsFooter): [Component, Component] {
  return [
    h(ElButton, {
      type: "primary",
      disabled: confirm?.disabled
    }, confirm?.text ?? OK),
    h(ElButton, {
      disabled: cancel?.disabled,
      onClick: () => {
        cancel.fn();
      }
    }, cancel?.text ?? CANCEL)
  ];
}
