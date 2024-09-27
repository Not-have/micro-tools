import type {
  TButtonType
} from "./button";
import {
  LINE
} from "../../const";

export interface IButtonOpsType {
  items: (TButtonType | typeof LINE)[];
  type: TButtonType["type"];
  size: TButtonType["size"];
  disabled: TButtonType["disabled"];

  /**
     * 最多可见个数，其余的收起
     */
  maxVisible: number;

  /**
     * 额外的组件，放在按钮列表末尾
     */
  extra: object
}
