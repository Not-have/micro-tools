/**
 * 创建容器
 *
 * @param positionOptions 位置选项
 * @param positionOptions.position 位置
 * @param positionOptions.top 顶部
 * @param positionOptions.left 左侧
 * @param positionOptions.width 宽度
 * @param positionOptions.height 高度
 * @param positionOptions.pointerEvents 指针事件
 * @param positionOptions.zIndex z-index
 *
 * @param append 是否追加到容器中
 *
 * 自定义元素插入到容器中，没有就插入容器中，前提是存在 append 为 true
 *
 * @param customElement 自定义元素
 *
 * @returns {
 *   remove: () => void;
 *   element: HTMLDivElement;
 * }
 */
export default function createContainer({
  positionOptions,
  append,
  customElement
}: {
  positionOptions?: {
    position?: "fixed" | "absolute" | "relative" | "sticky" | "static" | "initial" | "inherit";
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    pointerEvents?: string;
    zIndex?: string;
  };
  append?: boolean;
  customElement?: HTMLDivElement;
} = {}): {
  remove: () => void;
  element: HTMLDivElement;
} {
  let dialogContainer: HTMLDivElement | null = null;

  if (dialogContainer) {
    return dialogContainer;
  }

  dialogContainer = document.createElement("div");

  // 设置位置
  if (positionOptions) {
    Object.assign(dialogContainer.style, positionOptions);
  }

  // 追加到 body
  if (append) {
    if (customElement) {
      customElement.append(dialogContainer);
    } else {
      document.body.append(dialogContainer);
    }
  }

  return {
    remove: () => {
      dialogContainer?.remove();
    },
    element: dialogContainer
  };
}
