import React from "react";

import {
  Drawer as AntDrawer,
  DrawerProps as AntDrawerProps
} from "antd";

interface IProps extends AntDrawerProps {
  children?: React.ReactNode | string;
}

export default function Drawer({
  children,
  ...rest
}: IProps): React.ReactElement {
  return <AntDrawer {...rest}>
    {children}
  </AntDrawer>;
}
