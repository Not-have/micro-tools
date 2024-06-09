import {
  IPropsDrawer
} from "../type";
import {
  drawer
} from "../rc";

export default function uiDrawer({
  modelValue,
  title,
  content,
  direction,
  footer
}: IPropsDrawer): void{
  drawer({
    title,
    modelValue,
    direction,
    destroyOnClose: true,
    closeOnClickModal: false,
    content,
    footer
  });
}
