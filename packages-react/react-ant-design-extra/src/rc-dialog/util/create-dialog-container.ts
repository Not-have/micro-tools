/**
 * 创建对话框容器
 */
export default function createDialogContainer({
  position,
  top,
  left,
  width,
  height,
  pointerEvents,
  zIndex,
  append
}: {
  position?: "fixed" | "absolute" | "relative" | "sticky" | "static" | "initial" | "inherit";
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  pointerEvents?: string;
  zIndex?: string;
  append?: boolean;
} = {}): HTMLDivElement {
  let dialogContainer: HTMLDivElement | null = null;

  if (dialogContainer) {
    return dialogContainer;
  }

  dialogContainer = document.createElement("div");

  if (position) {
    dialogContainer.style.position = position;
    dialogContainer.style.top = top || "0";
    dialogContainer.style.left = left || "0";
    dialogContainer.style.width = width || "100%";
    dialogContainer.style.height = height || "100%";
    dialogContainer.style.pointerEvents = pointerEvents || "none";
    dialogContainer.style.zIndex = zIndex || "1000";
  }

  if (append) {
    document.body.append(dialogContainer);
  }

  return dialogContainer;
}
