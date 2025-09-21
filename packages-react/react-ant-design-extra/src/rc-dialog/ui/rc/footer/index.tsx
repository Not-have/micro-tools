import React from "react";

import {
  Button,
  Space
} from "antd";

import {
  useHandleUnlock,
  useHandleOnSubmit,
  useStateLocked,
  ModelLockState
} from "../../../model";

export default function Footer(): React.ReactElement {
  const handleUnlock = useHandleUnlock();

  const handleOnSubmit = useHandleOnSubmit();

  const locked = useStateLocked();

  return <Space>
    <Button onClick={handleUnlock}>Cancel</Button>
    {locked}

    <Button loading={locked === ModelLockState.LOADING}
      onClick={handleOnSubmit}
      type="primary">
      Submit
    </Button>
  </Space>;
}
