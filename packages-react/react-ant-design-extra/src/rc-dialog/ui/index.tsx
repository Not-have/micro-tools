import React from "react";

import {
  ModelMode,
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
    return <Drawer />;
  }

  return <div>
    {locked}
    {mode}
  </div>;
}
