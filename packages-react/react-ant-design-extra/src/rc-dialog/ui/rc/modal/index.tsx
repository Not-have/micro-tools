import React from "react";

import {
  Modal as AntdModal
} from "antd";

import {
  useStateOpen,
  usePropsContent,
  usePropsSize,
  transformWidthSize
} from "../../../model";
import Footer from "../footer";
import Header from "../header";

export default function Modal(): React.ReactElement {
  const open = useStateOpen();

  const content = usePropsContent();

  const size = usePropsSize();

  return <AntdModal
    footer={<Footer />}
    open={open}
    title={<Header />}
    width={transformWidthSize(size)}>
    {content}
  </AntdModal>;
}
