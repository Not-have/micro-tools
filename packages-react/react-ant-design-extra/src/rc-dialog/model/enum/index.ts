export enum EAction {
  LOCK,
  UNLOCK,
  FORM,
  FORM_DATA,
  DATA
}

export enum ELockState {
  NO,
  YES,
  LOADING
}

export enum EMode {

  /**
   * 模态对话框
   */
  MODAL = "modal",

  /**
   * 抽屉对话框
   */
  DRAWER = "drawer"
}

export enum ESize {

  /**
   * 小 200px
   */
  XS = "xs",

  /**
   * 中 300px
   */
  S = "s",

  /**
   * 中 400px
   *
   * 默认值
   */
  M = "m",

  /**
   * 大 500px
   */
  L = "l",

  /**
   * 超大 600px
   */
  XL = "xl",

  /**
   * 超大 700px
   */
  XXL = "xxl",

  /**
   * 自动 100%
   */
  AUTO = "auto",

  /**
   * 几乎全屏 90%
   */
  ALMOST_FULL = "almost-full",

  /**
   * 全屏
   */
  FULL = "full"
}
