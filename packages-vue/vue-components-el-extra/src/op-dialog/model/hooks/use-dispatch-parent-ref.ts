import {
  FormInstance,
  ElForm
} from "element-plus";
import useModelContext from "./_use-model-context";

export default function useDispatchParentRef(): (el: InstanceType<typeof ElForm> | FormInstance) => void {
  const {
    parentRef
  } = useModelContext();

  return el => {
    parentRef.value = el;
  };
}
