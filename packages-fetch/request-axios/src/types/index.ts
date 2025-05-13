/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from "axios";

interface IExtendOptions<T = any> {

  /**
   * 参数序列化方式。预置的有
   * - brackets: ids[]=1&ids[]=2&ids[]=3
   * - comma: ids=1,2,3
   * - indices: ids[0]=1&ids[1]=2&ids[2]=3
   * - repeat: ids=1&ids=2&ids=3
   */
  paramsSerializer?:
    | "brackets"
    | "comma"
    | "indices"
    | "repeat"
    | AxiosRequestConfig<T>["paramsSerializer"];

  /**
   * 响应数据的返回方式。
   * - raw: 原始的AxiosResponse，包括headers、status等，不做是否成功请求的检查。
   * - body: 返回响应数据的BODY部分（只会根据status检查请求是否成功，忽略对code的判断，这种情况下应由调用方检查请求是否成功）。
   * - data: 解构响应的BODY数据，只返回其中的data节点数据（会检查status和code是否为成功状态）。
   */
  responseReturn?: "body" | "data" | "raw";
}
type TRequestClientConfig<T = any> = AxiosRequestConfig<T> & IExtendOptions<T>;

type TRequestResponse<T = any> = AxiosResponse<T> & {
  config: TRequestClientConfig<T>;
};

type TRequestContentType =
  | "application/json;charset=utf-8"
  | "application/octet-stream;charset=utf-8"
  | "application/x-www-form-urlencoded;charset=utf-8"
  | "multipart/form-data;charset=utf-8";

type TRequestClientOptions = CreateAxiosDefaults & IExtendOptions;

interface IRequestInterceptorConfig {
  fulfilled?: (
    config: IExtendOptions & InternalAxiosRequestConfig,
  ) =>
    | (IExtendOptions & InternalAxiosRequestConfig<any>)
    | Promise<IExtendOptions & InternalAxiosRequestConfig<any>>;
  rejected?: (error: any) => any;
}

interface IResponseInterceptorConfig<T = any> {
  fulfilled?: (
    response: TRequestResponse<T>,
  ) => Promise<TRequestResponse> | TRequestResponse;
  rejected?: (error: any) => any;
}

type TMakeErrorMessageFn = (message: string, error: any) => void;

interface IHttpResponse<T = any> {

  /**
   * 0 表示成功 其他表示失败
   * 0 means success, others means fail
   */
  code: number;
  data: T;
  message: string;
}

export type {
  IHttpResponse as HttpResponse,
  TMakeErrorMessageFn as MakeErrorMessageFn,
  TRequestClientConfig as RequestClientConfig,
  TRequestClientOptions as RequestClientOptions,
  TRequestContentType as RequestContentType,
  IRequestInterceptorConfig as RequestInterceptorConfig,
  TRequestResponse as RequestResponse,
  IResponseInterceptorConfig as ResponseInterceptorConfig
};
