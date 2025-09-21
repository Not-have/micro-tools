import {
  useEffect
} from "react";

import {
  Form,
  FormInstance
} from "antd";

import useDispatchForm from "./use-dispatch-form";
import usePropsData from "./use-props-data";

/**
 * 创建一个 hook，这个 hook 返回一个 form 的捆绑方式，及 props.data
 */
export default function useForm(): [FormInstance, Record<string, unknown>] {

  const data = usePropsData();

  const dispatchForm = useDispatchForm();

  const [
    form
  ] = Form.useForm();

  useEffect(() => {
    if (!form) {
      return;
    }

    dispatchForm(form);
  }, [
    form,
    dispatchForm
  ]);

  return [
    form,
    data
  ];
}
