import React from "react";

import {
  Modal as AntdModal
} from "antd";

import {
  useStateOpen,
  usePropsContent,
  usePropsSize,
  usePropsClassNameOnBody,
  usePropsClosable,
  usePropsEsc,
  usePropsBackdrop,
  usePropsZIndex,
  useHandleOnClose,
  usePropsBackdropClosable,
  transformWidthSize
} from "../../../model";
import Footer from "../footer";
import Header from "../header";

export default function Modal(): React.ReactElement {
  const open = useStateOpen();

  const content = usePropsContent();

  const size = usePropsSize();

  const classNameOnBody = usePropsClassNameOnBody();

  const closable = usePropsClosable();

  const esc = usePropsEsc();

  const backdrop = usePropsBackdrop();

  const zIndex = usePropsZIndex();

  const handleOnClose = useHandleOnClose();

  const backdropClosable = usePropsBackdropClosable();

  return <AntdModal
    className={classNameOnBody}
    closable={closable}
    footer={<Footer />}
    keyboard={esc}
    mask={backdrop}
    maskClosable={backdropClosable}
    onCancel={handleOnClose}
    open={open}
    title={<Header />}
    width={transformWidthSize(size)}
    zIndex={zIndex}>
    {content}
  </AntdModal>;
}
