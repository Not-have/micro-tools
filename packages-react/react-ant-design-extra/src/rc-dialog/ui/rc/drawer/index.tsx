import React, {
  useMemo
} from "react";

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

  const open = useMemo(() => {
    if (locked === ModelLockState.YES) {
      return true;
    }

    if (locked === ModelLockState.NO) {
      return false;
    }

    return true;
  }, [
    locked
  ]);

  return <AntDrawer
    afterOpenChange={onAfterOpenChange}
    destroyOnHidden
    footer={<Footer />}
    onClose={handleUnlock}
    open={open}
    title={<Header />}
    width={transformWidthSize(size)}>
    {content}
  </AntDrawer>;
}
