import React from "react";

import {
  Drawer as AntDrawer

} from "antd";
import {
  DrawerStyles
} from "antd/es/drawer/DrawerPanel";

import {
  ModelLockState,
  useStateLocked,
  usePropsContent,
  useHandleUnlock,
  useOnAfterOpenChange
} from "../../../model";
import Footer from "../footer";
import Header from "../header";

const drawerStyles: DrawerStyles = {
  footer: {
    padding: "16px 24px"
  }
};

export default function Drawer(): React.ReactElement {

  const locked = useStateLocked();

  const content = usePropsContent();

  const handleUnlock = useHandleUnlock();

  const onAfterOpenChange = useOnAfterOpenChange();

  return <AntDrawer
    afterOpenChange={onAfterOpenChange}
    footer={<Footer />}
    onClose={handleUnlock}
    open={locked === ModelLockState.YES}
    styles={drawerStyles}
    title={<Header />}>
    {content}
  </AntDrawer>;
}
