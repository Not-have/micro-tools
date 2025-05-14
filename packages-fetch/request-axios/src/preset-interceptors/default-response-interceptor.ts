import {
  isFunction,
  isUndefined
} from "@mt-kit/utils";

import {
  ResponseInterceptorConfig,
  DefaultResponseInterceptor
} from "../types";

const defaultResponseInterceptor = (options: DefaultResponseInterceptor = {}): ResponseInterceptorConfig => {

  const {
    codeField = "code",
    dataField,
    successCode = 0
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
          isFunction(successCode)
            ? successCode(responseData[codeField])
            : responseData[codeField] === successCode
        ) {
          if(isUndefined(dataField)) {
            return responseData;
          }

          return isFunction(dataField)
            ? dataField(responseData)
            : responseData[dataField];
        }
      }

      throw new Error(JSON.stringify({
        ...response,
        response
      }));
    }
  };
};

export default defaultResponseInterceptor;
