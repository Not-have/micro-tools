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
   * put 上传文件
   *
   * 文件内容通过Socket链接直接传输，无额外编码/解码开销，适合大文件上传。
   * 华为云实测：上传5GB以下文件时，PUT比POST效率高约20%。
   *
   * @param url 地址
   * @param data Blob | File
   * @param config 可选配置对象，继承自Axios请求配置
   *
   * onUploadProgress 上传进度回调
   *
   * @returns 返回一个Promise，解析值为服务器返回的数据，类型为泛型T
   */
  public async upload<T = any>(
      url: string,
      data: Blob | File,
      config?: RequestClientConfig
  ): Promise<T> {

    const finalConfig: RequestClientConfig = {
      ...config,
      headers: {
        "x-amz-acl": "public-read", // 设置文件的访问权限为公共读
        "Content-Type": data.type, // 设置文件的MIME类型
        ...config?.headers
      }
    };

    return this.client.put<T>(url, data, finalConfig);
  }

  /**
   * post 上传文件
   *
   * 需将文件拆分为多部分并添加边界标识，服务器需解析表单数据，消耗更多CPU和内存
   *
   * @param url 地址
   * @param data 数据
   * @param config 可选配置对象，继承自Axios请求配置
   *
   * onUploadProgress 上传进度回调
   *
   * @returns 返回一个Promise，解析值为服务器返回的数据，类型为泛型T
   */
  public async postUpload<T = any>(
      url: string,
      data: Record<string, any> & { file: Blob | File },
      config?: RequestClientConfig
  ): Promise<T> {
    const formData = new FormData();

    Object.entries(data).forEach(([
      key,
      value
    ]) => {
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
