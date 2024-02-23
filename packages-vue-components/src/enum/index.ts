/**
 * 鼠标形状
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor
 *
 * 自定义光标
 *
 * https://codepen.io/developeraspire5/embed/gOGjeZG
 */
export enum ECursorType { // 后面提取出来
    DEFAULT = 'default',
    AUTO = 'auto',
    NONE = 'none',
    CONTEXT_MENU = 'context-menu',
    HELP = 'help',
    POINTER = 'pointer',
    PROGRESS = 'progress',
    WAIT = 'wait',
    CELL = 'cell',
    CROSSHAIR = 'crosshair',
    TEXT = 'text',
    VERTICAL_TEXT = 'vertical-text',
    ALIAS = 'alias',
    COPY = 'copy',
    /**
     * 被悬浮的物体可被移动
     */
    MOVE = 'move',
    NO_DROP = 'no-drop',
    NOT_ALLOWED = 'not-allowed',
    GRAB = 'grab',
    GRABBING = 'grabbing',
    ALL_SCROLL = 'all-scroll',
    COL_RESIZE = 'col-resize',
    ROW_RESIZE = 'row-resize',
    N_RESIZE = 'n-resize',
    E_RESIZE = 'e-resize',
    S_RESIZE = 's-resize',
    W_RESIZE = 'w-resize',
    NE_RESIZE = 'ne-resize',
    NW_RESIZE = 'nw-resize',
    SE_RESIZE = 'se-resize',
    SW_RESIZE = 'sw-resize',
    EW_RESIZE = 'ew-resize',
    NS_RESIZE = 'ns-resize',
    NESW_RESIZE = 'nesw-resize',
    NWSE_RESIZE = 'nwse-resize',
    ZOOM_IN = 'zoom-in',
    ZOOM_OUT = 'zoom-out'
}