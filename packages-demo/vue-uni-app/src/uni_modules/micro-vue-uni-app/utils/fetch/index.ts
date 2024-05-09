// https://www.jianshu.com/p/ddd984e9d197
import dataRequest from "./data-request";

interface IConfig extends Omit<UniNamespace.RequestOptions, "method" | "url" | "data"> {}
interface IParamsConf extends IConfig {

  /**
     * 基础的 url 信息
     *
     * 例：http://localhost:52330
     */
  baseUrl?: string;
}

interface IData {
  get: <D, Q extends AnyObject = AnyObject>(url: string, params?: Q, config?: IConfig) => Promise<D>;
  post: <D, Q extends string | AnyObject>(url: string, params?: Q, config?: IConfig) => Promise<D | null>;
}

// eslint-disable-next-line default-param-last
function injectUrl(baseUrl: string = "", url: string): string {
  if (!(/^https?:\/\//i).test(url)) {
    url = `${baseUrl}${url}`;
  }

  return url;
}

function injectHeader(confHeader: AnyObject, configHeader: AnyObject): AnyObject {
  return {
    ...confHeader,
    ...configHeader
  };
}

export default function fetch({
  baseUrl, ...conf
}: IParamsConf = {}): IData {
  function get<D, Q extends AnyObject = AnyObject>(
      url: string,
      params?: Q,
      config?: IConfig
  ): Promise<D> {
    return dataRequest<D>({
      ...conf,
      url: injectUrl(baseUrl, url),
      method: "GET",
      data: params,
      header: injectHeader(conf?.header, config?.header),
      ...config
    });
  }

  function post<D, Q extends string | AnyObject>(
      url: string,
      params?: Q,
      config?: IConfig
  ): Promise<D | null> {
    return dataRequest<D>({
      ...conf,
      url: injectUrl(baseUrl, url),
      method: "POST",
      data: params,
      header: injectHeader(conf?.header, config?.header),
      ...config
    });
  }

  return {
    get,
    post
  };
}
