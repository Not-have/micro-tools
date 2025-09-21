import React from "react";

import {
  Button,
  Space
} from "antd";

import {
  useHandleOnClose,
  useHandleOnSubmit,
  useStateLocked,
  ModelLockState,
  usePropsButtons
} from "../../../model";

export default function Footer(): React.ReactElement {
  const handleOnClose = useHandleOnClose();

  const handleOnSubmit = useHandleOnSubmit();

  const locked = useStateLocked();

  const buttons = usePropsButtons();

  if (buttons && buttons.length > 0) {
    return <Space>
      {buttons.map(button => (
        <div key={button.key || Math.random()}>
          {button}
        </div>
      ))}
    </Space>;
  }

  return <Space>
    <Button onClick={handleOnClose}>关闭</Button>

    <Button
      loading={locked === ModelLockState.LOADING}
      onClick={handleOnSubmit}
      type="primary">
      提交
    </Button>
  </Space>;
}
