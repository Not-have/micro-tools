import React, {
  useMemo,
  MouseEvent
} from "react";

import {
  Button,
  Space
} from "antd";

import {
  useHandleOnClose,
  useHandleOnSubmit,
  useStateLocked,
  ModelLockState,
  usePropsButtonsExtra,
  usePropsOk,
  usePropsCancel,
  usePropsIsSubmit
} from "../../../model";

export default function Footer(): React.ReactElement {
  const handleOnClose = useHandleOnClose();

  const handleOnSubmit = useHandleOnSubmit();

  const locked = useStateLocked();

  const buttonsExtra = usePropsButtonsExtra();

  const ok = usePropsOk();

  const isSubmit = usePropsIsSubmit();

  const okButtonProps = useMemo(() => (typeof ok === "object" ? {
    ...ok,
    onClick: (event: MouseEvent<HTMLElement>) => {
      ok?.onClick?.(event);
      handleOnSubmit();
    }
  } : {
    label: ok
  }), [
    ok,
    handleOnSubmit
  ]);

  const cancel = usePropsCancel();

  const cancelButtonProps = useMemo(() => (typeof cancel === "object" ? {
    ...cancel,
    onClick: (event: MouseEvent<HTMLElement>) => {
      cancel?.onClick?.(event);
      handleOnClose();
    }
  } : {
    label: cancel
  }), [
    cancel,
    handleOnClose
  ]);

  return <Space>
    {buttonsExtra.map(button => (
      <React.Fragment key={button.key || Math.random()}>
        {button}
      </React.Fragment>
    ))}

    <Button onClick={handleOnClose}
      {...okButtonProps}>
      {typeof cancel === "string" ? cancel : cancel?.label || "关闭"}
    </Button>

    {isSubmit && <Button
      {...cancelButtonProps}
      loading={locked === ModelLockState.LOADING}
      onClick={handleOnSubmit}
      type="primary">
      {typeof ok === "string" ? ok : ok?.label || "提交"}
    </Button>}
  </Space>;
}
