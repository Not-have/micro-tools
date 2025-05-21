/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RequestClientConfig
} from "../../types";
import RequestClient from "../request-client";

class FileUploader {
  private client: RequestClient;

  constructor(client: RequestClient) {
    this.client = client;
  }

  /**
   * 上传文件
   * @param url 地址
   * @param data 数据
   * @param config 可选配置对象，继承自Axios请求配置
   *
   * onUploadProgress 上传进度回调
   *
   * @returns 返回一个Promise，解析值为服务器返回的数据，类型为泛型T
   */
  public async upload<T = any>(
      url: string,
      data: Record<string, any> & { file: Blob | File },
      config?: RequestClientConfig
  ): Promise<T> {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else {
        formData.append(key, value);
      }
    });

    const finalConfig: RequestClientConfig = {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...config?.headers
      }
    };

    return this.client.post(url, formData, finalConfig);
  }
}

export default FileUploader;
