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
  usePropsButtonsExtra
} from "../../../model";

export default function Footer(): React.ReactElement {
  const handleOnClose = useHandleOnClose();

  const handleOnSubmit = useHandleOnSubmit();

  const locked = useStateLocked();

  const buttonsExtra = usePropsButtonsExtra();

  return <Space>
    {buttonsExtra.map(button => (
      <React.Fragment key={button.key || Math.random()}>
        {button}
      </React.Fragment>
    ))}

    <Button onClick={handleOnClose}>关闭</Button>

    <Button
      loading={locked === ModelLockState.LOADING}
      onClick={handleOnSubmit}
      type="primary">
      提交
    </Button>
  </Space>;
}
