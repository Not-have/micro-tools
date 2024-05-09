export interface IData0<T> {
  data: T;
  code: number;

  /**
     * @todo message
     */
  message: string;
}

export interface IInitRequest<T> {

  /**
   * 开发者服务器返回的数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | T;

  /**
   * 开发者服务器返回的 HTTP 状态码
   */
  statusCode?: number;

  /**
   * 开发者服务器返回的 HTTP Response Header
   */
  header: AnyObject;

  /**
   * 开发者服务器返回的 cookies，格式为字符串数组
   */
  cookies: string[];

  errMsg?: string;
}
