import {
  IPropsDialog
} from "../type";
import {
  dialog
} from "../rc";

export default function uiDialog({
  modelValue,
  title,
  content,
  footer
}: IPropsDialog): void{
  dialog({
    title,
    modelValue,
    destroyOnClose: true,
    closeOnClickModal: false,
    content,
    footer
  });
}
