import React from "react";

import {
  ModelMode,
  ModelLockState,
  useStateLocked,
  usePropsMode
} from "../model";
import {
  Drawer
} from "./rc";

export default function Ui(): React.ReactElement {
  const locked = useStateLocked();

  const mode = usePropsMode();

  if (mode === ModelMode.DRAWER) {
    return <Drawer open={locked === ModelLockState.YES} />;
  }

  return <div>
    {locked}
    {mode}
  </div>;
}
