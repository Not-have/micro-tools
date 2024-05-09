// Import type { IRequestConfig } from '../types';

export default function request({
  url,
  data,
  method,
  ...params
}: UniNamespace.RequestOptions): Promise<UniApp.RequestSuccessCallbackResult> {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data,
      method,
      ...params,
      success: res => {

        // 初始化完结果，在这对 数据进行处理
        resolve(res);
      },
      fail: err => {
        reject(err);
        uni.showToast({
          title: err.errMsg,
          icon: "error"
        });
      },
      complete: result => {
        params?.complete ? params.complete(result) : null;
      }
    });
  });
}
