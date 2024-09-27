import {
  validataOS
} from "./device";

/**
 * 鼠标点击时，是否按下了Shift键
 * @param e
 * @returns
 */
export const withShiftKey = (e: KeyboardEvent | MouseEvent) => {
  if (!e) {
    return false;
  }

  return !!e.shiftKey;
};

/**
 * 鼠标按下时，是否按下了Ctrl键
 * @param e
 * @returns
 */
export const withCtrlKey = (e: KeyboardEvent | MouseEvent) => {
  if (!e) {
    return false;
  }

  const os = validataOS();

  if ((os === "Mac" && e.metaKey === true) || (os !== "Mac" && e.ctrlKey === true)) {
    return true;
  }

  return false;
};
