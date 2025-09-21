import React from "react";

import {
  ModelMode,
  usePropsMode
} from "../model";
import {
  Drawer,
  Modal
} from "./rc";

export default function Ui(): React.ReactElement {

  const mode = usePropsMode();

  if (mode === ModelMode.DRAWER) {
    return <Drawer />;
  }

  return <Modal />;
}
