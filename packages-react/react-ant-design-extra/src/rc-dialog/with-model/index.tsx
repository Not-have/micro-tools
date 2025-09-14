import React, {
  ReactPortal
} from "react";
import {
  createPortal
} from "react-dom";

import Model, {
  ModelProps
} from "../model";

/**
 * 带 context 的 dialog
 */
export default function WithProvider(props: ModelProps<void, Record<string, unknown>>): ReactPortal {

  // https://zh-hans.react.dev/reference/react-dom/createPortal
  return createPortal(<Model props={props}>
    <p>123</p>
  </Model>, document.body);
}
