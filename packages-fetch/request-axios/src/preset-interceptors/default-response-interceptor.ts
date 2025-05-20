import {
  isFunction,
  isUndefined
} from "@mt-kit/utils";

import {
  ResponseInterceptorConfig,
  DefaultResponseInterceptorOptions
} from "../types";

const defaultResponseInterceptor = (options: DefaultResponseInterceptorOptions = {}): ResponseInterceptorConfig => {

  const {
    codeField = "code",
    dataField,
    code = 0
  } = options;

  return {
    fulfilled: response => {
      const {
        config,
        data: responseData,
        status
      } = response;

      /**
       * 当 config.responseReturn 设置为 "raw" 时直接返回原始响应对象，这种设计主要有以下目的：
       * 1. 灵活性 ：允许调用方获取完整的响应对象（包括响应头、状态码等元数据），而不仅仅是业务数据
       * 2. 特殊需求 ：某些场景下需要直接处理原始HTTP响应（如文件下载、流式传输等）
       * 3. 调试用途 ：方便开发者在调试时查看完整的响应信息
       */
      if (config.responseReturn === "raw") {
        return response;
      }

      /**
       * 是HTTP响应状态码的检查逻辑，具体含义如下：
       * 1、状态码范围 ：检查HTTP响应状态码是否在200-399之间
       * 2、成功状态 ：这个范围表示请求成功（2xx）或重定向（3xx）
       * 3、业务逻辑 ：只有在这个范围内的响应才会继续处理业务数据
       */
      if (status >= 200 && status < 400) {
        if (config.responseReturn === "body") {
          return responseData;
        }

        if (
          isFunction(code)
            ? code(responseData[codeField])
            : responseData[codeField] === code
        ) {
          if(isUndefined(dataField)) {
            return responseData;
          }

          return isFunction(dataField)
            ? dataField(responseData)
            : responseData[dataField];
        }
      }

      /**
       * 在外部获取错误对象中的各个部分，可以通过以下方式分解：
       * try {
       *   // 发起请求...
       * } catch (error) {
       *   // 1. 获取完整的错误信息字符串
       *   const errorMessage = error.message;
       *
       *   // 2. 解析为JSON对象
       *   const errorObj = JSON.parse(error.message);
       *
       *   // 3. 获取各个部分
       *   const {
       *     status,        // HTTP状态码
       *     statusText,    // 状态文本
       *     config,        // 请求配置
       *     data,          // 响应数据
       *     response       // 完整响应对象
       *   } = errorObj;
       *
       *   // 使用示例
       *   console.log('HTTP状态码:', status);
       *   console.log('响应数据:', data);
       *
       * 或者使用 .catch 块捕获错误对象
       */

      /*
        throw new Error(JSON.stringify({
          ...response,
          response
        }));
       */

      throw response;
    }
  };
};

export default defaultResponseInterceptor;
