import React from "react";

import {
  Button,
  Drawer
} from "antd";

export default function Demo(): React.ReactElement {
  return <div>
    <p>React Ant Design Extra Dialog</p>
    <Button>Click me</Button>

    <Drawer open
      title="React Ant Design Extra Dialog">
      <p>React Ant Design Extra Dialog</p>
    </Drawer>
  </div>;
}
