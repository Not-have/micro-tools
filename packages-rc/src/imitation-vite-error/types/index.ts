export interface IErrorPayload {
  type: "error"

  /**
     * Err 参数通常是一个 Error 对象或其子类的实例
     *
     * const err = new Error() // 就可以作为模拟数据
     */
  err: {
    [name: string]: unknown
    message: string
    stack: string
    id?: string
    frame?: string
    plugin?: string
    pluginCode?: string
    loc?: {
      file?: string
      line: number
      column: number
    }
  }
}
