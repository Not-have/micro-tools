import React from "react";

import {
  Drawer as AntDrawer

} from "antd";

import {
  ModelLockState,
  useStateLocked,
  usePropsContent,
  useStateSize,
  useHandleUnlock,
  useOnAfterOpenChange
} from "../../../model";
import {
  transformWidthSize
} from "../../../model/util";
import Footer from "../footer";
import Header from "../header";

export default function Drawer(): React.ReactElement {
  const locked = useStateLocked();

  const content = usePropsContent();

  const handleUnlock = useHandleUnlock();

  const onAfterOpenChange = useOnAfterOpenChange();

  const size = useStateSize();

  return <AntDrawer
    afterOpenChange={onAfterOpenChange}
    destroyOnHidden
    footer={<Footer />}
    onClose={handleUnlock}
    open={locked === ModelLockState.YES}
    title={<Header />}
    width={transformWidthSize(size)}>
    {content}
  </AntDrawer>;
}
