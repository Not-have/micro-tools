import type {
  IData0,
  IInitRequest
} from "../types";
import request from "../request";

export default function initRequest<T>({
  url,
  data,
  method,
  ...params
}: UniNamespace.RequestOptions): Promise<IData0<T>> {
  return new Promise((resolve, reject) => {
    request({
      url,
      data,
      method,
      ...params
    }).
        then((res: IInitRequest<T>) => {
          if (res.statusCode !== 200) {
            uni.showToast({
              title: "Dev server err",
              icon: "error"
            });

            reject(res);
          }

          resolve(res.data);
        }).
        catch(err => reject(err));
  });
}
