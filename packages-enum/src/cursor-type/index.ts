/**
 * 鼠标形状
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor
 *
 * 自定义光标
 *
 * https://codepen.io/developeraspire5/embed/gOGjeZG
 */
enum ECursorType {
  /**
   * 默认
   */
  DEFAULT = "default",

  /**
   * 自动
   */
  AUTO = "auto",

  /**
   * 无光标
   */
  NONE = "none",

  /**
   * 上下文菜单
   */
  CONTEXT_MENU = "context-menu",

  /**
   * 帮助
   */
  HELP = "help",

  /**
   * 手指
   */
  POINTER = "pointer",

  /**
   * 进度
   */
  PROGRESS = "progress",

  /**
   * 等待
   */
  WAIT = "wait",

  /**
   * 单元格
   */
  CELL = "cell",

  /**
   * 十字线
   */
  CROSSHAIR = "crosshair",

  /**
   * 文本
   */
  TEXT = "text",

  /**
   * 垂直文本
   */
  VERTICAL_TEXT = "vertical-text",

  /**
   * 别名
   */
  ALIAS = "alias",

  /**
   * 复制
   */
  COPY = "copy",

  /**
   * 被悬浮的物体可被移动
   */
  MOVE = "move",

  /**
   * 不可放置
   */
  NO_DROP = "no-drop",

  /**
   * 不允许
   */
  NOT_ALLOWED = "not-allowed",

  /**
   * 抓取
   */
  GRAB = "grab",

  /**
   * 抓取中
   */
  GRABBING = "grabbing",

  /**
   * 所有滚动
   */
  ALL_SCROLL = "all-scroll",

  /**
   * 列调整大小
   */
  COL_RESIZE = "col-resize",

  /**
   * 行调整大小
   */
  ROW_RESIZE = "row-resize",

  /**
   * 北调整大小
   */
  N_RESIZE = "n-resize",

  /**
   * 东调整大小
   */
  E_RESIZE = "e-resize",

  /**
   * 南调整大小
   */
  S_RESIZE = "s-resize",

  /**
   * 西调整大小
   */
  W_RESIZE = "w-resize",

  /**
   * 东北调整大小
   */
  NE_RESIZE = "ne-resize",

  /**
   * 西北调整大小
   */
  NW_RESIZE = "nw-resize",

  /**
   * 东南调整大小
   */
  SE_RESIZE = "se-resize",

  /**
   * 西南调整大小
   */
  SW_RESIZE = "sw-resize",

  /**
   * 东西调整大小
   */
  EW_RESIZE = "ew-resize",

  /**
   * 南北调整大小
   */
  NS_RESIZE = "ns-resize",

  /**
   * 东北西南调整大小
   */
  NESW_RESIZE = "nesw-resize",

  /**
   * 西北东南调整大小
   */
  NWSE_RESIZE = "nwse-resize",

  /**
   * 放大
   */
  ZOOM_IN = "zoom-in",

  /**
   * 缩小
   */
  ZOOM_OUT = "zoom-out"
}

export default ECursorType;
