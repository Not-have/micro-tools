import useModelProps from "./_use-model-props";
import {
  IFooter
} from "../types";

export default function useFooter(): IFooter {
  const {
    isSubmit,
    disabled,
    okText,
    okType,
    cancelText,
    cancelType
  } = useModelProps();

  return{
    isSubmit,
    disabled,
    okText,
    okType,
    cancelText,
    cancelType
  };
}
