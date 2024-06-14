import {
  FormInstance,
  ElForm
} from "element-plus";
import useModelContext from "./_use-model-context";

export default function useDispatchContentRef(): (el: InstanceType<typeof ElForm> | FormInstance) => void {
  const {
    contentRef
  } = useModelContext();

  return el => {
    contentRef.value = el;
  };
}
