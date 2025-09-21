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
  useHandleOnClose
} from "../../../model";
import {
  transformWidthSize
} from "../../../model/util";
import Footer from "../footer";
import Header from "../header";

export default function Drawer(): React.ReactElement {
  const locked = useStateLocked();

  const content = usePropsContent();

  const handleOnClose = useHandleOnClose();

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
    destroyOnHidden
    footer={<Footer />}
    onClose={handleOnClose}
    open={open}
    title={<Header />}
    width={transformWidthSize(size)}>
    {content}
  </AntDrawer>;
}
