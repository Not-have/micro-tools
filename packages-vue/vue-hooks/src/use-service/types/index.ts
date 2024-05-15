import {
  UnwrapNestedRefs
} from "vue";

export interface IServiceFunction<T, Q> {
  (arg?: Q): Promise<T>;
}

export interface IStateResult<T> {
  data?: T,
  loading: boolean,

  /**
   * @throws 接口请求错误
   *
   * 他应该在 main.ts 中进行全局的处理
   *
   * function registerPromiseErrorHandler() {
   *     window.addEventListener('unhandledrejection', function (event) {
   *         console.log(event);
   *         // 处理错误
   *         ...
   *     }, true);
   * }
   *
   * main.ts 中调用
   *
   * 推荐 配置全局错误处理时创建一个 utils/error-handle 文件来进行管理
   *
   * registerPromiseErrorHandler(); // 建议放在 errorHandler 之后
   *
   * 模拟:
   *
   * function handleError() { // 点击时触发
   *     new Promise((resolve, reject) => {
   *         reject('1111');
   *     }).catch
   * }
   *
   */
  error: PromiseRejectionEvent | null
}

export interface IConfig {

  /**
   * 是否直接执行
   */
  immediate?: boolean,

  /**
   * 防抖
   */
  debounce?: boolean | number,

  /**
   * 是否监听 query 参数的改变（只能监听 new Proxy）
   * 当 query 改变时，去请求数据
   */
  watchQuery?: boolean,

  /**
   * 请求错误时的展示
   * 也是请求失败时的处理
   */
  error?: Function
}

export interface IAsyncResult<T, Q> extends UnwrapNestedRefs<IStateResult<T>> {
  run: (arg?: Q) => Promise<T>;
}
