import {
  isObject
} from "lodash-es";
import useModelProps from "./_use-model-props";
import {
  IButtonProps
} from "../../type";
import {
  IFooter
} from "../types";

export default function useFooter(): Required<IFooter> {
  const {
    isSubmit = true,
    submit,
    ok,
    cancel
  } = useModelProps();

  let okProps: IButtonProps = {
    label: "",
    type: "primary"
  };

  let cancelProps: IButtonProps = {
    label: "",
    type: "default"
  };

  if(!isObject(ok)) {
    okProps.label = ok || "确定";
  } else {
    okProps = {
      ...ok
    };
  }

  if(!isObject(cancel)) {
    cancelProps.label = cancel || "取消";
  } else {
    cancelProps = {
      ...cancel
    };
  }

  return {
    isSubmit: !!submit || isSubmit,
    ok: okProps,
    cancel: cancelProps
  };
}
