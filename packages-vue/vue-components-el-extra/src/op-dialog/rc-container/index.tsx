import {
  EType
} from "../enum";
import {
  IProps
} from "../type";

import uiDrawer from "./ui-drawer";
import uiDialog from "./ui-dialog";

export default function opDialog(props: IProps): void {

  if(props.type !== EType.CENTER) {
    uiDrawer(props);

    return;
  }

  uiDialog(props);
}
