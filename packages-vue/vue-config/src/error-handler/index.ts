import type {
  ComponentPublicInstance
} from "vue";

import {
  imitationViteError
} from "micro-rc-container";

/**
 * Vue3 全局的错误示例方法
 *
 * https://cn.vuejs.org/api/application#app-config-errorhandler
 *
 * @param err
 * @param vm
 * @param info
 *
 * 使用：similar
 *
 * main.js
 *
 * import {
 *     errorHandler
 * } from 'micro-vue-components';
 *
 * app.config.errorHandler = errorHandler
 */
export default function errorHandler(err: unknown, vm: ComponentPublicInstance, info: unknown): void {
  vm?.$nextTick(() => {
    if (vm?.$el.childNodes.length > 0) {
      (vm?.$el as Element).innerHTML = "";
      (vm?.$el as Element).appendChild(imitationViteError(err));

      return;
    }

    // 在处理一个 template 直接字符串的情况
    (vm?.$el as Element).textContent = `${info }: ${ err}`;
    document.body.appendChild(imitationViteError(err, true));
  });
}
