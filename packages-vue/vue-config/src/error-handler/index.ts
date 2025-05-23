import type {
  ComponentPublicInstance
} from "vue";

import {
  imitationViteError
} from "@mt-kit/components";

interface IError {
  [name: string]: unknown;
  message: string;
  stack: string;
  id?: string;
  frame?: string;
  plugin?: string;
  pluginCode?: string;
  loc?: {
    file?: string;
    line: number;
    column: number;
  };
}

/**
 * Vue3 全局的错误示例方法
 *
 * https://cn.vuejs.org/api/application#app-config-errorhandler
 *
 * TODO 优化
 */
export default function configErrorHandler(
    err: unknown,
    vm: ComponentPublicInstance | null,
    info: string
): void {
  vm?.$nextTick(() => {
    if (vm?.$el.childNodes.length > 0) {
      (vm?.$el as Element).innerHTML = "";
      (vm?.$el as Element).append(imitationViteError(err as IError));

      return;
    }

    // 在处理一个 template 直接字符串的情况
    (vm?.$el as Element).textContent = `${info}: ${err}`;
    document.body.append(imitationViteError(err as IError, true));
  });
}
