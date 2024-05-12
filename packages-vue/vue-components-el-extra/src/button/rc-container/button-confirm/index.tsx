import {
  VNode,
  defineComponent,
  unref
} from "vue";

import {
  useContext
} from "../../hook";
import type {
  IDialogProps
} from "../../types";
import {
  parseButtonExtendedConfirm
} from "../../utils";
import {
  dialog,
  Confirm,
  Button
} from "../../rc";
import ButtonTooltip from "../button-tooltip";

export default defineComponent({
  setup() {
    const {
      tooltip,
      disabledTip,
      confirm,
      onClick,
      ...props
    } = useContext("button_props");

    const parseConfirm = parseButtonExtendedConfirm(confirm as IDialogProps, onClick);

    return (): VNode => {
      if (parseConfirm.byDialog) {
        const dialing = dialog(parseConfirm);

        return <ButtonTooltip {...{
          onClick: dialing
        }} />;
      }

      if (tooltip || disabledTip) {
        return <Confirm {...{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          confirm: confirm as any,
          onClick,
          children: <ButtonTooltip/>
        }} />;
      }

      return <Confirm {...{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        confirm: confirm as any, // TODO 优化！！！(因为 内部有可能为 undefined，但是 props 的时候 可能为 undefined)
        onClick,
        children: <Button {...unref(props)}/>
      }} />;
    };
  }
});
