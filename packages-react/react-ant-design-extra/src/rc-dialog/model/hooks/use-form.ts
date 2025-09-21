import {
  useMemo
} from "react";

import {
  Form,
  FormInstance
} from "antd";

import usePropsData from "./use-props-data";

/**
 * 创建一个 hook，这个 hook 返回一个 form 的捆绑方式，及 props.data
 */
export default function useForm(): [FormInstance, Record<string, unknown>] {
  const data = usePropsData();

  const [
    form
  ] = Form.useForm();

  return useMemo(() => [
    form,
    data as Record<string, unknown>
  ], [
    form,
    data
  ]);
}
