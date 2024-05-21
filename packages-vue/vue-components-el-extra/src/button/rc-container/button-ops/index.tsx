import {
  VNode,
  unref,
  defineComponent
} from "vue";
import "./index.css";
import {
  isEmpty as _isEmpty
} from "lodash-es";

import type {
  IButtonOpsType
} from "../../types";
import {
  LINE
} from "../../../const";
import {
  I_BUTTON_OPS_PROPS
} from "../../props";
import {
  parseButtonOps
} from "../../utils";
import Button from "../button";
import {
  DropdownMenu
} from "../../rc";

export default defineComponent({
  props: I_BUTTON_OPS_PROPS,
  setup({
    extra,
    space,
    ...props
  }): () => VNode {
    const [buttonItems, dropdownItems] = parseButtonOps(props as unknown as IButtonOpsType);

    const buttonDropdownItems = dropdownItems.map(v => <Button {...unref(v)} />);

    return (): VNode => <div class="button-ops">
      {
        buttonItems.map(v => {
          if (v === LINE) {
            return <span class='separation-line' style={`margin:${space}px`}>{LINE}</span>;
          }

          return <Button {...unref(v)} />;
        })
      }
      {extra}
      {
        _isEmpty(dropdownItems) ? undefined : <DropdownMenu {...{
          extra,
          items: buttonDropdownItems
        }} />
      }

    </div>;
  }
});
