import React from "react";

import {
  ModelMode,
  ModelLockState,
  useStateLocked,
  usePropsMode,
  usePropsContent,
  usePropsTitle
} from "../model";
import {
  Drawer
} from "./rc";

export default function Ui(): React.ReactElement {
  const locked = useStateLocked();

  const mode = usePropsMode();

  const content = usePropsContent();

  const title = usePropsTitle();

  if (mode === ModelMode.DRAWER) {
    return <Drawer open={locked === ModelLockState.YES}
      title={title}>
      {content}
    </Drawer>;
  }

  return <div>
    {locked}
    {mode}
  </div>;
}
