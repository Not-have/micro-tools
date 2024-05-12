import {
  compact as _compact
} from "lodash-es";
import {
  LINE
} from "../../const";
import type {
  TButtonType,
  IButtonOpsType
} from "../types";

type TButtonOpsResult = [(TButtonType | typeof LINE)[], (TButtonType)[]];

export default function parseButtonOps(props: IButtonOpsType): TButtonOpsResult {
  const {
    disabled,
    maxVisible,
    size,
    type,
    items
  } = props;

  const parseItems = items.map(item => {
    if(item === LINE){
      return item;
    }

    return {
      disabled,
      size,
      type,
      ...item
    };
  });

  const buttonItems = parseItems.slice(0, maxVisible);

  // eslint-disable-next-line array-callback-return
  const dropdownItems = parseItems.slice(maxVisible).map(v => {
    if(v !== LINE){
      return v;
    }
  });

  return [buttonItems, _compact(dropdownItems)];
}
