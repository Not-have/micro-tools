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
  useHandleOnClose,
  usePropsClassNameOnBody,
  usePropsBackdrop,
  usePropsClosable,
  usePropsEsc,
  usePropsZIndex
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

  const classNameOnBody = usePropsClassNameOnBody();

  const backdrop = usePropsBackdrop();

  const closable = usePropsClosable();

  const esc = usePropsEsc();

  const zIndex = usePropsZIndex();

  return <AntDrawer
    closable={closable}
    destroyOnHidden
    footer={<Footer />}
    keyboard={esc}
    mask={backdrop}
    onClose={handleOnClose}
    open={open}
    rootClassName={classNameOnBody}
    title={<Header />}
    width={transformWidthSize(size)}
    zIndex={zIndex}>
    {content}
  </AntDrawer>;
}
