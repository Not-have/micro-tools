import React, {
  ReactPortal
} from "react";
import {
  createPortal
} from "react-dom";

import Model, {
  DialogProps

} from "../model";
import Ui from "../ui";

/**
 * 带 context 的 dialog
 */
export default function WithProvider(props: DialogProps): ReactPortal {

  // https://zh-hans.react.dev/reference/react-dom/createPortal
  return createPortal(<Model props={props}>
    <Ui />
  </Model>, document.body);
}
