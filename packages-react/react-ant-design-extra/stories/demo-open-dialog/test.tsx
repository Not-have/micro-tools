/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-handler-names */
import React from "react";
import {
  createRoot
} from "react-dom/client";

import {
  Drawer, DrawerProps
} from "antd";

export interface IOpenDialogOptions extends Omit<DrawerProps, "open" | "onClose"> {
  content?: React.ReactNode;
  title?: string;
  width?: number | string;
  height?: number | string;
  placement?: "top" | "right" | "bottom" | "left";
  closable?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  onClose?: () => void;
}

export interface IDialogInstance {
  close: () => void;
  update: (options: Partial<IOpenDialogOptions>) => void;
}

let dialogContainer: HTMLDivElement | null = null;

let dialogRoot: ReturnType<typeof createRoot> | null = null;

let currentInstance: IDialogInstance | null = null;

function createDialogContainer(): HTMLDivElement {
  if (!dialogContainer) {
    dialogContainer = document.createElement("div");
    dialogContainer.style.position = "fixed";
    dialogContainer.style.top = "0";
    dialogContainer.style.left = "0";
    dialogContainer.style.width = "100%";
    dialogContainer.style.height = "100%";
    dialogContainer.style.pointerEvents = "none";
    dialogContainer.style.zIndex = "1000";
    document.body.append(dialogContainer);
  }

  return dialogContainer;
}

function cleanupDialog(): void {
  if (dialogRoot) {
    dialogRoot.unmount();
    dialogRoot = null;
  }

  if (dialogContainer) {
    dialogContainer.remove();
    dialogContainer = null;
  }

  currentInstance = null;
}

function DialogComponent({
  options,
  onClose
}: {
  options: IOpenDialogOptions;
  onClose: () => void;
}): React.ReactElement {
  const [
    open,
    setOpen
  ] = React.useState(true);

  const handleClose = (): void => {
    setOpen(false);
    onClose();
  };

  return <Drawer
    {...options}
    onClose={handleClose}
    open={open}>
    {options.content}
  </Drawer>;
}

export function openDialog(options: IOpenDialogOptions = {}): IDialogInstance {

  // 如果已经有打开的对话框，先关闭
  if (currentInstance) {
    currentInstance.close();
  }

  const container = createDialogContainer();

  dialogRoot = createRoot(container);

  const instance: IDialogInstance = {
    close: () => {
      cleanupDialog();
    },
    update: (newOptions: Partial<IOpenDialogOptions>) => {

      // 更新选项并重新渲染
      const updatedOptions = {
        ...options,
        ...newOptions
      };

      dialogRoot?.render(<DialogComponent
        onClose={() => {
          cleanupDialog();
        }}
        options={updatedOptions}/>);
    }
  };

  currentInstance = instance;

  dialogRoot.render(<DialogComponent
    onClose={() => {
      cleanupDialog();
    }}
    options={options}/>);

  return instance;
}

// 便捷方法
export function openDrawer(options: IOpenDialogOptions = {}): IDialogInstance {
  return openDialog({
    placement: "right",
    width: 400,
    ...options
  });
}

export function openModal(options: IOpenDialogOptions = {}): IDialogInstance {
  return openDialog({
    placement: "top",
    height: "auto",
    ...options
  });
}

export default {
  openDialog,
  openDrawer,
  openModal
};
