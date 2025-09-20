import React from "react";

import {
  Button,
  Space
} from "antd";

import {
  useHandleUnlock
} from "../../../model";

export default function Footer(): React.ReactElement {
  const handleUnlock = useHandleUnlock();

  return <Space>
    <Button onClick={handleUnlock}>Cancel</Button>

    <Button type="primary">
      Submit
    </Button>
  </Space>;
}
