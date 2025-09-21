import React from "react";

import {
  Drawer as AntDrawer

} from "antd";

import {
  usePropsContent,
  usePropsSize,
  useHandleOnClose,
  usePropsClassNameOnBody,
  usePropsBackdrop,
  usePropsClosable,
  usePropsEsc,
  usePropsZIndex,
  useStateOpen,
  usePropsBackdropClosable,
  transformWidthSize
} from "../../../model";
import Footer from "../footer";
import Header from "../header";

export default function Drawer(): React.ReactElement {
  const content = usePropsContent();

  const handleOnClose = useHandleOnClose();

  const size = usePropsSize();

  const open = useStateOpen();

  const classNameOnBody = usePropsClassNameOnBody();

  const backdrop = usePropsBackdrop();

  const closable = usePropsClosable();

  const esc = usePropsEsc();

  const zIndex = usePropsZIndex();

  const backdropClosable = usePropsBackdropClosable();

  return <AntDrawer
    closable={closable}
    destroyOnHidden
    footer={<Footer />}
    keyboard={esc}
    mask={backdrop}
    maskClosable={backdropClosable}
    onClose={handleOnClose}
    open={open}
    rootClassName={classNameOnBody}
    title={<Header />}
    width={transformWidthSize(size)}
    zIndex={zIndex}>
    {content}
  </AntDrawer>;
}
