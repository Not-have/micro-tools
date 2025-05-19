import axios from "axios";

import {
  MakeErrorMessageFn,
  ResponseInterceptorConfig,
  ErrorMessageResponseInterceptor
} from "../types";

const errorMessageResponseInterceptor = (makeErrorMessage?: MakeErrorMessageFn, options: ErrorMessageResponseInterceptor = {}): ResponseInterceptorConfig => ({
  rejected: (error): Promise<never> => {
    const err: string = error?.toString?.() ?? "";

    // error = JSON.parse(error.message);

    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    let errMsg = "";

    if (err?.includes("Network Error")) {
      errMsg = "网络异常，请检查您的网络连接后重试。";
    } else if (error?.message?.includes?.("timeout")) {
      errMsg = "请求超时，请稍后重试。";
    } else if (err?.includes("Request failed with status code 500")) {
      errMsg = "服务器内部错误，请稍后重试。";
    } else if (err?.includes("Request failed with status code 404")) {
      errMsg = "请求资源不存在，请稍后重试。";
    }

    if (errMsg) {
      makeErrorMessage?.(errMsg, error);

      return Promise.reject(error);
    }

    let errorMessage = "";

    const {
      isUseResponseData = false,
      codeField = "code"
    } = options;

    const status = isUseResponseData ? error?.data[codeField] : error?.response?.status;

    switch (status) {
      case 400: {
        errorMessage = "请求错误，请检查您的输入并重试。";

        break;
      }
      case 401: {
        errorMessage = "登录认证过期，请重新登录后继续。";

        break;
      }
      case 403: {
        errorMessage = "禁止访问，您没有权限访问此资源。";

        break;
      }
      case 404: {
        errorMessage = "未找到，请求的资源不存在。";

        break;
      }
      case 408: {
        errorMessage = "请求超时，请稍后重试。";

        break;
      }
      default: {
        errorMessage = "请稍后再试。";
      }
    }

    makeErrorMessage?.(errorMessage, error);

    return Promise.reject(error);
  }
});

export default errorMessageResponseInterceptor;
